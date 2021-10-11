
<script>
import { onMount } from "svelte";

  import Footer from "../components/Footer.svelte"

  import { backend, sidebarActive, sidebarMode } from '../stores.js';
  
  let src = 'https://petstore.swagger.io/?_ga=2.142924732.887945374.1632408798-1513003382.1632408798#/'
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('api')
  sidebarMode.set('main')
</script>

<div class="grid">
  <br />
  <br />
  <div class="container">
    <h1 style="text-align: center; margin: 0;">Backend:</h1>
    <h4 class="header">(https://api.istrav.com)</h4>
    <iframe title="Swagger - isTrav" src={src} id="target"></iframe>
    <br />
    <br />
    <br />
    <div style="text-align: center;">
      <a href="/api" class="btn teal fluid">VIEW SWAGGER</a>
    </div>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
</div>

<Footer />


<style>
  #target {
    width: 100%;
    min-height: 80vh;
    border: none;
  }
  
  .container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }

  .grid {
    min-height: 100vh;
    background-size: 50px 50px;
    background-image: linear-gradient(0deg,transparent 24%,hsla(0,0%,100%,.05) 25%,hsla(0,0%,100%,.05) 26%,transparent 27%,transparent 74%,hsla(0,0%,100%,.05) 75%,hsla(0,0%,100%,.05) 76%,transparent 77%,transparent),linear-gradient(90deg,transparent 24%,hsla(0,0%,100%,.05) 25%,hsla(0,0%,100%,.05) 26%,transparent 27%,transparent 74%,hsla(0,0%,100%,.05) 75%,hsla(0,0%,100%,.05) 76%,transparent 77%,transparent);
    background-color: #111!important;
    color: #eee;
    /* border-top: 1em solid #333;
    border-bottom: 1em solid #333; */
    margin-bottom: -200px;
  }

  .grid .header {
    margin: 0 0 1em;
    text-align: center;
  }
</style>