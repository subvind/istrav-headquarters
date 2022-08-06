<script>
  import { onMount } from 'svelte';
	import { backend, sidebarVisibility, sidebarActive, sidebarMode } from '../stores.js';
  import Navigation from "../components/Navigation.svelte"
  import Credits from "../components/Credits.svelte"

  let loading = true
  let api = ''
  backend.subscribe(value => {
		api = value
	})
  let sidebarIsOpen = true
  sidebarVisibility.subscribe(value => {
		sidebarIsOpen = value
	})
  let sidebarActiveId = 'it-panel'
  sidebarActive.subscribe(value => {
		sidebarActiveId = value
	})
  let sidebarModeId = 'main'
  sidebarMode.subscribe(value => {
		sidebarModeId = value
	})
  
  onMount(() => {
    let hostname = window.location.hostname
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      // configure server
      backend.set(`http://${hostname}:1337`)
    } else {
      // grab last 2 host words from url
      let words = hostname.split('.')
      let tld = words.slice((words.length - 2), words.length).join('.')
  
      // configure server
      backend.set(`https://api.${tld}`)
    }
    
    // log
    console.log('api:', api)
    loading = false
  })
</script>

{#if loading}
  <!-- do nothing -->
{:else}
  <Navigation active={sidebarActiveId} mode={sidebarModeId} isOpen={sidebarIsOpen} />
  <div class="detail">
    <slot></slot>
    <Credits />
  </div>
{/if}

<style global>
  @import "https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css";
  
  :global(body) {
    background-color: #eee;
  }

  .detail {
    overflow: hidden;
  }
</style>