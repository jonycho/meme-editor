import React, {useState, useEffect} from "react"

const ListaImagenes = (props) => {

    const [listaMemes, setListaMemes] = useState([])

useEffect(() => {
    const obtenerMemes = async()=>{
        try{
            const resp = await fetch("https://api.imgflip.com/get_memes")
            if(resp.status === 200){
                const datos = await resp.json();
                const filterBoxes = datos.data.memes.filter(meme => meme.box_count <=2)
                setListaMemes(filterBoxes)
            }
        }catch(err){
            console.log('Error occured when fetching memes');
        }       
    }
    obtenerMemes()        
}, []);



    return (
        <div>
            <h3 className="tituloPasos">Paso 1: Elegí una imagen </h3>
            <div className="contenedor-imagenes">
                {
                    listaMemes.map(meme => 
                       (<img src={meme.url} key={meme.id} alt={meme.name} onClick={props.handleClick} />))
                        
                    
                }
            </div>
        </div>
    );
}

export default ListaImagenes;
