
<script>
  export let title = '/platform/'
  export let back = false
  export let color = 'red lighten-2'

  let navigation = [
    {
      name: 'Forum',
      icon: 'comment',
      url: 'https://forum.istrav.com'
    },
    {
      name: 'Media',
      icon: 'play_arrow',
      url: 'https://media.istrav.com'
    },
    {
      name: 'Blog',
      icon: 'content_paste',
      url: 'https://blog.istrav.com'
    },
    {
      name: 'Shop',
      icon: 'local_offer',
      url: 'https://shop.istrav.com'
    },
    {
      name: 'About',
      icon: 'import_contacts',
      url: '/about'
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
        <h1 class="title">{title}:</h1>
        <div class="description">We provide prebuilt UIs for each idea:</div>
        <br />
        <br />
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
                <h3 style="margin: 0;">{value.name}</h3>
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
    color: #fff;
  }

  .description {
    font-size: 2em;
    color: #fff;
  }
</style>