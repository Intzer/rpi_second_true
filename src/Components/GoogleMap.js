import React from 'react';
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useTranslation } from 'react-i18next';

export default function Home({coord}) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBcGCRX6kYq-fQW3ZAYGoPX9ecRmK45cxI",
    });
    if (!isLoaded) return <div>Loading...</div>;
    return <Map coord={coord}/>
}


function Map({coord}) {
    const { t } = useTranslation();
    return (
        <>
            <div class="map">
                <h2 className='text-center'>{t('place_of_birth')}</h2>
                <GoogleMap zoom={13} center={coord.center} mapContainerClassName="map-container">
                    <MarkerF position={coord.center}/>
                </GoogleMap>
            </div>
        </>
    )
}