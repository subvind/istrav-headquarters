<script>
  let open = ''
</script>

<div style="position: relative; float: right;">
  <div on:mouseleave={() =>{open = ''}} on:mouseover={() => {open = 'design'}} on:focus>
    <a href="/design" class="btn btn-large red lighten-2" style="text-transform: none; margin: 0.2em;">Design</a>
    {#if open === 'design'}
      <div class="card" style="position: absolute; z-index: 100; top: 3.6em; right: 0.5em; padding: 1em; min-width: 275px; text-align: left;">
        <a href="/design/creational" style="margin-bottom: 1em; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>grade</i></button>
          <div style="font-weight: bold;">Creational</div>
          <div>Claim your perfect name.</div>
        </a>
        <br />
        <br />
        <a href="/design/structural" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>check</i></button>
          <div style="font-weight: bold;">Structural</div>
          <div>Bring your name over to our game.</div>
        </a>
        <br />
        <a href="/design/behavioral" style="margin-bottom: 0; width: 100%; color: #111;">
          <button class="btn btn-large red lighten-2" style="float: left; margin-right: 0.5em;"><i class={`material-icons`}>extension</i></button>
          <div style="font-weight: bold;">Behavioral</div>
          <div>Bring your name over to our game.</div>
        </a>
        <br />
      </div>
    {/if}
  </div>
</div>
<div style="position: relative; float: right;">
  <div on:mouseleave={() =>{open = ''}} on:mouseover={() => {open = 'architecture'}} on:focus>
    <a href="/design-patterns/structural" class="btn btn-large red lighten-2" style="text-transform: none; margin: 0.2em;">Architecture</a>
    {#if open === 'architecture'}
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
      </div>
    {/if}
  </div>
</div>
<div style="position: relative; float: right;">
  <div on:mouseleave={() =>{open = ''}} on:mouseover={() => {open = 'infrastructure'}} on:focus>
    <a href="/design-patterns/creational" class="btn btn-large red lighten-2" style="text-transform: none; margin: 0.2em;">Infrastructure</a>
    {#if open === 'infrastructure'}
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
      </div>
    {/if}
  </div>
</div>
<div style="position: relative; float: right;">
  <div on:mouseleave={() =>{open = ''}} on:mouseover={() => {open = 'engineering'}} on:focus>
    <a href="/design-patterns/creational" class="btn btn-large red lighten-2" style="text-transform: none; margin: 0.2em;">Engineering</a>
    {#if open === 'engineering'}
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
      </div>
    {/if}
  </div>
</div>
<div style="position: relative; float: right;">
  <div on:mouseleave={() =>{open = ''}} on:mouseover={() => {open = 'construction'}} on:focus>
    <a href="/design-patterns/creational" class="btn btn-large red lighten-2" style="text-transform: none; margin: 0.2em;">Construction</a>
    {#if open === 'construction'}
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
      </div>
    {/if}
  </div>
</div>