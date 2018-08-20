import React from 'react'
import Grid from '@material-ui/core/Grid'
import classNames from 'classnames'
import Typography from '@material-ui/core/Typography';
import SiteList from './SiteList'
import DeviceList from './DeviceList'



export default class CommunityPage extends React.Component {

    state = {
        commId: this.props.match.params.communityId,
        communityName: this.props.match.params.communityName,
        allUnits: [],
        isLoading: true,
        error: null,
        unit: null
    }

    setUnit = (unit) => {
        console.log(unit)
        this.setState({
            unit: unit
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.communityId !== prevProps.match.params.communityId) {
          fetch( `https://care-api-staging.appspot.com/units?community_id=${this.props.match.params.communityId}`, {
                method: "GET",
                mode: "cors",
                cache: "no-cache",
                credentials: "omit",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": `Bearer ${this.props.accessToken}`
                },
                body: null,
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(response => {
                this.setState({ 
                        allUnits: response,
                        commId: this.props.match.params.communityId,
                        communityName: this.props.match.params.communityName,
                        isLoading: false,
                        unit: null
                    })
            })
            .catch(error => {
                this.setState({ error, isLoading: false })
            })
        }
    }

    componentDidMount() {
        let data = null
        fetch( `https://care-api-staging.appspot.com/units?community_id=${this.state.commId}`, {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "omit",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": `Bearer ${this.props.accessToken}`
            },
            body: data,
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong ...');
            }
        })
        .then(response => {
            this.setState({ allUnits: response, isLoading: false })
        })
        .catch(error => {
            this.setState({ error, isLoading: false })
        })
    }

    render () {
        return (
            this.state.isLoading ? <p> LOADING..... </p> :
            <Grid container className="flex" alignItems="stretch" direction="row" justify="space-around">
                <Grid item sm={6} className={classNames("flex", "padded")}>
                    <SiteList units={this.state.allUnits} communityName={this.state.communityName} setUnit={this.setUnit} />
                </Grid>
                <Grid item sm={6} className={classNames("flex", "padded")}>
                    {
                        this.state.unit ? <DeviceList unit={this.state.unit} accessToken={this.props.accessToken} /> : <Placeholder />
                    }
                </Grid>
            </Grid>
        )
    }
}

const Placeholder = () => (
        <div className="placeholder">
            Select a Unit
        </div>
)

const Child = ({ match }) => (
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
  );