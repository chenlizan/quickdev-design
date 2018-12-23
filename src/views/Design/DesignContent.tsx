import * as React from 'react';
import * as PropTypes from 'prop-types';
import GenerateView from '../../components/GenerateView';

export default class DesignContent extends React.Component<any, any> {

    render(): React.ReactNode {
        const {uiMeta} = this.props;
        return (
            <GenerateView uiMeta={uiMeta}/>
        )
    }

}