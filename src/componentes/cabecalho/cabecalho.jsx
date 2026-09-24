import Avatar from '../Avatar/Avatar'
import './Cabecalho.css'

function Cabecalho() {


    return <header className='Cabecalho_root'>
    <div className='Cabecalho_root'>
        <img src="/favicon.svg" 
            style={{
                width:"45px",
                height:"100%"
            }}
        />
    </div>
    Cabeçalho
    
   <Avatar 
   nome="Teus Garcia"
   />
   
    
    </header>
}

export default Cabecalho