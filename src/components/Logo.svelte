<script>
  export let size = 'small'
  export let align = 'center'
  export let color = '#111'
</script>

<div style={`color: ${color};`}>
  {#if size === 'small'}
    <div class="logo" style="font-size: 1em;">
      {#if align === 'left'}
        <!-- do not center: no left padding -->
      {:else}
        <span class="pad"></span>
      {/if}
      <span class="is">IS</span><span class="trav" style="line-height: 1.53em;">TRAV</span><span class="pad"></span>
    </div>
  {/if}

  {#if size === 'large'}
    <div class="logo" style="font-size: 7em;">
      {#if align === 'left'}
        <!-- do not center: no left padding -->
      {:else}
        <span class="pad"></span>
      {/if}
      <span class="is">IS</span><span class="trav" style="line-height: 1.75em;">TRAV</span><span class="pad"></span>
    </div>
  {/if}
</div>

<style>
  .logo {
    display: flex;
  }

  .pad {
    flex: 1;
  }

  .is {
    font-weight: 600;
    font-style: italic;
    margin-right: 0.1em;
  }

  .trav {
    font-size: 0.5em;
    font-weight: 900;
    font-style: italic;
  }

  .logo:hover {
    text-shadow: 0 0 0.5em #666;
  }
</style>