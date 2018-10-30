import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import icone from './icone.png';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



const styles = theme => ({
    button: {
        marginTop: theme.spacing.unit * 5
    },
    root: {
        overflow: 'hidden',
        padding: `0 ${theme.spacing.unit * 3}px`,
    },
    wrapper: {
        maxWidth: 400,
    },
    paper: {
        margin: theme.spacing.unit,
        padding: theme.spacing.unit * 2,
    },
});
const origem = [
    {
        value: "",
        label: "Origem da Espécie"
    },
    {
        value: "n",
        label: "Nativa"
    },
    {
        value: "e",
        label: "Exótica"
    }
];

const folhagem = [
    {
        value: "",
        label: "Tipo de Folhagem"
    },
    {
        value: "c",
        label: "Caduca"
    },
    {
        value: "p",
        label: "Perene"
    }
];
const familia = [
    {
        value: "",
        label: "Família"
    },
    {
        value: "Acanthaceae‎",
        label: "Acanthaceae‎"
    },
    {
        value: "Blandfordiaceae‎",
        label: "Blandfordiaceae‎"
    }
];


class DadosEspecie extends React.Component {
    constructor() {
        super();
        this.state = {
            nomePopular: [],
            
        }            
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        outono: false,
        primavera: false,
        verao: false,
        inverno: false,
    };

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.onSubmit();
    }
 
    componentDidMount(){
        this.setState({nomePopular: this.props.nome_popular});
    }
    render() {
        const { classes } = this.props;
        const { outono, verao, primavera, inverno } = this.state;
        const message = "TEste";

     
        return (
            <div className={classes.root}>
                <List>
                    <ListItem>
                        <Avatar>
                            <img
                                className={classes.img}
                                src={icone}
                                alt="nativa"
                                height="30" width="30"
                            />
                        </Avatar>
                        <ListItemText ><Typography noWrap> <b>Nome Popular: </b> {this.state.nomePopular.map((nome) =><Typography noWrap> nome</Typography>)} </Typography></ListItemText>
                    </ListItem>
                    <li>
                        <Divider inset />
                    </li>
                    <ListItem>
                        <Avatar>
                            <img
                                className={classes.img}
                                src={icone}
                                alt="nativa"
                                height="30" width="30"
                            />
                        </Avatar>
                        <ListItemText ><Typography noWrap> <b>Família: </b> {this.props.nome_familia}</Typography></ListItemText>
                    </ListItem>
                    <Divider inset component="li" />
                    <ListItem>
                        <Avatar>
                            <img
                                className={classes.img}
                                src={icone}
                                alt="nativa"
                                height="30" width="30"
                            />
                        </Avatar>
                        <ListItemText ><Typography noWrap><b>Origem: </b> {this.props.origem}</Typography></ListItemText>
                    </ListItem>
                    <Divider inset component="li" />
                    <ListItem>
                        <Avatar>
                            <img
                                className={classes.img}
                                src={icone}
                                alt="nativa"
                                height="30" width="30"
                            />
                        </Avatar>
                        <ListItemText ><Typography noWrap> <b>Folhagem: </b> {this.props.folhagem}</Typography></ListItemText>
                    </ListItem>
                    <Divider inset component="li" />
                    <ListItem>
                        <Avatar>
                            <img
                                className={classes.img}
                                src={icone}
                                alt="nativa"
                                height="30" width="30"
                            />
                        </Avatar>
                        <ListItemText ><Typography noWrap><b>Porte: </b> {this.props.porte}</Typography></ListItemText>
                    </ListItem>
                    <Divider inset component="li" />
                    <ListItem>
                        <Avatar>
                            <img
                                className={classes.img}
                                src={icone}
                                alt="nativa"
                                height="30" width="30"
                            />
                        </Avatar>
                        <ListItemText ><Typography noWrap><b>Gênero: </b> {this.props.genero}</Typography></ListItemText>
                    </ListItem>
                    <Divider inset component="li" />
                    <ListItem>
                        <Avatar>
                            <img
                                className={classes.img}
                                src={icone}
                                alt="nativa"
                                height="30" width="30"
                            />
                        </Avatar>
                        <ListItemText ><Typography noWrap> <b>População: </b> {this.props.populacao}</Typography></ListItemText>
                    </ListItem>
                    <Divider inset component="li" />
                    <ListItem>
                        <Avatar>
                            <img
                                className={classes.img}
                                src={icone}
                                alt="nativa"
                                height="30" width="30"
                            />
                        </Avatar>
                        <ListItemText ><Typography noWrap><b>Época de Floração: </b> {this.props.floracao}</Typography></ListItemText>
                    </ListItem>
                </List>
            </div>
        );
       // */
    }
}

export default withStyles(styles)(DadosEspecie);