import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }

  componentDidMount() {
    axios.get('/api/order')
      .then(res => {
        this.setState({ orders: res.data });
        console.log(this.state.orders);
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Lista de órdenes
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Crear nueva orden</Link></h4>
            <h4><Link to="/signup"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Registrarse</Link></h4>
            <h4><Link to="/login"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Ingresar</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Fecha</th>
                  <th>Ciudad Destino</th>
                  <th>Dirección Entrega</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {this.state.orders.map(order =>
                  <tr>
                    <td class="id-order"><Link to={`/show/${order._id}`}>{order._id}</Link></td>
                    <td>{order.date_order}</td>
                    <td>{order.recipient_city}</td>
                    <td>{order.recipient_address}</td>
                    <td>{order.status_order}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
