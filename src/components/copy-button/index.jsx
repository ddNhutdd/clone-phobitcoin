import { useState } from 'react';
import Button, { buttonType } from '../button';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';

function CopyButton(props) {
    const { value } = props;
    const buttonTextType = {
        copy: 'copy',
        copied: 'copied'
    }

    const [buttonText, setButtonText] = useState(buttonTextType.copy);

    const onCopyCLickHandle = () => {
        setButtonText(buttonTextType.copied);

        const idTimeout = setTimeout(() => {
            setButtonText(buttonTextType.copy);
            clearTimeout(idTimeout);
        }, 3000);
    }

    const stopEventClick = (ev) => {
        ev.stopPropagation();
    }

    return (
        <div onClick={stopEventClick}>
            <CopyToClipboard
                text={value}
                onCopy={onCopyCLickHandle}
            >
                <Button type={buttonType.secondary}>
                    {buttonText}
                </Button>
            </CopyToClipboard>
        </div>
    )
}

CopyButton.propTypes = {
    value: PropTypes.string
}

export default CopyButton