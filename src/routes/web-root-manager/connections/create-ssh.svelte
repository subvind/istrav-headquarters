<script context="module">
  export async function load(ctx) {
    // console.log('ctx.page', ctx.page)
    return { props: { 
      dataCenterLocationId: ctx.page.query.get('dataCenterLocationId'),
      dataCenterMachineId: ctx.page.query.get('dataCenterMachineId')
    }}
  }
</script>

<script>
  import { onMount } from "svelte";

  import Footer from "../../../components/Footer.svelte"
  import Header from "../../../components/Headers/WRMHeader.svelte"
  import ConnectionLocation from "../../../components/DropdownSelect/ConnectionLocation.svelte";
  import ConnectionMachine from "../../../components/DropdownSelect/ConnectionMachine.svelte";

  import axios from 'axios'

  import { backend, sidebarActive, sidebarMode } from '../../../stores.js';
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('connections')
  sidebarMode.set('web-root-manager')

  let host = ''
  let port = ''
  let username = ''
  let password = ''
  export let dataCenterLocationId
  export let dataCenterMachineId

  onMount(() => {
    window['M'].updateTextFields();

    console.log('dataCenterLocationId', dataCenterLocationId)
    console.log('dataCenterMachineId', dataCenterMachineId)
  })

  function submit () {
    if (host === '') return alert('Host must be defined.')
    if (port === '') return alert('Port must be defined.')
    if (username === '') return alert('Username must be defined.')
    if (password === '') return alert('Password must be defined.')
    if (dataCenterLocationId === '') return alert('Location must be defined.')
    if (dataCenterMachineId === '') return alert('Machine must be defined.')

    axios.post(`${api}/sshUsers`, {
      host,
      port,
      username,
      password,
      dataCenterLocationId,
      dataCenterMachineId
    })
      .then(function (response) {
        console.log(response)
        if (response.data) {
          window.location.href = '/web-root-manager/connections'
        } else {
          alert('unable to create')
        }
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
    <div class="card">
      <div class="card-content">
        <div class="card-title">Create SSH</div>
        <div class="row">
          <div class="input-field col s6">
            <input placeholder="localhost" id="host" type="text" bind:value={host}>
            <label for="url">Host</label>
          </div>
          <div class="input-field col s6">
            <input placeholder="22" id="port" type="number" bind:value={port}>
            <label for="port">Port</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input placeholder="istrav" id="username" type="text" bind:value={username}>
            <label for="username">Username</label>
          </div>
          <div class="input-field col s6">
            <input placeholder="1337" id="password" type="text" bind:value={password}>
            <label for="password">Password</label>
          </div>
        </div>
        <br />
        <br />
        <div class="card-title">Data Center:</div>
        <div class="row">
          <div class="col s6">
            <ConnectionLocation bind:value={dataCenterLocationId} />
          </div>
          <div class="input-field col s6">
            <p>First, select the location to where the machine is.</p>
          </div>
        </div>
        {#if dataCenterLocationId}
          <div class="row">
            <div class="col s6">
              <ConnectionMachine bind:value={dataCenterMachineId} bind:dataCenterLocationId={dataCenterLocationId} />
            </div>
            <div class="input-field col s6">
              <p>Then, select the machine that this connection grants access to.</p>
            </div>
          </div>
        {/if}
      </div>
      <div class="card-action">
        <a href="#!" on:click={() => submit()}>SUBMIT RECORD</a>
      </div>
    </div>
  </div>
  <div class="col s1"></div>
</div>

<Footer />

<style>
  .card-content .row {
    margin-bottom: 0;
  }
</style>
