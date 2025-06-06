import styled from 'styled-components'

const Botao = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`
const BotaoDesabilitado = styled(Botao)`
  background-color: lightgray;
  cursor: not-allowed;

  &:hover {
    background-color: lightgray;
  }
`
const BotaoCancelar = styled(Botao)`
  background-color: red;

  &:hover {
    background-color: darkred;
  }
`

function Teste() {
  return (
    <div>
      <h1>Teste de Styled Components</h1>
      <Botao>Botão Estilizado</Botao>
      <BotaoDesabilitado>Botão Desabilitado</BotaoDesabilitado>
      <BotaoCancelar as="a">
        <span>Botão Cancelar</span>
      </BotaoCancelar>
    </div>
  )
}
export default Teste
