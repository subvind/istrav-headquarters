<script>
  import { onMount } from "svelte";

  import Footer from "../../components/Footer.svelte"
  import Header from "../../components/Headers/WRMHeader.svelte"
  import ModalCreate from "../../components/FloatingButtons/CreateDataCenter.svelte"

  import Grid from "gridjs-svelte"
  import { h } from "gridjs"

  import axios from 'axios'

  import { backend, sidebarActive, sidebarMode } from '../../stores.js';
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('data-centers')
  sidebarMode.set('web-root-manager')

  let data = []
  let data2 = []

  onMount(() => {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = window['M'].FloatingActionButton.init(elems, {});

    var tabElem = document.querySelectorAll('.tabs');
    var instance = window['M'].Tabs.init(tabElem, {});
    
    axios.get(`${api}/dataCenterLocations`)
      .then(function (response) {
        console.log(response)
        data = response.data
      })

    axios.get(`${api}/dataCenterMachines`)
      .then(function (response) {
        console.log(response)
        data2 = response.data
      })
  })

  // const data = [
  //   { name: "John", email: "john@example.com" },
  //   { name: "Mark", email: "mark@gmail.com" },
  // ]

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
      name: 'region',
    },
    { 
      name: 'zone',
    },
    { 
      name: 'actions',
      formatter: (cell, row) => {
        return h('button', {
          className: 'btn',
          onClick: () => window.location.href = `/web-root-manager/data-centers/${row.cells[0].data}/view-location`
        }, 'VIEW');
      }
    },
  ]

  let columns2 = [
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
      name: 'state',
    },
    { 
      name: 'actions',
      formatter: (cell, row) => {
        return h('button', {
          className: 'btn',
          onClick: () => window.location.href = `/web-root-manager/data-centers/${row.cells[0].data}/view-machine`
        }, 'VIEW');
      }
    },
  ]

</script>

<Header title="Data Centers" />

<div class="row" style="background: #555;">
  <div class="col s1"></div>
  <div class="col s10">
    <br />
    <a href="/web-root-manager/dashboard" class="btn red lighten-2">← DASHBOARD</a>
    <p style="color: #eee;">Locations use a naming convention of region and zone. Locations also have an attachable street address, gate code, and a notes section. There may be many machines in a single location; such as a server rack.</p>
    <ul class="tabs tabs-fixed-width">
      <li class="tab col s3"><a class="active" href="#test1">Locations</a></li>
      <li class="tab col s3"><a class="active" href="#test2">Machines</a></li>
    </ul>
  </div>
</div>
<div class="row" style="min-height: 100vh;">
  <div class="col s1"></div>
  <div class="col s10">
    <div id="test1">
      {#if data.length}
        <Grid {columns} {data} search={true} sort={true} />
      {/if}
    </div>
    <div id="test2">
      {#if data2.length}
        <Grid columns={columns2} data={data2} search={true} sort={true} />
      {/if}
    </div>
  </div>
  <div class="col s1"></div>
</div>

<div class="fixed-action-btn">
  <ModalCreate />
</div>

<Footer />

<style global>
  @import "https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css";

  .tabs {
    background-color: transparent;
  }
</style>
