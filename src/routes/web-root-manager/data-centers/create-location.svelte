<script>
  import { onMount } from "svelte";

  import Footer from "../../../components/Footer.svelte"
  import Header from "../../../components/Headers/WRMHeader.svelte"

  import axios from 'axios'

  import { backend, sidebarActive, sidebarMode } from '../../../stores.js';
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('data-centers')
  sidebarMode.set('web-root-manager')

  let region = ''
  let zone = ''

  onMount(() => {
    window['M'].updateTextFields();
  })

  function submit () {
    if (region === '') return alert('Region must be defined.')
    if (zone === '') return alert('Zone must be defined.')

    axios.post(`${api}/dataCenterLocations`, {
      region,
      zone
    })
      .then(function (response) {
        console.log(response)
        if (response.data) {
          window.location.href = '/web-root-manager/data-centers'
        } else {
          alert('unable to create')
        }
      })
  }

</script>

<Header title="Locations" />

<br class="hide-on-med-and-down" />
<br class="hide-on-med-and-down" />
<br />
<div class="row">
  <div class="col s1"></div>
  <div class="col s10">
    <a href="#!" on:click={() => window.history.back()} class="btn red lighten-2">← BACK</a>
    <div class="card">
      <div class="card-content">
        <div class="card-title">Create Location</div>
        <div class="row">
          <div class="input-field col s6">
            <input placeholder="usa-tx-austin" id="region" type="text" bind:value={region}>
            <label for="region">Region</label>
          </div>
          <div class="input-field col s6">
            <p>Internally we create a primary key between region and zone in order to enforce uniqueness. You could label regions by country-state-city or use a different naming scheme.</p>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input placeholder="A1" id="zone" type="text" bind:value={zone}>
            <label for="zone">Zone</label>
          </div>
          <div class="input-field col s6">
            <p>These are areas contained within a region. A zone such as "A1" could mean building "A" room number "1" for instance. </p>
          </div>
        </div>
      </div>
      <div class="card-action">
        <a href="#!" on:click={() => submit()}>SUBMIT RECORD</a>
      </div>
    </div>
  </div>
  <div class="col s1"></div>
</div>

<Footer />

<style>
  .card-content .row {
    margin-bottom: 0;
  }
</style>
