import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import NoSsr from '@material-ui/core/NoSsr';
import { withRouter } from 'react-router-dom'

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#424242',
    borderRadius: '5px',
    padding: '5px',
    margin: 'auto'
  }
});

const customStyles = {
  control: (base, state) => ({
    ...base,
    border: "none",
    backgroundColor: "#424242",
  }),
  singleValue: (base, state) => ({
    ...base, 
    color: "white"
  })
}

class IntegrationReactSelect extends React.Component {


  handleChange = value => {
     if(value) this.props.history.push(`/${value.value}/${value.label}`)  
  };
  
  render() {
    const { classes } = this.props;

    const suggestions = this.props.communities
    .map(suggestion => ({
      value: suggestion.id,
      label: suggestion.name,
    }))

    return (
      <div className={classes.root}>
        <NoSsr>
          <Select
            className="searchBar"
            isClearable
            isSearchable
            placeholder="Search for a community"
            options={suggestions}
            styles={customStyles}
            onChange={this.handleChange}
          />
        </NoSsr>  
      </div>
    );
  }
}

IntegrationReactSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(IntegrationReactSelect));