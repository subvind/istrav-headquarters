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
  sidebarActive.set('clusters')
  sidebarMode.set('web-root-manager')

  let clusterName = ''
  let kubeconfig = ''

  onMount(() => {
    window['M'].updateTextFields();
  })

  function submit () {
    if (clusterName === '') return alert('ClusterName must be defined.')

    axios.post(`${api}/k8sUsers`, {
      clusterName,
      kubeconfig
    })
      .then(function (response) {
        console.log(response)
        if (response.data) {
          window.location.href = '/web-root-manager/clusters'
        } else {
          alert('unable to create')
        }
      })
  }

</script>

<Header title="Clusters" />

<br class="hide-on-med-and-down" />
<br class="hide-on-med-and-down" />
<br />
<div class="row">
  <div class="col s1"></div>
  <div class="col s10">
    <a href="#!" on:click={() => window.history.back()} class="btn red lighten-2">← BACK</a>
    <div class="card">
      <div class="card-content">
        <div class="card-title">Create K8s</div>
        <div class="row">
          <div class="input-field col s6">
            <input placeholder="localhost" id="clusterName" type="text" bind:value={clusterName}>
            <label for="clusterName">Cluster Name</label>
          </div>
          <div class="input-field col s6">
            <p>This value is used within itPanel for identification purposes.</p>
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
