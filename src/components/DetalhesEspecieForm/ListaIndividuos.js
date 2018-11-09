import React, { Component } from 'react';
import { render } from 'react-dom';

import Typography from "@material-ui/core/Typography";
import Map from './map';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {geolocated} from 'react-geolocated';
import TextField from "@material-ui/core/TextField";
import {listIndividuosByEspecie} from "services/especies/especies";


const refs = {};
class ListaIndividuos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
        lat: 0,
        long: 0,
        isMarkerShown: false,
        imagensUpload: [],
        imagens: [],
        especies:{},
      step: 0,
    }
  }


componentDidMount() {
    this.showCurrentLocation();
    
}


showCurrentLocation = async () => {
    var indiv = await listIndividuosByEspecie(this.props.id);
    
    if (navigator.geolocation) {
        
      navigator.geolocation.getCurrentPosition(
        position => {
           
          this.setState({
              indiv,
              lat: position.coords.latitude,
              long: position.coords.longitude,
              isMarkerShown: true
          })
          console.log(this.state);
        }
        
      ), { maximumAge: Infinity, timeout: 5000, enableHighAccuracy: true }
    } else {
      console.log("error")
    }

  }
  onMarkerMounted = ref => {
    refs.marker = ref;

  }


  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
      <React.Fragment>

      <Typography variant="caption" gutterBottom>
          Selecione a localização do individuo a ser cadastrado. Você pode alterar a localização como quiser!
        </Typography>
        
        <div>
          <Map
            isMarkerShown={this.state.isMarkerShown}
            lat={this.state.lat}
            long={this.state.long}
            onMarkerMounted={this.onMarkerMounted}
            individuos={this.state.indiv}
            />
        </div>
      </React.Fragment>
    );
  }
}



export default ListaIndividuos












