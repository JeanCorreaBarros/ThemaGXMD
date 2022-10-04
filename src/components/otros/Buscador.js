import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import './styles.css';
import { BiPlusCircle } from "react-icons/bi";


const Buscador = () => {


  const [usuarios, setUsuarios] = useState(false);
  const [tablaUsuarios, setTablaUsuarios] = useState(false);
  const [busqueda, setBusqueda] = useState("");
 


  const peticiones = async ()=>{
    await fetch("https://jsonplaceholder.typicode.com/users/")
    .then(response => response.json())
    .then(json =>{
      setUsuarios(json)
      setTablaUsuarios(json)
      console.log(json)
    }) 
    .catch(error=>{
      console.log(error);
    })
  }



  const handleBuscador = (e)=>{
    setBusqueda(e.target.value)
    filtrar(e.target.value)
  } 

  const filtrar =(terminodebusqueda)=>{
    let resultado = tablaUsuarios.filter((ele)=>{
      if(ele.name.toString().toLowerCase().includes(terminodebusqueda.toLowerCase())){
        return ele;
      }
    });
    setUsuarios(resultado);
  }


  useEffect(()=>{
    peticiones();
  },[])
   

  return (
    <>
    <div className='buscador'>
      <input onChange={handleBuscador} type="text" placeholder='Buscar documento y mas . . .' required ></input>
    </div>
    <div className={`result  ${busqueda?"": "hidden"}`}>
        <div className='result-container'>
        {usuarios && usuarios.map((usuario)=>(
          <a className="result-container-options" href='https://www.youtube.com/'> {usuario.name}</a>

        ))}
        </div>
    </div>
    </>
  )
}

export default Buscador 