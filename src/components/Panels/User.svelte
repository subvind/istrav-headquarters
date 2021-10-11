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
    axios.get(`${api}/users/${id}`)
      .then(function (response) {
        console.log(response)
        if (response.data) {
          data = response.data
        } else {
          alert('unable to fetch')
        }
      })
  })
</script>

{#if data}
  <div class="card-content">
    <div class="row" style="margin: 0;">
      <div class="col s6">
        <table>
          <tbody>
            <tr>
              <td>id:</td>
              <td>{data.id}</td>
            </tr>
            <tr>
              <td>reference:</td>
              <td>{data.username}:{data.email}</td>
            </tr>
            <tr>
              <td>username:</td>
              <td>{data.username}</td>
            </tr>
            <tr>
              <td>email:</td>
              <td>{data.email}</td>
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
      <div class="col s6">
        
      </div>
    </div>
  </div>
  <div class="card-action">
    <a href={`/web-root-manager/users/${data.id}/view`}>VIEW RECORD</a>
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