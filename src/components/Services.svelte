<script>
  import { onMount } from "svelte";

  onMount(() => {
    const pattern = window['trianglify']({
      width: window.innerWidth,
      height: 500,
      xColors: ['#E57373', '#E57373'],
      yColors: ['#111', '#E57373']
    })
    document.getElementById('tri').appendChild(pattern.toCanvas())
  })
</script>

<div id="services">
  <div id="tri"></div>
  <div class="container">
    <div id="clouds">
      <div class="cloud top"></div>
      <div class="cloud left"></div>
      <div class="cloud right"></div>
    </div>
  </div>

  <div class="float">
    <h1 style="text-align: center; margin-top: -1.5em; position: absolute; text-align: center; width: 100%;">Workers</h1>
    <h4 style="text-align: center; margin-top: -0.5em; position: absolute; text-align: center; width: 100%;">Cloud compute in over <br />250 edge locations.</h4>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div style="position: absolute; text-algin: center; width: 100%;">
      <div class="container">
        <div class="row">
          <div class="col s12 m4">
            <p>Client Area:</p>
            <p>itPanel gives your team the ability to coordinate and manage support inquiries. Keep ticket, from open to closed, resolve times low by quickly connecting the right people.</p>
            <div style="text-align: center;">
              <a href="/client-area/dashboard" class="btn white btn-large btn-floating"><i class="material-icons" style="color: #111;">person_pin</i></a>
            </div>
          </div>
          <div class="col s12 m4">
            <p>Knowledge Base:</p>
            <p>Neatly organize public documents with in a searchable repository. Then, put that knowledge right where it is most helpful. Which is any page with in itPanel placed at the top.</p>
            <div style="text-align: center;">
              <a href="/knowledge-base" class="btn white btn-large btn-floating"><i class="material-icons" style="color: #111;">archive</i></a>
            </div>
          </div>
          <div class="col s12 m4">
            <p>Support Desk:</p>
            <p>We have gone out of our way to seperate tenant (data center admin), account (machine admin), and owner (website admin) each into their own panels.</p>
            <div style="text-align: center;">
              <a href="/support-desk/dashboard" class="btn white btn-large btn-floating"><i class="material-icons" style="color: #111;">help</i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br class="hide-on-med-and-up" />
  <br class="hide-on-med-and-up" />
  <br class="hide-on-med-and-up" />
  <br class="hide-on-med-and-up" />
  <br class="hide-on-med-and-up" />
  <br class="hide-on-med-and-up" />
  <br class="hide-on-med-and-up" />
  <br class="hide-on-med-and-up" />
  <br class="hide-on-med-and-up" />
  <br class="hide-on-med-and-up" />
  <br class="hide-on-med-and-up" />
  <br class="hide-on-med-and-up" />
  <br class="hide-on-med-and-up" />
  <br class="hide-on-med-and-up" />
  <br class="hide-on-med-and-up" />
  <br class="hide-on-med-and-up" />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
</div>
<div class="container" style="margin-top: -7em; height: 100px;">
  <div id="clouds" style="">
    <div class="cloud end-left"></div>
    <div class="cloud end-right"></div>
    <div class="cloud end-top"></div>
  </div>
</div>

<style>
  #services {
    overflow: visible;
    padding-bottom: 200px;
    background-color: #E57373;
  }

  .container {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
  }

  #tri {
    text-align: center;
    margin-bottom: -500px;
  }

  :global(#tri canvas) {
    width: 100%;
  }

  .float {
    position: relative;
  }

  #clouds {
    position: relative;
    height: 300px;
  }

  .cloud { 
    width: 350px;
    height: 120px;
    background:#fff;
    box-shadow: 10px 10px rgba(0,0,0,0.2);
    border-radius: 100px;
  }

  .cloud.top {
    margin: -18em auto 0 auto;
  }

  .cloud.left {
    margin-top: 0em;
    margin-left: -5em;
  }

  .cloud.right {
    margin-top: 5em;
    margin-right: -5em;
  }

  .cloud.end-top {
    position: absolute;
    left: calc(50% - 200px);
    background: #fff;
    box-shadow: none;
  }

  .cloud.end-left {
    margin-top: 3em;
    float: left;
    background: #fff;
    box-shadow: none;
  }

  .cloud.end-right {
    margin-top: 3em;
    float: right;
    background: #fff;
    box-shadow: none;
  }
  
  .cloud:after, .cloud:before{
    content: "";
    position: relative;
    display: inline-block;
    background: inherit;
    border-radius: inherit;
  }

  .cloud::after {
    width: 100px;
    height: 100px;
    top: -120px;
    left: -120px;
  }

  .cloud::before{
    width: 180px;
    height: 180px;
    top: -70px;
    left: 130px;
  }
</style>