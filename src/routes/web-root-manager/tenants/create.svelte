<script context="module">
  export async function load(ctx) {
    // console.log('ctx.page', ctx.page)
    return { props: { 
      ownerId: ctx.page.query.get('ownerId')
    }}
  }
</script>

<script>
  import { onMount } from "svelte";

  import Footer from "../../../components/Footer.svelte"
  import Header from "../../../components/Headers/WRMHeader.svelte"
  import TenantUsers from "../../../components/DropdownSelect/TenantUsers.svelte";

  import axios from 'axios'

  import { backend, sidebarActive, sidebarMode } from '../../../stores.js';
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('tenants')
  sidebarMode.set('web-root-manager')

  let name = ''
  export let ownerId

  onMount(() => {
    window['M'].updateTextFields();
  })

  function submit () {
    if (name === '') return alert('Name must be defined.')
    if (ownerId === '') return alert('Owner must be defined.')

    axios.post(`${api}/tenants`, {
      name,
      ownerId
    })
      .then(function (response) {
        console.log(response)
        if (response.data) {
          window.location.href = '/web-root-manager/tenants'
        } else {
          alert('unable to create')
        }
      })
  }

</script>

<Header title="Tenants" />

<br class="hide-on-med-and-down" />
<br class="hide-on-med-and-down" />
<br />
<div class="row">
  <div class="col s1"></div>
  <div class="col s10">
    <a href="#!" on:click={() => window.history.back()} class="btn red lighten-2">← BACK</a>
    <div class="card">
      <div class="card-content">
        <div class="card-title">Create Tenant</div>
        <div class="row">
          <div class="input-field col s6">
            <input placeholder="MyHost" id="name" type="text" bind:value={name}>
            <label for="name">Name</label>
          </div>
          <div class="input-field col s6">
            <p>Enter a name that will display for the tenant.</p>
          </div>
        </div>
        <div class="row">
          <div class="col s6">
            <TenantUsers bind:value={ownerId} />
          </div>
          <div class="input-field col s6">
            <p>This user will be assigned as the owner.</p>
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
