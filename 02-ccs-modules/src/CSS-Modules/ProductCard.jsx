import React, { useState } from "react";
import Button from "./Button";
import { ShoppingCart, Star } from "lucide-react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product, onAddToCart }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const getTagStyling = (tag) => {
    switch (tag) {
      case "Novo":
        return styles.tagNovo;
      case "Promo":
        return styles.tagPromo;
      default:
        return styles.tagDefault;
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.relative}>
        <div className={styles.imageContainer}>
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={styles.image}
            style={{ opacity: imageLoaded ? 1 : 0 }}
          />
        </div>
        {product.tag && (
          <div className={styles.tagPosition}>
            <span className={`${styles.tag} ${getTagStyling(product.tag)}`}>
              {product.tag}
            </span>
          </div>
        )}
      </div>
      <div className={styles.description}>
        <div className={styles.descriptionFlex}>
          <h3 className={styles.title}>{product.title}</h3>
          <div className={styles.priceRating}>
            <p className={styles.price}>R$ {product.price}</p>
            <div className={styles.rating}>
              <Star className={styles.star} />
              <span className={styles.ratingNumber}>{product.rating}</span>
            </div>
          </div>
        </div>
        <Button
          onClick={() => onAddToCart(product)}
          className={styles.button}
          aria-label={`Adicionar ${product.title} ao carrinho`}>
          <ShoppingCart />
          <div className={styles.adicionar}>Adicionar</div>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
