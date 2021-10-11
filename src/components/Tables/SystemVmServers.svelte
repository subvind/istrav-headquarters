
<script>
  import { onMount } from "svelte";

  import Grid from "gridjs-svelte"
  import { h } from "gridjs"

  export let id // should be sshUserId
  export let data

  onMount(() => {
    var tabElem = document.querySelectorAll('.tabs');
    var instance = window['M'].Tabs.init(tabElem, {});
    // none
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
      name: 'host',
    },
    { 
      name: 'username',
    },
    { 
      name: 'password',
    },
    { 
      name: 'actions',
      formatter: (cell, row) => {
        return h('button', {
          className: 'btn',
          onClick: () => window.location.href = `/web-root-manager/vm-servers/${row.cells[0].data}/view-proxmox`
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
<a class="btn" href={`/web-root-manager/vm-servers/create-proxmox?sshUserId=${id}`}>ADD RECORD</a>

<style global>
  @import "https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css";

  :global(.gridjs-container) {
    padding-top: 0 !important;
  }

  .empty {
    margin-top: 0;
  }
</style>