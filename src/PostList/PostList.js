import React, {Component} from 'react';
import Post from '../PostListItem/PostListItem'
import data from '../data';
import PropTypes from 'prop-types';
import './PostList.css'
import NoItemsFound from '../NoItemsFound/NoItemsFound'

class PostList extends Component {

    render() {
        let realAmountOfPosts=0;
        return (
            <ul className='PostList'>
                {data.map((post, index) => {
                    if (post.title.startsWith(this.props.postTitle) && index < this.props.amountOfPosts) {
                        realAmountOfPosts = realAmountOfPosts+1;
                        return <Post id={post.id} title={post.title}/>
                    }
                    return "";
                })}
                { (realAmountOfPosts===0) ? <NoItemsFound/> : ""}
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
