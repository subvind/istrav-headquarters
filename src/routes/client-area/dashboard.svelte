
<script>
  import Header from "../../components/Headers/ClientAreaHeader.svelte"
  import Services from "../../components/Services.svelte"
  import Footer from "../../components/Footer.svelte"
  import ClientArea from "../../components/Paint/ClientArea.svelte"
  import Navigation from "../../components/Navigation/ClientArea.svelte"

  // import axios from 'axios'

  import { backend, sidebarActive, sidebarMode } from '../../stores.js';
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('dashboard')
  sidebarMode.set('client-area')
</script>

<Header title="Dashboard" />

<ClientArea />

<Navigation title={null} back={true} />

<Services />

<img src="/graphics/clouds.png" alt="" style="position: relative; min-width: 100%; min-height: 80px; min-width: 1500px; background: #fff; margin-top: -100px;" />

<Footer />
