import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Signup extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  state={
    error:false,
    errorMsg:""
  }    


  getData = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  sendData = (event) =>{

    event.preventDefault();

    const { name, email, password} = this.state;

    if(name === "" || email === "" || password === ""){
      console.log("Casillas vacias")
      this.setState({
        error:true,
        errorMsg:"La casilla o ambas casillas estan vacias"
      })
    }else{
      axios.post('/api/users', { name, email, password })
      .then((result) => {
        if(result.data.Alert === "New Registered User"){
          this.props.history.push("/login")
        }else{
          console.log("result = ",result)
          this.setState({
            error:true,
            errorMsg:"El Usuario Esta Registrado"
          })
        }
      });
    }
  };

    render(){

        const { name, email, password} = this.state;

        return(
            <div className="container-scroller">
            <div className="container-fluid page-body-wrapper full-page-wrapper">
              <div className="row w-100 m-0">
                <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
                  <div className="card col-lg-4 mx-auto">
                    <div className="card-body px-5 py-5">
                      <h3 className="card-title text-left mb-3">Registro</h3>
                      <form onSubmit={this.sendData}>
                        <div className="form-group">
                          <label>Nombre Completo</label>
                          <input value={name} onChange={this.getData} name="name" type="text" className="form-control p_input"></input>
                        </div>
                        <div className="form-group">
                          <label>Correo</label>
                          <input value={email} onChange={this.getData} name="email" type="email" className="form-control p_input"></input>
                        </div>
                        <div className="form-group">
                          <label>Contraseña</label>
                          <input value={password} onChange={this.getData} name="password" type="password" className="form-control p_input"></input>
                        </div>
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary btn-block enter-btn">Registrarse</button>
                        </div>
                        <p className="sign-up text-center">¿Ya tienes cuenta?<Link to="/login" className=""> Iniciar sesión</Link></p>
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
export default Signup;