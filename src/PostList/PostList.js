import React, {Component} from 'react';
import Post from '../PostListItem/PostListItem'
import data from '../data';
import PropTypes from 'prop-types';
import './PostList.css'

class PostList extends Component {
    render() {
        return (
            <ul className='PostList'>
                {data.map((post, index) => {
                    if (index < this.props.amountOfPosts) {
                        return <Post id={post.id} title={post.title}/>
                    }
                    return "";
                })}
            </ul>
        )
    }
}

PostList.propTypes = {
    amountsOfPosts: PropTypes.number
};

PostList.defaultProps = {
    amountsOfPosts: 10
};

export default PostList;
