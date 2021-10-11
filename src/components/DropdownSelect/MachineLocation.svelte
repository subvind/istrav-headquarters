<script>
  import { onMount } from 'svelte';

  import axios from 'axios'
  import { backend, sidebarActive, sidebarMode } from '../../stores.js';
  let api
  backend.subscribe(value => {
		api = value
	})

	export let value = '1';

  let data = []

  onMount(() => {
    axios.get(`${api}/dataCenterLocations`)
      .then(function (response) {
        console.log('dataCenterLocations', response)
        data = response.data

        setTimeout(() => {
          var elems = document.querySelectorAll('select');
          var instances = window['M'].FormSelect.init(elems, {});
        })
      })
  })
</script>

<div class="input-field">
  <select id="machine-location" bind:value={value}>
    <option value="">Choose data center location...</option>
    {#each data as record}
      <option value={record.id} selected={record.id === value ? true : false}>{record.region}:{record.zone}</option>
    {/each}
  </select>
  <label for="machine-location">Location</label>
</div>