import React from "react";
import { useState } from "react";
import Button from "./Button";
import { ShoppingCart, Star } from "lucide-react";
const ProductCard = ({ product, onAddToCart }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const getTagStyling = (tag) => {
    switch (tag) {
      case "Novo":
        return "px-3 py-1 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs font-semibold rounded-full shadow-lg";
      case "Promo":
        return "px-3 py-1 bg-gradient-to-r from-red-500 to-pink-600 text-white text-xs font-semibold rounded-full shadow-lg animate-pulse";
      default:
        return "px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full shadow-lg";
    }
  };

  return (
    <div className="flex flex-col h-full group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <div className="aspect-square bg-gray-100 dark:bg-gray-700">
          <img
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            src={product.image}
            alt={product.title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="absolute top-3 left-3">
          {product.tag ? (
            <span className={getTagStyling(product.tag)}>{product.tag}</span>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="flex flex-col flex-grow p-6 space-y-4">
        <div className="flex-grow mb-4 space-y-2">
          <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors min-h-[3.5rem]">
            {product.title}
          </h3>

          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold bg-green-600 bg-clip-text text-transparent">
              R$ {product.price}
            </p>

            <div className="flex items-center space-x-1 text-amber-500">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {product.rating}
              </span>
            </div>
          </div>
        </div>

        <Button
          onClick={() => onAddToCart(product)}
          className="w-full gap-2"
          aria-label={`Adicionar ${product.title} ao carrinho`}>
          <ShoppingCart />
          <div className="font-semibold">Adicionar </div>
        </Button>
      </div>
    </div>
  );
};
export default ProductCard;
