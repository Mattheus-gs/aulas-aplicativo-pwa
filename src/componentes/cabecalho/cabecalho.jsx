import Avatar from '../Avatar/Avatar'
import './Cabecalho.css'

function Cabecalho() {


    return <header className='Cabecalho_root'>Cabeçalho........
    <div className='Cabecalho_root'>
        <img src="/favicon.svg" 
            style={{
                width:"45px",
                height:"100%"
            }}
        />
    </div>
    
   <Avatar 
   nome="Teus Garcia"
   />
   
    
    </header>
}

export default Cabecalho