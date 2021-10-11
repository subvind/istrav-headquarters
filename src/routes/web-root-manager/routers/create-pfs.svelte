<script>
  import { onMount } from "svelte";

  import Footer from "../../../components/Footer.svelte"
  import Header from "../../../components/Headers/WRMHeader.svelte"

  import axios from 'axios'

  import { backend, sidebarActive, sidebarMode } from '../../../stores.js';
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('routers')
  sidebarMode.set('web-root-manager')

  let host = ''
  let username = ''
  let password = ''

  onMount(() => {
    window['M'].updateTextFields();
  })

  function submit () {
    if (host === '') return alert('Host must be defined.')
    if (username === '') return alert('Username must be defined.')
    if (password === '') return alert('Password must be defined.')

    axios.post(`${api}/pfsUsers`, {
      host,
      username,
      password
    })
      .then(function (response) {
        console.log(response)
        if (response.data) {
          window.location.href = '/web-root-manager/routers'
        } else {
          alert('unable to create')
        }
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
    <div class="card">
      <div class="card-content">
        <div class="card-title">Create pfSense</div>
        <div class="row">
          <div class="input-field col s6">
            <input placeholder="localhost" id="host" type="text" bind:value={host}>
            <label for="url">Host</label>
          </div>
          <div class="input-field col s6">
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input placeholder="istrav" id="username" type="text" bind:value={username}>
            <label for="username">Username</label>
          </div>
          <div class="input-field col s6">
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input placeholder="1337" id="password" type="text" bind:value={password}>
            <label for="password">Password</label>
          </div>
          <div class="input-field col s6">
          </div>
        </div>
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
