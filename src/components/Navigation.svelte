<script>
  import { onMount } from "svelte";

  import axios from 'axios'
  import { parseJwt } from '../parseJwt'
  import { backend } from '../stores.js'
  import Logo from './Logo.svelte'

  let token
  let api
  backend.subscribe(value => {
		api = value
	})

  let instances
  let version
  export let active
  export let mode
  export let isOpen
  $: { reMount(isOpen) }
  function reMount (value) {
    console.log('remount', value)
    if (instances) {
      if (value) {
        instances[0].open()
      } else {
        instances[0].close()
      }
    }
  }

  onMount(() => {
    let tokenCode = localStorage.getItem('token')
    if (tokenCode) {
      token = parseJwt(tokenCode)
      console.log('token', token)
    }

    var elems = document.querySelectorAll('.sidenav');
    instances = window['M'].Sidenav.init(elems, {
      isOpen: true,
      isFixed: true
    });
    if (isOpen) {
      instances[0].open()
    }

    axios.get(`${api}`)
      .then(function (response) {
        console.log(response)
        version = response.data
      })
  })
</script>

<ul id="slide-out" class="sidenav sidenav-fixed" style="width: 250px;">
  <h5 style="text-align: center;"><a href="/" style="color: #ccc;"><Logo color="#eee" /></a></h5>
  <p></p>
  <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
  {#if mode === 'main'}
    <li><a href="#!" class="subheader">MAIN</a></li>
    <li class={active === 'hosting' ? 'active' : null}><a href="#!" on:click={() => {active = 'hosting'}} class="waves-effect"><i class={`material-icons`}>language</i>Hosting</a></li>
    {#if active === 'hosting' || active === 'app' || active === 'static' || active === 'email'}
      <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
      <li class={active === 'app' ? 'active' : null}><a href="/hosting/app" class="waves-effect"><i class={`material-icons`}>cloud</i>App</a></li>
      <li class={active === 'static' ? 'active' : null}><a href="/hosting/static" class="waves-effect"><i class={`material-icons`}>layers</i>Static</a></li>
      <li class={active === 'email' ? 'active' : null}><a href="/hosting/email" class="waves-effect"><i class={`material-icons`}>mail</i>Email</a></li>
      <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
    {/if}
    <li class={active === 'pro-hosting' ? 'active' : null}><a href="#!" on:click={() => {active = 'pro-hosting'}} class="waves-effect"><i class={`material-icons`}>star</i>PRO Hosting</a></li>
    {#if active === 'pro-hosting' || active === 'volume-blocks' || active === 'machines' || active === 'firewall' || active === 'domain-name-system' || active === 'load-balancers' || active === 'kubernetes' || active === 'storage' || active === 'databases' || active === 'deployments'}
      <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
      <li class={active === 'volume-blocks' ? 'active' : null}><a href="/pro-hosting/volume-blocks" class="waves-effect"><i class={`material-icons`}>save</i>Volume Blocks</a></li>
      <li class={active === 'machines' ? 'active' : null}><a href="/pro-hosting/machines" class="waves-effect"><i class={`material-icons`}>flash_on</i>Machines</a></li>
      <li class={active === 'firewall' ? 'active' : null}><a href="/pro-hosting/firewall" class="waves-effect"><i class={`material-icons`}>whatshot</i>Firewall</a></li>
      <li class={active === 'domain-name-system' ? 'active' : null}><a href="/pro-hosting/domain-name-system" class="waves-effect"><i class={`material-icons`}>domain</i>Domain Name System</a></li>
      <li class={active === 'load-balancers' ? 'active' : null}><a href="/pro-hosting/load-balancers" class="waves-effect"><i class={`material-icons`}>dvr</i>Load Balancers</a></li>
      <li class={active === 'kubernetes' ? 'active' : null}><a href="/pro-hosting/kubernetes" class="waves-effect"><i class={`material-icons`}>grid_on</i>Kubernetes</a></li>
      <li class={active === 'storage' ? 'active' : null}><a href="/pro-hosting/storage" class="waves-effect"><i class={`material-icons`}>storage</i>Storage</a></li>
      <li class={active === 'databases' ? 'active' : null}><a href="/pro-hosting/databases" class="waves-effect"><i class={`material-icons`}>receipt</i>Databases</a></li>
      <li class={active === 'deployments' ? 'active' : null}><a href="/pro-hosting/deployments" class="waves-effect"><i class={`material-icons`}>cloud</i>Deployments</a></li>
      <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
    {/if}
    <li class={active === 'domains' ? 'active' : null}><a href="#!" on:click={() => {active = 'domains'}} class="waves-effect"><i class={`material-icons`}>http</i>Domains</a></li>
    {#if active === 'domains' || active === 'register-domain' || active === 'transfer-domain'}
      <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
      <li class={active === 'register-domain' ? 'active' : null}><a href="/domains/register" class="waves-effect"><i class={`material-icons`}>label</i>Register</a></li>
      <li class={active === 'transfer-domain' ? 'active' : null}><a href="/domains/transfer" class="waves-effect"><i class={`material-icons`}>send</i>Transfer</a></li>
      <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
    {/if}
    <li class={active === 'it-panel' ? 'active' : null}><a href="/it-panel" on:click={() => {active = 'it-panel'}} class="waves-effect"><i class={`material-icons`}>dashboard</i>itPanel</a></li>
    {#if active === 'it-panel'}
      <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
      <li class={active === 'web-host-manager' ? 'active' : null}><a href="/web-host-manager/dashboard" class="waves-effect"><i class={`material-icons`}>arrow_forward</i>Web Host Manager</a></li>
      <li class={active === 'web-root-manager' ? 'active' : null}><a href="/web-root-manager/dashboard" class="waves-effect"><i class={`material-icons`}>arrow_forward</i>Web Root Manager</a></li>
      <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
    {/if}
    <li class={active === 'app-store' ? 'active' : null}><a href="/app-store/dashboard" class="waves-effect"><i class={`material-icons`}>store</i>App Store</a></li>
    <li class={active === 'forum' ? 'active' : null}><a href="https://forum.istrav.com" class="waves-effect"><i class={`material-icons`}>comment</i>Forum</a></li>
    <li class={active === 'media' ? 'active' : null}><a href="https://media.istrav.com" class="waves-effect"><i class={`material-icons`}>play_arrow</i>Media</a></li>
    <li class={active === 'blog' ? 'active' : null}><a href="https://blog.istrav.com" class="waves-effect"><i class={`material-icons`}>content_paste</i>Blog</a></li>
    <li class={active === 'shop' ? 'active' : null}><a href="https://shop.istrav.com" class="waves-effect"><i class={`material-icons`}>local_offer</i>Shop</a></li>
    <li class={active === 'api' ? 'active' : null}><a href="/api" class="waves-effect"><i class={`material-icons`}>build</i>API</a></li>
    <li class={active === 'client-area' ? 'active' : null}><a href="/client-area/dashboard" class="waves-effect"><i class={`material-icons`}>person_pin</i>Client Area</a></li>
    <li class={active === 'knowledge-base' ? 'active' : null}><a href="/knowledge-base" class="waves-effect"><i class={`material-icons`}>archive</i>Knowledge Base</a></li>
    <li class={active === 'support-desk' ? 'active' : null}><a href="/support-desk/dashboard" class="waves-effect"><i class={`material-icons`}>help</i>Support Desk</a></li>
    <li class={active === 'license-keys' ? 'active' : null}><a href="/license-keys" class="waves-effect"><i class={`material-icons`}>key</i>License Keys</a></li>
    <li class={active === 'about' ? 'active' : null}><a href="/about" class="waves-effect"><i class={`material-icons`}>import_contacts</i>About</a></li>
    <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
  {/if}
  {#if mode === 'app-store'}
    <li class={active === 'it-panel' ? 'active' : null}><a href="/it-panel" class="waves-effect"><i class={`material-icons`}>arrow_backward</i>MAIN</a></li>
    <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
    <li><a href="#!" class="subheader">APP STORE</a></li>
    <li class={active === 'dashboard' ? 'active' : null}><a href="/app-store/dashboard" class="waves-effect"><i class={`material-icons`}>dashboard</i>Dashboard</a></li>
    <li class={active === 'chatwoot' ? 'active' : null}><a href="/app-store/chatwoot" class="waves-effect"><i class={`material-icons`}>extension</i>chatwoot</a></li>
    <li class={active === 'directus' ? 'active' : null}><a href="/app-store/directus" class="waves-effect"><i class={`material-icons`}>extension</i>directus</a></li>
    <li class={active === 'duplicati' ? 'active' : null}><a href="/app-store/duplicati" class="waves-effect"><i class={`material-icons`}>extension</i>DUPLICATI</a></li>
    <li class={active === 'filerun' ? 'active' : null}><a href="/app-store/filerun" class="waves-effect"><i class={`material-icons`}>extension</i>FileRun</a></li>
    <li class={active === 'gitlab' ? 'active' : null}><a href="/app-store/gitlab" class="waves-effect"><i class={`material-icons`}>extension</i>GitLab</a></li>
    <li class={active === 'saleor' ? 'active' : null}><a href="/app-store/saleor" class="waves-effect"><i class={`material-icons`}>extension</i>saleor</a></li>
    <li class={active === 'nodebb' ? 'active' : null}><a href="/app-store/nodebb" class="waves-effect"><i class={`material-icons`}>extension</i>nodebb</a></li>
    <li class={active === 'ghost' ? 'active' : null}><a href="/app-store/ghost" class="waves-effect"><i class={`material-icons`}>extension</i>ghost</a></li>
    <li class={active === 'minio' ? 'active' : null}><a href="/app-store/minio" class="waves-effect"><i class={`material-icons`}>extension</i>MINIO</a></li>
    <li class={active === 'nginx' ? 'active' : null}><a href="/app-store/nginx" class="waves-effect"><i class={`material-icons`}>extension</i>NGINX</a></li>
    <li class={active === 'lbry' ? 'active' : null}><a href="/app-store/lbry" class="waves-effect"><i class={`material-icons`}>extension</i>LBRY</a></li>
    <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
  {/if}
  {#if mode === 'web-root-manager'}
    <li class={active === 'it-panel' ? 'active' : null}><a href="/it-panel" class="waves-effect"><i class={`material-icons`}>arrow_backward</i>MAIN</a></li>
    <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
    <li><a href="#!" class="subheader">WEB ROOT MANAGER</a></li>
    <li class={active === 'dashboard' ? 'active' : null}><a href="/web-root-manager/dashboard" class="waves-effect"><i class={`material-icons`}>dashboard</i>Dashboard</a></li>
    <li class={active === 'users' ? 'active' : null}><a href="/web-root-manager/users" class="waves-effect"><i class={`material-icons`}>person</i>Users</a></li>
    <li class={active === 'tenants' ? 'active' : null}><a href="/web-root-manager/tenants" class="waves-effect"><i class={`material-icons`}>settings_remote</i>Tenants</a></li>
    <li class={active === 'team-members' ? 'active' : null}><a href="/web-root-manager/team-members" class="waves-effect"><i class={`material-icons`}>recent_actors</i>Team Members</a></li>
    <li class={active === 'data-centers' ? 'active' : null}><a href="/web-root-manager/data-centers" class="waves-effect"><i class={`material-icons`}>map</i>Data Centers</a></li>
    <li class={active === 'connections' ? 'active' : null}><a href="/web-root-manager/connections" class="waves-effect"><i class={`material-icons`}>lock</i>Connections</a></li>
    <li class={active === 'routers' ? 'active' : null}><a href="/web-root-manager/routers" class="waves-effect"><i class={`material-icons`}>router</i>Routers</a></li>
    <li class={active === 'proxy-load-balancers' ? 'active' : null}><a href="/web-root-manager/proxy-load-balancers" class="waves-effect"><i class={`material-icons`}>settings_input_composite</i>Proxy Load Balancers</a></li>
    <li class={active === 'nas-servers' ? 'active' : null}><a href="/web-root-manager/nas-servers" class="waves-effect"><i class={`material-icons`}>settings_input_hdmi</i>NAS Servers</a></li>
    <li class={active === 'vm-servers' ? 'active' : null}><a href="/web-root-manager/vm-servers" class="waves-effect"><i class={`material-icons`}>settings_system_daydream</i>VM Servers</a></li>
    <li class={active === 'providers' ? 'active' : null}><a href="/web-root-manager/providers" class="waves-effect"><i class={`material-icons`}>card_membership</i>Providers</a></li>
    <li class={active === 'service-pricing' ? 'active' : null}><a href="/web-root-manager/vm-servers" class="waves-effect"><i class={`material-icons`}>assessment</i>Solutions & Services</a></li>
    <li class={active === 'key-chain' ? 'active' : null}><a href="/web-root-manager/license-keys" class="waves-effect"><i class={`material-icons`}>key</i>License Keys</a></li>
    <li class={active === 'record-keeping' ? 'active' : null}><a href="/web-root-manager/record-keeping" class="waves-effect"><i class={`material-icons`}>work</i>Record Keeping</a></li>
    <li class={active === 'knowledge-base' ? 'active' : null}><a href="/web-root-manager/knowledge-base" class="waves-effect"><i class={`material-icons`}>archive</i>Knowledge Base</a></li>
    <li class={active === 'affiliates' ? 'active' : null}><a href="/web-root-manager/affiliates" class="waves-effect"><i class={`material-icons`}>thumb_up</i>Affiliates</a></li>
    <li class={active === 'referrals' ? 'active' : null}><a href="/web-root-manager/referrals" class="waves-effect"><i class={`material-icons`}>record_voice_over</i>Referrals</a></li>
    <li class={active === 'discounts' ? 'active' : null}><a href="/web-root-manager/discounts" class="waves-effect"><i class={`material-icons`}>trending_down</i>Discounts</a></li>
    <li class={active === 'settings' ? 'active' : null}><a href="/web-root-manager/settings" class="waves-effect"><i class={`material-icons`}>settings</i>Settings</a></li>
    <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
  {/if}
  {#if mode === 'web-host-manager'}
    <li class={active === 'it-panel' ? 'active' : null}><a href="/it-panel" class="waves-effect"><i class={`material-icons`}>arrow_backward</i>MAIN</a></li>
    <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
    <li><a href="#!" class="subheader">WEB HOST MANAGER</a></li>
    <li class={active === 'dashboard' ? 'active' : null}><a href="/web-host-manager/dashboard" class="waves-effect"><i class={`material-icons`}>dashboard</i>Dashboard</a></li>
    <li class={active === 'apps' ? 'active' : null}><a href="/web-host-manager/apps" class="waves-effect"><i class={`material-icons`}>cloud</i>Apps</a></li>
    <li class={active === 'machines' ? 'active' : null}><a href="/web-host-manager/machines" class="waves-effect"><i class={`material-icons`}>flash_on</i>Machines</a></li>
    <li class={active === 'kubernetes' ? 'active' : null}><a href="/web-host-manager/kubernetes" class="waves-effect"><i class={`material-icons`}>grid_on</i>Kubernetes</a></li>
    <li class={active === 'volumes' ? 'active' : null}><a href="/web-host-manager/volumes" class="waves-effect"><i class={`material-icons`}>save</i>Volumes</a></li>
    <li class={active === 'databases' ? 'active' : null}><a href="/web-host-manager/databases" class="waves-effect"><i class={`material-icons`}>receipt</i>Databases</a></li>
    <li class={active === 'images' ? 'active' : null}><a href="/web-host-manager/images" class="waves-effect"><i class={`material-icons`}>photo</i>Images</a></li>
    <li class={active === 'networking' ? 'active' : null}><a href="/web-host-manager/networking" class="waves-effect"><i class={`material-icons`}>settings_input_hdmi</i>Networking</a></li>
    <li class={active === 'collaborators' ? 'active' : null}><a href="/web-host-manager/collaborators" class="waves-effect"><i class={`material-icons`}>supervisor_account</i>Collaborators</a></li>
    <li class={active === 'settings' ? 'active' : null}><a href="/web-host-manager/settings" class="waves-effect"><i class={`material-icons`}>settings</i>Settings</a></li>
    <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
  {/if}
  {#if mode === 'client-area'}
    <li class={active === 'it-panel' ? 'active' : null}><a href="/it-panel" class="waves-effect"><i class={`material-icons`}>arrow_backward</i>MAIN</a></li>
    <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
    <li><a href="#!" class="subheader">CLIENT AREA</a></li>
    <li class={active === 'dashboard' ? 'active' : null}><a href="/client-area/dashboard" class="waves-effect"><i class={`material-icons`}>dashboard</i>Dashboard</a></li>
    <li class={active === 'billing' ? 'active' : null}><a href="/client-area/billing" class="waves-effect"><i class={`material-icons`}>attach_money</i>Billing</a></li>
    <li class={active === 'payment-methods' ? 'active' : null}><a href="/client-area/payment-methods" class="waves-effect"><i class={`material-icons`}>credit_card</i>Payment Methods</a></li>
    <li class={active === 'alerts' ? 'active' : null}><a href="/client-area/alerts" class="waves-effect"><i class={`material-icons`}>notifications</i>Alerts</a></li>
    <li class={active === 'discounts' ? 'active' : null}><a href="/client-area/discounts" class="waves-effect"><i class={`material-icons`}>trending_down</i>Discounts</a></li>
    <li class={active === 'referrals' ? 'active' : null}><a href="/client-area/referrals" class="waves-effect"><i class={`material-icons`}>youtube_searched_for</i>Referrals</a></li>
    <li class={active === 'settings' ? 'active' : null}><a href="/client-area/settings" class="waves-effect"><i class={`material-icons`}>settings</i>Settings</a></li>
    <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
  {/if}
  {#if mode === 'support-desk'}
    <li class={active === 'it-panel' ? 'active' : null}><a href="/it-panel" class="waves-effect"><i class={`material-icons`}>arrow_backward</i>MAIN</a></li>
    <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
    <li><a href="#!" class="subheader">SUPPORT DESK</a></li>
    <li class={active === 'dashboard' ? 'active' : null}><a href="/support-desk/dashboard" class="waves-effect"><i class={`material-icons`}>dashboard</i>Dashboard</a></li>
    <li class={active === 'new-tickets' ? 'active' : null}><a href="/support-desk/new-tickets" class="waves-effect"><i class={`material-icons`}>timer</i>New Tickets</a></li>
    <li class={active === 'pending-tickets' ? 'active' : null}><a href="/support-desk/pending-tickets" class="waves-effect"><i class={`material-icons`}>timelapse</i>Pending Tickets</a></li>
    <li class={active === 'open-tickets' ? 'active' : null}><a href="/support-desk/open-tickets" class="waves-effect"><i class={`material-icons`}>alarm</i>Open Tickets</a></li>
    <li class={active === 'clsoed-tickets' ? 'active' : null}><a href="/support-desk/clsoed-tickets" class="waves-effect"><i class={`material-icons`}>alarm_on</i>Closed Tickets</a></li>
    <li class={active === 'submit-a-ticket' ? 'active' : null}><a href="/support-desk/submit-a-ticket" class="waves-effect"><i class={`material-icons`}>add_alarm</i>Submit a Tickets</a></li>
    <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
  {/if}
  {#if !token}
    <li><a href="#!" class="subheader">WELCOME</a></li>
    <li class={active === 'login' ? 'active' : null}><a href="/welcome/login" class="waves-effect"><i class={`material-icons`}>exit_to_app</i>Login</a></li>
    <li class={active === 'register' ? 'active' : null}><a href="/welcome/register" class="waves-effect"><i class={`material-icons`}>person_add</i>Register</a></li>
    <li class={active === 'forgot-password' ? 'active' : null}><a href="/welcome/forgot-password" class="waves-effect"><i class={`material-icons`}>lock_open</i>Forgot Password</a></li>
    <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
  {/if}
  <li>
    <a href="/powered-by-istrav">
      <div style="font-size: 1em;color: #888; text-align: right; padding: 0 1em;">{version || 'v0.0.0'}</div>
    </a>
  </li>
  <br />
  <br />
  <br />
</ul>

<style>
  #slide-out {
    background: #333;
  }

  .sidenav li > a {
    padding-right: 0;
    color: #ccc;
  }

  .sidenav li > a > i {
    color: #ccc;
  }
</style>