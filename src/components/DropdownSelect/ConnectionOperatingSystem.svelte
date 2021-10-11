<script>
  import { onMount } from 'svelte';

	export let value = '';

  onMount(() => {
    var elems = document.querySelectorAll('select');
    var instances = window['M'].FormSelect.init(elems, {});
  })
</script>

<div class="input-field">
  <select id="connection-base" bind:value={value}>
    <option value="">Choose OS distribution...</option>
    <option value={'FreeBSD'} selected={'FreeBSD' === value ? true : false}>FreeBSD</option>
    <option value={'Ubuntu'} selected={'Ubuntu' === value ? true : false}>Ubuntu</option>
    <option value={'Debian'} selected={'Debian' === value ? true : false}>Debian</option>
  </select>
  <label for="connection-base">Base</label>
</div>