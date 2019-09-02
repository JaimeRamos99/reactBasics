import React from 'react';
import { restaurantes } from '../restaurantes.json';
import { Link } from 'react-router-dom';

class meal extends React.Component {

    constructor(props){
        super(props);
        this.State=({
          id:props.match.params.id
        })
    };
    render() {
        return (
            <React.Fragment>
                {dishes(this.State.id)}
            </React.Fragment>
        );
    }
}
function dishes(id) {
    return (
        <div div className="App">
            {generador(id)}
        </div>

    );
}

function generador(id) {


    const platos = restaurantes.map((r, i) => {
        if (r.id === id) {
            return (
                <div className="row mt-10">
                    {support(r)}
                </div>
            )
        }else{
            return( null)
        }
    })

    return (
        <div className="contenedor">
            {platos}
        </div>
    )
}

function support(r) {
    const products = r.platos.map((rr, ii) => {
        return (
            <div className="card mt-2">
                <React.Fragment>
                <div className="card-header">
                    <h3>{rr.nombre}</h3>
                    <span className="badge badge-pill badge-danger ml-2">
                        {rr.disponible}
                    </span>
                </div>
                <div className="card-body">
                    <img className="App-imagen" src={rr.foto} alt="" />
                    <h4 className="card-title">{rr.precio}</h4>
                    <p className="card-text">{rr.descripcion}</p>
                    <Link  className="btn btn-primary" to="">Comprar</Link>
                </div>
                </React.Fragment>
            </div>
        )
    })
    return (
        <div className="col-md-7" >
            {products}
        </div>
    )

}

export default meal;