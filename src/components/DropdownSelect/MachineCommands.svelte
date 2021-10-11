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
      axios.get(`${api}/sshUsers`)
        .then(function (response) {
          console.log('sshUsers', response)
          data = response.data.filter((value, index) => {
            return value.dataCenterLocationId === dataCenterLocationId
          })
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
  <select id="machine-location" bind:value={value}>
    <option value="">Choose SSH connection...</option>
    {#each data as record}
      <option value={record.id} selected={record.id === value ? true : false}>{record.username}@{record.host}</option>
    {/each}
  </select>
  <label for="machine-location">Connection</label>
</div>