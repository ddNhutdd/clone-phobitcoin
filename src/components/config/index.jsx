import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

function Config(props) {
    const { children } = props;
    const location = useLocation();

    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [location]);
    return (
        <>
            {children}
        </>
    )
}

Config.propTypes = {
    children: PropTypes.node
}

export default Config