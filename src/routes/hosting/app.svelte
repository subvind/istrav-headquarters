
<script>
  import Header from "../../components/Header.svelte"
  import Footer from "../../components/Footer.svelte"

  import { backend, sidebarActive, sidebarMode } from '../../stores.js';

  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('app')
  sidebarMode.set('main')
</script>

<Header />

<div style="background: #fff;">
  <img src="/graphics/clouds-up.png" alt="" style="width: 100%; min-width: 1500px;" />
</div>

<div class="white">

</div>

<img src="/graphics/clouds.png" alt="" style="width: 100%; min-width: 1500px; background: #fff;" />

<Footer />

<style>
  .white {
    background: #fff;
  }
</style>