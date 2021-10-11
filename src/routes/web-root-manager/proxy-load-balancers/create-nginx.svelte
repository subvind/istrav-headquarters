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
  sidebarActive.set('proxy-load-balancers')
  sidebarMode.set('web-root-manager')

  let host = ''
  let kubeconfig = ''

  onMount(() => {
    window['M'].updateTextFields();
  })

  function submit () {
    if (host === '') return alert('Host must be defined.')

    axios.post(`${api}/nginxUsers`, {
      host
    })
      .then(function (response) {
        console.log(response)
        if (response.data) {
          window.location.href = '/web-root-manager/proxy-load-balancers'
        } else {
          alert('unable to create')
        }
      })
  }

</script>

<Header title="NGINX" />

<br class="hide-on-med-and-down" />
<br class="hide-on-med-and-down" />
<br />
<div class="row">
  <div class="col s1"></div>
  <div class="col s10">
    <a href="#!" on:click={() => window.history.back()} class="btn red lighten-2">← BACK</a>
    <div class="card">
      <div class="card-content">
        <div class="card-title">Create NGINX</div>
        <div class="row">
          <div class="input-field col s6">
            <input placeholder="localhost" id="host" type="text" bind:value={host}>
            <label for="host">Host</label>
          </div>
          <div class="input-field col s6">
            <p>This is the IP address to where you have NginxProxyManager installed and running.</p>
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
