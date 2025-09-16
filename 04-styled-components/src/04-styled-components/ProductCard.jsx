import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { ShoppingCart, Star } from "lucide-react";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
  border-radius: 1rem;
  border: 1px solid #f3f4f6;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }

  [data-theme="dark"] & {
    background: #1f2937;
    border-color: #374151;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Card}:hover & {
    opacity: 1;
  }
`;

const AspectSquare = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  background: #f3f4f6;

  [data-theme="dark"] & {
    background: #374151;
  }
`;

const ProductImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  transition: transform 0.5s ease, opacity 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Badge = styled.span`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #fff;
  border-radius: 9999px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: ${({ type }) =>
    type === "Novo"
      ? "linear-gradient(to right,#10b981,#059669)"
      : type === "Promo"
      ? "linear-gradient(to right,#ef4444,#ec4899)"
      : "linear-gradient(to right,#2563eb,#9333ea)"};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1.5rem;
  gap: 1rem;
`;

const Title = styled.h3`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;

  display: -webkit-box;
  display: box;
  box-orient: vertical;
  line-clamp: 2;

  font-weight: 600;
  font-size: 1.125rem;
  color: inherit;
  min-height: 3.5rem;

  ${Card}:hover & {
    color: #2563eb;
  }

  [data-theme="dark"] & {
    color: #f9fafb;
  }

  [data-theme="dark"] ${Card}:hover & {
    color: #60a5fa;
  }
`;

const PriceRating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  background: #16a34a;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #f59e0b;
  font-size: 0.875rem;
  font-weight: 500;

  span {
    color: #374151;
    [data-theme="dark"] & {
      color: #d1d5db;
    }
  }
`;

const AddButton = styled(Button)`
  width: 100%;
  gap: 0.5rem;
  font-weight: 600;
`;

export default function ProductCard({ product, onAddToCart }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card>
      <ImageContainer>
        <AspectSquare>
          {!imageLoaded && <Loader>{/* spinner could go here */}</Loader>}
          <ProductImage
            src={product.image}
            alt={product.title}
            loaded={imageLoaded}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
        </AspectSquare>
        <Overlay />
        {product.tag && <Badge type={product.tag}>{product.tag}</Badge>}
      </ImageContainer>

      <Content>
        <div>
          <Title>{product.title}</Title>
          <PriceRating>
            <Price>R$ {product.price}</Price>
            <Rating>
              <Star size={16} fill="currentColor" />
              <span>{product.rating}</span>
            </Rating>
          </PriceRating>
        </div>

        <AddButton
          onClick={() => onAddToCart(product)}
          aria-label={`Adicionar ${product.title} ao carrinho`}>
          <ShoppingCart />
          Adicionar
        </AddButton>
      </Content>
    </Card>
  );
}
