import { useContext } from 'react';
import css from './alert-container.module.scss';
import { AlertContext, alertType } from 'src/contexts/alert-context';
import Alert from './alert';

function AlertContainer() {
    const {
        listAlert,
        removeAlert
    } = useContext(AlertContext);

    const renderListAlert = () => {
        return listAlert.map(item => {
            switch (item.alertType) {
                case alertType.info:
                    return <Alert key={item.id} close={removeAlert.bind(null, item.id)} type={alertType.info} content={item.content} />
                case alertType.error:
                    return <Alert key={item.id} close={removeAlert.bind(null, item.id)} type={alertType.error} content={item.content} />
                default:
                    break;
            }
        })
    }

    return (
        <div className={css.alertContainer}>
            {renderListAlert()}
        </div>
    )
}

export default AlertContainer