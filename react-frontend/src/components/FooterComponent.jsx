import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <span>Coptyright © 2020. All Rights Reserved</span>
                </footer>
                
            </div>
        );
    }
}

export default FooterComponent;