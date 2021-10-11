<script>
  import { onMount } from "svelte";

  import SystemRouters from "../Tables/SystemRouters.svelte";
  import SystemProxyLoadBalancers from "../Tables/SystemProxyLoadBalancers.svelte";
  import SystemNasServers from "../Tables/SystemNasServers.svelte";
  import SystemVmServers from "../Tables/SystemVmServers.svelte";

  import axios from 'axios'

  import { backend, sidebarActive, sidebarMode } from '../../stores.js';

  export let count
  export let id
  let api
  backend.subscribe(value => {
    api = value
  })

  let routers = []
  let proxyLoadBalancers = []
  let nasServers = []
  let vmServers = []

  onMount(() => {
    var tabElem = document.querySelectorAll('.tabs');
    var instance = window['M'].Tabs.init(tabElem, {});

    axios.get(`${api}/sshUsers/${id}/systems`)
      .then(function (response) {
        console.log(response)
        if (response.data) {
          routers = response.data.pfsUsers || []
          proxyLoadBalancers = response.data.nginxUsers || []
          nasServers = response.data.omvUsers || []
          vmServers = response.data.proxmoxUsers || []
          count = routers.length + proxyLoadBalancers.length + nasServers.length + vmServers.length
        } else {
          alert('unable to fetch')
        }
      })
  })
</script>

<!-- <div class="card-content" style="padding: 0;"> -->
  <div class="relations">
    <ul class="tabs" id="testing">
      <li class="tab col s3"><a class="active" href="#testing1">Routers ({routers.length})</a></li>
      <li class="tab col s3"><a href="#testing2">PLB ({proxyLoadBalancers.length})</a></li>
      <li class="tab col s3"><a href="#testing3">NAS ({nasServers.length})</a></li>
      <li class="tab col s3"><a href="#testing4">VM ({vmServers.length})</a></li>
    </ul>
    <div id="testing1">
      {#if routers}
        <SystemRouters {id} data={routers} />
      {/if}
    </div>
    <div id="testing2">
      {#if proxyLoadBalancers}
        <SystemProxyLoadBalancers {id} data={proxyLoadBalancers} />
      {/if}
    </div>
    <div id="testing3">
      {#if nasServers}
        <SystemNasServers {id} data={nasServers} />
      {/if}
    </div>
    <div id="testing4">
      {#if vmServers}
        <SystemVmServers {id} data={vmServers} />
      {/if}
    </div>
  </div>
<!-- </div> -->

<style>
  .relations .tabs {
    background-color: transparent;
  }
  /* table {
    border: 1px solid #eee;
  }

  table tr > td:first-child {
    font-weight: bold;
    text-align: right;
  } */
</style>