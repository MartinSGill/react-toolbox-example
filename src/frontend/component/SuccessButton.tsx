import * as React from 'react';
import { Button } from 'react-toolbox/lib/button';
const theme = require<any>('./SuccessButton.css');

export class SuccessButton extends Button {
    render() {
        return <Button {...this.props} theme={theme} />
    }
}

