import Ex05 from "./Ex05";
import Ex06 from "./Ex06";
import Ex07 from "./Ex07";
import Ex08 from "./Ex08";

const Ex03 = () => {
    return (
        <Ex08 className="formContainer">
            <form className="formulario">

                <Ex07 container rowSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }} >
                    <Ex07 item xs={12} sm={12} md={12} lg={12}>
                        <h2 className="title">Cadastro</h2>
                    </Ex07>
                    <Ex07 item xs={12} sm={12} md={12} lg={12}>
                        <Ex06 label="Email" inputType="email" labelColor="white" inputPlaceholder="Insira seu email" />
                    </Ex07>
                    <Ex07 item xs={12} sm={12} md={12} lg={12}>
                        <Ex06 label="Nome" inputType="text" labelColor="white" inputPlaceholder="Insira seu nome" />
                    </Ex07>
                    <Ex07 item xs={12} sm={12} md={12} lg={12}>
                        <Ex06 label="Sobrenome" inputType="text" labelColor="white" inputPlaceholder="Insira seu sobrenome" />
                    </Ex07>
                    <Ex07 item xs={12} sm={12} md={12} lg={12}>
                        <Ex06 label="CPF" inputType="number" labelColor="white" inputPlaceholder="Insira seu CPF (apenas números)" />
                    </Ex07>
                    <Ex07 item xs={12} sm={12} md={12} lg={12}>
                        <Ex06 label="RG" inputType="number" labelColor="white" inputPlaceholder="Insira seu RG (apenas números)" />
                    </Ex07>
                    <Ex07 item xs={12} sm={12} md={12} lg={12}>
                        <Ex06 label="Data de Nascimento" inputType="date" labelColor="white" inputPlaceholder="Insira sua data de nascimento" />
                    </Ex07>
                    <Ex07 item xs={12} sm={12} md={12} lg={12}>
                        <Ex06 label="Foto" inputType="file" labelColor="white" />
                    </Ex07>
                    <Ex07 item xs={12} sm={12} md={12} lg={12} container justifyContent="center">
                        <Ex07 item>
                            <Ex05 texto="Enviar" />
                        </Ex07>
                    </Ex07>
                </Ex07>
            </form>
        </Ex08>
    )
}

export default Ex03;