import React, { useEffect } from 'react';
import { useMapbox } from '../hooks/useMapbox';



const puntoInicial = {
    lng: -122.4725,
    lat: 37.8010,
    zoom: 13.5
}


export const MapaPage = () => {

    const { setRef, coords, nuevoMarcador$, movimientoMarcador$ } = useMapbox( puntoInicial );

    // Nuevo marcador
    useEffect(() => {
        nuevoMarcador$.subscribe( marcador => {
            // TODO: nuevo marcador emitir
        });
    }, [nuevoMarcador$]);

    // Movimiento de Marcador
    useEffect(() => {
        movimientoMarcador$.subscribe( marcador => {
            console.log(marcador.id);
        });
    }, [movimientoMarcador$]);
    



    return (
        <>

            <div className="info">
                Lng: { coords.lng } | lat: { coords.lat } | zoom: { coords.zoom }
            </div>
            
            <div 
                ref={ setRef }
                className="mapContainer"
            />

            

        </>
    )
}
