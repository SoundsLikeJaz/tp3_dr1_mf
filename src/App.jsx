import './App.css'
import { Ex01, Ex02, Ex03, Ex04, Ex05, Ex06, Ex07, Ex08 } from './pages'

function App() {
  return (
    <Ex01 />
    // <Ex02 />
    // <Ex03 />
    // <Ex04 />
    // <Ex05 texto="Botão" />
    // <Ex06 label="Usuario define a label" labelColor="blue" inputColor="black" placeholderColor="lightgray" inputType="password" inputPlaceholder="Isso deu um trabalho" />

    // Esse blocão aí embaixo é o Ex07
    // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

    // <Ex07 container spacing={2}>
    //   <Ex07 item xs={12} sm={6} md={4} lg={3}>
    //     <Ex05 texto="Exemplo 1" />
    //   </Ex07>
    //   <Ex07 item xs={12} sm={6} md={4} lg={3}>
    //     <Ex05 texto="Exemplo 2" />
    //   </Ex07>
    //   <Ex07 item xs={12} sm={6} md={4} lg={3}>
    //     <Ex05 texto="Exemplo 3" />
    //   </Ex07>
    //   <Ex07 item xs={12} sm={6} md={4} lg={3}>
    //     <Ex05 texto="Exemplo 4" />
    //   </Ex07>
    // </Ex07>

    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
    // Fim do Ex07

    // ------------------------------

    // Esse blocão aí embaixo é o Ex08
    // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

    // <Ex08>
    //   <Ex08>
    //     <h1>Olá, mundo!</h1>
    //     <p>Este é um parágrafo de exemplo</p>
    //   </Ex08>
    //   <Ex08 
    //     color="red"
    //     fontSize={24}
    //     my={4}
    //   >
    //     <h2>Uma curiosidade</h2>
    //     <p>Os dois primeiros exercícios eu basicamente adaptei do Tailwind, que usei pro AT do Armênio, pra CSS comum e depois componentizei pros exercícios seguintes</p>
    //   </Ex08>
    //   <Ex08
    //     height={200}
    //     width={200}
    //     my={4}
    //     display="flex"
    //     alignItems="center"
    //     gap={4}
    //     p={2}
    //     sx={{ border: '2px solid grey' }}
    //   >
    //     <h3>Este é o segundo componente que eu importo de fora, já que poderíamos</h3>
    //     <p>O primeiro foi a Grid do MaterialUI, o textfield eu dei minha alma mas a grid eu só aceitei que eu não conseguiria fazer nada tão bom quando</p>
    //   </Ex08>
    //   <Ex08 component="section" sx={{ p: 2, border: '1px dashed grey' }}>
    //     <h4>E é isso</h4>
    //     <p>Importei o box do Material pq nn vi sentido em simplesmente importar uma div como parte do exercício, e o Box é só um wrapper pelo que eu entendi, mas ao menos o deles aceita todas as propriedades da biblioteca (o que é tipo fazer css inline)</p>
    //   </Ex08>
    // </Ex08>

    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
    // Fim do Ex08
  );
}

export default App
