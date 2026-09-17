import './Avatar.css'

function Avatar(Props){

    const nomes = Props.nome.split(" ");
    console.log(nomes);
    

    const letra = Props.nome[0]
    
    let ultimaLetra = ""
    if(nomes.length > 1) {
        const ultimoNome = nomes.at(-1);
        ultimaLetra = ultimoNome[0];
    }

    return <div className='Avatar_root'>

     {letra}
     {ultimaLetra}
     
    

    </div>;

    
    
}

export default Avatar;