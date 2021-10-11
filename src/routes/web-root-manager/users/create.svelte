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

  import axios from 'axios'

  import { backend, sidebarActive, sidebarMode } from '../../../stores.js';
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('users')
  sidebarMode.set('web-root-manager')

  let username = ''
  let password = ''
  let email = ''
  let subscribe

  onMount(() => {
    window['M'].updateTextFields();
  })

  function submit () {
    if (username === '') return alert('Username must be defined.')
    if (email === '') return alert('Email must be defined.')
    if (password === '') return alert('Password must be defined.')

    axios.post(`${api}/users`, {
      username,
      email,
      password,
      subscribe
    })
      .then(function (response) {
        console.log(response)
        if (response.data) {
          window.location.href = '/web-root-manager/users'
        } else {
          alert('unable to create')
        }
      })
  }

</script>

<Header title="Users" />

<br class="hide-on-med-and-down" />
<br class="hide-on-med-and-down" />
<br />
<div class="row">
  <div class="col s1"></div>
  <div class="col s10">
    <a href="#!" on:click={() => window.history.back()} class="btn red lighten-2">← BACK</a>
    <div class="card">
      <div class="card-content">
        <div class="card-title">Create User</div>
        <div class="row">
          <div class="input-field col s6">
            <input placeholder="istrav" id="username" type="text" bind:value={username}>
            <label for="username">Username</label>
          </div>
          <div class="input-field col s6">
            <input placeholder="travis.burandt@gmail.com" id="email" type="email" bind:value={email}>
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input placeholder="planck" id="username" type="text" bind:value={password}>
            <label for="username">Password</label>
          </div>
          <div class="input-field col s6">
            <!-- <label>
              <input type="checkbox" bind:checked={subscribe}  />
              <span style="color: #666;">Subscribe to our mailing list.</span>
            </label> -->
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
