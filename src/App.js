import React, {Component, Fragment} from 'react';
import './App.css';
import PostList from './PostList/PostList';
import Search from './Search/Search'

class App extends Component {
    constructor() {
        super();
        this.state = {searchByTitle: ''};
        this.searchByTitle = this.searchByTitle.bind(this);
    }

    searchByTitle({ target }){
        this.setState({searchByTitle: target.value})
    }

    render() {
        return (
            <Fragment>
                <h1>Homework #5.React Component Lifecycle</h1>
                <Search onChange={this.searchByTitle}/>
                <PostList postTitle={this.state.searchByTitle}/>
            </Fragment>
        )
    }
}

export default App;
