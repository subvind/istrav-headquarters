<script>
  export let token
</script>

<div class="banner">
  <div class="map"></div>
  <br class="hide-on-med-and-down" />
  <br class="hide-on-med-and-down" />
  <br />
  <div class="content">
    <h1 style="text-align: center; margin: 0;">Hello World!</h1>
    <h4 class="header"></h4>
    <div class="description">What is your Mission Statement?<br />A mission statement is a short statement of why an organization exists, what its overall goal is, identifying the goal of its operations: what kind of product or service it provides, its primary customers or market, and its geographical region of operation.<br /><br />What is your Target Market?<br />A target market is a group of customers within a business's serviceable available market at which a business aims its marketing efforts and resources. A target market is a subset of the total market for a product or service. </div>
    <br />
    <br />
    <div style="text-align: center;">
      <a href="https://istrav.com/production" class="btn teal btn-large">production</a>
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