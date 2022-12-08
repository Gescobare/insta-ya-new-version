import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Read extends Component {

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
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title"> Gestión de Paquetes </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/create" className="text-success"> Crear nueva orden </Link></li>
              <li className="breadcrumb-item"><Link to="/" className="text-warning"> Cerrar sesión </Link></li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Listado de órdenes</h4>
                <div className="table-responsive">
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
                      {this.state.orders.map(order => <tr>
                        <td class="id-order"><Link to={`/show/${order._id}`}>{order._id}</Link></td>
                        <td>{order.date_order}</td>
                        <td>{order.recipient_city}</td>
                        <td>{order.recipient_address}</td>
                        <td><label className="badge badge-success">{order.status_order}</label></td>
                      </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Read;
