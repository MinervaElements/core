interface Iprops{
  mi_apellido:string;
}

export default function Eliezer( {mi_apellido} :Iprops){
  return (
    <>Eliezer componente {mi_apellido} </>
  );
}

export function Rodrigo(){
  return (
    <>Rodrigo</>
  );
}