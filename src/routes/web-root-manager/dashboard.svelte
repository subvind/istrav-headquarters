
<script>
  import { onMount } from 'svelte';

  import Header from "../../components/Headers/WRMHeader.svelte"
  import Footer from "../../components/Footer.svelte"
  import WebRootManager from "../../components/Paint/WebRootManager.svelte"
  import Navigation from "../../components/Navigation/WebRootManager.svelte"

  // import axios from 'axios'

  import { backend, sidebarActive, sidebarMode } from '../../stores.js';
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('dashboard')
  sidebarMode.set('web-root-manager')
</script>

<Header title="Dashboard" />
<WebRootManager />
<Navigation title={null} back={true} />

<Footer />
