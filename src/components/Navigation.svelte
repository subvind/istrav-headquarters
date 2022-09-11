<script>
  import { onMount } from "svelte";

  import Logo from './Logo.svelte'

  let instances
  export let active
  export let mode
  export let isOpen
  $: { reMount(isOpen) }
  function reMount (value) {
    console.log('remount', value)
    if (instances) {
      if (value) {
        instances[0].open()
      } else {
        instances[0].close()
      }
    }
  }

  onMount(() => {
    var elems = document.querySelectorAll('.sidenav');
    instances = window['M'].Sidenav.init(elems, {
      isOpen: true,
      isFixed: true
    });
    if (isOpen) {
      instances[0].open()
    }
  })
</script>

<ul id="slide-out" class="sidenav sidenav-fixed" style="width: 250px;">
  <h5 style="text-align: center;"><a href="#" style="color: #ccc;"><Logo color="#eee" /></a></h5>
  <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
  <div style="margin: 0.5em;">
    <a href="/" class="btn red lighten-2" style="width: 100%;"><i class="material-icons left">developer_board</i>HEADQUARTERS<i class="material-icons right">chevron_right</i></a>
  </div>
  <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
  <li><a href="#!" class="subheader">ISTRAV.DEV</a></li>
  <li class={active === 'design' ? 'active' : null}><a href="/design" on:click={() => {active = 'design'}} class="waves-effect"><i class={`material-icons`}>color_lens</i>Design</a></li>
  <li class={active === 'architecture' ? 'active' : null}><a href="/architecture" on:click={() => {active = 'architecture'}} class="waves-effect"><i class={`material-icons`}>brush</i>Architecture</a></li>
  <li class={active === 'infrastructure' ? 'active' : null}><a href="/infrastructure" on:click={() => {active = 'infrastructure'}} class="waves-effect"><i class={`material-icons`}>domain</i>Infrastructure</a></li>
  <li class={active === 'engineering' ? 'active' : null}><a href="/engineering" on:click={() => {active = 'engineering'}} class="waves-effect"><i class={`material-icons`}>straighten</i>Engineering</a></li>
  <li class={active === 'construction' ? 'active' : null}><a href="/construction" on:click={() => {active = 'construction'}} class="waves-effect"><i class={`material-icons`}>build</i>Construction</a></li>
  <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
  <li><a href="#!" class="subheader">ISTRAV.COM</a></li>
  <li class={active === 'hosting' ? 'active' : null}><a href="https://istrav.com/production" on:click={() => {active = 'hosting'}} class="waves-effect"><i class={`material-icons`}>grade</i>Production</a></li>
  <li class={active === 'hosting' ? 'active' : null}><a href="https://istrav.com/solutions" on:click={() => {active = 'hosting'}} class="waves-effect"><i class={`material-icons`}>check</i>Solutions</a></li>
  <li class={active === 'hosting' ? 'active' : null}><a href="https://istrav.com/apps" on:click={() => {active = 'hosting'}} class="waves-effect"><i class={`material-icons`}>extension</i>Apps</a></li>
  <li class={active === 'hosting' ? 'active' : null}><a href="https://istrav.com/platforms" on:click={() => {active = 'hosting'}} class="waves-effect"><i class={`material-icons`}>folder</i>Platforms</a></li>
  <li class={active === 'hosting' ? 'active' : null}><a href="https://istrav.com/projects" on:click={() => {active = 'hosting'}} class="waves-effect"><i class={`material-icons`}>code</i>Projects</a></li>
  <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
  <li>
    <a href="https://github.com/trabur" target="_blank">
      <div style="font-size: 1em;color: #888; text-align: right; padding: 0 1em;">GitHub</div>
    </a>
  </li>
  <li>
    <a href="https://www.npmjs.com/~travis.burandt" target="_blank">
      <div style="font-size: 1em;color: #888; text-align: right; padding: 0 1em;">NPM</div>
    </a>
  </li>
  
  <br />
  <br />
  <br />
</ul>

<style>
  #slide-out {
    background: #333;
  }

  .sidenav li.active {
    background: #222;
  }

  .sidenav li > a {
    padding-right: 0;
    color: #ccc;
  }

  .sidenav li > a > i {
    color: #ccc;
  }
</style>