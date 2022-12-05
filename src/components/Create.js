import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      date_order: '',
      wide: '',
      long: '',
      high: '',
      status_order: '',
      pickup_address: '',
      pickup_city: '',
      recipient_name: '',
      recipient_id: '',
      recipient_address: '',
      recipient_city: '',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { date_order, wide, long, high, status_order, pickup_address, pickup_city, recipient_name, recipient_id, recipient_address, recipient_city } = this.state;

    axios.post('/api/order', { date_order, wide, long, high, status_order, pickup_address, pickup_city, recipient_name, recipient_id, recipient_address, recipient_city })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { date_order, wide, long, high, status_order, pickup_address, pickup_city, recipient_name, recipient_id, recipient_address, recipient_city } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Crear nueva orden
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Lista de órdenes</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="date_order">Fecha - Hora:</label>
                <input type="text" class="form-control" name="date_order" value={date_order} onChange={this.onChange} placeholder="Fecha - Hora" />
              </div>
              <div class="form-group">
                <label for="wide">Ancho:</label>
                <input type="number" class="form-control" name="wide" value={wide} onChange={this.onChange} placeholder="Ancho" />
              </div>
              <div class="form-group">
                <label for="long">Largo:</label>
                <input type="number" class="form-control" name="long" value={long} onChange={this.onChange} placeholder="Largo" />
              </div>
              <div class="form-group">
                <label for="high">Alto:</label>
                <input type="number" class="form-control" name="high" value={high} onChange={this.onChange} placeholder="Alto" />
              </div>
              <div class="form-group">
                <label for="status_order">Estado:</label>
                <input type="text" class="form-control" name="status_order" value={status_order} onChange={this.onChange} placeholder="Estado" />
              </div>
              <div class="form-group">
                <label for="pickup_address">Dirección de recogida:</label>
                <input type="text" class="form-control" name="pickup_address" value={pickup_address} onChange={this.onChange} placeholder="Dirección de recogida" />
              </div>
              <div class="form-group">
                <label for="pickup_city">Ciudad de recogida:</label>
                <input type="text" class="form-control" name="pickup_city" value={pickup_city} onChange={this.onChange} placeholder="Ciudad de recogida" />
              </div>
              <div class="form-group">
                <label for="recipient_name">Nombre destinatario:</label>
                <input type="text" class="form-control" name="recipient_name" value={recipient_name} onChange={this.onChange} placeholder="Nombre destinatario" />
              </div>
              <div class="form-group">
                <label for="recipient_id">Cédula destinatario:</label>
                <input type="text" class="form-control" name="recipient_id" value={recipient_id} onChange={this.onChange} placeholder="Cédula destinatario" />
              </div>
              <div class="form-group">
                <label for="recipient_address">Dirección de entrega:</label>
                <input type="text" class="form-control" name="recipient_address" value={recipient_address} onChange={this.onChange} placeholder="Dirección de entrega" />
              </div>
              <div class="form-group">
                <label for="recipient_city">Ciudad de entrega:</label>
                <input type="text" class="form-control" name="recipient_city" value={recipient_city} onChange={this.onChange} placeholder="Ciudad de entrega" />
              </div>
              <button type="submit" class="btn btn-default">Guardar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
