// import styled from "styled-components";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useState } from "react";

// const StyledInput = styled.input`
//   display: flex;
//   align-items: center;
//   height: 3rem;
//   width: 16rem;
//   background-color: rgb(156 163 175);
//   margin-top: 0.5rem;
//   border-radius: 0.25rem;
//   font-size: 1.2rem;
//   color: ${(props) => props.inputColor};
//   &:focus {
//     outline: none;
//     box-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
//   }
//   &::placeholder {
//     color: ${(props) => props.placeholderColor};
//   }
// `;

// const StyledTextarea = styled.textarea`
//   height: 9rem;
//   width: 16rem;
//   background-color: rgb(156 163 175);
//   margin-top: 0.5rem;
//   border-radius: 0.25rem;
//   font-size: 1.2rem;
//   color: ${(props) => props.inputColor};
//   &:focus {
//     outline: none;
//     box-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
//   }
//   &::placeholder {
//     color: ${(props) => props.placeholderColor};
//   }
// `;

// const StyledLabel = styled.label`
//   margin-top: 0.75rem;
//   color: ${(props) => props.labelColor};
//   font-weight: bold;
// `;

// const Ex06 = ({ inputColor = "white", labelColor = "black", placeholderColor = "lightgray", label = "Label", inputType = "text", inputPlaceholder }) => {
//     const [senhaVisivel, setSenhaVisivel] = useState(false);
//     const [inputValue, setInputValue] = useState('');

//     const toggleSenhaVisivel = () => {
//         setSenhaVisivel(!senhaVisivel);
//     };

//     const handleInputChange = (event) => {
//         setInputValue(event.target.value);
//     };

//     function handleInput(inputType) {
//         if (inputType === "textarea") {
//             return (
//                 <StyledTextarea
//                     inputColor={inputColor}
//                     placeholder={inputPlaceholder}
//                     placeholderColor={placeholderColor}
//                 />
//             );
//         } else if (inputType === "password") {
//             return (
//                 <div style={{ display: "grid" }}>
//                     <StyledInput
//                         type={senhaVisivel ? 'text' : 'password'}
//                         placeholder={inputPlaceholder}
//                         placeholderColor={placeholderColor}
//                         value={inputValue}
//                         onChange={handleInputChange}
//                         inputColor={inputColor}
//                     />
//                     <div
//                         style={{
//                             fontSize: "2rem",
//                             position: "absolute",
//                             justifySelf: "flex-end",
//                             top: "1.5em",
//                             cursor: "pointer",
//                             paddingRight: "0.2em"
//                         }}
//                     >
//                         {senhaVisivel ? <FaEyeSlash onClick={toggleSenhaVisivel} /> : <FaEye onClick={toggleSenhaVisivel} />}
//                     </div>
//                 </div>
//             );
//         } else if (inputType === "file") {
//             return (
//                 <StyledInput
//                     type={inputType}
//                     value={inputValue}
//                     onChange={handleInputChange}
//                     inputColor={inputColor}
//                 />
//             );
//         } else {
//             return (
//                 <StyledInput
//                     type={inputType}
//                     placeholder={inputPlaceholder}
//                     placeholderColor={placeholderColor}
//                     value={inputValue}
//                     onChange={handleInputChange}
//                     inputColor={inputColor}
//                 />
//             );
//         }
//     }

//     return (
//         <div style={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "16rem" }}>
//             <StyledLabel labelColor={labelColor}>{label}</StyledLabel>
//             {handleInput(inputType)}
//         </div>
//     );
// };

// export default Ex06;


import styled from "styled-components";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const StyledInput = styled.input`
  display: flex;
  align-items: center;
  height: 3rem;
  width: 16rem;
  background-color: rgb(156 163 175);
  margin-top: 0.5rem;
  border-radius: 0.25rem;
  font-size: 1.2rem;
  color: ${(props) => props.inputColor};
  &:focus {
    outline: none;
    box-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  }
  &::placeholder {
    color: ${(props) => props.placeholderColor};
  }
`;

const StyledTextarea = styled.textarea`
  height: 9rem;
  width: 16rem;
  background-color: rgb(156 163 175);
  margin-top: 0.5rem;
  border-radius: 0.25rem;
  font-size: 1.2rem;
  color: ${(props) => props.inputColor};
  &:focus {
    outline: none;
    box-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  }
  &::placeholder {
    color: ${(props) => props.placeholderColor};
  }
`;

const StyledLabel = styled.label`
  margin-top: 0.75rem;
  color: ${(props) => props.labelColor};
  font-weight: bold;
`;

const ImagePreview = styled.img`
  margin-top: 1rem;
  max-width: 100%;
  height: auto;
  border-radius: 0.25rem;
`;

const Ex06 = ({ inputColor = "white", labelColor = "black", placeholderColor = "lightgray", label = "Label", inputType = "text", inputPlaceholder }) => {
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [imagePreview, setImagePreview] = useState(null);

    const toggleSenhaVisivel = () => {
        setSenhaVisivel(!senhaVisivel);
    };

    const handleInputChange = (event) => {
        const { type, files, value } = event.target;
        if (type === "file" && files.length > 0) {
            const file = files[0];
            setInputValue(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setInputValue(value);
        }
    };

    function handleInput(inputType) {
        if (inputType === "textarea") {
            return (
                <StyledTextarea
                    inputColor={inputColor}
                    placeholder={inputPlaceholder}
                    placeholderColor={placeholderColor}
                    value={inputValue}
                    onChange={handleInputChange}
                />
            );
        } else if (inputType === "password") {
            return (
                <div style={{ display: "grid" }}>
                    <StyledInput
                        type={senhaVisivel ? 'text' : 'password'}
                        placeholder={inputPlaceholder}
                        placeholderColor={placeholderColor}
                        value={inputValue}
                        onChange={handleInputChange}
                        inputColor={inputColor}
                    />
                    <div
                        style={{
                            fontSize: "2rem",
                            position: "absolute",
                            justifySelf: "flex-end",
                            top: "1.5em",
                            cursor: "pointer",
                            paddingRight: "0.2em"
                        }}
                    >
                        {senhaVisivel ? <FaEyeSlash onClick={toggleSenhaVisivel} /> : <FaEye onClick={toggleSenhaVisivel} />}
                    </div>
                </div>
            );
        } else if (inputType === "file") {
            return (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <StyledInput
                        type="file"
                        accept="image/*"
                        onChange={handleInputChange}
                        inputColor={inputColor}
                    />
                    {imagePreview && <ImagePreview src={imagePreview} alt="Pré-visualização da imagem" />}
                </div>
            );
        } else {
            return (
                <StyledInput
                    type={inputType}
                    placeholder={inputPlaceholder}
                    placeholderColor={placeholderColor}
                    value={inputValue}
                    onChange={handleInputChange}
                    inputColor={inputColor}
                />
            );
        }
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "16rem" }}>
            <StyledLabel labelColor={labelColor}>{label}</StyledLabel>
            {handleInput(inputType)}
        </div>
    );
};

export default Ex06;