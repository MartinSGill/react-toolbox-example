import * as React from 'react';
import { Button } from 'react-toolbox/lib/button'; // Bundled component import

import { SuccessButton } from './SuccessButton';    // A button with complex overrides
import { PurpleAppBar } from './PurpleAppBar';      // AppBar with simple overrides

export class App extends React.Component<any, any> {
  render() {
    return (
    <div>
      <PurpleAppBar />
      <section style={{ padding: 20 }}>
        <Button label='Primary Button' primary />
        <SuccessButton />
      </section>
    </div>);
  }
}
