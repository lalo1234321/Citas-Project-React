import {useEffect, useState} from 'react';
import ErrorFormulario from './ErrorComponents/ErrorFormulario';

function Formulario({pacientes,setPacientes}) {
    //usar transition-colors cuando se ocupe hover para hacer el cambio de color no tan repentino
    const [nombre, setNombre] = useState("");
    const [nombreContacto, setNombreContacto] = useState("");
    const [email, setEmail] = useState("");
    const [alta, setAlta] = useState("");
    const [sintomas, setSintomas] = useState("");
    const [error, setError] = useState(false);
    //const [closeErrorMessage, setCloseErrorMessage] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        if([nombre,nombreContacto,email,alta,sintomas].includes('')){
            console.log("Hay almenos un campo vacio");
            setError(true);
        }else{
            console.log("Enviando formulario");
            setError(false);
            var paciente = {
                nombre,
                nombreContacto,
                email,
                alta,
                sintomas
            };
            setPacientes([...pacientes,paciente]);
        }
        
    }
    const [isShow, setIsShow] = useState(true);

    const handleClick = () => {
        setIsShow(!isShow);
        setError(false);
    };
    return(
        <div className="md:w-1/2 lg:2/5">
            
            <p className="font-black text-3xl text-center">Seguimiento de pacientes</p> 
            <h1 className="text-lg mt-10 text-center mb-10">
                Añade pacientes {""}
                <span className="text-indigo-500 font-bold">
                    Administralos
                </span>
            </h1>
            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>
                {error&&<ErrorFormulario handleClick={handleClick}/>}
                <div className="mb-8">
                    <label htmlFor="mascota" className="block uppercase font-bold text-gray-700">Nombre Mascota</label>
                    <input value={nombre} onChange={(e)=>{setNombre(e.target.value)}} id="mascota" type="text" placeholder="Nombre de la mascota" className="border-spacing-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div className="mb-8">
                    <label htmlFor="propietario" className="block uppercase font-bold text-gray-700">Nombre Propietario</label>
                    <input id="propietario" value={nombreContacto} onChange={(e)=>{setNombreContacto(e.target.value)}} type="text" placeholder="Nombre del propietario" className="border-spacing-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div className="mb-8">
                    <label htmlFor="email" className="block uppercase font-bold text-gray-700">Email</label>
                    <input type="email"id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email del propietario" className="border-spacing-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div className="mb-8">
                    <label htmlFor="alta" className="block uppercase font-bold text-gray-700">Alta</label>
                    <input type="date"id="alta" value={alta} onChange={(e)=>{setAlta(e.target.value)}} placeholder="Email del propietario" className="border-spacing-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div className="mb-8">
                    <label htmlFor="sintomas" className="block uppercase font-bold text-gray-700">Sintomas</label>
                    <textarea id="sintomas" value={sintomas} onChange={(e)=>{setSintomas(e.target.value)}} className="border-spacing-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe los sintomas"></textarea>
                </div>
                <input type="submit" className="bg-indigo-500 w-full h-10 text-white font-bold uppercase hover:bg-indigo-600 cursor-pointer transition-colors" value="Agregar paciente"/>
            </form>
        </div>
               
    );
}
export default Formulario;