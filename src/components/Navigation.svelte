<script>
  import { onMount } from "svelte";

  import axios from 'axios'
  import { parseJwt } from '../parseJwt'
  import { backend } from '../stores.js'
  import Logo from './Logo.svelte'

  let token
  let api
  backend.subscribe(value => {
		api = value
	})

  let instances
  let version
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
    let tokenCode = localStorage.getItem('token')
    if (tokenCode) {
      token = parseJwt(tokenCode)
      console.log('token', token)
    }

    var elems = document.querySelectorAll('.sidenav');
    instances = window['M'].Sidenav.init(elems, {
      isOpen: true,
      isFixed: true
    });
    if (isOpen) {
      instances[0].open()
    }

    axios.get(`${api}`)
      .then(function (response) {
        console.log(response)
        version = response.data
      })
  })
</script>

<ul id="slide-out" class="sidenav sidenav-fixed" style="width: 250px;">
  <h5 style="text-align: center;"><a href="https://istrav.com" style="color: #ccc;"><Logo color="#eee" /></a></h5>
  <p></p>
  <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
  <!-- {#if mode === 'main'}
  {/if} -->
  <li><a href="#!" class="subheader">ISTRAV.COM</a></li>
  <li class={active === 'hosting' ? 'active' : null}><a href="https://istrav.com/production" on:click={() => {active = 'hosting'}} class="waves-effect"><i class={`material-icons`}>grade</i>Production</a></li>
  <li class={active === 'hosting' ? 'active' : null}><a href="https://istrav.com/solutions" on:click={() => {active = 'hosting'}} class="waves-effect"><i class={`material-icons`}>check</i>Solutions</a></li>
  <li class={active === 'hosting' ? 'active' : null}><a href="https://istrav.com/apps" on:click={() => {active = 'hosting'}} class="waves-effect"><i class={`material-icons`}>extension</i>Apps</a></li>
  <li class={active === 'hosting' ? 'active' : null}><a href="https://istrav.com/platforms" on:click={() => {active = 'hosting'}} class="waves-effect"><i class={`material-icons`}>folder</i>Platforms</a></li>
  <li class={active === 'hosting' ? 'active' : null}><a href="https://istrav.com/projects" on:click={() => {active = 'hosting'}} class="waves-effect"><i class={`material-icons`}>code</i>Projects</a></li>
  <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
  <li><a href="#!" class="subheader">DESIGN PATTERNS</a></li>
  <li class={active === 'hosting' ? 'active' : null}><a href="/design-patterns/creational" on:click={() => {active = 'hosting'}} class="waves-effect"><i class={`material-icons`}>grade</i>Creational</a></li>
  <li class={active === 'hosting' ? 'active' : null}><a href="/design-patterns/structural" on:click={() => {active = 'hosting'}} class="waves-effect"><i class={`material-icons`}>check</i>Structural</a></li>
  <li class={active === 'hosting' ? 'active' : null}><a href="/design-patterns/behavioral" on:click={() => {active = 'hosting'}} class="waves-effect"><i class={`material-icons`}>extension</i>Behavioral</a></li>
  <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
  {#if !token}
    <li><a href="#!" class="subheader">CLIENT AREA</a></li>
    <li class={active === 'login' ? 'active' : null}><a href="https://istrav.com/client-area/verify" class="waves-effect"><i class={`material-icons`}>exit_to_app</i>Login</a></li>
    <li class={active === 'register' ? 'active' : null}><a href="https://istrav.com/client-area/join" class="waves-effect"><i class={`material-icons`}>person_add</i>Register</a></li>
    <li class={active === 'forgot-password' ? 'active' : null}><a href="https://istrav.com/client-area/forgot-password" class="waves-effect"><i class={`material-icons`}>lock_open</i>Forgot Password</a></li>
    <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
  {/if}
  <li>
    <a href="https://github.com/trabur/istrav-headquarters">
      <div style="font-size: 1em;color: #888; text-align: right; padding: 0 1em;">{version || 'v0.0.0'}</div>
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

  .sidenav li > a {
    padding-right: 0;
    color: #ccc;
  }

  .sidenav li > a > i {
    color: #ccc;
  }
</style>