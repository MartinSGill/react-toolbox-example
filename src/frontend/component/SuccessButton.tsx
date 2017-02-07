import * as React from 'react';
import { Button } from 'react-toolbox/lib/button';
const theme = require<any>('./SuccessButton.css');

export class SuccessButton extends React.Component<undefined,undefined> {
    render() {
        return <Button theme={theme} label='More Success' primary raised />
    }
}

