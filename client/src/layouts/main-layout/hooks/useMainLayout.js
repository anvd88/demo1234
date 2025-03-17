import {createContext, useContext} from "react";

export const MainLayoutContext = createContext(undefined);

const useMainLayout = () => {
    const context = useContext(MainLayoutContext);
    if (context === undefined) {
        throw new Error('useMainLayoutContext must be used within a MainLayoutProvider');
    }
    return context;
};

export default useMainLayout;