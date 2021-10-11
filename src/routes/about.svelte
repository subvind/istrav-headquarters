
<script>
  import Header from "../components/Headers/AboutHeader.svelte"
  import PaintAbout from "../components/Paint/About.svelte"
  import Footer from "../components/Footer.svelte"
  import Map from '../components/Map.svelte'

  import { backend, sidebarActive, sidebarMode } from '../stores.js';

  
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('about')
  sidebarMode.set('main')

</script>

<Header title="Travis Burandt" />

<PaintAbout />

<div style="background: #fff;">
  <img src="/graphics/clouds-up.png" alt="" style="width: 100%; min-width: 1500px;" />
</div>

<div class="white">
  <br />
  <br />
  <div class="row">
    <div class="col s12 m2"></div>
    <div class="col s12 m8">
      <h4 style="text-align: center; margin: 0;">Location:</h4>
      <p style="text-align: center; margin: 0;">(Austin, TX)</p>
      <br />
      <div class="card">
        <div class="map">
          <Map address={'Austin, TX'} />
        </div>
      </div>
    </div>
    <div class="col s12 m2"></div>
  </div>
  <br />
  <br />
</div>
<img src="/graphics/clouds.png" alt="" style="width: 100%; min-width: 1500px; background: #fff;" />

<Footer />


<style>
  .white {
    background: white;
  }

  .map {
    height: 50vh;
    z-index: -1;
  }
</style>