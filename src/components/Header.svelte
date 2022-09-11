<script>

  import Logo from "./Logo.svelte"
  import { sidebarVisibility } from '../stores.js';
  import Controls from "./Controls.svelte"

  let visible 
  sidebarVisibility.subscribe(value => {
		visible = value
	})

  function toggleSidebar() {
    if (visible) {
      sidebarVisibility.set(false)
    } else {
      sidebarVisibility.set(true)
    }
  }
  
</script>

<div class="it-panel">
  <div style="padding: 1em; border-bottom: 1px solid #888; overflow: hidden;">
    <div style="float: left;">
      <a href="https://discord.gg/27dBhn3zuc" style="color: #888; margin: 0 0.5em;"><i class="material-icons" style="font-size: 0.8em; color: #888;">chat</i> Discord</a>
      <a href="#!" style="color: #888; margin: 0 0.5em;"><i class="material-icons" style="font-size: 0.8em; color: #888;">mail</i> Email: travis.burandt@gmail.com</a>
    </div>
    <div style="float: right; color: #888;">
      <a href="https://github.com/trabur" target="_blank" style="color: #888; margin: 0 0.5em;">GitHub</a>
      <a href="https://www.npmjs.com/~travis.burandt"  target="_blank" style="color: #888; margin: 0 0.5em;">NPM</a>
    </div>
  </div>

  <div class="row" style="padding: 1em;">
    <div class="col s12 m5 l5">
      <div class="hide-on-large-only" style="float: left; line-height: 8em;">
        <a href="#!" on:click={() => toggleSidebar()} class="btn btn-large"><i class="material-icons">menu</i></a>
      </div>
      <a href="/" style="color: #333;">
        <Logo size="large" align="left" />
      </a>
    </div>
    <div class="col s12 m7 l7">
      <br />
      <div style="text-align: right;">
        <Controls />
      </div>
    </div>
  </div>
</div>



<style>
  .it-panel {
    margin: 0 auto;
    /* background-color: #ee6e73; */
    color: #333;
    max-width: 900px;
  }
</style>