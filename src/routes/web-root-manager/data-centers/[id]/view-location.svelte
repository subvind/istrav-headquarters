<script context="module">
  export async function load(ctx) {
    let id = ctx.page.params.id
    return { props: { id }}
  }
</script>

<script>
  import { onMount } from "svelte";

  import Footer from "../../../../components/Footer.svelte"
  import Header from "../../../../components/Headers/WRMHeader.svelte"
  import Map from "../../../../components/Map.svelte"
  import LocationMachines from "../../../../components/Tables/LocationMachines.svelte";

  import axios from 'axios'
  import Time from "svelte-time";

  import { backend, sidebarActive, sidebarMode } from '../../../../stores.js';

  export let id
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('data-centers')
  sidebarMode.set('web-root-manager')

  let data
  let info
  let machineCount = 0

  onMount(() => {
    var tabElem = document.querySelectorAll('.tabs');
    var instance = window['M'].Tabs.init(tabElem, {});
    
    axios.get(`${api}/dataCenterLocations/${id}`)
      .then(function (response) {
        console.log(response)
        if (response.data) {
          data = response.data
          info = response.data
          setTimeout(() => {
            window['M'].updateTextFields();
          })
        } else {
          alert('unable to fetch')
        }
      })
  })

  function update () {
    if (data.url === '') return alert('URL must be defined.')
    if (data.username === '') return alert('username must be defined.')

    axios.put(`${api}/dataCenterLocations/`, data)
      .then(function (response) {
        console.log(response)
        if (response.data) {
          window['M'].toast({html: `Successfully updated record.`})
        } else {
          alert('unable to update')
        }
      })
  }

  function remove() {
    let input = prompt(`Type "${data.region}:${data.zone}" to confirm deletion.`);
    if (input !== `${data.region}:${data.zone}`) return alert('Unable to confirm deletion.')

    axios.delete(`${api}/dataCenterLocations/${data.id}`)
      .then(function (response) {
        console.log(response)
        window.location.href = `/web-root-manager/data-centers`
      })
  }

</script>

<Header title="Locations" />

<br class="hide-on-med-and-down" />
<br class="hide-on-med-and-down" />
<br />
<div class="row">
  <div class="col s1"></div>
  <div class="col s10">
    <a href="#!" on:click={() => window.history.back()} class="btn red lighten-2">← BACK</a>
    <a href="#!" class="btn right grey" on:click={() => remove()}><i class="material-icons">delete</i></a>
    {#if data}
      <div class="card">
        <div class="card-content">
          <div class="card-title">Location: </div>
          <div class="row">
            <div class="col s6">
              <table>
                <tbody>
                  <tr>
                    <td>id:</td>
                    <td>{data.id}</td>
                  </tr>
                  <tr>
                    <td>reference:</td>
                    <td>{data.region}:{data.zone}</td>
                  </tr>
                  <tr>
                    <td>updatedAt:</td>
                    <td><Time relative timestamp={data.updatedAt} /></td>
                  </tr>
                  <tr>
                    <td>createdAt:</td>
                    <td><Time relative timestamp={data.createdAt} /></td>
                  </tr>
                  <tr>
                    <td>version:</td>
                    <td>{data.version}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <br />
          <br />
          <div class="card-title">Configure:</div>
          <div class="row">
            <div class="input-field col s6">
              <input placeholder="usa-tx-austin" id="region" type="text" bind:value={data.region}>
              <label for="region">Region</label>
            </div>
            <div class="input-field col s6">
              <p>Internally we create a primary key between region and zone in order to enforce uniqueness. You could label regions by country-state-city or use a different naming scheme.</p>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input placeholder="A1" id="zone" type="text" bind:value={data.zone}>
              <label for="zone">Zone</label>
            </div>
            <div class="input-field col s6">
              <p>These are areas contained within a region. A zone such as "A1" could mean building "A" server rack number "1" for instance. </p>
            </div>
          </div>
          <br />
          <br />
          <div class="card-title">Map:</div>
          <div class="row">
            <div class="input-field col s6">
              <input placeholder="1100 Congress Ave, Austin, TX 78701" id="region" type="text" bind:value={data.address}>
              <label for="region">Street Address</label>
            </div>
            <div class="input-field col s6">
              <p>Keep in mind. This street address should be kept private for security reasons.</p>
            </div>
          </div>
          <br />
          <br />
          <div class="card-title">Barrier to entry:</div>
          <div class="row">
            <div class="input-field col s6">
              <input placeholder="2112" id="region" type="text" bind:value={data.gateCode}>
              <label for="region">Gate Code</label>
            </div>
            <div class="input-field col s6">
              <p>Requirment for getting into a zone.</p>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <textarea class="materialize-textarea" id="notes" type="text" bind:value={data.notes}></textarea>
              <label for="notes">Notes</label>
            </div>
            <div class="input-field col s6">
              <p>Any additional information on how to get into a zone goes here.</p>
            </div>
          </div>
        </div>
        <div class="card-action">
          <a href="#!" on:click={() => update()}>UPDATE RECORD</a>
        </div>
      </div>
    {/if}
    <br />
    <br />
    <br />
    <div class="relations">
      <ul class="tabs">
        <li class="tab col s3"><a class="active" href="#test1">Map</a></li>
        <li class="tab col s3"><a class="active" href="#test2">Machines ({machineCount})</a></li>
      </ul>
      <div id="test1">
        <div class="card" style="height: 500px;">
          {#if data}
            <Map address={info.address} />
          {/if}
        </div>
      </div>
      <div id="test2">
        <!-- <div class="card"> -->
          {#if data}
            <LocationMachines id={data.id} bind:count={machineCount} />
          {/if}
        <!-- </div> -->
      </div>
    </div>
    <br />
    <br />
    <br />
  </div>
  <div class="col s1"></div>
</div>

<Footer />

<style global>
  @import "https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css";

  .card-content .row {
    margin-bottom: 0;
  }

  .relations .tabs {
    background-color: transparent;
  }

  .relations .card {
    margin-top: 0;
  }

  #test1 > .card {
    padding: 1em;
  }

  table {
    border: 1px solid #eee;
  }

  table tr > td:first-child {
    font-weight: bold;
    text-align: right;
  }
</style>
