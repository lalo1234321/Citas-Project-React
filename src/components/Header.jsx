

function Header() {
    return(
        //si el elemento al aplicar un porcentaje de la pantalla con w-1/2 o h1/2 se desfaza, ocupar mx-auto
        //agregar md: para usar mediaquery
        <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
            Seguimiento pacientes {""}
            <span className="text-indigo-500">Veterinaria</span>
        </h1>
        
    );
}

export default Header;