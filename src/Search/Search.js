import React, {Component} from 'react';
import './Search.css';

class Search extends Component {
    render() {
        return (
            <form>
                <input type='search'
                       className='Search'
                       value={this.props.searchByTitle}
                       onChange={this.props.onChange}
                       placeholder="Type the name of post"/>
            </form>
        )
    }
}

export default Search;
