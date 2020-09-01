import React, {Component} from 'react';
import monitor from '../../assets/img/logo.jpeg'

class Logo extends Component {
    render() {
        return (
            <div className="logo-area">
                <a href="/"><img src={monitor} alt="Businex-Logo" /></a>
            </div>
        );
    }
}

export default Logo;