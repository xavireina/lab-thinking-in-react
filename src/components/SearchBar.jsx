import React, {Component} from "react";


class SearchBar extends Component{
    state ={
        input: ''
    }

    handleChange =(e) => {
        this.props.filterProducts(e.target.value)
        this.setState({
            input: e.target.value
        })
    }

    render () {

        return <div>
            <p>Search</p>
            <input
                type='text'
                className="input"
                placeholder="Search..."
                value={this.state.input}
                onChange={this.handleChange}
            />
            <br />
            <input type="checkbox" />  <label >Only show products in stock</label>
        </div>
    }
}

export default SearchBar;