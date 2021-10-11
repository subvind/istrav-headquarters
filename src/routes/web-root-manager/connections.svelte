<script>
  import { onMount } from "svelte";

  import Footer from "../../components/Footer.svelte"
  import Header from "../../components/Headers/WRMHeader.svelte"
  import ModalCreate from "../../components/FloatingButtons/CreateConnections.svelte"

  import Grid from "gridjs-svelte"
  import { h } from "gridjs"

  import axios from 'axios'

  import { backend, sidebarActive, sidebarMode } from '../../stores.js';
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('connections')
  sidebarMode.set('web-root-manager')

  let data = []

  onMount(() => {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = window['M'].FloatingActionButton.init(elems, {});

    var tabElem = document.querySelectorAll('.tabs');
    var instance = window['M'].Tabs.init(tabElem, {});
    
    axios.get(`${api}/sshUsers`)
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
      name: 'host',
    },
    { 
      name: 'port',
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
          onClick: () => window.location.href = `/web-root-manager/connections/${row.cells[0].data}/view-ssh`
        }, 'VIEW');
      }
    },
  ]

</script>

<Header title="Connections" />

<div class="row" style="background: #555;">
  <div class="col s1"></div>
  <div class="col s10">
    <br />
    <a href="/web-root-manager/dashboard" class="btn red lighten-2">← DASHBOARD</a>
    <p style="color: #eee;">In this section SSH connects to a particular machine while OpenVPN connects to a network. In the hardware section under Clusters we will need to gain access to each machine; enabling SSH here allows that. After setting up the hardware and network turning on an OpenVPN pod for tunneling into a VPC is a great way to securely access things from the outside world.</p>
    <ul class="tabs tabs-fixed-width">
      <li class="tab col s3"><a class="active" href="#test1">SSH</a></li>
      <li class="tab col s3"><a class="active" href="#test2">OpenVPN</a></li>
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
      <div class="card">
        coming soon...
      </div>
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
