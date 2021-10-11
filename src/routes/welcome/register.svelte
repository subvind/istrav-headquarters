
<script>
  import { onMount } from 'svelte';

  import Header from "../../components/Headers/AuthHeader.svelte"

  import axios from 'axios'
  
  import { backend, sidebarActive, sidebarMode } from '../../stores.js';
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('register')
  sidebarMode.set('main')

	let email = ''
  let password = ''
  let passwordRepeat = ''
  let username = ''
  let subscribe = true
  let agreement = false

  async function login(username, password) {
    axios.post(`${api}/users/auth`, {
      username,
      password
    })
      .then(function (response) {
        console.log(response)
        if (response.data) {
          localStorage.setItem('token', response.data)
          window.location.href = '/'
        } else {
          alert('unable to fetch auth token')
        }
      })
  }

	async function auth() {
    if (email === '') return alert('Email must be defined.')
    if (username === '') return alert('Username must be defined.')
    if (password === '') return alert('Password must be defined.')
    if (agreement === false) return alert('Agreement must be accepted.')

    axios.post(`${api}/users`, {
      email,
      username,
      password,
      subscribe,
      agreement
    })
      .then(function (response) {
        console.log(response)
        if (response.data.agreement) {
          login(username, password)
        } else {
          alert('invalid user')
        }
      })
  }

</script>

<Header title="Register" />

<div class="row">
  <div class="col s12 m4"></div>
  <div class="col s12 m4">
    <br class="hide-on-med-and-down" />
    <br class="hide-on-med-and-down" />
    <br />
    <h3 class="title">REGISTER</h3>
    <div class="card" style="padding: 1em;">
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="text" class="validate" bind:value={email}>
          <label for="email">Email</label>
        </div>
        <div class="input-field col s12">
          <input id="username" type="text" class="validate" bind:value={username}>
          <label for="username">Username</label>
        </div>
        <div class="input-field col s12">
          <input id="password" type="password" class="validate" bind:value={password}>
          <label for="password">Password</label>
        </div>
        <div class="input-field col s12">
          <input id="passwordRepeat" type="password" class="validate" bind:value={passwordRepeat}>
          <label for="passwordRepeat">Password Confirm</label>
        </div>
        <div class="input-field col s12">
          <p>
            <label>
              <input type="checkbox" bind:checked={subscribe}  />
              <span style="color: #666;">Subscribe to our mailing list.</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" bind:checked={agreement} />
              <span style="color: #666;">Accept our terms & conditions and privacy policy.</span>
            </label>
          </p>
        </div>
        <br />
        <button style="margin-left: 1em;" type='submit' class="waves-effect btn" on:click={() => auth()}>Submit</button>
      </div>
    </div>
    <div style="text-align: right;">
      <a href="/welcome/login" class="waves-effect red lighten-2 btn">LOGIN</a>
    </div>
    <br class="hide-on-med-and-down" />
    <br class="hide-on-med-and-down" />
    <br />
  </div>
  <div class="col s12 m4"></div>
</div>
