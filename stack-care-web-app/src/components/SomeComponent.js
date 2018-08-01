import React, { Component } from 'react';
import classNames from "classnames";

class SomeComponent extends Component {
    render() {
        return (
            <div className={classNames("flex")}>
                SomeComponent
            </div>
        );
    }
}

export default SomeComponent;