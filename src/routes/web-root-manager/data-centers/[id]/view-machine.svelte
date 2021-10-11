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
  import MachineCommands from "../../../../components/DropdownSelect/MachineCommands.svelte";
  import MachineLocation from "../../../../components/DropdownSelect/MachineLocation.svelte";
  import PanelMachineCommands from "../../../../components/Panels/MachineCommands.svelte";
  import PanelMachineLocation from "../../../../components/Panels/MachineLocation.svelte";
  import MachineConnections from "../../../../components/Tables/MachineConnections.svelte";

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
  let connectionCount = 0

  onMount(() => {
    var tabElem = document.querySelectorAll('.tabs');
    var instance = window['M'].Tabs.init(tabElem, {});
    
    axios.get(`${api}/dataCenterMachines/${id}`)
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
    if (data.dataCenterLocationId === '') return alert('Location must be defined.')

    axios.put(`${api}/dataCenterMachines/`, data)
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

    axios.delete(`${api}/dataCenterMachines/${data.id}`)
      .then(function (response) {
        console.log(response)
        window.location.href = `/web-root-manager/data-centers`
      })
  }

</script>

<Header title="Machines" />

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
          <div class="card-title">Machine:</div>
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
            </div>
          </div>
          <br />
          <br />
          <div class="card-title">Configure:</div>
          <div class="row">
            <div class="input-field col s6">
              <input placeholder="mainputer" id="name" type="text" bind:value={data.name}>
              <label for="name">Name</label>
            </div>
            <div class="input-field col s6">
              <p>Keep this name with the machine; such as: use a labeler or piece of tape for perminant reference.</p>
            </div>
          </div>
          <div class="row">
            <div class="col s6">
              <MachineLocation bind:value={data.dataCenterLocationId} />
            </div>
            <div class="input-field col s6">
              <p>All machine names must be unique within their given location.</p>
            </div>
          </div>
          <br />
          <br />
          <div class="card-title">Commands:</div>
          <div class="row">
            <div class="col s6">
              <MachineCommands bind:value={data.commandsId} bind:dataCenterLocationId={data.dataCenterLocationId} />
            </div>
            <div class="input-field col s6">
              <p>This is what itPanel will use to execute commands on the machine; for example: "sudo shutdown".</p>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input placeholder="84:2b:2b:c2:f3:e9" id="wakeOnLan" type="text" bind:value={data.wakeOnLan}>
              <label for="wakeOnLan">Wake On LAN</label>
            </div>
            <div class="input-field col s6">
              <p>The only way to turn a machine back on "remotely" after shutdown is to send a magic packet by using the machine's network interface MacAddress location (itPanel must be on same network). Note: this feature (WOL) must be enabled in BIOS.</p>
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
        <li class="tab col s3"><a class="active" href="#test1">Commands</a></li>
        <li class="tab col s3"><a class="active" href="#test2">Location</a></li>
        <li class="tab col s3"><a class="active" href="#test3">Connections ({connectionCount})</a></li>
      </ul>
      <div id="test1">
        <div class="card">
          {#if data}
            <PanelMachineCommands id={data.id} />
          {/if}
        </div>
      </div>
      <div id="test2">
        <div class="card">
          {#if data}
            <PanelMachineLocation id={data.id} />
          {/if}
        </div>
      </div>
      <div id="test3">
        {#if data}
          <MachineConnections id={data.id} bind:count={connectionCount} />
        {/if}
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

  table {
    border: 1px solid #eee;
  }

  table tr > td:first-child {
    font-weight: bold;
    text-align: right;
  }
</style>