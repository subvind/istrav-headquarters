
<script>
  export let title = 'Web Root Manager'
  export let back = false
  export let color = 'red lighten-2'

  let navigation = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      url: '/web-root-manager/dashboard'
    },
    {
      name: 'Users',
      icon: 'person',
      url: '/web-root-manager/users'
    },
    {
      name: 'Tenants',
      icon: 'settings_remote',
      url: '/web-root-manager/tenants'
    },
    {
      name: 'Team Members',
      icon: 'recent_actors',
      url: '/web-root-manager/team-members'
    },
    {
      name: 'Data Centers',
      icon: 'map',
      url: '/web-root-manager/data-centers'
    },
    {
      name: 'Connections',
      icon: 'lock',
      url: '/web-root-manager/connections'
    },
    {
      name: 'Routers',
      icon: 'router',
      url: '/web-root-manager/routers'
    },
    {
      name: 'Proxy Load Balancers',
      icon: 'settings_input_composite',
      url: '/web-root-manager/proxy-load-balancers'
    },
    {
      name: 'NAS Servers',
      icon: 'settings_input_hdmi',
      url: '/web-root-manager/nas-servers'
    },
    {
      name: 'VM Servers',
      icon: 'settings_system_daydream',
      url: '/web-root-manager/vm-servers'
    },
    {
      name: 'Providers',
      icon: 'card_membership',
      url: '/web-root-manager/providers'
    },
    {
      name: 'Solutions & Services',
      icon: 'assessment',
      url: '/web-root-manager/solutions-and-services'
    },
    {
      name: 'License Keys',
      icon: 'key',
      url: '/web-root-manager/license-keys'
    },
    {
      name: 'Record Keeping',
      icon: 'work',
      url: '/web-root-manager/record-keeping'
    },
    {
      name: 'Knowledge Base',
      icon: 'archive',
      url: '/web-root-manager/knowledge-base'
    },
    {
      name: 'Affiliates',
      icon: 'thumb_up',
      url: '/web-root-manager/affiliates'
    },
    {
      name: 'Referrals',
      icon: 'record_voice_over',
      url: '/web-root-manager/referrals'
    },
    {
      name: 'Discounts',
      icon: 'trending_down',
      url: '/web-root-manager/discounts'
    },
    {
      name: 'Settings',
      icon: 'settings',
      url: '/web-root-manager/settings'
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