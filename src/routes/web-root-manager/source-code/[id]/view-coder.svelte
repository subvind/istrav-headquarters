<script context="module">
  export async function load(ctx) {
    let id = ctx.page.params.id
    return { props: { id }}
  }
</script>

<script>
  import { onMount } from "svelte";

  import Footer from "../../../../components/Footer.svelte"
  import Header from "../../../../components/Headers/WRMHeader.svelte"

  import axios from 'axios'

  import { backend, sidebarActive, sidebarMode } from '../../../../stores.js';

  export let id
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('source-code')
  sidebarMode.set('web-root-manager')

  let data

  onMount(() => {
    axios.get(`${api}/gitLabUsers/${id}`)
      .then(function (response) {
        console.log(response)
        if (response.data) {
          data = response.data
          setTimeout(() => {
            window['M'].updateTextFields();
          })
        } else {
          alert('unable to fetch')
        }
      })
  })

  function update () {
    if (data.url === '') return alert('URL must be defined.')
    if (data.username === '') return alert('username must be defined.')

    axios.put(`${api}/gitLabUsers/`, data)
      .then(function (response) {
        console.log(response)
        if (response.data) {
          window['M'].toast({html: `Successfully updated record.`})
        } else {
          alert('unable to update')
        }
      })
  }

  function remove() {
    let input = prompt(`Type "${data.username}" to confirm deletion.`);
    if (input !== data.username) return alert('Unable to confirm deletion.')

    axios.delete(`${api}/gitLabUsers/${data.id}`)
      .then(function (response) {
        console.log(response)
        window.location.href = `/web-root-manager/source-code`
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
    <a href="#!" class="btn right grey" on:click={() => remove()}><i class="material-icons">delete</i></a>
    {#if data}
      <div class="card">
        <div class="card-content">
          <div class="card-title">Coder / {data.username}</div>
          <p>id: {data.id}</p>
          <br />
          <br />
          
          <div class="row">
            <div class="input-field col s6">
              <input placeholder="https://source-code.istrav.com" id="url" type="text" bind:value={data.url}>
              <label for="url">URL</label>
            </div>
            <div class="col s6">
              <p>This should be the internet address to where you have GitLab installed. Fill in "https://gitlab.com" if you are using the cloud.</p>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input placeholder="istrav" id="username" type="text" bind:value={data.username}>
              <label for="username">Username</label>
            </div>
            <div class="col s6">
              <p>This should be the account username that you have registred to the above GitLab installation.</p>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <textarea class="materialize-textarea" id="personalAccessToken" type="text" bind:value={data.personalAccessToken}></textarea>
              <label for="personalAccessToken">Personal Access Token</label>
            </div>
            <div class="col s6">
              <p>This should be a secret created within the user settings of the above GitLab installation.</p>
            </div>
          </div>
        </div>
        <div class="card-action">
          <a href="#!" on:click={() => update()}>UPDATE RECORD</a>
        </div>
      </div>
    {/if}
  </div>
  <div class="col s1"></div>
</div>

<Footer />

<style>
  .card-content .row {
    margin-bottom: 0;
  }
</style>
