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
    axios.get(`${api}/pfsUsers`)
      .then(function (response) {
        console.log('pfsUsers', response)
        data = response.data

        setTimeout(() => {
          var elems = document.querySelectorAll('select');
          var instances = window['M'].FormSelect.init(elems, {});
        })
      })
  })
</script>

<div class="input-field">
  <select id="pfSense" bind:value={value}>
    <option value="">Choose router...</option>
    {#each data as record}
      <option value={record.id} selected={record.id === value ? true : false}>{record.username}@{record.host}</option>
    {/each}
  </select>
  <label for="pfSense">pfSense</label>
</div>