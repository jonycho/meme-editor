import React from 'react';
import html2canvas from 'html2canvas';




const Meme = ({input, imgMeme, actualizar}) => {

    const descargar = (e)=>{
        html2canvas(document.querySelector(".meme")).then(function(canvas) {
            // document.body.appendChild(canvas);
            let img = canvas.toDataURL("imagenes/jpg")
            let link = document.createElement("a")
            link.download = "meme_creado.jpg"
            link.href = img
            link.click()
        });
    }

    const handleColor = (e)=>{
        if(e.target.name==="topColor"){
            document.querySelector(".top").style.color = e.target.value
        }else{
            document.querySelector(".bottom").style.color = e.target.value
        }
    }

    const alineacionTexto = (e)=>{
        document.querySelector(`.${e.target.dataset.input}`).style.textAlign = e.target.dataset.align
    }


    return (
        <>
        {imgMeme.src !=='' &&
        <div>
            <h3 className="tituloPasos" id='meme-seleccionado'>Paso 2: Escribir el texto superior y el inferior</h3>
            <div className="contenedor-meme">
                <div className='contenedor-input'>
                    <div>
                        <input type="text" placeholder='Ingresar Texto Superior' value={input.top} name='top' onChange={actualizar} /> 
                        <div className='contenedor-color-alineacion'>
                            <input type='color' name="topColor" onChange={handleColor} />
                            <i className="fa-solid fa-align-left btn-align" data-input="top" data-align="left" onClick={alineacionTexto}></i>
                            <i className="fa-solid fa-align-center btn-align" data-input="top" data-align="center" onClick={alineacionTexto}></i>
                            <i className="fa-solid fa-align-right btn-align" data-input="top" data-align="right" onClick={alineacionTexto}></i>
                        </div>
                    </div>
                    <div>
                        <input type="text" placeholder='Ingresar Texto Inferior' value={input.bottom} name='bottom' onChange={actualizar} />
                        <div className='contenedor-color-alineacion'>
                        <input type='color' name="bottomColor" onChange={handleColor} />
                            <i className="fa-solid fa-align-left btn-align" data-input="bottom" data-align="left" onClick={alineacionTexto}></i>
                            <i className="fa-solid fa-align-center btn-align" data-input="bottom" data-align="center" onClick={alineacionTexto}></i>
                            <i className="fa-solid fa-align-right btn-align" data-input="bottom" data-align="right" onClick={alineacionTexto}></i>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='meme-container'>
                <div className="meme">
                    <img src={imgMeme.src} alt={imgMeme.alt} className="meme--image" />
                    <h2 className="meme--text top">{input.top}</h2>
                    <h2 className="meme--text bottom">{input.bottom}</h2>
                </div>
             </div>
                
                <h3 className="tituloPasos">Paso 3: Descargar el meme</h3>
                <div className='contenedor-meme'>
                    <button onClick={descargar}>Descargar meme</button>
                </div>
            </div>
                }
        </>
    );
}

export default Meme;
