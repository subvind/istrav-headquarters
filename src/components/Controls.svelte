<script>
  let open = ''
</script>

<div style="position: relative; float: right;">
  <div on:mouseleave={() =>{open = ''}} on:mouseover={() => {open = 'domains'}}>
    <a href="/design-patterns/behavioral" class="btn btn-large red lighten-2" style="text-transform: none; margin: 0.2em;">Behavioral</a>
    {#if open === 'domains'}
      <div class="card" style="position: absolute; z-index: 100; top: 3.6em; right: 0.5em; padding: 1em; min-width: 275px; text-align: left;">
        <a href="/domains/register" style="margin-bottom: 1em; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>label</i></button>
          <div style="font-weight: bold;">Chain of Responsibility</div>
          <div>Claim your perfect name.</div>
        </a>
        <br />
        <a href="/domains/transfer" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>send</i></button>
          <div style="font-weight: bold;">Command</div>
          <div>Bring your name over to our game.</div>
        </a>
        <br />
        <a href="/domains/transfer" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>send</i></button>
          <div style="font-weight: bold;">Iterator</div>
          <div>Bring your name over to our game.</div>
        </a>
        <br />
        <a href="/domains/transfer" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>send</i></button>
          <div style="font-weight: bold;">Mediator</div>
          <div>Bring your name over to our game.</div>
        </a>
        <br />
        <a href="/domains/transfer" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>send</i></button>
          <div style="font-weight: bold;">Memento</div>
          <div>Bring your name over to our game.</div>
        </a>
        <br />
        <a href="/domains/transfer" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>send</i></button>
          <div style="font-weight: bold;">Observer</div>
          <div>Bring your name over to our game.</div>
        </a>
        <br />
        <a href="/domains/transfer" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>send</i></button>
          <div style="font-weight: bold;">State</div>
          <div>Bring your name over to our game.</div>
        </a>
        <br />
        <a href="/domains/transfer" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>send</i></button>
          <div style="font-weight: bold;">Strategy</div>
          <div>Bring your name over to our game.</div>
        </a>
        <br />
        <a href="/domains/transfer" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>send</i></button>
          <div style="font-weight: bold;">Template Method</div>
          <div>Bring your name over to our game.</div>
        </a>
        <br />
        <a href="/domains/transfer" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>send</i></button>
          <div style="font-weight: bold;">Visitor</div>
          <div>Bring your name over to our game.</div>
        </a>
      </div>
    {/if}
  </div>
</div>
<div style="position: relative; float: right;">
  <div on:mouseleave={() =>{open = ''}} on:mouseover={() => {open = 'pro-hosting'}}>
    <a href="/design-patterns/structural" class="btn btn-large red lighten-2" style="text-transform: none; margin: 0.2em;">Structural</a>
    {#if open === 'pro-hosting'}
      <div class="card" style="position: absolute; z-index: 100; top: 3.6em; right: 0.5em; padding: 1em; min-width: 275px; text-align: left;">
        <a href="/pro-hosting/volume-blocks" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>save</i></button>
          <div style="font-weight: bold;">Adapter</div>
          <div>Hard disk drives and solid state drives.</div>
        </a>
        <br />
        <a href="/pro-hosting/machines" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>flash_on</i></button>
          <div style="font-weight: bold;">Bridge</div>
          <div>Shared and dedicated compute on bare metal.</div>
        </a>
        <br />
        <a href="/pro-hosting/firewall" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>whatshot</i></button>
          <div style="font-weight: bold;">Composite</div>
          <div>Limit machine access within a network.</div>
        </a>
        <br />
        <a href="/pro-hosting/domain-name-system" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>domain</i></button>
          <div style="font-weight: bold;">Decorator</div>
          <div>Match domain names to IP addresses.</div>
        </a>
        <br />
        <a href="/pro-hosting/load-balancers" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>dvr</i></button>
          <div style="font-weight: bold;">Facade</div>
          <div>Direct traffic from IPs to servers.</div>
        </a>
        <br />
        <a href="/pro-hosting/kubernetes" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>grid_on</i></button>
          <div style="font-weight: bold;">Flyweight</div>
          <div>A cluster of machines serving containers.</div>
        </a>
        <br />
        <a href="/pro-hosting/storage" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>storage</i></button>
          <div style="font-weight: bold;">Proxy</div>
          <div>Mounted volumes for k8s containers.</div>
        </a>
      </div>
    {/if}
  </div>
</div>
<div style="position: relative; float: right;">
  <div on:mouseleave={() =>{open = ''}} on:mouseover={() => {open = 'hosting'}}>
    <a href="/design-patterns/creational" class="btn btn-large red lighten-2" style="text-transform: none; margin: 0.2em;">Creational</a>
    {#if open === 'hosting'}
      <div class="card" style="position: absolute; z-index: 100; top: 3.6em; right: 0.5em; padding: 1em; min-width: 275px; text-align: left;">
        <a href="/hosting/app" style="margin-bottom: 1em; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>cloud</i></button>
          <div style="font-weight: bold;">Factory Method</div>
          <div>Websites that require a backend.</div>
        </a>
        <br />
        <a href="/hosting/static" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>layers</i></button>
          <div style="font-weight: bold;">Abstract Factory</div>
          <div>Websites that are backend free.</div>
        </a>
        <br />
        <a href="/hosting/email" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>mail</i></button>
          <div style="font-weight: bold;">Builder</div>
          <div>Send and recieve for me@mywebsite.com.</div>
        </a>
        <br />
        <a href="/hosting/email" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>mail</i></button>
          <div style="font-weight: bold;">Prototype</div>
          <div>Send and recieve for me@mywebsite.com.</div>
        </a>
        <br />
        <a href="/hosting/email" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>mail</i></button>
          <div style="font-weight: bold;">Singleton</div>
          <div>Send and recieve for me@mywebsite.com.</div>
        </a>
      </div>
    {/if}
  </div>
</div>