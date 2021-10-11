<script>
  
  import { onMount } from 'svelte';

  onMount(() => {
    localStorage.setItem('token', '')
    window.location.href = '/'
  })
</script>