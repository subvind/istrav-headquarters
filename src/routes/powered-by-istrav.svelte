<!-- © 2021 istrav.com. All rights reserved. -->
<!-- DO NOT modify or remove branding without permission from the author. -->
<!-- DO NOT modify or remove this notice. -->
<!-- GOTO https://extra.istrav.com/valid-keys to verify authenticity -->

<script>
  import Logo from "../components/Logo.svelte"
  import Footer from "../components/Footer.svelte"
  import PoweredBy from '../components/PoweredBy.svelte'

  import { backend, sidebarActive, sidebarMode } from '../stores.js';

  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('powered-by')
  sidebarMode.set('main')
</script>

<div class="stripped">

  <!-- https://getwaves.io/ -->
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff59d" fill-opacity="1" d="M0,96L10,85.3C20,75,40,53,60,53.3C80,53,100,75,120,122.7C140,171,160,245,180,277.3C200,309,220,299,240,272C260,245,280,203,300,181.3C320,160,340,160,360,154.7C380,149,400,139,420,144C440,149,460,171,480,197.3C500,224,520,256,540,234.7C560,213,580,139,600,90.7C620,43,640,21,660,53.3C680,85,700,171,720,170.7C740,171,760,85,780,58.7C800,32,820,64,840,74.7C860,85,880,75,900,101.3C920,128,940,192,960,186.7C980,181,1000,107,1020,90.7C1040,75,1060,117,1080,128C1100,139,1120,117,1140,101.3C1160,85,1180,75,1200,90.7C1220,107,1240,149,1260,186.7C1280,224,1300,256,1320,256C1340,256,1360,224,1380,218.7C1400,213,1420,235,1430,245.3L1440,256L1440,0L1430,0C1420,0,1400,0,1380,0C1360,0,1340,0,1320,0C1300,0,1280,0,1260,0C1240,0,1220,0,1200,0C1180,0,1160,0,1140,0C1120,0,1100,0,1080,0C1060,0,1040,0,1020,0C1000,0,980,0,960,0C940,0,920,0,900,0C880,0,860,0,840,0C820,0,800,0,780,0C760,0,740,0,720,0C700,0,680,0,660,0C640,0,620,0,600,0C580,0,560,0,540,0C520,0,500,0,480,0C460,0,440,0,420,0C400,0,380,0,360,0C340,0,320,0,300,0C280,0,260,0,240,0C220,0,200,0,180,0C160,0,140,0,120,0C100,0,80,0,60,0C40,0,20,0,10,0L0,0Z"></path></svg>
  <div class="row">
    <div class="col s12 m3"></div>
    <div class="col s12 m6">
      <a href="/powered-by-istrav">
        <Logo size="large" color="#eee" />
      </a>
      <br />
      <h4 style="text-align: center; margin-top: -0.5em; color: #eee;">(Powered By)</h4>
      <!-- <p style="color: #eee;"></p> -->
    </div>
    <div class="col s12 m3"></div>
  </div>
</div>
<div class="slanted">
  <div class="slanted-left"></div>
  <div class="slanted-right"></div>
</div>
<br />
<br />
<br />
<br />
<br />
<br />

<PoweredBy />


<div style="background: #fff;">
  <img src="/graphics/clouds-up.png" alt="" style="width: 100%; min-width: 1500px;" />
</div>

<div class="white">
  <div class="container">
    <p>Top Reason to host with isTrav:</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
</div>

<img src="/graphics/clouds.png" alt="" style="width: 100%; min-width: 1500px; background: #fff;" />

<Footer />

<style>
  .stripped {
    padding: 0 0 8em;
    background: repeating-linear-gradient(
      90deg,
    #222,
    #222 10px,
    #333 10px,
    #333 20px
    );
  }
  
  .slanted {
    width: 100;
    display: flex;
  }

  .slanted-left {
    margin-top: -75px;
    flex: 1;
    height: 150px;
    -webkit-transform: skewy(6deg);
    transform: skewy(12deg);
    background-color: #333;
    border-top: 1em solid #222;
    border-bottom: 1em solid #222;
  }

  .slanted-right {
    margin-top: -75px;
    flex: 1;
    height: 150px;
    -webkit-transform: skewy(-6deg);
    transform: skewy(-12deg);
    background-color: #333;
    border-top: 1em solid #222;
    border-bottom: 1em solid #222;
  }

  .white {
    background: #fff;
  }

  .container {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 1em;
  }
</style>