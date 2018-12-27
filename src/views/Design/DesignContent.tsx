import * as React from 'react';
import * as PropTypes from 'prop-types';

import DesignContentForMobile from './DesignContentForMobile';

export default class DesignContent extends React.Component<any, any> {

    render(): React.ReactNode {
        const {uiMeta} = this.props;
        return (
            <div>
                <DesignContentForMobile uiMeta={uiMeta}/>
            </div>
        )
    }

}