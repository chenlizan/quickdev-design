import * as React from 'react';
import * as PropTypes from 'prop-types';
import GenerateView from '../../components/GenerateView';
import DesignContentForMobile from './DesignContentForMobile';

export default class DesignContent extends React.Component<any, any> {

    render(): React.ReactNode {
        const {uiMeta} = this.props;
        return (
            <DesignContentForMobile uiMeta={uiMeta}/>
        )
    }

}