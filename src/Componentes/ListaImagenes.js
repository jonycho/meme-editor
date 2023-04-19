const ListaImagenes = (props) => {
    return (
        <div>
            <h3 className="tituloPasos">Paso 1: Elegí una imagen </h3>
            <div className="contenedor-imagenes">
                <img src='./imagenes/1.jpg' alt="spider-man" onClick={props.handleClick} />
                <img src='./imagenes/2.jpg' alt="dicaprio" onClick={props.handleClick} />
                <img src='./imagenes/3.jpg' alt="dicaprio 2" onClick={props.handleClick} />
                <img src='./imagenes/4.jpg' alt="rick" onClick={props.handleClick} />
                <img src='./imagenes/5.jpg' alt="think" onClick={props.handleClick} />
                <img src='./imagenes/6.jpg' alt="probabilities" onClick={props.handleClick} />
                <img src='./imagenes/7.jpg' alt="burning girl" onClick={props.handleClick} />
            </div>
        </div>
    );
}

export default ListaImagenes;
