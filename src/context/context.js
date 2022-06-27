import React, { useContext, useState } from "react";


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [cartModule, setCartModule] = useState(false);
    const [kitchenModule, setKitchenModule] = useState(false);

    const handleCartModule = () => {
        setCartModule(!cartModule)
    }
    const handleKitchenModule = () => {
        setKitchenModule(!kitchenModule)
    }


    return <AppContext.Provider value={{
        cartModule,
        handleCartModule,
        kitchenModule,
        handleKitchenModule
    }} >
        {children}
    </AppContext.Provider>

}

export const useGlobalContext = () => {
    return useContext(AppContext);
}


export { AppContext, AppProvider };