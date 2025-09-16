import SkeletonCard from "./Tailwindcss/Skeleton";
import React from "react";
import { useState, useEffect, useCallback } from "react";
import ProductsData from "./ProductsData.json";
import Navbar from "./Tailwindcss/Navbar";
import ProductCard from "./Tailwindcss/ProductCard";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-300">
      <Navbar
        darkMode={isDarkMode}
        toggleDarkMode={toggleTheme}
        cartCount={cartCount}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Produtos em Destaque
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Descubra nossa seleção curada dos melhores produtos com qualidade
            premium e design excepcional
          </p>
        </div>

        {/* Products Grid */}
        <section
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
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
      <footer className="mt-20 border-t border-gray-200/20 dark:border-gray-700/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <p>&copy; 2025 CSS Mode. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
