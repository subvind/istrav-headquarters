<script>
  import { onMount } from 'svelte';

	export let value = '';

  onMount(() => {
    var elems = document.querySelectorAll('select');
    var instances = window['M'].FormSelect.init(elems, {});
  })
</script>

<div class="input-field">
  <select id="router-type" bind:value={value}>
    <option value="">Choose router type...</option>
    <option value={'pfSense'} selected={'pfSense' === value ? true : false}>pfSense</option>
    <option value={'RouterOS'} selected={'RouterOS' === value ? true : false}>RouterOS</option>
  </select>
  <label for="router-type">type</label>
</div>