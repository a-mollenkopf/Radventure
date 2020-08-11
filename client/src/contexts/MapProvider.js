import React, { createContext, useState } from 'react';

const defaultContext = {};

export const MapContext = createContext(defaultContext);

export const MapProvider = ({ children }) => {
    const [map, setMap] = useState();

    const value = {
        map,
        setMap
    };
    
    return (
        <MapContext.Provider value={value}>
            {children}
        </MapContext.Provider>
    );
}
