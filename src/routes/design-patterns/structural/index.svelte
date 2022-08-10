
<script>
  import { onMount } from 'svelte';

  import Header from "../../../components/Headers/DesignPatternsHeader.svelte"
  import WebRootManager from "../../../components/Paint/WebRootManager.svelte"
  import Navigation from "../../../components/Navigation/SupportDesk.svelte"

  // import axios from 'axios'

  import { backend, sidebarActive, sidebarMode } from '../../../stores.js';
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('structural')
  sidebarMode.set('design-patterns')
</script>

<Header title="Structural" />
<WebRootManager />

<div style="min-height: 100vh;">
  <Navigation title={null} back={true} />
</div>

