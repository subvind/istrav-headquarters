
<script>
  let units = [1,1,1,1,1,1,1,1,1]

  function toggleMachine () {
    // pick random unit
    let index = Math.floor(Math.random() * units.length)
    let unit = units[index];
    // turn off machine
    setTimeout(() => {units[index] = 0}, 0)
    setTimeout(() => {units[index] = 1}, 500)
    setTimeout(() => {units[index] = 0}, 1000)
    setTimeout(() => {units[index] = 1}, 1500)
    setTimeout(() => {units[index] = 0}, 2000)
    setTimeout(() => {units[index] = 1}, 2500)
    setTimeout(() => {units[index] = 0}, 3000)
    setTimeout(() => {units[index] = 1}, 3500)
    setTimeout(() => {units[index] = 0}, 4000)
    setTimeout(() => {units[index] = 1}, 4500)
  }
  toggleMachine()
  setInterval(toggleMachine, 7500)
</script>

  <div class="frame">
    <div class="top"></div>
    <div class="box">
      <div class="rack">
        {#each units as unit}
          <div class="unit">
            <div class="raid"></div>
            <div class="raid"></div>
            <div class="raid"></div>
            <div class="raid"></div>
            <div class="power" style={`background-color: ${unit === 1 ? 'green' : 'yellow'};`}></div>
          </div>
        {/each}
      </div>
      <div class="right"></div>
    </div>
    <div class="oval"></div>
  </div>

<style>
  .frame {
    width: 250px;
    margin: 0 auto;
    position: relative;
    overflow: visible;
  }
  .box {
    position: absolute;
    z-index: 5;
    display: flex;
    width: 100%;
    overflow: visible;
    /* min-width: 400px; */
  }

  .right {
    flex: 0.3;
    -webkit-transform: skewy(-6deg);
    transform: skewy(-35deg);
    background-color: #555;
    height: 470px;
    margin-left: 0;
    border-bottom: 1em solid #333;
    margin-top: -0.0em;
  }

  .rack {
    flex: 1;
    -webkit-transform: skewy(12deg);
    transform: skewy(12deg);
    background-color: #444;
    padding: 0.5em 0;
    height: 470px;
    border-bottom: 1em solid #333;
  }

  .rack .unit {
    background: #333;
    padding: 0.5em;
    margin: 1em;
    border: 1px solid #444
  }

  .rack .unit .power {
    width: 1em;
    height: 1em;
    border-radius: 5em;
  }

  .rack .unit .raid {
    background-color: #222;
    width: 0.5em;
    height: 1em;
    margin: 0 0.2em;
    float: right;
  }

  .top {
    background-color: #222;
    -webkit-transform: skewy(12deg) skewx(-67deg);
    transform: skewy(12deg) skewx(-47.5deg);
    width: 194px;
    height: 55px;
    margin: 0 auto 0 auto;
    margin-bottom: -0.5em;
  }

  .oval {
    width: 160%;
    height: 100px;
    margin-left: calc(-30%);
    background: #eee;
    border-radius: 50%;
    position: absolute;
    margin-top: 30em;
    z-index: 2;
  }
</style>