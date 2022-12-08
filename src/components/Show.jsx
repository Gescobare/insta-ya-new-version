import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

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

  delete(id){
    console.log(id);
    axios.delete('/api/order/'+id)
      .then((result) => {
        this.props.history.push("/read")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              {this.state.order.title}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/read"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Lista de órdenes</Link></h4>
            <dl>
              <dt>Fecha - Hora:</dt>
              <dd>{this.state.order.date_order}</dd>
              <dt>Ancho:</dt>
              <dd>{this.state.order.wide}</dd>
              <dt>Largo:</dt>
              <dd>{this.state.order.long}</dd>
              <dt>Alto:</dt>
              <dd>{this.state.order.high}</dd>
              <dt>Peso:</dt>
              <dd>{this.state.order.weight}</dd>
              <dt>Estado:</dt>
              <dd>{this.state.order.status_order}</dd>
              <dt>Dirección de recogida:</dt>
              <dd>{this.state.order.pickup_address}</dd>
              <dt>Ciudad de recogida:</dt>
              <dd>{this.state.order.pickup_city}</dd>
              <dt>Nombre destinatario:</dt>
              <dd>{this.state.order.recipient_name}</dd>
              <dt>Cédula destinatario:</dt>
              <dd>{this.state.order.recipient_id}</dd>
              <dt>Dirección de entrega:</dt>
              <dd>{this.state.order.recipient_address}</dd>
              <dt>Ciudad de entrega:</dt>
              <dd>{this.state.order.recipient_city}</dd>
            </dl>
            <Link to={`/edit/${this.state.order._id}`} class="btn btn-success">Editar</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.order._id)} class="btn btn-danger">Borrar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
