
<script>
  import { onMount } from "svelte";

  import axios from 'axios'

  import { backend, sidebarActive, sidebarMode } from '../../stores.js';

  import Grid from "gridjs-svelte"
  import { h } from "gridjs"

  export let id
  export let count
  let api
  backend.subscribe(value => {
		api = value
	})

  let data = []

  onMount(() => {
    axios.get(`${api}/users/${id}/hosts`)
      .then(function (response) {
        console.log(response)
        if (response.data) {
          data = [...response.data.collaborations, ...response.data.ownerships]
          count = data.length
        } else {
          alert('unable to fetch')
        }
      })
  })


  let columns = [
    {
      name: 'id',
      formatter: (cell, row) => {
        return h('div', {
          className: '',
          style: 'white-space: nowrap; text-overflow: ellipsis; width: 100px; overflow: hidden;'
        }, cell);
      }
    },
    { 
      name: 'name',
    },
    { 
      name: 'actions',
      formatter: (cell, row) => {
        return h('button', {
          className: 'btn',
          onClick: () => window.location.href = `/web-root-manager/tenants/${row.cells[0].data}/view`
        }, 'VIEW');
      }
    },
  ]
</script>

{#if data.length}
  <Grid {columns} {data} search={false} sort={true} />
{:else}
  <div class="card empty">
    <div class="card-content">
      <p>empty</p>
    </div>
  </div>
{/if}
<a class="btn" href={`/web-root-manager/tenants/create?ownerId=${id}`}>ADD RECORD</a>

<style global>
  @import "https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css";

  :global(.gridjs-container) {
    padding-top: 0 !important;
  }

  .empty {
    margin-top: 0;
  }
</style>