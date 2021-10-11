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
  let state = 'unknown' // start, reboot, shutdown

  onMount(() => {
    // check system status every 3 seconds
    function check () {
      axios.get(`${api}/dataCenterMachines/${id}/status/${state}`)
        .then(function (response) {
          console.log('status', response)
          if (response.data) {
            data = response.data
            state = data.state
          } else {
            alert('unable to fetch')
          }
        })
    }

    // run emediatly and then again and again
    check()
    setInterval(check, 3000)
  })

  function areYouSure (change) {
    let input = prompt(`Type "${data.name}" to confirm state change.`);
    if (input !== `${data.name}`) return alert('Unable to confirm state change.')
    state = change
  }
</script>

<div class="card-content">
  <div class="card-title">System Controls:</div>
  {#if data}
    {#if data.commandsId}
      <div class="row">
        <div class="col s6">
          <p>When the running button is blue the system is on. When the stopped button is red the system is off.</p>
          <br />
          {#if data.state === 'online'}
            <button class="btn blue">RUNNING</button>
            <button class="btn grey">STOPPED</button>
          {:else}
            <button class="btn grey">RUNNING</button>
            <button class="btn red">STOPPED</button>
          {/if}
          <br />
          (state: {data.state})
        </div>
        <div class="col s6">
          {#if data.isConnectable}
            <button class="btn grey">START</button>
            <button on:click={() => areYouSure('reboot')}  class="btn black">REBOOT</button>
            <button on:click={() => areYouSure('shutdown')}  class="btn black">SHUTDOWN</button>
          {:else}
            {#if data.state === 'start' || data.state === 'reboot'}
              <button class="btn grey">START</button>
            {:else}
              <button on:click={() => state = 'start'} class="btn black">START</button>
            {/if}
            <button class="btn grey">REBOOT</button>
            <button class="btn grey">SHUTDOWN</button>
          {/if}
          <p>(The above controls toggle system power on and off.)</p>
          {#if data.connectedAt}
            <p>(connectedAt: <Time relative timestamp={data.connectedAt} />)</p>
          {/if}
        </div>
      </div>
    {:else}
      <p>Setup a SSH connection, under commands, to enable this feature.</p>
    {/if}
  {/if}
</div>

<style>
  /* table {
    border: 1px solid #eee;
  }

  table tr > td:first-child {
    font-weight: bold;
    text-align: right;
  } */
</style>