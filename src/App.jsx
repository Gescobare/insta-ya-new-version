import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  state = {
    error: false,
    errorMsg: ""
  }

  getData = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  sendData = (event) => {

    event.preventDefault();

    const { email, password } = this.state;

    if (email === "" || password === "") {
      console.log("Rellene todos los campos")
      this.setState({
        error: true,
        errorMsg: "Por favor, rellene todos los campos"
      })
    } else {
      axios.post('/api/sessions', { email, password })
        .then((result) => {
          if (result.data.Alert === "Inicio de sesión exitoso") {
            this.props.history.push("/read")
          } else {
            console.log("result = ", result)
            this.setState({
              error: true,
              errorMsg: "El usuario o contraseña no son válidos"
            })
          }
        });
    }
  };

  render() {

    const { email, password } = this.state;

    return (
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="row w-100 m-0">
            <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
              <div className="card col-lg-4 mx-auto">
                <div className="card-body px-5 py-5">
                  <h3 className="card-title text-left mb-3">Iniciar Sesión</h3>
                  <form onSubmit={this.sendData}>
                    <div className="form-group">
                      <label>Correo *</label>
                      <input value={email} onChange={this.getData} name="email" type="text" className="form-control p_input"></input>
                    </div>
                    <div className="form-group">
                      <label>Contraseña *</label>
                      <input value={password} onChange={this.getData} name="password" type="password" className="form-control p_input"></input>
                    </div>
                    {/* <div className="form-group d-flex align-items-center justify-content-between">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input"></input> Recuérdame </label>
                      </div>
                      <a href="#" className="forgot-pass">Olvidé mi contraseña</a>
                    </div>*/}
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary btn-block enter-btn">Ingresar</button>
                    </div>
                    <p className="sign-up">¿Aún no tienes cuenta? <Link to="/signup" className=""> Regístrate</Link></p>
                    {this.state.error === true &&
                      <div className="alert alert-danger" role="alert">
                        {this.state.errorMsg}
                      </div>
                    }
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
