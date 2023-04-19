import './App.css';
import React,{useState} from 'react'
import ListaImagenes from './Componentes/ListaImagenes';
import Meme from './Componentes/Meme';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';

function App() {


  const [input, setInput] = useState({
    top:'',
    bottom:''
  })
  const [imgMeme, setImgMeme] = useState({
    src:'',
    alt:''
  })

  const actualizarInput = (e) => {
    setInput(prevInput => ({
      ...prevInput,
      [e.target.name] : e.target.value
    }))
  }

  const actualizarMeme = (e) => {
    setImgMeme({
      src: e.target.src,
      alt: e.target.alt
    })
    setTimeout(()=>{
      const offsetTop = document.querySelector('#meme-seleccionado').offsetTop;
    window.scroll({
      top: offsetTop,
      behavior: "smooth"
    });
    },200)
  }

  return (
    <div className="App">

      <Header />

      <ListaImagenes handleClick={actualizarMeme} />

      <Meme input={input} imgMeme={imgMeme} actualizar={actualizarInput} />

      <Footer />
    </div>
  );
}

export default App;
