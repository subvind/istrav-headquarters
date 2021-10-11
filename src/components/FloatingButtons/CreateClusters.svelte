
<script>
  import { onMount } from "svelte";
</script>


<!-- Modal Trigger -->
<div class="fixed-action-btn">
  <a class="waves-effect waves-light modal-trigger btn-floating btn-large red lighten-2" href="#!">
    <i class="large material-icons">add</i>
  </a>
  <ul>
    <li><a href="/web-root-manager/clusters/create-k8s" class="btn-floating blue">K8s</a></li>
    <li><a href="/web-root-manager/clusters/create-ds" class="btn-floating blue">DS</a></li>
  </ul>
</div>

