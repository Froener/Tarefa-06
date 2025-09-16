import React, { useState, useEffect, useCallback } from "react";
import ProductsData from "./ProductsData.json";
import Navbar from "./04-styled-components/Navbar";
import ProductCard from "./04-styled-components/ProductCard";
import SkeletonCard from "./04-styled-components/Skeleton";
import styled from "styled-components";

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #f9fafb, #ffffff, #f3f4f6);
  transition: all 0.3s ease;

  &[data-theme="dark"] {
    background: linear-gradient(to bottom right, #111827, #1f2937, #111827);
  }
`;

const Main = styled.main`
  max-width: 80rem;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: clamp(2.5rem, 5vw, 3.75rem);
    font-weight: 700;
    background: linear-gradient(to right, #2563eb, #9333ea, #ec4899);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.25rem;
    color: #4b5563;
    max-width: 40rem;
    margin: 1rem auto 0;

    [data-theme="dark"] & {
      color: #9ca3af;
    }
  }
`;

const ProductsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2rem;

  @media (min-width: 481px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Footer = styled.footer`
  margin-top: 5rem;
  border-top: 1px solid rgba(229, 231, 235, 0.2);
  padding: 2rem 1rem;
  text-align: center;
  color: #6b7280;

  [data-theme="dark"] & {
    border-color: rgba(55, 65, 81, 0.2);
    color: #9ca3af;
  }
`;

export default function App() {
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
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
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

  const addToCart = () => setCartCount((c) => c + 1);

  return (
    <AppContainer data-theme={isDarkMode ? "dark" : "light"}>
      <Navbar
        darkMode={isDarkMode}
        toggleDarkMode={toggleTheme}
        cartCount={cartCount}
      />

      <Main>
        <Hero>
          <h1>Produtos em Destaque</h1>
          <p>
            Descubra nossa seleção curada dos melhores produtos com qualidade
            premium e design excepcional
          </p>
        </Hero>

        <ProductsGrid role="status" aria-live="polite" aria-busy={loading}>
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
            : products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
        </ProductsGrid>
      </Main>

      <Footer>
        <p>&copy; 2025 CSS Mode. Todos os direitos reservados.</p>
      </Footer>
    </AppContainer>
  );
}
