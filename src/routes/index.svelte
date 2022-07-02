<script>
  import { onMount } from "svelte";
  
  import Footer from "../components/Footer.svelte"
  import Header from "../components/Header.svelte"
  import Welcome from "../components/Welcome.svelte"
  import Hosting from "../components/Hosting.svelte"
  import ProHosting from "../components/ProHosting.svelte"
  import Domains from "../components/Domains.svelte"
  import MainPaint from "../components/Paint/Main.svelte"
  import PoweredBy from "../components/PoweredBy.svelte"
  import Community from '../components/Community.svelte'
  // import PlatformGoals from "../components/PlatformGoals.svelte"
  import API from "../components/API.svelte"
  import Services from "../components/Services.svelte"
  import About from "../components/About.svelte"
  import LicenseKeys from "../components/LicenseKeys.svelte"
  import GetStartedNow from "../components/GetStartedNow.svelte";

  import { parseJwt } from '../parseJwt'

  import { sidebarActive, sidebarMode } from '../stores.js'
  sidebarActive.set('index')
  sidebarMode.set('main')

  let token

  onMount(() => {
    let tokenCode = localStorage.getItem('token')
    if (tokenCode) {
      token = parseJwt(tokenCode)
      console.log('token', token)
    }
  })
</script>

<svelte:head>
  <title>System Headquarters - isTrav</title>
  <meta name="description" content="isTrav offers very fast hosting for your website. So fast our control panels have melted!">
  <meta name="keywords" content="web site, web hosting, vps, reseller, shared, dedicated, hosting, servers, colocation, domain names">
</svelte:head>

<Header />
<Welcome />
<div style="margin-bottom: -1.5em; margin-top: -150px;">
  <Hosting />
</div>
<ProHosting />
<MainPaint />
<PoweredBy />
<br />
<br />
<br />

<!-- <PlatformGoals /> -->

<Community />

<API />

<Services />

<LicenseKeys />

<br />
<br />
<br />
<br />
<br />
<br />
<br />

<GetStartedNow />
<br />
<br />
<br />
<br />

<Footer />
<About token={token} />
<Domains />

<!-- vector images source -->
<div style="display: none;"><a href="https://www.vecteezy.com/free-vector/web">Web Vectors by Vecteezy</a></div>

<style>
</style>