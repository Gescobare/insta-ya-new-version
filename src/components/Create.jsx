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
      weight: '',
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

    const { date_order, wide, long, high, weight, status_order, pickup_address, pickup_city, recipient_name, recipient_id, recipient_address, recipient_city } = this.state;

    axios.post('/api/order', { date_order, wide, long, high, weight, status_order, pickup_address, pickup_city, recipient_name, recipient_id, recipient_address, recipient_city })
      .then((result) => {
        this.props.history.push("/read")
      });
  }

  render() {
    const { date_order, wide, long, high, weight, status_order, pickup_address, pickup_city, recipient_name, recipient_id, recipient_address, recipient_city } = this.state;
    return (
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title"> Gestión de Paquetes </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/read" className=""> &#60; Volver atrás </Link></li>
              <li className="breadcrumb-item"><Link to="/" className="text-warning"> Cerrar sesión </Link></li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Registro de órdenes</h4>
                <form className="form-sample" onSubmit={this.onSubmit}>
                  <p className="card-description"> Información y estado de la orden </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label" for="date_order">Fecha - Hora</label>
                        <div className="col-sm-9">
                          <input type="datetime-local" className="form-control" name="date_order" value={date_order} onChange={this.onChange}></input>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="form-group row">
                        <label className="col-sm-4 col-form-label" for="wide">Ancho</label>
                        <div className="col-sm-8">
                          <input type="number" className="form-control" name="wide" value={wide} onChange={this.onChange}></input>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="form-group row">
                        <label className="col-sm-4 col-form-label" for="long">Largo</label>
                        <div className="col-sm-8">
                          <input type="number" className="form-control" name="long" value={long} onChange={this.onChange}></input>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="form-group row">
                        <label className="col-sm-4 col-form-label" for="high">Alto</label>
                        <div className="col-sm-8">
                          <input type="number" className="form-control" name="high" value={high} onChange={this.onChange}></input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label" for="weight">Peso</label>
                        <div className="col-sm-9">
                          <input type="number" className="form-control" name="weight" value={weight} onChange={this.onChange} placeholder="kg"></input>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-2 col-form-label" for="status_order">Estado</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" name="status_order" value={status_order} onChange={this.onChange}></input>
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
                          <input type="text" className="form-control" name="pickup_address" value={pickup_address} onChange={this.onChange} placeholder="Dirección de recogida"></input>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label" for="pickup_city">Ciudad recogida</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" name="pickup_city" value={pickup_city} onChange={this.onChange} placeholder="Ciudad de recogida"></input>
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
                          <input type="text" className="form-control" name="recipient_name" value={recipient_name} onChange={this.onChange} placeholder="Nombre destinatario"></input>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label" for="recipient_id">Cédula/NIT destinatario</label>
                        <div className="col-sm-9">
                          <input type="number" className="form-control" name="recipient_id" value={recipient_id} onChange={this.onChange} placeholder="Cédula destinatario"></input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label" for="recipient_address">Dirección entrega</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" name="recipient_address" value={recipient_address} onChange={this.onChange} placeholder="Dirección de entrega"></input>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label" for="recipient_city">Ciudad entrega</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" name="recipient_city" value={recipient_city} onChange={this.onChange} placeholder="Ciudad de entrega"></input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <button type="submit" class="btn btn-outline-success btn-lg btn-block">
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

export default Create;
