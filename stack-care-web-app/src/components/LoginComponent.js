import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
    card: {
        minWidth: 275,
        maxWidth: 450
      },
      media: {
        paddingTop: '56.25%', // 16:9
        'background-size': 'contain'
      }
}

class LoginComponent extends Component {

    state = {
        email: "",
        pass: ""
    }

    onchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = (e) => {
        e.preventDefault()
        console.log(`e: ${e.toString()}`)

        let data = JSON.stringify({
            "grant_type": "password",
            "email": this.state.email,
            "password": this.state.pass,
            "client_id": "rTZ61c51XXJriPBSoGReIeZ7W7MjWy"
        });

        fetch( "https://care-api-staging.appspot.com/oauth2/tokens", {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "include",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: data,
        })
        .then(response => response.json())
        .then(response => {
            console.log(`response: ${response}`)
            this.props.login()
        })
        .catch(error => {
            console.error(`Fetch Error =\n`, error)
            this.props.login()
        })

    }

    render() {
        const {classes} = this.props
        return (
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image="/img/logo.png"
                    title="stack care logo"
                />
                <CardContent>
                    <form onSubmit={this.handleLogin}>
                        <TextField
                            name="email"
                            label="Email Id"
                            placeholder="Enter your email id"
                            className="email-field"
                            margin="normal"
                            onChange={this.onchange}
                        />
                        <br />
                        <TextField
                            name="pass"
                            label="Password"
                            className="password-field"
                            placeholder="Enter your password"
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            onChange={this.onchange}
                        />
                        <br />
                        <Button variant="outlined" color="primary" type="submit" className="submit-button">
                            Login
                        </Button>
                    </form>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(LoginComponent)