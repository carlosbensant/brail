import React, { Component } from 'react';
import { string } from 'prop-types';

import { MjmlRaw } from '../mjml-raw';

export class MjmlYahooStyle extends Component {
  static propTypes = {
    children: string.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'trim' does not exist on type 'true | Rea... Remove this comment to see the full error message
    if (children && children.trim().length) {
      return (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MjmlRaw {...rest}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <style>{`@media screen yahoo {${children}}`}</style>
        </MjmlRaw>
      );
    }
    return null;
  }
}
