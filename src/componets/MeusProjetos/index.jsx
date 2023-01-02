import './MeusProjetos.css'

const MeusProjetos = () => {
    return(
        
        <div className='container_meusprojetos' id='container_meusprojetosid'>
            <h1 className='titulo_meusprojetos'>Meus Projetos</h1>
            
            <div className='container_projeto_imagem'>

                <div className='imagens_projetos'>
                    <img className='img_projeto' src="Imagens/site-intesp.jpg" alt="Projeto IntEsp" />
                    <a className='titulo_img_projeto' href="https://site-intesp-react.vercel.app/" target="_blank" rel="noopener noreferrer">Acessar</a>

                </div>
                <div className='imagens_projetos'>
                    <img className='img_projeto' src="Imagens/site-alura-space.jpg" alt="Projeto Alura Cursos" />
                    <a className='titulo_img_projeto' href="https://alura-spacee.vercel.app/" target="_blank" rel="noopener noreferrer">Acessar</a>
                    
                </div>
                <div className='imagens_projetos'>
                    <img className='img_projeto' src="Imagens/site-alura-combo.jpg" alt="Projeto Alura Combo" />
                    <a className='titulo_img_projeto' href="https://aluraplus-lyart-seven.vercel.app/" target="_blank" rel="noopener noreferrer">Acessar</a>
                    
                </div>
            </div>
        </div>
    )
}

export default MeusProjetos