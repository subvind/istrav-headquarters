<script>
  import { onMount } from 'svelte';

  export let title
  let tokenCode

	import { sidebarVisibility } from '../../stores.js';
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

  onMount(() => {
    tokenCode = localStorage.getItem('token')

  })
</script>

<nav class="yellow lighten-3">
  <div class="nav-wrapper">
    <a href="#!" class="brand-logo">
      <a href="#!" on:click={() => toggleSidebar()} class="menu"><i class="material-icons">menu</i></a>
      itPanel / {title}
    </a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      {#if tokenCode}
        <li><a href="/">Web solutions and custom software.</a></li>
      {:else}
        <li><a href="/welcome/login">Login</a></li>
        <li><a href="/welcome/register">Register</a></li>
      {/if}
    </ul>
  </div>
</nav>

<style>
  nav {
    padding: 0 1em;
  }

  #nav-mobile a {
    color: black;
  }

  .brand-logo {
    color: black;
  }
  
  @media screen and (min-width: 0px) and  (max-width: 980px) {
    .menu {
      display: initial;
    }
  }

  @media screen and (min-width: 981px) and  (max-width: 10000px) {
    .menu {
      display: none;
    }
  }
</style>