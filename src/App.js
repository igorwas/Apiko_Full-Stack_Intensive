import React, {Component, Fragment} from 'react';
import './App.css';
import PostList from './PostList/PostList';
import MoreButton from './MoreButton/MoreButton';
import Search from './Search/Search'

class App extends Component {
    constructor() {
        super();
        this.state = {amountsOfPosts: 10 , searchByTitle: ''};
        this.loadMore = this.loadMore.bind(this);
        this.searchByTitle = this.searchByTitle.bind(this);
    }

    loadMore() {
        const {amountsOfPosts} = this.state.amountsOfPosts;
        this.setState({
            amountsOfPosts: amountsOfPosts + 10
        })
    }

    searchByTitle({ target }){
        this.setState({searchByTitle: target.value})
    }

    render() {
        return (
            <Fragment>
                <h1>Homework #4.React Forms</h1>
                <Search onChange={this.searchByTitle}/>
                <PostList amountOfPosts={this.state.amountsOfPosts}
                          postTitle={this.state.searchByTitle}
                          value={this.state.amountsOfPosts}/>
                <MoreButton onClick={this.loadMore}/>
            </Fragment>
        )
    }
}

export default App;
