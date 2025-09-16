import React, { useState } from "react";
import Button from "./Button";
import { ShoppingCart, Star } from "lucide-react";

const ProductCard = ({ product, onAddToCart }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="product-card">
      <div className="relative">
        <div className="product-card-img-div">
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            style={{
              opacity: imageLoaded ? 1 : 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        {product.tag && (
          <div className="product-card-tag-position">
            <span
              className={`product-card-tag ${
                product.tag === "Novo"
                  ? "tag-novo"
                  : product.tag === "Promo"
                  ? "tag-promo"
                  : "tag-default"
              }`}>
              {product.tag}
            </span>
          </div>
        )}
      </div>
      <div className="product-card-description">
        <div className="product-card-description-flex">
          <h3 className="product-card-title">{product.title}</h3>
          <div className="product-card-price-rating">
            <p className="product-card-price">R$ {product.price}</p>
            <div className="product-card-rating">
              <Star className="product-card-star" />
              <span className="product-card-rating-number">
                {product.rating}
              </span>
            </div>
          </div>
        </div>
        <Button
          onClick={() => onAddToCart(product)}
          className="product-card-button"
          aria-label={`Adicionar ${product.title} ao carrinho`}>
          <ShoppingCart />
          <div className="product-card-adicionar">Adicionar</div>
        </Button>
      </div>
    </div>
  );
};
export default ProductCard;
