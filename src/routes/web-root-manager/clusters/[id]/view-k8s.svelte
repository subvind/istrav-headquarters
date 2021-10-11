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
  import ClusterMaster from "../../../../components/DropdownSelect/ClusterMaster.svelte";
  import ClusterSlaves from "../../../../components/DropdownSelect/ClusterSlaves.svelte";
  import RouterType from "../../../../components/DropdownSelect/RouterType.svelte";
  import PfsRouter from "../../../../components/DropdownSelect/PfsRouter.svelte";

  import axios from 'axios'
  import Time from "svelte-time";
  import YAML from 'yaml'

  import { backend, sidebarActive, sidebarMode } from '../../../../stores.js';

  export let id
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('clusters')
  sidebarMode.set('web-root-manager')

  let data
  let kubeconfig

  onMount(() => {
    axios.get(`${api}/k8sUsers/${id}`)
      .then(function (response) {
        console.log(response)
        if (response.data) {
          data = response.data
          if (data.kubeconfig) {
            kubeconfig = YAML.parse(data.kubeconfig)
          }

          setTimeout(() => {
            window['M'].updateTextFields();
          })
        } else {
          alert('unable to fetch')
        }
      })
  })

  function update () {
    if (data.clusterName === '') return alert('clusterName must be defined.')

    axios.put(`${api}/k8sUsers/`, data)
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
    let input = prompt(`Type "${data.clusterName}" to confirm deletion.`);
    if (input !== data.clusterName) return alert('Unable to confirm deletion.')

    axios.delete(`${api}/k8sUsers/${data.id}`)
      .then(function (response) {
        console.log(response)
        window.location.href = `/web-root-manager/clusters`
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
    <a href="#!" class="btn right grey" on:click={() => remove()}><i class="material-icons">delete</i></a>
    {#if data}
      <div class="card">
        <div class="card-content">
          <div class="card-title">Kubernetes:</div>
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
                    <td>{data.clusterName}</td>
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
              <input placeholder="localhost" id="clusterName" type="text" bind:value={data.clusterName}>
              <label for="clusterName">Cluster Name</label>
            </div>
            <div class="input-field col s6">
              <p>This value is used within itPanel for identification purposes.</p>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <textarea placeholder="" id="kubeconfig" type="text" class="materialize-textarea" style="max-height: 200px;"  bind:value={data.kubeconfig}></textarea>
              <label for="kubeconfig">kubeconfig</label>
            </div>
            <div class="input-field col s6">
              <p>This secret is used for kubernetes admin and control.</p>
            </div>
          </div>
          <br />
          <br />
          <div class="card-title">Connections:</div>
          <div class="row">
            <div class="col s6">
              <ClusterMaster bind:value={data.master} />
            </div>
            <div class="input-field col s6">
              <p>This should be the connection to the microk8s master node.</p>
            </div>
          </div>
          <div class="row">
            <div class="col s6">
              <ClusterSlaves bind:value={data.slaves} />
            </div>
            <div class="input-field col s6">
              <p>These should be the connections to the microk8s slave nodes.</p>
            </div>
          </div>
          <br />
          <br />
          <div class="card-title">Router:</div>
          <div class="row">
            <div class="col s6">
              <RouterType bind:value={data.routerType} />
            </div>
            <div class="input-field col s6">
              <p>This controls the traffic in and out of the cluster. </p>
            </div>
          </div>
          {#if data.routerType === 'pfSense'}
            <div class="row">
              <div class="col s6">
                <PfsRouter bind:value={data.pfsRouter} />
              </div>
              <div class="input-field col s6">
                <p>Each node in the cluster should be connected to this router in some way.</p>
              </div>
            </div>
          {/if}
        </div>
        <div class="card-action">
          <a href="#!" on:click={() => update()}>UPDATE RECORD</a>
        </div>
      </div>
      {#if kubeconfig && kubeconfig.clusters}
        <br />
        <br />
        <h5>Control Panel:</h5>
        <a class="waves-effect waves-light btn modal-trigger" href={`${kubeconfig.clusters[0].cluster.server}`} target="_blank">{kubeconfig.clusters[0].cluster.server}</a>
      {/if}
      <br />
      <br />
      <br />
    {/if}
  </div>
  <div class="col s1"></div>
</div>

<Footer />

<style>
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
