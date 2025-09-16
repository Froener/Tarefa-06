import React from "react";
import Button from "./Button";
import { ShoppingCart, Sun, Moon } from "lucide-react";
import styles from "./Navbar.module.css";

const Navbar = ({ darkMode, toggleDarkMode, cartCount }) => {
  const navItems = ["Global", "Modules", "Tailwind", "Styled-Components"];

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.brand}>CSS Modules</div>
            <div className={styles.navItems}>
              {navItems.map((item) => (
                <Button key={item} variant="ghost" size="sm">
                  {item}
                </Button>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.cartWrapper}>
              <Button
                variant="secondary"
                size="md"
                aria-label={`Carrinho com ${cartCount} itens`}>
                <ShoppingCart className={styles.icon} />
              </Button>
              {cartCount > 0 && (
                <span className={styles.cartBadge}>{cartCount}</span>
              )}
            </div>
            <Button
              onClick={toggleDarkMode}
              variant="secondary"
              size="md"
              aria-label="Alterar tema">
              {darkMode ? (
                <Sun className={styles.icon} />
              ) : (
                <Moon className={styles.icon} />
              )}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
