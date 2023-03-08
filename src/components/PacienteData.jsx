
function PacienteData({paciente}) {
    var nombre = paciente.nombre;
    var nombreContacto = paciente.nombreContacto;
    var email = paciente.email;
    var alta = paciente.alta;
    var sintomas = paciente.sintomas;
    return(
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl mb-5">
            <p className="font-bold mb-5 text-gray-700 uppercase">
                Nombre: {""}
                <span className="font-normal normal-case">
                    {nombre}
                </span>   
            </p>

            <p className="font-bold mb-5 text-gray-700 uppercase">
                Nombre propietario: {""}
                <span className="font-normal normal-case">
                    {nombreContacto}
                </span>   
            </p>

            <p className="font-bold mb-5 text-gray-700 uppercase">
                Email: {""}
                <span className="font-normal normal-case">
                    {email}
                </span>   
            </p>

            <p className="font-bold mb-5 text-gray-700 uppercase">
                Alta: {""}
                <span className="font-normal normal-case">
                    {alta}
                </span>   
            </p>

            <p className="font-bold mb-5 text-gray-700 uppercase">
                Sintomas: {""}
                <span className="font-normal normal-case">
                    {sintomas}
                </span>   
            </p>
        </div>
    );
}
export default PacienteData;