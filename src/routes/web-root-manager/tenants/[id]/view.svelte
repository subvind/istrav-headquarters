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
  import TenantUsers from "../../../../components/DropdownSelect/TenantUsers.svelte";
  import PanelUser from "../../../../components/Panels/User.svelte";

  import axios from 'axios'
  import Time from "svelte-time";

  import { backend, sidebarActive, sidebarMode } from '../../../../stores.js';

  export let id
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('tenants')
  sidebarMode.set('web-root-manager')

  let data
  let tenantCount = 0

  onMount(() => {
    var tabElem = document.querySelectorAll('.tabs');
    var instance = window['M'].Tabs.init(tabElem, {});

    axios.get(`${api}/tenants/${id}`)
      .then(function (response) {
        console.log(response)
        if (response.data) {
          data = response.data
          setTimeout(() => {
            window['M'].updateTextFields();
          })
        } else {
          alert('unable to fetch')
        }
      })
  })

  function update () {
    if (data.name === '') return alert('Name must be defined.')

    axios.put(`${api}/tenants/`, data)
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
    let input = prompt(`Type "${data.name}" to confirm deletion.`);
    if (input !== `${data.name}`) return alert('Unable to confirm deletion.')

    axios.delete(`${api}/tenants/${data.id}`)
      .then(function (response) {
        console.log(response)
        window.location.href = `/web-root-manager/tenants`
      })
  }

</script>

<Header title="Tenants" />

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
          <div class="card-title">Tenant: </div>
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
                    <td>{data.name}</td>
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
              <br />
              <a class="waves-effect waves-light btn modal-trigger" style="width: 100%;" href={`/switch/whm/${data.id}`}>login to WHM</a>
            </div>
          </div>
          <br />
          <br />
          <div class="card-title">Configure:</div>
          <div class="row">
            <div class="input-field col s6">
              <input placeholder="istrav" id="name" type="text" bind:value={data.name}>
              <label for="name">Name</label>
            </div>
            <div class="input-field col s6">
              <p>Enter a name that will display for the tenant</p>
            </div>
          </div>
          <div class="row">
            <div class="col s6">
              <TenantUsers bind:value={data.ownerId} />
            </div>
            <div class="input-field col s6">
              <p>This user will be assigned as the owner and will have access to Web Host Manager.</p>
            </div>
          </div>
          <div class="row">
            <div class="col s6">
              <TenantUsers bind:value={data.billingAccountId} />
            </div>
            <div class="input-field col s6">
              <p>This user will be assigned as the billing accont and will have access to the client area.</p>
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
        <li class="tab col s3"><a class="active" href="#test1">Owner</a></li>
        <li class="tab col s3"><a class="active" href="#test2">Billing account</a></li>
      </ul>
      <div id="test1">
        <div class="card">
          {#if data}
            <PanelUser id={data.ownerId} />
          {/if}
        </div>
      </div>
      <div id="test2">
        <div class="card">
          {#if data}
            <PanelUser id={data.billingAccountId} />
          {/if}
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
  </div>
  <div class="col s1"></div>
</div>

<Footer />

<style>
  .card-content .row {
    margin-bottom: 0;
  }

  .relations .card {
    margin-top: 0;
  }

  .relations .tabs {
    background-color: transparent;
  }

  .relations .card {
    margin-top: 0;
  }

  table {
    border: 1px solid #eee;
  }

  table tr > td:first-child {
    font-weight: bold;
    text-align: right;
  }
</style>
