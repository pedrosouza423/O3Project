import { HeaderContainer } from "./styles"
import LogoO3 from "../../assets/O3 NEGATIVO 1.svg"

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={LogoO3} alt="" />
      {/* <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav> */}
    </HeaderContainer>
  )
}
