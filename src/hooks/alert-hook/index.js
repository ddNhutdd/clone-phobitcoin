import { useContext } from "react";
import { AlertContext } from "src/contexts/alert-context";

const useAlert = () => {
    const {   
      callAlert,
      removeAlert,
      removeAllAlert
    } = useContext(AlertContext);

  return {
    callAlert,
    removeAlert,
    removeAllAlert
  };
};

export default useAlert;