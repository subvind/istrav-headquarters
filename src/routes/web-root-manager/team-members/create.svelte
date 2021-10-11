<script context="module">
  export async function load(ctx) {
    // console.log('ctx.page', ctx.page)
    return { props: { 
      dataCenterLocationId: ctx.page.query.get('dataCenterLocationId'),
      dataCenterMachineId: ctx.page.query.get('dataCenterMachineId')
    }}
  }
</script>

<script>
  import { onMount } from "svelte";

  import Footer from "../../../components/Footer.svelte"
  import Header from "../../../components/Headers/WRMHeader.svelte"
  import TeamMemberUsers from "../../../components/DropdownSelect/TeamMemberUsers.svelte";

  import axios from 'axios'

  import { backend, sidebarActive, sidebarMode } from '../../../stores.js';
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('team-members')
  sidebarMode.set('web-root-manager')

  let firstName = ''
  let lastName = ''
  let title = ''
  let userId

  onMount(() => {
    window['M'].updateTextFields();
  })

  function submit () {
    if (firstName === '') return alert('First Name must be defined.')
    if (lastName === '') return alert('Last Name must be defined.')
    if (title === '') return alert('Title must be defined.')
    if (userId === '') return alert('Owner must be defined.')

    axios.post(`${api}/teamMembers`, {
      firstName,
      lastName,
      title,
      userId
    })
      .then(function (response) {
        console.log(response)
        if (response.data) {
          window.location.href = '/web-root-manager/team-members'
        } else {
          alert('unable to create')
        }
      })
  }

</script>

<Header title="Team Members" />

<br class="hide-on-med-and-down" />
<br class="hide-on-med-and-down" />
<br />
<div class="row">
  <div class="col s1"></div>
  <div class="col s10">
    <a href="#!" on:click={() => window.history.back()} class="btn red lighten-2">← BACK</a>
    <div class="card">
      <div class="card-content">
        <div class="card-title">Create Team Members</div>
        <div class="row">
          <div class="input-field col s6">
            <input placeholder="Travis" id="firstName" type="text" bind:value={firstName}>
            <label for="firstName">First Name</label>
          </div>
          <div class="input-field col s6">
            <input placeholder="Burandt" id="firstName" type="text" bind:value={lastName}>
            <label for="firstName">Last Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input placeholder="Supervisor" id="title" type="text" bind:value={title}>
            <label for="title">Title</label>
          </div>
          <div class="input-field col s6">
            <p>Enter a job title that this user will fill.</p>
          </div>
        </div>
        <div class="row">
          <div class="col s6">
            <TeamMemberUsers bind:value={userId} />
          </div>
          <div class="input-field col s6">
            <p>This team member will be able to login and access WRM from this user.</p>
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
