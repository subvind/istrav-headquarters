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
  import TeamMemberUsers from "../../../../components/DropdownSelect/TeamMemberUsers.svelte";
  import PanelUser from "../../../../components/Panels/User.svelte";

  import axios from 'axios'
  import Time from "svelte-time";

  import { backend, sidebarActive, sidebarMode } from '../../../../stores.js';

  export let id
  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarActive.set('team-members')
  sidebarMode.set('web-root-manager')

  let data

  onMount(() => {
    var tabElem = document.querySelectorAll('.tabs');
    var instance = window['M'].Tabs.init(tabElem, {});

    axios.get(`${api}/teamMembers/${id}`)
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
    if (data.name === '') return alert('Name must be defined.')

    axios.put(`${api}/teamMembers/`, data)
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
    let input = prompt(`Type "${data.firstName} ${data.lastName}" to confirm deletion.`);
    if (input !== `${data.firstName} ${data.lastName}`) return alert('Unable to confirm deletion.')

    axios.delete(`${api}/teamMembers/${data.id}`)
      .then(function (response) {
        console.log(response)
        window.location.href = `/web-root-manager/team-members`
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
    <a href="#!" class="btn right grey" on:click={() => remove()}><i class="material-icons">delete</i></a>
    {#if data}
      <div class="card">
        <div class="card-content">
          <div class="card-title">Team Member: </div>
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
                    <td>{data.firstName} {data.lastName}</td>
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
            </div>
          </div>
          <br />
          <br />
          <div class="card-title">Configure:</div>
          <div class="row">
            <div class="input-field col s6">
              <input placeholder="Travis" id="firstName" type="text" bind:value={data.firstName}>
              <label for="firstName">First Name</label>
            </div>
            <div class="input-field col s6">
              <input placeholder="Burandt" id="firstName" type="text" bind:value={data.lastName}>
              <label for="firstName">Last Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input placeholder="Supervisor" id="title" type="text" bind:value={data.title}>
              <label for="title">Title</label>
            </div>
            <div class="input-field col s6">
              <p>Enter a job title that this user will fill.</p>
            </div>
          </div>
          <div class="row">
            <div class="col s6">
              <TeamMemberUsers bind:value={data.userId} />
            </div>
            <div class="input-field col s6">
              <p>This team member will be able to login and access WRM from this user.</p>
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
        <li class="tab col s3"><a class="active" href="#test1">User</a></li>
      </ul>
      <div id="test1">
        <div class="card">
          {#if data}
            <PanelUser id={data.userId} />
          {/if}
        </div>
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

  .relations .card {
    margin-top: 0;
  }

  .relations .tabs {
    background-color: transparent;
  }

  .relations .card {
    margin-top: 0;
  }
  
  table {
    border: 1px solid #eee;
  }

  table tr > td:first-child {
    font-weight: bold;
    text-align: right;
  }
</style>
