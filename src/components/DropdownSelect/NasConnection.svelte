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
    axios.get(`${api}/sshUsers`)
      .then(function (response) {
        console.log('sshUsers', response)
        data = response.data

        setTimeout(() => {
          var elems = document.querySelectorAll('select');
          var instances = window['M'].FormSelect.init(elems, {});
        })
      })
  })
</script>

<div class="input-field">
  <select id="nas-connection" bind:value={value}>
    <option value="">Choose NAS server node...</option>
    {#each data as record}
      <option value={record.id} selected={record.id === value ? true : false}>{record.username}@{record.host}</option>
    {/each}
  </select>
  <label for="nas-connection">SSH</label>
</div>