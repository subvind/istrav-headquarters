
<script>
  export let title = 'Knowledge Base'
  export let back = false
  export let color = 'red lighten-2'

  let navigation = [
    {
      name: 'Web Host Manager',
      icon: 'archive',
      url: '/knowledge-base/web-host-manager'
    },
    {
      name: 'Web Root Manager',
      icon: 'archive',
      url: '/knowledge-base/web-root-manager'
    },
    {
      name: 'App Store',
      icon: 'archive',
      url: '/knowledge-base/app-store'
    },
    {
      name: 'API',
      icon: 'archive',
      url: '/knowledge-base/api'
    },
    {
      name: 'Client Area',
      icon: 'archive',
      url: '/knowledge-base/client-area'
    },
    {
      name: 'Knowledge Base',
      icon: 'archive',
      url: '/knowledge-base/knowledge-base'
    },
    {
      name: 'Support Desk',
      icon: 'archive',
      url: '/knowledge-base/support-desk'
    },
  ]

</script>

<br class="hide-on-med-and-down" />
<br class="hide-on-med-and-down" />
<br />
<div class="row">
  <div class="col s12 m1"></div>
  <div class="col s12 m10">
    <div class="container">
      {#if title}
        <h4>{title}:</h4>
      {/if}
      {#if back}
        <a href="/it-panel" class="btn red lighten-2">← MAIN</a>
        <br />
        <br />
      {/if}
      <div class="row">
        {#each navigation as value}
          <div class="col s12 m6">
            <div class="card" style="margin-bottom: 2em;">
              <div class="card-image">
                <a href={value.url} class={`btn-floating halfway-fab waves-effect waves-light ${color}`}><i class="material-icons">{value.icon}</i></a>
              </div>
              <div class="card-content">
                <h3 class="title">{value.name}</h3>
                <p>{value.name}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
  <div class="col s12 m1"></div>
</div>
<br class="hide-on-med-and-down" />
<br class="hide-on-med-and-down" />
<br />

<style>
  .container {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
  }

  .title {
    margin: 0 0 0.2em;
    color: #333;
    font-size: 2em;
  }
</style>