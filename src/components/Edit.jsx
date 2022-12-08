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
    axios.get('/api/order/' + this.props.match.params.id)
      .then(res => {
        this.setState({ order: res.data });
        console.log(this.state.order);
      });
  }

  onChange = (e) => {
    const state = this.state.order
    state[e.target.name] = e.target.value;
    this.setState({ order: state });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { date_order, wide, long, high, weight, status_order, pickup_address, pickup_city, recipient_name, recipient_id, recipient_address, recipient_city } = this.state.order;

    axios.put('/api/order/' + this.props.match.params.id, { date_order, wide, long, high, weight, status_order, pickup_address, pickup_city, recipient_name, recipient_id, recipient_address, recipient_city })
      .then((result) => {
        this.props.history.push("/show/" + this.props.match.params.id)
      });
  }

  render() {
    return (
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title"> Gestión de Paquetes </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to={`/show/${this.state.order._id}`}>  &#60; Volver atrás </Link></li>
              <li className="breadcrumb-item"><Link to="/" className="text-warning"> Cerrar sesión </Link></li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Actualización de órden</h4>
                <form className="form-sample" onSubmit={this.onSubmit}>
                  <p className="card-description"> Información y estado de la orden </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label" for="date_order">Fecha - Hora</label>
                        <div className="col-sm-9">
                          <input type="datetime-local" className="form-control" name="date_order" value={this.state.order.date_order} onChange={this.onChange}></input>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="form-group row">
                        <label className="col-sm-4 col-form-label" for="wide">Ancho</label>
                        <div className="col-sm-8">
                          <input type="number" className="form-control" name="wide" value={this.state.order.wide} onChange={this.onChange}></input>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="form-group row">
                        <label className="col-sm-4 col-form-label" for="long">Largo</label>
                        <div className="col-sm-8">
                          <input type="number" className="form-control" name="long" value={this.state.order.long} onChange={this.onChange}></input>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="form-group row">
                        <label className="col-sm-4 col-form-label" for="high">Alto</label>
                        <div className="col-sm-8">
                          <input type="number" className="form-control" name="high" value={this.state.order.high} onChange={this.onChange}></input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-4 col-form-label" for="weight">Peso</label>
                        <div className="col-sm-8">
                          <input type="number" className="form-control" name="weight" value={this.state.order.weight} onChange={this.onChange}></input>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-2 col-form-label" for="status_order">Estado</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" name="status_order" value={this.state.order.status_order} onChange={this.onChange}></input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="card-description"> Información de recogida </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label" for="pickup_address">Dirección recogida</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" name="pickup_address" value={this.state.order.pickup_address} onChange={this.onChange}></input>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label" for="pickup_city">Ciudad recogida</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" name="pickup_city" value={this.state.order.pickup_city} onChange={this.onChange}></input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="card-description"> Información de destino </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label" for="recipient_name">Nombre destinatario</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" name="recipient_name" value={this.state.order.recipient_name} onChange={this.onChange}></input>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label" for="recipient_id">Cédula/NIT destinatario</label>
                        <div className="col-sm-9">
                          <input type="number" className="form-control" name="recipient_id" value={this.state.order.recipient_id} onChange={this.onChange}></input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label" for="recipient_address">Dirección entrega</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" name="recipient_address" value={this.state.order.recipient_address} onChange={this.onChange}></input>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label" for="recipient_city">Ciudad entrega</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" name="recipient_city" value={this.state.order.recipient_city} onChange={this.onChange}></input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <button type="submit" class="btn btn-outline-warning btn-lg btn-block">
                        <i className="mdi mdi-content-save "></i> Guardar </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
