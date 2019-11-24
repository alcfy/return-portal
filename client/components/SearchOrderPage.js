'use strict';
import React from 'react';
import TopNavBar from './TopNavBar';
import InputBar from './InputBar';
import SubmitButton from './SubmitButton';
import "../css/universal.css";

class SearchOrderPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderNumValue: '',
            emailPhoneValue: ''
        };
    }

    handleButtonClick(e) {
        console.log('click!');
    }

    render() {
        return (
            <div>
                <TopNavBar 
                    shopDomain={this.props.shopDomain}
                    shopLogoUrl={this.props.shopLogoUrl} />
                <div className="Search">
                    <span>
                        <h1 className="top">Returns</h1>
                        <p>Please enter your order details to begin</p>
                    </span>
                    <div className="Search-fields">
                        <fieldset className="page1">
                            <InputBar
                                hint="Order Number"
                                info="Your order number can be found in your confirmation email" />
                            <br />
                            <InputBar
                                hint="Email or Phone Number"
                                info="This is the email or phone number associated with your order" />
                            <br />
                            <SubmitButton
                                text="Submit"
                                onClick={this.handleButtonClick} />
                        </fieldset>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchOrderPage;