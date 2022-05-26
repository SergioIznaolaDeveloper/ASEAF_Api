import React, { useState, createContext } from 'react';

const TicketsContext = createContext();

const TicketsContextProvider = ({ children }) => {

    const [tickets, setTickets] = useState([]);

    return (
        <TicketsContext.Provider value={{ tickets, setTickets }}>
            {children}
        </TicketsContext.Provider>
    )
}
export {
    TicketsContext,
    TicketsContextProvider
};