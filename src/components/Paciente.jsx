const Paciente = () => {
  return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {' '}
            <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {' '}
            <span className="font-normal normal-case">Abel</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {' '}
            <span className="font-normal normal-case">correo@correo.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta: {' '}
            <span className="font-normal normal-case">10 de julio de 2022</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {' '}
            <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae alias necessitatibus sit nulla similique est obcaecati itaque veniam error accusantium, dolore placeat tenetur qui a? Quaerat accusantium inventore dolor magni.</span>
        </p>
        </div>

  )
}

export default Paciente