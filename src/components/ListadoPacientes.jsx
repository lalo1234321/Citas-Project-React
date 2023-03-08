import PacienteData from "./PacienteData";

function ListadoPacientes({pacientes}){
    return(
      <div className="md:w-1/2 lg:3/5 ">
        <p className="font-black text-center text-3xl">Listado pacientes</p>
        <p className="text-xl mt-10 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-500 font-bold">
                Pacientes y citas
            </span>
        </p>
        <div className="md:h-screen md:overflow-y-scroll">
            {
                pacientes.map(function(paciente, index){
                    // returns Nathan, then John, then Jane
                    return <PacienteData key={index} paciente={paciente}/>
                  })
            }
            
            
        </div>
        
      </div>
            
    
    );

}

export default ListadoPacientes;