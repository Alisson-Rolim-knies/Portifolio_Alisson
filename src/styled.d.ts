// src/styled.d.ts
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    corPrincipal: string
    corSecundaria: string
    corDeFundo: string
    corDaBorda: string
    corDeFundoBotao: string
    // Adicione aqui quaisquer outras variáveis que seu tema possa ter
  }
}
export {}
