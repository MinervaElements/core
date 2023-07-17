"use client";
import Eliezer from "../components/eliezer";
import { useEffect, useState } from "react";
export default function Page(){
  const [ count,setCount ] = useState<number>(0);
  function handleCount(){
    setCount(count + 1);
  }
  useEffect(()=>{
   console.log(fetch("https://pokeapi.co/api/v2/pokemon/ditto").then(result=> result.json()).then(data=> console.log(data))) 
  },[])
  return (
    <>
      <Eliezer mi_apellido="gdfgfd"/>
      <div onClick={handleCount}>
    eliminar tarea
      </div>
      {
        count
      }
    
    </>
  );
}