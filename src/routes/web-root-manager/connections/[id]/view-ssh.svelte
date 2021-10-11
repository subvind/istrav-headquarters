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
  import ConnectionOperatingSystem from "../../../../components/DropdownSelect/ConnectionOperatingSystem.svelte";
  import ConnectionMachine from "../../../../components/DropdownSelect/ConnectionMachine.svelte";
  import ConnectionLocation from "../../../../components/DropdownSelect/ConnectionLocation.svelte";
  import PanelConnectionMachine from "../../../../components/Panels/ConnectionMachine.svelte";
  import PanelConnectionSystem from "../../../../components/Panels/ConnectionSystem.svelte";

  import axios from 'axios'
  import Time from "svelte-time";

  import { backend, sidebarActive, sidebarMode } from '../../../../stores.js';

  export let id
  let systemCount = 0
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('connections')
  sidebarMode.set('web-root-manager')

  let data

  onMount(() => {
    var tabElem = document.querySelectorAll('.tabs');
    var instance = window['M'].Tabs.init(tabElem, {});

    axios.get(`${api}/sshUsers/${id}`)
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
    if (data.url === '') return alert('URL must be defined.')
    if (data.username === '') return alert('username must be defined.')

    axios.put(`${api}/sshUsers/`, data)
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
    let input = prompt(`Type "${data.username}@${data.host}" to confirm deletion.`);
    if (input !== `${data.username}@${data.host}`) return alert('Unable to confirm deletion.')

    axios.delete(`${api}/sshUsers/${data.id}`)
      .then(function (response) {
        console.log(response)
        window.location.href = `/web-root-manager/connections`
      })
  }

</script>

<Header title="SSH" />

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
          <div class="card-title">SSH: </div>
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
                    <td>{data.username}@{data.host}</td>
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
              <input placeholder="localhost" id="host" type="text" bind:value={data.host}>
              <label for="url">Host</label>
            </div>
            <div class="input-field col s6">
              <input placeholder="22" id="port" type="number" bind:value={data.port}>
              <label for="port">Port</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input placeholder="istrav" id="username" type="text" bind:value={data.username}>
              <label for="username">Username</label>
            </div>
            <div class="input-field col s6">
              <input placeholder="1337" id="password" type="text" bind:value={data.password}>
              <label for="password">Password</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <textarea class="materialize-textarea" id="privateKey" type="text" bind:value={data.privateKey}></textarea>
              <label for="privateKey">Private Key</label>
            </div>
            <div class="col s6">
              <p></p>
            </div>
          </div>
          <br />
          <br />
          <div class="card-title">Data Center:</div>
          <div class="row">
            <div class="col s6">
              <ConnectionLocation bind:value={data.dataCenterLocationId} />
            </div>
            <div class="input-field col s6">
              <p>First, select the location to where the machine is.</p>
            </div>
          </div>
          {#if data.dataCenterLocationId}
            <div class="row">
              <div class="col s6">
                <ConnectionMachine bind:value={data.dataCenterMachineId} bind:dataCenterLocationId={data.dataCenterLocationId} />
              </div>
              <div class="input-field col s6">
                <p>Then, select the machine that this connection grants access to.</p>
              </div>
            </div>
          {/if}
          <br />
          <br />
          <div class="card-title">Operating System:</div>
          <div class="row">
            <div class="col s6">
              <ConnectionOperatingSystem bind:value={data.system} />
            </div>
            <div class="input-field col s6">
              <p>Commands will vary depending on operating system. This also determins what connections show up for each SYSTEM (Router, Cluster, Proxmox/NAS Server).</p>
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
        <li class="tab col s3"><a class="active" href="#test1">Machine</a></li>
        <li class="tab col s3"><a href="#test2">System ({systemCount})</a></li>
      </ul>
      <div id="test1">
        <div class="card">
          {#if data}
            <PanelConnectionMachine id={data.id} />
          {/if}
        </div>
      </div>
      <div id="test2">
        {#if data}
          <PanelConnectionSystem id={data.id} bind:count={systemCount} />
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

<style>
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
