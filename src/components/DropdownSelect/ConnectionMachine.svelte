<script>
  import { onMount } from 'svelte';

  import axios from 'axios'
  import { backend, sidebarActive, sidebarMode } from '../../stores.js';
  let api
  backend.subscribe(value => {
		api = value
	})

	export let value = '1';
  export let dataCenterLocationId = ''

  let data = []
  let loadedId

  onMount(() => {
    function load () {
      if (loadedId === dataCenterLocationId) { return }
      axios.get(`${api}/dataCenterLocations/${dataCenterLocationId}/dataCenterMachines`)
        .then(function (response) {
          console.log('dataCenterMachines', response)
          data = response.data.dataCenterMachines

          // keep track of this so only a single call is made
          loadedId = dataCenterLocationId
  
          setTimeout(() => {
            var elems = document.querySelectorAll('select');
            var instances = window['M'].FormSelect.init(elems, {});
          })
        })
    }

    load()
    setInterval(load, 1000)
  })
</script>

<div class="input-field">
  <select id="connection-machine" bind:value={value}>
    <option value="">Choose data center machine...</option>
    {#each data as record}
      <option value={record.id} selected={record.id === value ? true : false}>{record.name}</option>
    {/each}
  </select>
  <label for="connection-machine">Machine</label>
</div>