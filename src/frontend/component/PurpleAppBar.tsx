import * as React from "react";
import { AppBar } from 'react-toolbox';
import { Logo } from './Logo';
const theme = require<any>('./PurpleAppBar.css');

// No props, so use undefined
// State is never set so we use the 'undefined' type.
export class PurpleAppBar extends React.Component<undefined, undefined> {
    render() {
        return <AppBar theme={theme}>
            <Logo/>
            Hello World
        </AppBar>;
    }
}
