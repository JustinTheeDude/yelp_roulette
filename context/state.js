import { createContext, useContext, useState} from 'react';

const YelpContext = createContext();

export function AppWrapper({ children }) {
    let [zipCode, setZipCode ] = useState("");
    let [typeOfPlace, setTypeOfPlace] = useState("");

    const updateZipCode = (zipCode) => {
        setZipCode(zipCode);
    }

    const updateTypeOfPlace = (place) => {
        setTypeOfPlace(place);
    }

    return (
        <YelpContext.Provider value={{ zipCode, typeOfPlace, updateTypeOfPlace, updateZipCode}}>
            {children}
        </YelpContext.Provider>
    );
}

export function useYelpContext() {
    return useContext(YelpContext);
}
