
<script>
  import Header from "../components/Headers/InformationTechnologyHeader.svelte"
  import InformationTechnology from "../components/Paint/InformationTechnology.svelte"
  import Footer from "../components/Footer.svelte"

  import { backend, sidebarActive, sidebarMode } from '../stores.js';
  import Administer from '../components/Navigation/Administer.svelte';
  import Community from '../components/Navigation/Community.svelte';
  import SupportDesk from '../components/Navigation/SupportDesk.svelte';
  import ClientArea from '../components/Navigation/ClientArea.svelte';
  import KnowledgeBase from '../components/Navigation/KnowledgeBase.svelte';
  
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('it-panel')
  sidebarMode.set('main')

  let homepage = [
    {
      name: 'isTrav',
      icon: 'globe',
      url: 'https://istrav.com'
    },
  ]


</script>

<Header title="itPanel" />

<InformationTechnology />
<br class="hide-on-med-and-down" />
<br class="hide-on-med-and-down" />
<br class="hide-on-med-and-down" />
<br />
<br />
<br />
<br />
<br />

<div class="row" style="margin: 0 0 -3em;">
  <div class="col s10 m1" style="margin: 0;"></div>
  <div class="col s10 m10" style="margin: 0;">
    <div class="container">
      <a href="/" class="btn red lighten-2">← ISTRAV</a>
    </div>
  </div>
  <div class="col s10 m1" style="margin: 0;"></div>
</div>

<Administer />

<Community />

<ClientArea />

<KnowledgeBase />

<SupportDesk />

<Footer />


<style>
  .container {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
  }
</style>