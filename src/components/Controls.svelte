<script>
  let open = ''
</script>

<div style="position: relative; float: right;">
  <div on:mouseleave={() =>{open = ''}} on:mouseover={() => {open = 'domains'}}>
    <button class="btn btn-large red lighten-2" style="text-transform: none; margin: 0.2em;">Domains</button>
    {#if open === 'domains'}
      <div class="card" style="position: absolute; z-index: 100; top: 3.6em; right: 0.5em; padding: 1em; min-width: 275px; text-align: left;">
        <a href="/domains/register" style="margin-bottom: 1em; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>label</i></button>
          <div style="font-weight: bold;">Register Domains</div>
          <div>Claim your perfect name.</div>
          <br />
        </a>
        <br />
        <a href="/domains/transfer" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>send</i></button>
          <div style="font-weight: bold;">Transfer Domains</div>
          <div>Bring your name over to our game.</div>
        </a>
      </div>
    {/if}
  </div>
</div>
<div style="position: relative; float: right;">
  <div on:mouseleave={() =>{open = ''}} on:mouseover={() => {open = 'pro-hosting'}}>
    <button class="btn btn-large red lighten-2" style="text-transform: none; margin: 0.2em;">PRO Hosting</button>
    {#if open === 'pro-hosting'}
      <div class="card" style="position: absolute; z-index: 100; top: 3.6em; right: 0.5em; padding: 1em; min-width: 275px; text-align: left;">
        <a href="/pro-hosting/volume-blocks" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>save</i></button>
          <div style="font-weight: bold;">Volume Blocks</div>
          <div>Hard disk drives and solid state drives.</div>
        </a>
        <br />
        <a href="/pro-hosting/machines" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>flash_on</i></button>
          <div style="font-weight: bold;">Machines</div>
          <div>Shared and dedicated compute on bare metal.</div>
        </a>
        <br />
        <a href="/pro-hosting/firewall" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>whatshot</i></button>
          <div style="font-weight: bold;">Firewall</div>
          <div>Limit machine access within a network.</div>
        </a>
        <br />
        <a href="/pro-hosting/domain-name-system" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>domain</i></button>
          <div style="font-weight: bold;">Domain Name System</div>
          <div>Match domain names to IP addresses.</div>
        </a>
        <br />
        <a href="/pro-hosting/load-balancers" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>dvr</i></button>
          <div style="font-weight: bold;">Load Balancers</div>
          <div>Direct traffic from IPs to servers.</div>
        </a>
        <br />
        <a href="/pro-hosting/kubernetes" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>grid_on</i></button>
          <div style="font-weight: bold;">Kubernetes</div>
          <div>A cluster of machines serving containers.</div>
        </a>
        <br />
        <a href="/pro-hosting/storage" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>storage</i></button>
          <div style="font-weight: bold;">Storage</div>
          <div>Mounted volumes for k8s containers.</div>
        </a>
        <br />
        <a href="/pro-hosting/databases" style="margin-bottom: 1em; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>receipt</i></button>
          <div style="font-weight: bold;">Databases</div>
          <div>Access information located in storage.</div>
        </a>
        <br />
        <a href="/pro-hosting/deployments" style="margin-bottom: 1em; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>cloud</i></button>
          <div style="font-weight: bold;">Deployments</div>
          <div>Website backend auto scaling across multiple machines.</div>
        </a>
      </div>
    {/if}
  </div>
</div>
<div style="position: relative; float: right;">
  <div on:mouseleave={() =>{open = ''}} on:mouseover={() => {open = 'hosting'}}>
    <button class="btn btn-large red lighten-2" style="text-transform: none; margin: 0.2em;">Hosting</button>
    {#if open === 'hosting'}
      <div class="card" style="position: absolute; z-index: 100; top: 3.6em; right: 0.5em; padding: 1em; min-width: 275px; text-align: left;">
        <a href="/hosting/app" style="margin-bottom: 1em; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>cloud</i></button>
          <div style="font-weight: bold;">App Hosting</div>
          <div>Websites that require a backend.</div>
        </a>
        <br />
        <a href="/hosting/static" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>layers</i></button>
          <div style="font-weight: bold;">Static Hosting</div>
          <div>Websites that are backend free.</div>
        </a>
        <br />
        <a href="/hosting/email" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>mail</i></button>
          <div style="font-weight: bold;">Email Hosting</div>
          <div>Send and recieve for me@mywebsite.com.</div>
        </a>
      </div>
    {/if}
  </div>
</div>