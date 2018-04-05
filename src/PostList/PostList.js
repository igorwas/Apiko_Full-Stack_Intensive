import React, {Component} from 'react';
import Post from '../PostListItem/PostListItem'
import PropTypes from 'prop-types';
import './PostList.css'
import NoItemsFound from '../NoItemsFound/NoItemsFound'

const API_POSTS='https://jsonplaceholder.typicode.com/posts';

class PostList extends Component {
    constructor(){
        super();
        this.state = {
            posts: []
        }
    }
    fetchPosts(){
        fetch(API_POSTS)
            .then(response => response.json())
            .then(postsFromAPI => this.setState({posts: postsFromAPI }))
    }

    componentDidMount(){
        this.fetchPosts();
        setInterval(()=>this.fetchPosts(),10000, true);
    }

    render() {
        const posts = this.state.posts;
        let realAmountOfPosts=0;
        return (
            <ul className='PostList'>
                {posts.map((post, index) => {
                    if (post.title.startsWith(this.props.postTitle) && realAmountOfPosts < this.props.amountOfPosts) {
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
