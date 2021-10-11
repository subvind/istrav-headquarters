<script>
  import Community from './Navigation/Community.svelte'
  import Background from './Backgrounds/Triangles.svelte'


</script>

<div class="container">
  <img class="evolution" src="/graphics/evolution.png" width="50%" alt="">
</div>
<Background>
  <Community color='red lighten-2' />
</Background>

<style>
  .container {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }

  .evolution {
    width: 50%;
    margin-bottom: -0.5em;;
  }
</style>