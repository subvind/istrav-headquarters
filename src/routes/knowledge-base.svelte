
<script>
  import { onMount } from 'svelte';

  import Header from "../components/Headers/KnowledgeBaseHeader.svelte"
  import Services from "../components/Services.svelte"
  import Footer from "../components/Footer.svelte"
  import KnowledgeBase from "../components/Paint/KnowledgeBase.svelte"
  import Navigation from "../components/Navigation/KnowledgeBase.svelte"

  // import axios from 'axios'

  import { backend, sidebarActive, sidebarMode } from '../stores.js';
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('knowledge-base')
  sidebarMode.set('main')
</script>

<Header title="Knowledge Base" />

<KnowledgeBase />

<Navigation title={null} back={true} />

<Services />

<img src="/graphics/clouds.png" alt="" style="position: relative; min-width: 100%; min-height: 80px; min-width: 1500px; background: #fff; margin-top: -100px;" />

<Footer />
