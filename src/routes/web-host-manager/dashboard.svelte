
<script>
  import { onMount } from 'svelte';

  import Header from "../../components/Headers/WHMHeader.svelte"
  import Footer from "../../components/Footer.svelte"
  import WebHostManager from "../../components/Paint/WebHostManager.svelte"
  import Navigation from "../../components/Navigation/WebHostManager.svelte"

  // import axios from 'axios'

  import { backend, sidebarActive, sidebarMode } from '../../stores.js';
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('dashboard')
  sidebarMode.set('web-host-manager')
</script>

<Header title="Dashboard" />
<WebHostManager />
<Navigation title={null} back={true} />

<Footer />
