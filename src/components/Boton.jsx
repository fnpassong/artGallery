import '../scss/stylos/boton.scss';


export const Boton = ({datero}) => {
  console.log(datero)
  return (
   <div className="title">
       <p> {datero.texto} </p>
       <img src= {datero.icon} alt="" /> 
   </div>
  )
}
