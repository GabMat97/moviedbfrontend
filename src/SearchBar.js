import React from 'react';

// SearchBar
class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.handleFiltertextChange = this.handleFiltertextChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleFiltertextChange(e) {
      this.props.onFilterTextChange(e.target.value);
    }
  
    render() {
      return (
        <form
          onSubmit={(e) => {
            this.props.handleClick(e);
          }}
        >
          <input
            className="SearchBar"
            type="text"
            placeholder="Search Film by Title"
            value={this.props.filterText}
            onChange={this.handleFiltertextChange}
          />
          <input
            id="Submit"
            type="submit"
            value="Search"
          />
        </form>
      );
    }
  }
  
  export default SearchBar;