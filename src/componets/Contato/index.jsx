import './Contato.css'

const Contato = () => {
    return (
        <div className="container_contato" id='container_contato'>
            <div className="contatos">
                <h1>Entre em contato !</h1>
                <p>Orçamentos ou proposta de trabalho.</p>
                <p>Tel.:(85) 9 8857 4730</p>
                <p>E-mail: anderssoncosta6@gmail.com</p>

                <div className="redes_sociais">
                    <a className="icon_redes_sociais" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/anderssoncostaa/"><i class="fa-brands fa-instagram"></i></a>
                    <a className="icon_redes_sociais" target="_blank" rel="noopener noreferrer" href="mailto:anderssoncosta6@gmail.com"><i class="fa-regular fa-envelope"></i></a>
                    <a className="icon_redes_sociais" target="_blank" rel="noopener noreferrer" href="https://github.com/anderssoncosta"><i class="fa-brands fa-github"></i></a>
                    <a className="icon_redes_sociais" target="_blank" rel="noopener noreferrer" href="https://wa.me/5585988574730"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
            </div>
            <div className='container_formulario'>
                <form action="" className='formulario_contato'>
                    <input className='campo_texto_formulario' type="text" placeholder="Digite seu nome" />
                    <input className='campo_texto_formulario' type="text"  placeholder="Digite seu e-mail"/>
                    <input className='campo_texto_formulario' type="tel"  placeholder="Digite seu telefone"/>
                    <button className='btn_enviar'>Enviar</button>
                </form>
            </div>

        </div>
    )
}

export default Contato