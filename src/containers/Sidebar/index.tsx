import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarConteiner } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarConteiner>
      <Avatar />
      <Titulo fontSize={20}>Alisson Rolim Knies</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Alisson Rolim Knies
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Front-end
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarConteiner>
  </aside>
)

export default Sidebar
