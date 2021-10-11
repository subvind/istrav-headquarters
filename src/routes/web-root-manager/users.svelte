<script>
  import { onMount } from "svelte";

  import Footer from "../../components/Footer.svelte"
  import Header from "../../components/Headers/WRMHeader.svelte"
  import ModalCreate from "../../components/FloatingButtons/CreateUsers.svelte"

  import Grid from "gridjs-svelte"
  import { h } from "gridjs"

  import axios from 'axios'

  import { backend, sidebarActive, sidebarMode } from '../../stores.js';
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('users')
  sidebarMode.set('web-root-manager')

  let data = []

  onMount(() => {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = window['M'].FloatingActionButton.init(elems, {});

    var tabElem = document.querySelectorAll('.tabs');
    var instance = window['M'].Tabs.init(tabElem, {});
    
    axios.get(`${api}/users`)
      .then(function (response) {
        console.log(response)
        data = response.data
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
      name: 'username',
    },
    { 
      name: 'email',
    },
    { 
      name: 'actions',
      formatter: (cell, row) => {
        return h('button', {
          className: 'btn',
          onClick: () => window.location.href = `/web-root-manager/users/${row.cells[0].data}/view`
        }, 'VIEW');
      }
    },
  ]

</script>

<Header title="Users" />

<div class="row" style="background: #555;">
  <div class="col s1"></div>
  <div class="col s10">
    <br />
    <a href="/web-root-manager/dashboard" class="btn red lighten-2">← DASHBOARD</a>
    <p style="color: #eee;">These records are all username/password combos for loging into the system. Email is used for password recovery. Each user in the system gains access to WHM & WRM by assignment; link users to "Team Members" for WRM access + link users to "Collaborators" for WHM access.</p>
  </div>
</div>
<div class="row" style="min-height: 100vh;">
  <div class="col s1"></div>
  <div class="col s10">
    {#if data.length}
      <Grid {columns} {data} search={true} sort={true} />
    {/if}
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
