import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  state = {
    data: {
      restaurantes: [],
    },
    loading: true,
    error: null
  }
  componentDidMount() {
    this.fetchmeals()
  }

  fetchmeals = async () => {
    const respuesta = await fetch('http://192.168.56.1:3000');
    const data = await respuesta.json();
    this.setState({ data: data })

  }

  render() {

    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            {
              this.state.data.restaurantes.map(r => (
                <div className="col-md-4">
                  <div className="card mt-4">

                    <div className="card-header">
                      <h3>{r.nombre}</h3>
                    </div>

                    <div className="card-body">
                      <img className="App-imagen" src={r.foto} alt="" />
                    </div>

                    <div className="card-footer">
                      <h5>{r.ubicacion}</h5>
                    </div>

                    <Link className="App-button" to={'/dishes/' + r.id}>
                      <button className="btn btn-primary btn-lg btn-block">ver ofertas</button>
                    </Link>

                  </div>
                </div>
              )
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
/*const restaurants = restaurantes.map((r, i) => {
  return (
 
    <div className="col-md-4">
      <div className="card mt-4">
 
        <div className="card-header">
          <h3>{r.nombre}</h3>
        </div>
 
        <div className="card-body">
          <img className="App-imagen" src={r.foto} alt="" />
        </div>
 
        <div className="card-footer">
          <h5>{r.ubicacion}</h5>
        </div>
 
        <Link className="App-button" to={'/dishes/' + r.id}>
          <button className="btn btn-primary btn-lg btn-block">ver ofertas</button>
        </Link>
 
      </div>
    </div>
  )
})*/