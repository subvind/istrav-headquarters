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
  sidebarActive.set('source-code')
  sidebarMode.set('web-root-manager')

  let url = ''
  let username = ''

  onMount(() => {
    window['M'].updateTextFields();
  })

  function submit () {
    if (url === '') return alert('Username must be defined.')
    if (username === '') return alert('Password must be defined.')

    axios.post(`${api}/gitLabUsers`, {
      url,
      username
    })
      .then(function (response) {
        console.log(response)
        if (response.data) {
          window.location.href = '/web-root-manager/source-code'
        } else {
          alert('unable to create')
        }
      })
  }

</script>

<Header title="Source Code" />

<br class="hide-on-med-and-down" />
<br class="hide-on-med-and-down" />
<br />
<div class="row">
  <div class="col s1"></div>
  <div class="col s10">
    <a href="#!" on:click={() => window.history.back()} class="btn red lighten-2">← BACK</a>
    <div class="card">
      <div class="card-content">
        <div class="card-title">Create Coder</div>
        <div class="row">
          <div class="input-field col s6">
            <input placeholder="https://source-code.istrav.com" id="url" type="text" bind:value={url}>
            <label for="url">URL</label>
          </div>
          <div class="col s6">
            <p>This should be the internet address to where you have GitLab installed. Fill in "https://gitlab.com" if you are using the cloud.</p>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input placeholder="istrav" id="username" type="text" bind:value={username}>
            <label for="username">Username</label>
          </div>
          <div class="col s6">
            <p>This should be the account username that you have registred to the above GitLab installation.</p>
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
