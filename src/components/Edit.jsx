import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      order: {}
    };
  }

  componentDidMount() {
    axios.get('/api/order/'+this.props.match.params.id)
      .then(res => {
        this.setState({ order: res.data });
        console.log(this.state.order);
      });
  }

  onChange = (e) => {
    const state = this.state.order
    state[e.target.name] = e.target.value;
    this.setState({order:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { date_order, wide, long, high, status_order, pickup_address, pickup_city, recipient_name, recipient_id, recipient_address, recipient_city  } = this.state.order;

    axios.put('/api/order/'+this.props.match.params.id, { date_order, wide, long, high, status_order, pickup_address, pickup_city, recipient_name, recipient_id, recipient_address, recipient_city })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Editar orden
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.order._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Volver atrás</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="isbn">Fecha - Hora:</label>
                <input type="text" class="form-control" name="date_order" value={this.state.order.date_order} onChange={this.onChange} placeholder="Fecha - Hora" />
              </div>
              <div class="form-group">
                <label for="title">Ancho:</label>
                <input type="number" class="form-control" name="wide" value={this.state.order.wide} onChange={this.onChange} placeholder="Ancho" />
              </div>
              <div class="form-group">
                <label for="title">Largo:</label>
                <input type="number" class="form-control" name="long" value={this.state.order.long} onChange={this.onChange} placeholder="Largo" />
              </div>
              <div class="form-group">
                <label for="title">Alto:</label>
                <input type="number" class="form-control" name="high" value={this.state.order.high} onChange={this.onChange} placeholder="Alto" />
              </div>
              <div class="form-group">
                <label for="author">Estado:</label>
                <input type="text" class="form-control" name="status_order" value={this.state.order.status_order} onChange={this.onChange} placeholder="Estado" />
              </div>
              <div class="form-group">
                <label for="author">Dirección de recogida:</label>
                <input type="text" class="form-control" name="pickup_address" value={this.state.order.pickup_address} onChange={this.onChange} placeholder="Dirección de recogida" />
              </div>
              <div class="form-group">
                <label for="author">Ciudad de recogida:</label>
                <input type="text" class="form-control" name="pickup_city" value={this.state.order.pickup_city} onChange={this.onChange} placeholder="Ciudad de recogida" />
              </div>
              <div class="form-group">
                <label for="author">Nombre destinatario:</label>
                <input type="text" class="form-control" name="recipient_name" value={this.state.order.recipient_name} onChange={this.onChange} placeholder="Nombre destinatario" />
              </div>
              <div class="form-group">
                <label for="author">Cédula destinatario:</label>
                <input type="number" class="form-control" name="recipient_id" value={this.state.order.recipient_id} onChange={this.onChange} placeholder="Cédula destinatario" />
              </div>
              <div class="form-group">
                <label for="author">Dirección de entrega:</label>
                <input type="text" class="form-control" name="recipient_address" value={this.state.order.recipient_address} onChange={this.onChange} placeholder="Dirección de entrega" />
              </div>
              <div class="form-group">
                <label for="author">Ciudad de entrega:</label>
                <input type="text" class="form-control" name="recipient_city" value={this.state.order.recipient_city} onChange={this.onChange} placeholder="Ciudad de entrega" />
              </div>
              <button type="submit" class="btn btn-default">Guardar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
