
<script>
  import { onMount } from "svelte";
</script>


<!-- Modal Trigger -->
<div class="fixed-action-btn">
  <a class="waves-effect waves-light modal-trigger btn-floating btn-large red lighten-2" href="#!">
    <i class="large material-icons">add</i>
  </a>
  <ul>
    <li><a href="/web-root-manager/connections/create-ssh" class="btn-floating blue"><i class="material-icons">wifi_lock</i></a></li>
    <li><a href="/web-root-manager/deployments/create-open-vpn" class="btn-floating blue"><i class="material-icons">vpn_lock</i></a></li>
  </ul>
</div>

