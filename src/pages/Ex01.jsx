const Ex01 = () => {
    return (
        <div className="formContainer">
            <form className="formulario">
                <h2 className="title">Login</h2>
                <label htmlFor="email" className="label labelEmail">Email</label>
                <input type="email" id="email" className="input inputEmail" />
                <label htmlFor="senha" className="label labelSenha">Senha</label>
                <input type="password" id="senha" className="input inputSenha" />
                <input type="button" className="btnSubmit" value="Entrar" />
            </form>
        </div>
    )
}

export default Ex01;