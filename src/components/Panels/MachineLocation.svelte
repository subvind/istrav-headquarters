<script>
  import { onMount } from "svelte";

  import Map from '../Map.svelte'
  import Time from "svelte-time";

  import axios from 'axios'

  import { backend, sidebarActive, sidebarMode } from '../../stores.js';

  export let id
  let api
  backend.subscribe(value => {
    api = value
  })

  let data

  onMount(() => {
    axios.get(`${api}/dataCenterMachines/${id}/dataCenterLocation`)
      .then(function (response) {
        console.log(response)
        if (response.data) {
          data = response.data.dataCenterLocation
        } else {
          alert('unable to fetch')
        }
      })
  })
</script>

{#if data}
  <div class="card-content">
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
              <td>{data.region}:{data.zone}</td>
            </tr>
            <tr>
              <td>region:</td>
              <td>{data.region}</td>
            </tr>
            <tr>
              <td>zone:</td>
              <td>{data.zone}</td>
            </tr>
            <tr>
              <td>address:</td>
              <td>{data.address}</td>
            </tr>
            <tr>
              <td>gate code:</td>
              <td>{data.gateCode}</td>
            </tr>
            <tr>
              <td>notes:</td>
              <td>{data.notes}</td>
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
      <div class="col s6" style="height: 300px;">
        <Map address={data.address} />
      </div>
    </div>
  </div>
  <div class="card-action">
    <a href={`/web-root-manager/data-centers/${data.id}/view-location`}>VIEW RECORD</a>
  </div>
{/if}

<style>
  table {
    border: 1px solid #eee;
  }

  table tr > td:first-child {
    font-weight: bold;
    text-align: right;
  }
</style>