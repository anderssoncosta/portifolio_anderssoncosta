import './banner.css'

const Banner = () => {
    return(
        
        <div className='container' id='paginainicial'>
            <div className='home'>
                <img className='banner_fundo' src="Imagens/banner_principal.jpg" alt="Banner Principal" />
                <img src="Imagens/logo.png" alt="Logo" className='logo' />

            </div>
                <div className='navegacao'>
                    <a className='link btn' href="#paginainicial">Home</a>
                    <a className='link btn' href="#container_sobremim">Sobre mim</a>
                    <a className='link btn' href="#container_meusprojetosid">Projetos</a>
                    <a className='link btn' href="#container_contato">Contatos</a>
                </div>
        
                <div className='sobre'>
                    <p className='sobremim_texto'>Desenvolvedor Front-end, Desenvolvo pequenos projetos utilizando HTML, CSS, JavaScript e React. 
                    </p>
                </div>

       
            </div>

        

    )
}

export default Banner