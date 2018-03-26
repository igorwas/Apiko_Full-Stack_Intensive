import React, {Component, Fragment} from 'react';
import './App.css';
import PostList from './PostList/PostList';
import MoreButton from './MoreButton/MoreButton';

class App extends Component {
    constructor() {
        super();
        this.state = {amountsOfPosts: 10};
        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        const {amountsOfPosts} = this.state;
        this.setState({
            amountsOfPosts: amountsOfPosts + 10
        })
    }

    render() {
        return (
            <Fragment>
                <h1>Homework #3.React Components</h1>
                <PostList amountOfPosts={this.state.amountsOfPosts}/>
                <MoreButton onClick={this.loadMore}/>
            </Fragment>
        )
    }
}

export default App;
