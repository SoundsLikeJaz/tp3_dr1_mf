import styled from "styled-components";

const Ex05 = ({ texto = "Enviar" }) => {

    const StyledButton = styled.button`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3rem;
        width: 10rem;
        background-color: rgb(37 99 235);
        border-radius: 0.25rem;
        margin-top: 2rem;
        font-size: 0.875rem;
        color: rgb(219 234 254);
        &:hover {
            background-color: rgb(29 78 216);
        }
    `;

    return (
        <>
            <StyledButton>
                {texto}
            </StyledButton>
        </>
    );
}

export default Ex05;