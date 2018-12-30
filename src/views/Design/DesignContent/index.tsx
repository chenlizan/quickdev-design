import * as React from 'react';
import * as PropTypes from 'prop-types';

import DesignContentForMobile from './DesignContentForMobile';

export default class Index extends React.Component<any, any> {

    displayName: "DesignContent" | undefined;

    render(): React.ReactNode {
        const {uiMeta} = this.props;
        return (
            <div>
                <DesignContentForMobile uiMeta={uiMeta}/>
            </div>
        )
    }

}