
<script>
  import { onMount } from 'svelte';

  import Header from "../../../components/Headers/DesignPatternsHeader.svelte"
  import Footer from "../../../components/Footer.svelte"
  import WebRootManager from "../../../components/Paint/WebRootManager.svelte"
  import Navigation from "../../../components/Navigation/WebRootManager.svelte"

  // import axios from 'axios'

  import { backend, sidebarActive, sidebarMode } from '../../../stores.js';
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('creational')
  sidebarMode.set('design-patterns')
</script>

<Header title="Creational" />
<WebRootManager />

<div style="min-height: 100vh;">
  <Navigation title={null} back={true} />
</div>