
<script>
  import Header from "../components/Header.svelte"
  import Footer from "../components/Footer.svelte"
  import LicenseKeys from '../components/LicenseKeys.svelte'

  import { backend, sidebarActive, sidebarMode } from '../stores.js';

  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('license-keys')
  sidebarMode.set('main')
</script>

<Header />

<div style="background: #fff;">
  <img src="/graphics/clouds-up.png" alt="" style="width: 100%; min-width: 1500px;" />
</div>
<LicenseKeys />

<Footer />

<style>
  /* .map {
    height: 50vh;
    z-index: -1;
  } */
</style>