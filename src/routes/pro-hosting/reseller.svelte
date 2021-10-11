
<script>
  import Header from "../../components/Headers/DomainsHeader.svelte"
  import About from "../../components/Paint/About.svelte"
  import Footer from "../../components/Footer.svelte"
  import Map from '../../components/Map.svelte'

  import { backend, sidebarActive, sidebarMode } from '../../stores.js';

  
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('reseller')
  sidebarMode.set('main')

</script>

<Header title="PRO Hosting / Reseller" />

<About />

<div class="row">
  <div class="col s12 m2"></div>
  <div class="col s12 m8">
    <div class="card">
      <div class="map">
        <Map address={'Austin, TX'} />
      </div>
    </div>
  </div>
  <div class="col s12 m2"></div>
</div>

<Footer />


<style>
  .map {
    height: 50vh;
    z-index: -1;
  }
</style>