import React, {Component, Fragment} from 'react';
import './PostList.css'
import Post from '../PostListItem/PostListItem'
import NoItemsFound from '../NoItemsFound/NoItemsFound'
import MoreButton from '../MoreButton/MoreButton';
import Loader from'../Loader/Loader'

const API_POSTS='https://jsonplaceholder.typicode.com/posts';

class PostList extends Component {
    constructor(){
        super();
        this.state = {
            amountsOfPosts: 10,
            posts: [],
            isLoading: true
        }
        this.loadMore = this.loadMore.bind(this);
    }
    loadMore() {
        const amountsOfPosts = this.state.amountsOfPosts;
        this.setState({
            amountsOfPosts: amountsOfPosts + 10
        })
    }
    fetchPosts(){
        setTimeout(()=>{
            fetch(API_POSTS)
                .then(response => response.json())
                .then(postsFromAPI => this.setState({posts: postsFromAPI , isLoading: false }))
            },3000)
    }

    componentDidMount(){
        this.fetchPosts();
        setInterval(()=>this.fetchPosts(),10000);
    }

    render() {
        const {posts, isLoading, amountsOfPosts} = this.state;
        if(isLoading){
            return <Loader />
        }
        let realAmountOfPosts=0;
        return (
            <Fragment>
                <ul className='PostList'>
                    {posts.map((post, index) => {
                        if (post.title.startsWith(this.props.postTitle) && realAmountOfPosts < amountsOfPosts) {
                            realAmountOfPosts = realAmountOfPosts+1;
                            return <Post id={post.id} title={post.title}/>
                        }
                        return "";
                        })}
                </ul>
                {(realAmountOfPosts === 0) ? <NoItemsFound/> : "" }
                {(realAmountOfPosts >= 10 ) ? <MoreButton onClick={this.loadMore}/> : "" }
            </Fragment>
        )
    }
}

export default PostList;