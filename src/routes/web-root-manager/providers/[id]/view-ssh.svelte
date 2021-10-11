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

  import axios from 'axios'

  import { backend, sidebarActive, sidebarMode } from '../../../../stores.js';

  export let id
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('connections')
  sidebarMode.set('web-root-manager')

  let data

  onMount(() => {
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
    let input = prompt(`Type "${data.host}" to confirm deletion.`);
    if (input !== data.host) return alert('Unable to confirm deletion.')

    axios.delete(`${api}/sshUsers/${data.id}`)
      .then(function (response) {
        console.log(response)
        window.location.href = `/web-root-manager/connections`
      })
  }

</script>

<Header title="Connections" />

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
          <div class="card-title">SSH / {data.host}</div>
          <p>id: {data.id}</p>
          <br />
          <br />
          
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
        </div>
        <div class="card-action">
          <a href="#!" on:click={() => update()}>UPDATE RECORD</a>
        </div>
      </div>
    {/if}
  </div>
  <div class="col s1"></div>
</div>

<Footer />

<style>
  .card-content .row {
    margin-bottom: 0;
  }
</style>
