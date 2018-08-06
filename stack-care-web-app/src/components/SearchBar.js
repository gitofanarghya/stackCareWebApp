import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import NoSsr from '@material-ui/core/NoSsr';
import { withRouter } from 'react-router-dom'

const suggestions = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
  { label: 'Andorra' },
  { label: 'Angola' },
  { label: 'Anguilla' },
  { label: 'Antarctica' },
  { label: 'Antigua and Barbuda' },
  { label: 'Argentina' },
  { label: 'Armenia' },
  { label: 'Aruba' },
  { label: 'Australia' },
  { label: 'Austria' },
  { label: 'Azerbaijan' },
  { label: 'Bahamas' },
  { label: 'Bahrain' },
  { label: 'Bangladesh' },
  { label: 'Barbados' },
  { label: 'Belarus' },
  { label: 'Belgium' },
  { label: 'Belize' },
  { label: 'Benin' },
  { label: 'Bermuda' },
  { label: 'Bhutan' },
  { label: 'Bolivia, Plurinational State of' },
  { label: 'Bonaire, Sint Eustatius and Saba' },
  { label: 'Bosnia and Herzegovina' },
  { label: 'Botswana' },
  { label: 'Bouvet Island' },
  { label: 'Brazil' },
  { label: 'British Indian Ocean Territory' },
  { label: 'Brunei Darussalam' },
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}));

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#424242',
    borderRadius: '5px',
    padding: '5px'
  }
});

const customStyles = {
  control: (base, state) => ({
    ...base,
    border: "none",
    backgroundColor: "#424242"
  }),
  singleValue: (base, state) => ({
    ...base, 
    color: "white"
  })
}

class IntegrationReactSelect extends React.Component {
  
  handleChange = value => {
    this.props.history.push(`/${value.value}`);
  };
  
  render() {
    const { classes } = this.props;

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