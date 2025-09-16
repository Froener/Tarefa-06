import styled from "styled-components";
import Button from "./Button";
import { ShoppingCart, Sun, Moon } from "lucide-react";

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(12px);
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid rgba(229, 231, 235, 0.2);

  [data-theme="dark"] & {
    background-color: rgba(17, 24, 39, 0.8);
    border-color: rgba(55, 65, 81, 0.2);
  }
`;

const Nav = styled.nav`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(to bottom right, #2563eb, #9333ea);
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  color: #fff;
  font-weight: bold;
  font-size: 0.875rem;
`;

const NavItems = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 0.5rem;
  }
`;

const Right = styled.div`
  display: flex;
  gap: 1rem;
`;

const CartWrapper = styled.div`
  position: relative;
`;

const CartBadge = styled.span`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background: linear-gradient(to right, #ef4444, #ec4899);
  color: #fff;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 9999px;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: pulse 2s infinite;
`;

const IconButton = styled(Button)`
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
`;

export default function Navbar({ darkMode, toggleDarkMode, cartCount }) {
  const navItems = ["Global", "Modules", "Tailwind", "Styled-Components"];

  return (
    <Header data-theme={darkMode ? "dark" : "light"}>
      <Nav>
        <NavInner>
          <Left>
            <Logo>Styled-Components</Logo>
            <NavItems>
              {navItems.map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  size="sm"
                  style={{ borderRadius: "9999px" }}>
                  {item}
                </Button>
              ))}
            </NavItems>
          </Left>

          <Right>
            <CartWrapper>
              <IconButton
                variant="secondary"
                size="md"
                aria-label={`Carrinho com ${cartCount} itens`}>
                <ShoppingCart size={20} />
              </IconButton>
              {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
            </CartWrapper>

            <IconButton
              onClick={toggleDarkMode}
              variant="secondary"
              size="md"
              aria-label="Alterar tema">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </IconButton>
          </Right>
        </NavInner>
      </Nav>
    </Header>
  );
}
