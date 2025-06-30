import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Search,
  ShoppingCart,
  Heart,
  LogIn,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { getCookie } from "@/utils/cookies";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState();
  const [cartCount, setCartCount] = useState(3);
  const [wishlistCount, setWishlistCount] = useState(7);

  useEffect(() => {
    const jwtToken = getCookie("jwtToken");
    if (jwtToken) {
      setUser({
        name: "Nguyễn Văn A",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
      });
    }
  }, []);

  const handleLogin = () => {
    // Logic đăng nhập
    console.log("Đăng nhập");
  };

  const handleLogout = () => {
    setUser(null);
    console.log("Đăng xuất");
  };

  return (
    <header className="bg-white shadow-lg border-b border-amber-100">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="text-amber-700">
            📚 Miễn phí vận chuyển cho đơn hàng trên 200.000đ
          </div>
          <div className="hidden md:flex items-center space-x-4 text-amber-600">
            <span>📞 Hotline: 1900-1234</span>
            <span>✉️ info@bookstore.com</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-2 rounded-xl shadow-lg">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                BookHaven
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Thiên đường sách</p>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Tìm kiếm sách, tác giả, thể loại..."
                className="w-full px-4 py-3 pl-12 rounded-full border-2 border-amber-200 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-100 transition-all duration-200"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-400" />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-2 rounded-full hover:from-amber-500 hover:to-orange-600 transition-all duration-200 font-medium">
                Tìm
              </button>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            <button className="relative p-2 text-gray-600 hover:text-red-500 transition-colors duration-200 group">
              <Heart className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium animate-pulse">
                  {wishlistCount}
                </span>
              )}
              <span className="sr-only">Danh sách yêu thích</span>
            </button>

            {/* Cart */}
            <button className="relative p-2 text-gray-600 hover:text-amber-600 transition-colors duration-200 group">
              <ShoppingCart className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium animate-bounce">
                  {cartCount}
                </span>
              )}
              <span className="sr-only">Giỏ hàng</span>
            </button>

            {/* User Menu */}
            <div className="relative">
              {user ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-amber-50 to-orange-50 px-3 py-2 rounded-full border border-amber-200">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="h-8 w-8 rounded-full border-2 border-amber-300"
                    />
                    <span className="hidden md:block text-sm font-medium text-gray-700">
                      {user.name}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="p-2 text-gray-600 hover:text-red-500 transition-colors duration-200 group"
                    title="Đăng xuất"
                  >
                    <LogOut className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleLogin}
                  className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <LogIn className="h-4 w-4" />
                  <span className="hidden md:block">Đăng nhập</span>
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-amber-600 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm sách..."
              className="w-full px-4 py-3 pl-12 rounded-full border-2 border-amber-200 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-100 transition-all duration-200"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-400" />
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden lg:flex items-center justify-center space-x-8 py-3">
            <a
              href="#"
              className="hover:text-amber-200 transition-colors duration-200 font-medium"
            >
              Trang chủ
            </a>
            <a
              href="#"
              className="hover:text-amber-200 transition-colors duration-200 font-medium"
            >
              Sách mới
            </a>
            <a
              href="#"
              className="hover:text-amber-200 transition-colors duration-200 font-medium"
            >
              Bestseller
            </a>
            <a
              href="#"
              className="hover:text-amber-200 transition-colors duration-200 font-medium"
            >
              Văn học
            </a>
            <a
              href="#"
              className="hover:text-amber-200 transition-colors duration-200 font-medium"
            >
              Kinh tế
            </a>
            <a
              href="#"
              className="hover:text-amber-200 transition-colors duration-200 font-medium"
            >
              Khoa học
            </a>
            <a
              href="#"
              className="hover:text-amber-200 transition-colors duration-200 font-medium"
            >
              Thiếu nhi
            </a>
            <a
              href="#"
              className="hover:text-amber-200 transition-colors duration-200 font-medium"
            >
              Giảm giá
            </a>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 space-y-2 border-t border-amber-400">
              <a
                href="#"
                className="block py-2 hover:text-amber-200 transition-colors duration-200 font-medium"
              >
                Trang chủ
              </a>
              <a
                href="#"
                className="block py-2 hover:text-amber-200 transition-colors duration-200 font-medium"
              >
                Sách mới
              </a>
              <a
                href="#"
                className="block py-2 hover:text-amber-200 transition-colors duration-200 font-medium"
              >
                Bestseller
              </a>
              <a
                href="#"
                className="block py-2 hover:text-amber-200 transition-colors duration-200 font-medium"
              >
                Văn học
              </a>
              <a
                href="#"
                className="block py-2 hover:text-amber-200 transition-colors duration-200 font-medium"
              >
                Kinh tế
              </a>
              <a
                href="#"
                className="block py-2 hover:text-amber-200 transition-colors duration-200 font-medium"
              >
                Khoa học
              </a>
              <a
                href="#"
                className="block py-2 hover:text-amber-200 transition-colors duration-200 font-medium"
              >
                Thiếu nhi
              </a>
              <a
                href="#"
                className="block py-2 hover:text-amber-200 transition-colors duration-200 font-medium"
              >
                Giảm giá
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
