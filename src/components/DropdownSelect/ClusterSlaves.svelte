<script>
  import { onMount } from 'svelte';

  import axios from 'axios'
  import { backend, sidebarActive, sidebarMode } from '../../stores.js';
  let api
  backend.subscribe(value => {
		api = value
	})

	export let value = ['1'];

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

  function checkSelection (record) {
    let result = value.filter((v, i) => {
      return v === record.id
    })
    if (result.length) {
      return true
    } else{
      return false
    }
  }
</script>

<div class="input-field">
  <select multiple id="slaves" bind:value={value}>
    <option value="" disabled>Choose cluster nodes...</option>
    {#each data as record}
      <option value={record.id} selected={checkSelection(record)}>{record.username}@{record.host}</option>
    {/each}
  </select>
  <label for="slaves">slaves</label>
</div>
