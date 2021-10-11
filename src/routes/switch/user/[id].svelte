<script context="module">
  export async function load(ctx) {
    let id = ctx.page.params.id
    return { props: { id }}
  }
</script>

<script>
  
  import { onMount } from 'svelte';

  export let id

  onMount(() => {
    // localStorage.setItem('token', '')
    // window.location.href = '/'
  })
</script>

{id}