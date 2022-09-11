<script>
  import Machines from "./Machines.svelte"
  import { sidebarVisibility } from '../stores.js';

  let visible 
  sidebarVisibility.subscribe(value => {
		visible = value
	})
</script>

<div class="it-panel">
  <div class="row" style="padding: 1em;">
    <div class="col s12 m6 l6">
      <h1 class="slogan">System<br />Headquarters</h1>
      <p style="max-width: 400px; font-size: 1.2em;">Let's build ideas. isTrav's goal is to solve problems using the right solutions, turn ideas into apps that spark joy to the end user, and then to keep production live with what works best.</p>
      <p style="max-width: 400px; font-size: 1.2em;">Developing an application is not easy, from design to construction there is so much that could go wrong, however: that's where isTrav works best! Checkout our portfolio at <a href="https://istrav.com/production">istrav.com/production</a> for more info :)</p>
      <p style="font-size: 1.2em;">
        best,
        <br />~Travis Burandt
      </p>
      <div>
        <a href="https://istrav.com/platforms/pricing" class="btn btn-large red lighten-2" style="float: left; margin-right: 1em; text-transform: none;">Membership</a>
        <div style="">
          <p style="font-size: 1.2em;  font-weight: bold; margin: 0;">Starting at only</p>
          <p style="font-size: 2em; margin: 0;">$25/mo*</p>
        </div>
      </div>
    </div>
    <div class="col s12 m6 l6 hide-on-small-only">
      <Machines />
    </div>
  </div>
</div>
<div class="slanted-right"></div>
<!-- <div class="white">
  <div class="row">
    <div class="col s12 m4 l4"></div>
    <div class="col s12 m4 l4"></div>
  </div>
</div> -->

<style>
  .slogan {
    margin: 0;
    font-weight: 900;
    font-size: 3.2em;
  }

  .it-panel {
    margin: 0 auto;
    /* background-color: #ee6e73; */
    color: #333;
    max-width: 900px;
  }
  
  .slanted-right {
    flex: 1;
    height: 300px;
    -webkit-transform: skewy(-6deg);
    transform: skewy(-12deg);
    background-color: #fff;
  }

  /* .white {
    background: #fff;
    min-height: 100px;
    margin-top: -150px;
    margin-bottom: -100px;
    position: relative;
  } */
</style>