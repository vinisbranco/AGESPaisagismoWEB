import React from "react";
//import "./styles.css";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import Grid from "@material-ui/core/Grid";

// import {show_stringify} from 'helpers/json'

import { login } from "services/auth/auth";

import { withRouter } from "react-router-dom";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    marginTop: theme.spacing.unit * 3
  },
  input: {
    display: "none"
  },

  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 3,
      padding: theme.spacing.unit * 3
    }
  },

  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(900 + theme.spacing.unit * 2 * 2)]: {
      width: 800,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
});

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLoading: false,
      errors: {}
    };
    console.log(this.state);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  async onSubmit(e) {
    e.preventDefault();
    this.setState({
      isLoading: true
    });
    const { username, password } = this.state;
    const loginAttempt = await login(username, password, true);

    if (loginAttempt) {
      if (loginAttempt.statusCode !== 200) {
        // status code OK
        const { history } = this.props;
        history.push("/");
        return true;
      } else {
        await this.setState({ errors: { username: true, password: true } });
        return false;
      }
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { username, password, isLoading, errors } = this.state;
    const { classes } = this.props;

    return (
      <main className={classes.layout}>
        <Paper className={classes.paper} elevation={1}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Typography variant="display2" gutterBottom>
                Login
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12}>
              <form onSubmit={this.onSubmit}>
                <TextField
                  id="username"
                  className="input"
                  name="username"
                  label="Usuário"
                  onChange={this.onChange}
                  error={errors.username}
                  valume={username}
                />

                <br />
                <TextField
                  id="senha"
                  className="input"
                  name="password"
                  label="Senha"
                  onChange={this.onChange}
                  value={password}
                  error={errors.password}
                  type="password"
                />
                <br />
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Fazer login
                </Button>
              </form>
            </Grid>
          </Grid>
        </Paper>
        {/* {show_stringify(this.state)} */}
      </main>
    );
  }
}

export default withStyles(styles)(LoginForm);
