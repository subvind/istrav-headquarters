
<script>
  export let title = 'Web Root Manager'
  export let back = false
  export let color = 'red lighten-2'

  let navigation = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      url: '/app-store/dashboard'
    },
    {
      name: 'chatwoot',
      icon: 'extension',
      url: '/app-store/chatwoot'
    },
    {
      name: 'directus',
      icon: 'extension',
      url: '/app-store/directus'
    },
    {
      name: 'DUPLICATI',
      icon: 'extension',
      url: '/app-store/duplicati'
    },
    {
      name: 'FileRun',
      icon: 'extension',
      url: '/app-store/filerun'
    },
    {
      name: 'GitLab',
      icon: 'extension',
      url: '/app-store/gitlab'
    },
    {
      name: 'saleor',
      icon: 'extension',
      url: '/app-store/saleor'
    },
    {
      name: 'nodebb',
      icon: 'extension',
      url: '/app-store/nodebb'
    },
    {
      name: 'ghost',
      icon: 'extension',
      url: '/app-store/ghost'
    },
    {
      name: 'MINIO',
      icon: 'extension',
      url: '/app-store/minio'
    },
    {
      name: 'NGINX',
      icon: 'extension',
      url: '/app-store/nginx'
    },
    {
      name: 'LBRY',
      icon: 'extension',
      url: '/app-store/lbry'
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