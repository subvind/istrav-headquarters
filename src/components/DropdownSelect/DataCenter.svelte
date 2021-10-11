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
    axios.get(`${api}/dataCenters`)
      .then(function (response) {
        console.log('dataCenters', response)
        data = response.data

        setTimeout(() => {
          var elems = document.querySelectorAll('select');
          var instances = window['M'].FormSelect.init(elems, {});
        })
      })
  })
</script>

<div class="input-field">
  <select id="master" bind:value={value}>
    <option value="">Choose data center...</option>
    {#each data as record}
      <option value={record.id} selected={record.id === value ? true : false}>{record.username}@{record.host}</option>
    {/each}
  </select>
  <label for="master">master</label>
</div>