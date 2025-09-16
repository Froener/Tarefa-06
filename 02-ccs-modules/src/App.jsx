import React, { useState, useEffect, useCallback } from "react";
import styles from "./App.module.css";
import ProductsData from "./ProductsData.json";
import Navbar from "./CSS-Modules/Navbar";
import ProductCard from "./CSS-Modules/ProductCard";
import SkeletonCard from "./CSS-Modules/Skeleton";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") return true;
    if (theme === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = useCallback(() => setIsDarkMode((prev) => !prev), []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(ProductsData);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const addToCart = () => setCartCount((count) => count + 1);

  return (
    <div className={styles.app}>
      <Navbar
        darkMode={isDarkMode}
        toggleDarkMode={toggleTheme}
        cartCount={cartCount}
      />
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>Produtos em Destaque</h1>
          <p className={styles.heroText}>
            Descubra nossa seleção curada dos melhores produtos com qualidade
            premium e design excepcional
          </p>
        </div>
        <section
          className={styles.productsGrid}
          role="status"
          aria-live="polite"
          aria-busy={loading}>
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
            : products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; 2025 CSS Mode. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
