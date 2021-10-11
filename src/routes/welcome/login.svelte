
<script>
  import { onMount } from 'svelte';

  import Header from "../../components/Headers/AuthHeader.svelte"

  import axios from 'axios'

  import { backend, sidebarActive, sidebarMode } from '../../stores.js';
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('login')
  sidebarMode.set('main')

	let username = '';
  let password = '';

  async function login() {
    if (username === '') return alert('Username must be defined.')
    if (password === '') return alert('Password must be defined.')

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
</script>

<Header title="Login" />

<div class="row">
  <div class="col s12 m4"></div>
  <div class="col s12 m4">
    <br class="hide-on-med-and-down" />
    <br class="hide-on-med-and-down" />
    <br />
    <h3 class="title">LOGIN</h3>
    <div class="card" style="padding: 1em;">
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="text" class="validate" bind:value={username}>
          <label for="email">Username</label>
        </div>
        <div class="input-field col s12">
          <input id="password" type="password" class="validate" bind:value={password}>
          <label for="password">Password</label>
        </div>
        <br />
        <button style="margin-left: 1em;" type='submit' class="waves-effect btn" on:click={() => login()}>Submit</button>
      </div>
    </div>
    <div style="text-align: right;">
      <a href="/welcome/register" class="waves-effect red lighten-2 btn">REGISTER</a>
    </div>
    <br class="hide-on-med-and-down" />
    <br class="hide-on-med-and-down" />
    <br />
  </div>
  <div class="col s12 m4"></div>
</div>
