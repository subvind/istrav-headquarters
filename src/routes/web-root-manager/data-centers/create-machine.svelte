<script context="module">
  export async function load(ctx) {
    // console.log('ctx.page', ctx.page)
    return { props: { 
      dataCenterLocationId: ctx.page.query.get('dataCenterLocationId')
    }}
  }
</script>

<script>
  import { onMount } from "svelte";

  import Footer from "../../../components/Footer.svelte"
  import Header from "../../../components/Headers/WRMHeader.svelte"
  import MachineLocation from "../../../components/DropdownSelect/MachineLocation.svelte";

  import axios from 'axios'

  import { backend, sidebarActive, sidebarMode } from '../../../stores.js';
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('data-centers')
  sidebarMode.set('web-root-manager')

  let name = ''
  export let dataCenterLocationId

  onMount(() => {
    window['M'].updateTextFields();
  })

  function submit () {
    if (name === '') return alert('Name must be defined.')
    if (dataCenterLocationId === '') return alert('Location must be defined.')

    axios.post(`${api}/dataCenterMachines`, {
      name,
      dataCenterLocationId
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

<Header title="Machines" />

<br class="hide-on-med-and-down" />
<br class="hide-on-med-and-down" />
<br />
<div class="row">
  <div class="col s1"></div>
  <div class="col s10">
    <a href="#!" on:click={() => window.history.back()} class="btn red lighten-2">← BACK</a>
    <div class="card">
      <div class="card-content">
        <div class="card-title">Create Machine</div>
        <div class="row">
          <div class="input-field col s6">
            <input placeholder="mainputer" id="name" type="text" bind:value={name}>
            <label for="name">Name</label>
          </div>
          <div class="input-field col s6">
            <p>Keep this name with the machine; such as: use a labeler or piece of tape for perminant reference.</p>
          </div>
        </div>
        <div class="row">
          <div class="col s6">
            <MachineLocation bind:value={dataCenterLocationId} />
          </div>
          <div class="input-field col s6">
            <p>All machine names must be unique within their given location.</p>
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
