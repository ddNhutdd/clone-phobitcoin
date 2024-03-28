import { useState, createContext, useRef } from "react";
import PropTypes from 'prop-types';
import { generateUniqueId } from "src/util";

export const alertType = {
    info: 'info',
    error: 'error'
}
export const AlertContext = createContext();

export const AlertContextContainer = ({ children }) => {
    const [listAlert, setListAlert] = useState([]);
    const listAlertRuntime = useRef([]);

    const callAlert = (alertType, content) => {
        const newListAlert = [...listAlertRuntime.current];
        const id = generateUniqueId();
        newListAlert.push({
            id,
            alertType,
            content
        })
        setListAlert(newListAlert);
        listAlertRuntime.current = newListAlert;
        return id;
    }

    const removeAlert = (id) => {
        let newListAlert = [...listAlertRuntime.current];
        newListAlert = newListAlert.filter(item => item.id !== id);
        setListAlert(newListAlert);
        listAlertRuntime.current = newListAlert;
    }

    const removeAllAlert = () => {
        listAlertRuntime.current = [];
        setListAlert([])
    }

    return (
        <AlertContext.Provider value={{ listAlert, callAlert, removeAlert, removeAllAlert }}>
            {children}
        </AlertContext.Provider>
    )
}

AlertContextContainer.propTypes = {
    children: PropTypes.node
}
