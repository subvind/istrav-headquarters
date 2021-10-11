

<script>
  import { Map, Geocoder, Marker, controls } from '@beyonk/svelte-mapbox'
  
  import { onMount } from 'svelte';
	// import Earthquakes from './Earthquakes.svelte' // custom component
  
  import axios from 'axios'

  let mapComponent = {}
  const { GeolocateControl, NavigationControl, ScaleControl } = controls

  export let address
  let accessToken = 'pk.eyJ1IjoiaXN0cmF2IiwiYSI6ImNrc3BzODRtYjA0c2oyb3FoZXBjYmR0ZmYifQ.IhAmmBApxQ24ploxhk2v4Q'
  let long
  let lat
  let zoom = 12

  // Define this to handle `eventname` events - see [GeoLocate Events](https://docs.mapbox.com/mapbox-gl-js/api/markers/#geolocatecontrol-events)
  function eventHandler (e) {
    const data = e.detail
    // do something with `data`, it's the result returned from the mapbox event
  }

	function onReady() {
    // Usage of methods like setCenter and flyto
    mapComponent.setCenter([long,lat],zoom) // zoom is optional
    mapComponent.flyTo({center:[long,lat]}) // documentation (https://docs.mapbox.com/mapbox-gl-js/example/flyto)
	}

  onMount(() => {
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${accessToken}`)
      .then(function (response) {
        console.log(response)
        if (response.data) {
          long = response.data.features[0].center[0]
          lat = response.data.features[0].center[1]
          setTimeout(() => {
            window['M'].updateTextFields();
          })
        } else {
          alert('unable to fetch')
        }
      })
  })
</script>

{#if address}
  <Map
    accessToken={accessToken}
    bind:this={mapComponent}
    on:recentre={e => console.log(e.detail.center.lat, e.detail.center.lng) }
    options={{ scrollZoom: true }}
    on:ready={onReady}
    bind:zoom
  >
    <!-- <Earthquakes /> -->
    <Marker lat={lat} lng={long} popupClassName="class-name" />
    <NavigationControl />
    <GeolocateControl options={{ some: 'control-option' }} on:eventname={eventHandler} />
    <ScaleControl />
  </Map>
{/if}

<style global>
  /* :global(.mapboxgl-map) {
    height: 500px !important;
  } */

  :global(.mapboxgl-map) .popup {
    display: none;
  }
</style>