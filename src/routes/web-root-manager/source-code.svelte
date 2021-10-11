<script>
  import { onMount } from "svelte";

  import Footer from "../../components/Footer.svelte"
  import Header from "../../components/Headers/WRMHeader.svelte"
  import ModalCreate from "../../components/FloatingButtons/CreateSourceCode.svelte"

  import Grid from "gridjs-svelte"
  import { h } from "gridjs"

  import axios from 'axios'

  import { backend, sidebarActive, sidebarMode } from '../../stores.js';
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('source-code')
  sidebarMode.set('web-root-manager')

  let data = []

  onMount(() => {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = window['M'].FloatingActionButton.init(elems, {});

    var tabElem = document.querySelectorAll('.tabs');
    var instance = window['M'].Tabs.init(tabElem, {});
    
    axios.get(`${api}/gitLabUsers`)
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
      name: 'url',
    },
    {
      name: 'actions',
      formatter: (cell, row) => {
        return h('button', {
          className: 'btn',
          onClick: () => window.location.href = `/web-root-manager/source-code/${row.cells[0].data}/view-coder`
        }, 'VIEW');
      }
    },
  ]

</script>

<Header title="Source Code" />

<div class="row" style="background: #555;">
  <div class="col s1"></div>
  <div class="col s10">
    <br />
    <a href="/web-root-manager/dashboard" class="btn red lighten-2">← DASHBOARD</a>
    <p style="color: #eee;">In order to get this section of the itPanel working you must either have your own GitLab server running or use someone else's GitLab server; such as gitlab.com. Later, in the "Applications" section we get into deploying GitLab to a kubernetes cluster. For now we integrate only with GitLab when managing source code.</p>
    <ul class="tabs tabs-fixed-width">
      <li class="tab col s3"><a class="active" href="#test1">Coders</a></li>
      <li class="tab col s3"><a href="#test2">Repositories</a></li>
      <li class="tab col s3"><a href="#test3">Pipelines</a></li>
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
    <div id="test3">
      <div class="card">
        s444444f
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
