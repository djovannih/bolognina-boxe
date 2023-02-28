'use client'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import { memo } from 'react'

const gymCoordinates: google.maps.LatLngLiteral = {
  lat: 44.515968,
  lng: 11.361326,
}

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    language: 'it',
  })

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName="w-full h-96 md:h-[36rem] lg:h-[48rem]"
      center={gymCoordinates}
      zoom={15}
    >
      <Marker position={gymCoordinates} />
    </GoogleMap>
  ) : (
    <></>
  )
}

export default memo(Map)
