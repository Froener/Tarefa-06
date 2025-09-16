import Button from "./Button";
import { ShoppingCart, Sun, Moon } from "lucide-react";

const Navbar = ({ darkMode, toggleDarkMode, cartCount }) => {
  const navItems = ["Global", "Modules", "Tailwind", "Styled-Components"];

  return (
    <header className="navbar">
      <nav className="navbar-inner">
        <div className="navbar-inner-container">
          <div className="navbar-active">Global CSS</div>
          <div className="nav-items">
            {navItems.map((item) => (
              <Button
                key={item}
                variant="ghost"
                size="sm"
                className="rounded-full">
                {item}
              </Button>
            ))}
          </div>
        </div>

        <div className="navbar-inner-container">
          <div className="relative">
            <Button
              variant="secondary"
              size="default"
              className="btn-right-nav"
              aria-label={`Carrinho com ${cartCount} itens`}>
              <ShoppingCart className="btn-icons-5" />
            </Button>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>

          <Button
            onClick={toggleDarkMode}
            variant="secondary"
            size="default"
            className="btn-right-nav"
            aria-label="Alterar tema">
            {darkMode ? (
              <Sun className="btn-icons-5" />
            ) : (
              <Moon className="btn-icons-5" />
            )}
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
