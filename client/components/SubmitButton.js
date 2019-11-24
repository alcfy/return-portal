'use strict';
import React from 'react';
import "../css/universal.css";

class SubmitButton extends React.Component {
    render() {
        const style = this.props.style || 'Submit1';
        return (
            <div className="Search-submit">
                <button
                    className={style}
                    type="submit"
                    onClick={this.props.oncClick} >
                {this.props.text}
                </button>
            </div>
        );
    }
}

export default SubmitButton;