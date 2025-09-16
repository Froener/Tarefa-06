import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import ProductsData from "./ProductsData.json";
import Navbar from "./Global/Navbar";
import SkeletonCard from "./Global/Skeleton";
import ProductCard from "./Global/ProductCard";

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

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(ProductsData);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const addToCart = () => setCartCount((count) => count + 1);

  return (
    <div>
      <Navbar
        darkMode={isDarkMode}
        toggleDarkMode={toggleTheme}
        cartCount={cartCount}
      />

      <main className="container">
        <div className="container-div">
          <h1 className="hero-h1">Produtos em Destaque</h1>
          <p className="hero-p">
            Descubra nossa seleção curada dos melhores produtos com qualidade
            premium e design excepcional
          </p>
        </div>

        <section
          className="product-grid"
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

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-text">
            <p>&copy; 2025 CSS Mode. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
