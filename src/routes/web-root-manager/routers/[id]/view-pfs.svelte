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
  import RouterConnection from "../../../../components/DropdownSelect/RouterConnection.svelte";
  import PanelSsh from "../../../../components/Panels/Ssh.svelte";

  import axios from 'axios'
  import Time from "svelte-time";

  import { backend, sidebarActive, sidebarMode } from '../../../../stores.js';

  export let id
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('routers')
  sidebarMode.set('web-root-manager')

  let data

  onMount(() => {
    var tabElem = document.querySelectorAll('.tabs');
    var instance = window['M'].Tabs.init(tabElem, {});

    axios.get(`${api}/pfsUsers/${id}`)
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

    axios.put(`${api}/pfsUsers/`, data)
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
    let input = prompt(`Type "${data.host}" to confirm deletion.`);
    if (input !== data.host) return alert('Unable to confirm deletion.')

    axios.delete(`${api}/pfsUsers/${data.id}`)
      .then(function (response) {
        console.log(response)
        window.location.href = `/web-root-manager/routers`
      })
  }
</script>

<Header title="pfSense" />

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
          <div class="card-title">pfSense: </div>
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
              <br />
              <a class="waves-effect waves-light btn modal-trigger" style="width: 100%;" href={`http://${data.host}`} target="_blank">Control Panel</a>
            </div>
            <div class="col s6">
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
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input placeholder="istrav" id="username" type="text" bind:value={data.username}>
              <label for="username">Username</label>
            </div>
            <div class="input-field col s6">
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input placeholder="1337" id="password" type="text" bind:value={data.password}>
              <label for="password">Password</label>
            </div>
            <div class="input-field col s6">
            </div>
          </div>
          <br />
          <br />
          <div class="card-title">Connection:</div>
          <div class="row">
            <div class="col s6">
              <RouterConnection bind:value={data.sshUserId} />
            </div>
            <div class="input-field col s6">
              <p>This should be the connection to the router node.</p>
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
        <li class="tab col s3"><a class="active" href="#test1">Connection</a></li>
        <li class="tab col s3"><a href="#test2">PLB</a></li>
        <li class="tab col s3"><a href="#test3">NAS</a></li>
        <li class="tab col s3"><a href="#test4">VM</a></li>
      </ul>
      <div id="test1">
        <div class="card">
          {#if data}
            <PanelSsh id={data.sshUserId} />
          {/if}
        </div>
      </div>
      <div id="test2">
        <!-- <div class="card"> -->
          {#if data}
            <!-- <LocationMachines id={data.id} bind:count={machineCount} /> -->
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

  .card-content .row {
    margin-bottom: 0;
  }

  table {
    border: 1px solid #eee;
  }

  table tr > td:first-child {
    font-weight: bold;
    text-align: right;
  }
</style>
