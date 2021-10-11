<script>
  export let token
</script>

<div class="banner">
  <div class="map"></div>
  <br class="hide-on-med-and-down" />
  <br class="hide-on-med-and-down" />
  <br />
  <div class="content">
    <h1 style="text-align: center; margin: 0;">About:</h1>
    <h4 class="header">(Travis Burandt)</h4>
    {#if token && token.username}
      <div class="description">Hello {token.username} :)<br /> Thank you for using isTrav! If there is ever something important that needs to be said then it will be announced here. Account specific announcments will go to your notifications list and email address inbox. <br /> <br /> kind regards,<br />Travis Burandt</div>
    {:else}
      <div class="description">Hello World :)<br />My name is Travis Burandt and I like to build things. I am focused on technology that accelerates innovation and apps that enable communities to be florishing ecosystems. I started learning PHP in highschool. Java in college. 15+ years later I now have a stong background in JavaScript frontend development and a good understanding of the backend node.js programming language including TypeScript. Being a proficent Linux administrator, not afraid to use the command line, knowledgable about the cloud, just about anything networking, and lastly a coding veteran with dialed in skills is what I humbaly believe makes me a dedicated Full Stack Developer. Stick around! Read the blog. Participate in the forums. There are great things ahead.</div>
    {/if}
    <br />
    <br />
    <div style="text-align: center;">
      <a href="/about" class="btn teal btn-large btn-floating"><i class="material-icons" style="color: #fff;">import_contacts</i></a>
    </div>
    <!-- <div class="phone">
      Call 24/7/365 at (866) TRA-BURA<br />
      burandt@istrav.com
    </div> -->
  </div>
  <br class="hide-on-med-and-down" />
  <br class="hide-on-med-and-down" />
  <br />
</div>

<style>
  .banner {
    color: #ccc;
    background: #333;
    text-align: center;
    overflow: hidden;
    position: relative;
    padding: 2em 0;
    border-top: 1em solid #333;
    border-bottom: 1em solid #333;
  }

  .banner .map {
    background-image: url('/graphics/map.jpg');
    opacity: 0.1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-position: center;
    background-size: cover;
    margin: -8em;
    z-index: 0;
  }

  .banner .content {
    z-index: 1;
    position: relative;
  }

  /* .banner .slogan {
    font-size: 2.5em;
    z-index: 1;
  } */

  .banner .description {
    /* font-size: 1em; */
    max-width: 600px;
    margin: 0 auto;
    border: 1px solid #eee;
    padding: 1em;
    text-align: left;
    border-radius: 1em;
  }
/* 
  .banner .phone {
    margin-top: 1em;
  } */

  .banner .header {
    margin: 0 0 1em;
    text-align: center;
  }
</style>