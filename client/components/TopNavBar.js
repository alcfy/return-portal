'use strict';
import React from 'react';

/**
 * props: {
 *  shopDomain,
 *  shopLogoUrl
 * }
 */
class TopNavBar extends React.Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <p className="headerLogo">
                        <a href={this.props.shopDomain}>
                            <img
                                className="headerLogo"
                                src={this.props.shopLogoUrl}
                            />
                        </a>
                    </p>
                </div>
                <div className="top-fixed"></div>
            </div>
        );
    }
}

export default TopNavBar;