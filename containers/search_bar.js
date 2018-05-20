import React, { Component } from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { term : '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange() {
    this.setState({ term : event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.getCity(this.state.term);
  }

  render() {
    return(
      <form onSubmit= {this.onFormSubmit } className="input-group">
        <input
          className="search-bar"
          placeholder="Enter your nearest location"
          value = { this.state.term }
          onChange =  { this.onInputChange } />
        <button type="submit" className="btn btn-danger btn-sm">Find restaurant</button>
      </form>
    );
  }
}
