import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './PostListItem.css';

class PostListItem extends Component {
    shouldComponentUpdate(nextProps){
        return this.props.id !== nextProps.id;
    }

    render() {
        return (
            <li className='PostListItem' id={`post_${this.props.id}`}>
                {this.props.id}.{this.props.title}
            </li>
        )
    }
}

PostListItem.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number,
};
PostListItem.defaultTypes = {
    title: "empty title"
};

export default PostListItem;
