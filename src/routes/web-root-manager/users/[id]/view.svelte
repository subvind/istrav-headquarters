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
  import UserTenants from "../../../../components/Tables/UserTenants.svelte";

  import axios from 'axios'
  import Time from "svelte-time";

  import { backend, sidebarActive, sidebarMode } from '../../../../stores.js';

  export let id
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('users')
  sidebarMode.set('web-root-manager')

  let data
  let password = ''
  let tenantCount = 0

  onMount(() => {
    var tabElem = document.querySelectorAll('.tabs');
    var instance = window['M'].Tabs.init(tabElem, {});

    axios.get(`${api}/users/${id}`)
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
    if (password !== '') {
      data.password = password
    } 

    axios.put(`${api}/users/`, data)
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
    let input = prompt(`Type "${data.username}:${data.email}" to confirm deletion.`);
    if (input !== `${data.username}:${data.email}`) return alert('Unable to confirm deletion.')

    axios.delete(`${api}/users/${data.id}`)
      .then(function (response) {
        console.log(response)
        window.location.href = `/web-root-manager/users`
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
    <a href="#!" class="btn right grey" on:click={() => remove()}><i class="material-icons">delete</i></a>
    {#if data}
      <div class="card">
        <div class="card-content">
          <div class="card-title">User: </div>
          <div class="row">
            <div class="col s6">
              <table>
                <tbody>
                  <tr>
                    <td>id:</td>
                    <td>{data.id}</td>
                  </tr>
                  <tr>
                    <td>reference:</td>
                    <td>{data.username}:{data.email}</td>
                  </tr>
                  <tr>
                    <td>updatedAt:</td>
                    <td><Time relative timestamp={data.updatedAt} /></td>
                  </tr>
                  <tr>
                    <td>createdAt:</td>
                    <td><Time relative timestamp={data.createdAt} /></td>
                  </tr>
                  <tr>
                    <td>version:</td>
                    <td>{data.version}</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <a class="waves-effect waves-light btn modal-trigger" style="width: 100%;" href={`/switch/user/${data.id}`}>login as {data.username}</a>
            </div>
          </div>
          <br />
          <br />
          <div class="card-title">Configure:</div>
          <div class="row">
            <div class="input-field col s6">
              <input placeholder="istrav" id="username" type="text" bind:value={data.username}>
              <label for="username">Username</label>
            </div>
            <div class="input-field col s6">
              <input placeholder="travis.buradt@gmail.com" id="email" type="text" bind:value={data.email}>
              <label for="email">Email</label>
            </div>
          </div>
          <div class="row" style="min-height: 100px;">
            <div class="input-field col s6">
              <label>
                <input type="checkbox" bind:checked={data.subscribe}  />
                <span style="color: #666;">Subscribe to our mailing list.</span>
              </label>
            </div>
            <div class="input-field col s6">
              <label>
                <input type="checkbox" bind:checked={data.agreement} />
                <span style="color: #666;">Accept our terms & conditions and privacy policy.</span>
              </label>
            </div>
          </div>
          <br />
          <br />
          <div class="card-title">Reset Password:</div>
          <div class="row">
            <div class="input-field col s6">
              <input placeholder="planck" id="password" type="text" bind:value={password}>
              <label for="password">New Password</label>
            </div>
            <div class="input-field col s6">
              <p>Leave this empty if you do not intend to change the password.</p>
            </div>
          </div>
          <br />
          <br />
          <div class="card-title">Root:</div>
          <div class="row">
            <div class="input-field col s6">
              <label>
                <input type="checkbox" bind:checked={data.isRoot}  />
                <span style="color: #666;">Grant full access!</span>
              </label>
            </div>
            <div class="input-field col s6">
              <p>WARNING! Danger: if enabled said user will have unrestricted privileges.</p>
            </div>
          </div>
        </div>
        <div class="card-action">
          <a href="#!" on:click={() => update()}>UPDATE RECORD</a>
        </div>
      </div>
    {/if}
    <br />
    <br />
    <br />
    <div class="relations">
      <ul class="tabs">
        <li class="tab col s3"><a class="active" href="#test1">Tenants ({tenantCount})</a></li>
      </ul>
      <div id="test1">
        <!-- <div class="card"> -->
          {#if data}
            <UserTenants id={data.id} bind:count={tenantCount} />
          {/if}
        <!-- </div> -->
      </div>
    </div>
    <br />
    <br />
    <br />
  </div>
  <div class="col s1"></div>
</div>

<Footer />

<style>
  .card-content .row {
    margin-bottom: 0;
  }

  .relations .tabs {
    background-color: transparent;
  }

  /* .relations .card {
    margin-top: 0;
  } */

  table {
    border: 1px solid #eee;
  }

  table tr > td:first-child {
    font-weight: bold;
    text-align: right;
  }
</style>
