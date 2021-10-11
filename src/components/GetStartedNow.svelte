
<div class="container">
  <a href="/hosting/static">
    <div class="get-started-now">
      <h1 style="text-align: center; margin-top: 0;">Get Started Now:</h1>
      <h4 style="text-align: center; margin-top: -0.5em;">(Starting at only $2.50/mo*)</h4>
    </div>
  </a>
</div>

<style>
  .container {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
  }

  .get-started-now {
    /* background: #E57373; */
    max-width: 80%;
    padding: 1em;
    margin: 0 auto;
    position: relative;
    color: #fff;
  }
  
  .get-started-now:before {
    background-color: #E57373;
    transform: skewy(1deg); /* angle you want */
    transform-origin: bottom left;
    content: ' ';
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
  }

  .get-started-now:after {
    background-color: #E57373;
    transform: skewy(-1deg); /* angle you want */
    transform-origin: bottom left;
    border-bottom: 30px solid #E57373; /* bottom border skews with the object */
    content: ' ';
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
    bottom: 0;
  }
</style>