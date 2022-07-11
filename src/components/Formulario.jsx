import { useState, useEffect } from 'react'

const Formulario = () => {
  const [nombre, setNombre ] = useState('Hook');
  const [propietario, setPropietario ] = useState('Abel');
  const [email, setEmail ] = useState('');
  const [fecha, setFecha ] = useState('');
  const [sintomas, setSintomas ] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviando Formulario');
    
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>Añade Pacientes y <span className='text-indigo-600 font-bold '>administralos</span> </p>  

        <form 
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
          <div className='mb-5'>
            <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>
              Nombre de la mascota
              </label>
            
            <input id='mascota'
             className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md' 
             type="text"
             placeholder='Nombre mascota' 
             value = {nombre}
             onChange = { (e)=> setNombre(e.target.value) }  />
          
          </div>
          <div className='mb-5'>
            <label htmlFor='propietario' 
            className='block text-gray-700 uppercase font-bold' >
              Nombre propietario
            </label>
            <input id='propietario' 
            className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md' 
            type="text" 
            placeholder='Nombre propietario'
            value = {propietario}
            onChange = { (e)=> setPropietario(e.target.value) } />
          
          </div>
          <div className='mb-5'>
            <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>
              e-mail
              </label>
            
            <input id='email' 
            className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md' 
            type="email" placeholder='e-mail contacto propietario'
            value = {email}
            onChange = { (e)=> setEmail(e.target.value) } />
          
          </div>
          <div className='mb-5'>
            <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>
            Fecha de alta
              </label>
            
            <input id='alta' 
            className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md' 
            type="date"
            value = {fecha}
            onChange = { (e)=> setFecha(e.target.value) }   />
          
          </div>
          <div className='mb-5'>
            <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>
            sintomas
              </label>
            <textarea id='sintomas'
            className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md' 
            placeholder='Describe los sintomas...'
            value = {sintomas}
            onChange = { (e)=> setSintomas(e.target.value) } />
          </div>
          <input type='submit' 
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
          value="Agregar Paciente" />

        </form>



    </div>

  )
}

export default Formulario  