import _ from 'lodash';
import React, { Component } from 'react';
import {
  Search,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react';

class SearchExampleStandard extends Component {
  constructor() {
    super();
    this.state = {
      'isLoading': false,
      'results': [],
      'value': '',
    };
    this.resetComponent = this.resetComponent.bind(this);
    this.handleResultSelect = this.handleResultSelect.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  componentWillMount() {
    this.resetComponent();
  }

  resetComponent() {
    this.setState({ isLoading: false, results: [], value: '' });
  }

  handleResultSelect(e, { result }) {
    this.setState({ value: result.title });
  }

  handleSearchChange(e, { value }) {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter({ value }, isMatch),
      });
    }, 300);
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
            results={results}
            value={value}
            {...this.props}
          />
        </Grid.Column>
      </Grid>
    )
  }
}

export default SearchExampleStandard;
