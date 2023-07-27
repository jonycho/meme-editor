import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <div className='fondo-transparente'>
                <h1>Editor de memes</h1>
                <div className='contenedor-info-header'>
                    <div className='contenedor-explicacion'>
                        <h2>Instrucciones</h2>
                        <p><span>Paso 1:</span> Elegí una imagen</p>
                        <p><span>Paso 2:</span> Escribir el texto superior y el inferior</p>
                        <p><span>Paso 3:</span> Descargar el meme</p>
                    </div>
                    <img src='./imagenes/kid-header.png' alt='Kid header' className='kid-header' />
                </div>
            </div>
        </div>
    );
}

export default Header;
