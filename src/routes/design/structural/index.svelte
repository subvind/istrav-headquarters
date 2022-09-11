<script>
  import { onMount } from 'svelte';

  import Header from "../../../components/Headers/DesignHeader.svelte"
  import Footer from "../../../components/Footer.svelte"
  import Design from "../../../components/Paint/Design.svelte"
  import Navigation from "../../../components/Navigation/DesignStructural.svelte"

  // import axios from 'axios'

  import { backend, sidebarActive, sidebarMode } from '../../../stores.js';
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('design')
  sidebarMode.set('design')
</script>

<Header>
  <a href="/design/structural">Structural</a>
</Header>
<Design />

<div style="min-height: 100vh;">
  <Navigation title={null} back={true} />
</div>
