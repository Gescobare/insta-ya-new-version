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
    axios.get('/api/order/' + this.props.match.params.id)
      .then(res => {
        this.setState({ order: res.data });
        console.log(this.state.order);
      });
  }

  delete(id) {
    console.log(id);
    axios.delete('/api/order/' + id)
      .then((result) => {
        this.props.history.push("/read")
      });
  }

  render() {
    return (
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title"> Gestión de Paquetes </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/read">  &#60; Volver atrás </Link></li>
              <li className="breadcrumb-item"><Link to="/" className="text-warning"> Cerrar sesión </Link></li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <p className="card-description"> Información y estado de la orden </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" for="date_order">Fecha - Hora</label>
                      <div className="col-sm-9">
                        <input type="datetime-local" className="form-control" name="date_order" value={this.state.order.date_order} disabled></input>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" for="wide">Ancho</label>
                      <div className="col-sm-8">
                        <input type="number" className="form-control" name="wide" value={this.state.order.wide} disabled></input>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" for="long">Largo</label>
                      <div className="col-sm-8">
                        <input type="number" className="form-control" name="long" value={this.state.order.long} disabled></input>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" for="high">Alto</label>
                      <div className="col-sm-8">
                        <input type="number" className="form-control" name="high" value={this.state.order.high} disabled></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label" for="weight">Peso</label>
                      <div className="col-sm-8">
                        <input type="number" className="form-control" name="weight" value={this.state.order.weight} disabled></input>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label" for="status_order">Estado</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="status_order" value={this.state.order.status_order} disabled></input>
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
                        <input type="text" className="form-control" name="pickup_address" value={this.state.order.pickup_address} disabled></input>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" for="pickup_city">Ciudad recogida</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" name="pickup_city" value={this.state.order.pickup_city} disabled></input>
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
                        <input type="text" className="form-control" name="recipient_name" value={this.state.order.recipient_name} disabled></input>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" for="recipient_id">Cédula/NIT destinatario</label>
                      <div className="col-sm-9">
                        <input type="number" className="form-control" name="recipient_id" value={this.state.order.recipient_id} disabled></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" for="recipient_address">Dirección entrega</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" name="recipient_address" value={this.state.order.recipient_address} disabled></input>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" for="recipient_city">Ciudad entrega</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" name="recipient_city" value={this.state.order.recipient_city} disabled></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <Link to={`/edit/${this.state.order._id}`} class="btn btn-outline-warning btn-lg btn-block"><i className="mdi mdi-content-save "></i>Editar</Link>
                  </div>
                  <div className="col-md-3">
                    {/*<button onClick={this.delete.bind(this, this.state.order._id)} class="btn btn-outline-danger btn-lg btn-block">
                      <i className="mdi mdi-delete"></i>Borrar</button>*/}
                    <a type="button" class="btn btn-outline-danger btn-lg btn-block" data-toggle="modal" id="#delete"
                      data-target="#delete">
                      <i className="mdi mdi-delete"></i>Borrar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="delete">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">
                ¿Está seguro que desea eliminar la orden?
              </div>
              <div class="modal-footer">
                <button onClick={this.delete.bind(this, this.state.order._id)} class="btn btn-danger btn-fw" data-dismiss="modal">
                  <i className="mdi mdi-delete"></i>Borrar</button>
                <button class="btn btn-inverse-primary btn-fw" data-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
