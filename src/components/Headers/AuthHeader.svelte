<script>
  export let title

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
</script>

<nav>
  <div class="nav-wrapper">
    <a href="#!" class="brand-logo">
      <a href="#!" on:click={() => toggleSidebar()} class="menu"><i class="material-icons">menu</i></a>
      Auth / {title}
    </a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><a href="/welcome/terms-and-conditions">Terms & Conditions</a></li>
      <li><a href="/welcome/privacy-policy">Privacy Policy</a></li>
    </ul>
  </div>
</nav>

<style>
  nav {
    padding: 0 1em;
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