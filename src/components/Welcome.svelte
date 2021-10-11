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
      <h1 class="slogan">Extra Web<br />Hosting</h1>
      <p style="max-width: 400px; font-size: 1.2em;">Solutions & Services that scale in the cloud with Data Control and Data Integrity in mind; accessible through our home grown itPanel, RAID1 storage, snapshots + automatic daily backups for VMs with Proxmox, redundant NAS servers for disaster recovery with OMV, send data offsite with Duplicati, easy file management with FileRun, database interaction over GraphQL API and UI with Directus, complete analytics with Grafana, deploy code with GitLab, free SSL certificates, and a free domain name for commiting to 1 year of your time with isTrav.</p>
      <p style="font-size: 1.2em;">Yeah, that's how we roll.</p>
      <br />
      <div>
        <a href="/hosting/static" class="btn btn-large red lighten-2" style="float: left; margin-right: 1em; text-transform: none;">Get Started Now</a>
        <div style="">
          <p style="font-size: 1.2em;  font-weight: bold; margin: 0;">Starting at only</p>
          <p style="font-size: 2em; margin: 0;">$2.50/mo*</p>
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