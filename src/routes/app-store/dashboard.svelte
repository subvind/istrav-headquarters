
<script>
  import { onMount } from 'svelte';

  import Header from "../../components/Headers/AppStoreHeader.svelte"
  import Footer from "../../components/Footer.svelte"
  import WebRootManager from "../../components/Paint/AppStore.svelte"
  import Navigation from "../../components/Navigation/AppStore.svelte"

  // import axios from 'axios'

  import { backend, sidebarActive, sidebarMode } from '../../stores.js';
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('dashboard')
  sidebarMode.set('app-store')
</script>

<Header title="App Store" />
<WebRootManager />
<Navigation title={null} back={true} />

<Footer />
