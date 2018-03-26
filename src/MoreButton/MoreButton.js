import React, {Component} from 'react';
import './MoreButton.css'

class MoreButton extends Component {
    render() {
        return (
            <button className='more' onClick={this.props.onClick}>MORE</button>
        )
    }
}

export default MoreButton;
