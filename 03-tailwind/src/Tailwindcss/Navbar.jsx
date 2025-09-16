import Button from "./Button";
import { ShoppingCart, Sun, Moon } from "lucide-react";

const Navbar = ({ darkMode, toggleDarkMode, cartCount }) => {
  const navItems = ["Global", "Modules", "Tailwind", "Styled-Components"];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/20 dark:border-gray-700/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className=" bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center px-2 py-1">
                <span className="text-white font-bold text-sm">
                  Tailwind CSS
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-2">
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

          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <div className="relative">
              <Button
                variant="secondary"
                size="md"
                className="relative rounded-full w-10 h-10 p-0"
                aria-label={`Carrinho com ${cartCount} itens`}>
                <ShoppingCart className="w-5 h-5 flex-shrink-0" />
              </Button>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg animate-pulse">
                  {cartCount}
                </span>
              )}
            </div>

            {/* Theme Toggle */}
            <Button
              onClick={toggleDarkMode}
              variant="secondary"
              size="md"
              className="rounded-full w-10 h-10 p-0"
              aria-label="Alterar tema">
              {darkMode ? (
                <Sun className="w-5 h-5 flex-shrink-0" />
              ) : (
                <Moon className="w-5 h-5 flex-shrink-0" />
              )}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
