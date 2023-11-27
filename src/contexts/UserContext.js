import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [myState, setMyState] = useState('initial value');

    return (
        <UserContext.Provider
            value={{
                myState,
                setMyState
            }}
        >
            {children}
        </UserContext.Provider>
    );
};