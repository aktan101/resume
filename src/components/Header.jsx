"use client"

import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { FaGlobe, FaBars, FaTimes, FaCode } from "react-icons/fa"

const Header = () => {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const langMenuRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const currentLanguage = i18n.language

  // Отслеживаем скролл страницы для изменения внешнего вида header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  // Закрываем языковое меню при клике вне его
  useEffect(() => {
    function handleClickOutside(event) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setIsLangMenuOpen(false)
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest(".menu-button")
      ) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang)
    setIsLangMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen)
  }

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { name: t("header.home"), path: "/" },
    { name: t("header.about"), path: "/about" },
    { name: t("header.experience"), path: "/experience" },
    { name: t("header.skills"), path: "/skills" },
    { name: t("header.certificates"), path: "/certificates" },
    { name: t("header.contact"), path: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-white/80 py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Логотип для всех устройств */}
          <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center">
            <h1>Resume</h1>
          </Link>

          {/* Навигация для больших экранов (ноутбук/ПК) */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium hover:text-blue-500 transition-colors ${
                  isActive(link.path)
                    ? "text-blue-500 relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-blue-500"
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Навигация для средних экранов (планшеты) */}
          <nav className="hidden md:flex lg:hidden items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium hover:text-blue-500 transition-colors ${
                  isActive(link.path) ? "text-blue-500 font-semibold" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center">
            {/* Переключатель языка */}
            <div className="relative mr-2 sm:mr-4" ref={langMenuRef}>
              <button
                aria-label="Change language"
                className="flex items-center text-gray-700 hover:text-blue-500 px-2 py-2 rounded-md hover:bg-gray-100"
                onClick={toggleLangMenu}
              >
                <FaGlobe className="mr-1" />
                <span className="text-sm font-medium">{currentLanguage.toUpperCase()}</span>
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md overflow-hidden z-10 py-1 animate-fadeIn">
                  <button
                    onClick={() => handleLanguageChange("ru")}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${currentLanguage === "ru" ? "bg-gray-100 text-blue-500" : ""}`}
                  >
                    Русский
                  </button>
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${currentLanguage === "en" ? "bg-gray-100 text-blue-500" : ""}`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageChange("kg")}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${currentLanguage === "kg" ? "bg-gray-100 text-blue-500" : ""}`}
                  >
                    Кыргызча
                  </button>
                </div>
              )}
            </div>

            {/* Кнопка мобильного меню */}
            <button
              className="menu-button md:hidden text-gray-700 p-2 rounded-md hover:bg-gray-100"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden bg-white rounded-lg shadow-lg p-4 absolute left-0 right-0 top-full z-50 animate-slideDown"
          >
            <nav className="flex flex-col space-y-3 border-b border-gray-200 pb-3 mb-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center py-2 px-3 rounded-md ${
                    isActive(link.path) ? "text-blue-500 font-semibold bg-blue-50" : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Языки в мобильном меню */}
            {/*<div className="flex justify-center space-x-4 py-3">*/}
            {/*  <button*/}
            {/*    onClick={() => {*/}
            {/*      handleLanguageChange("ru")*/}
            {/*      setIsMenuOpen(false)*/}
            {/*    }}*/}
            {/*    className={`px-3 py-1 rounded-full ${*/}
            {/*      currentLanguage === "ru" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"*/}
            {/*    }`}*/}
            {/*  >*/}
            {/*    RU*/}
            {/*  </button>*/}
            {/*  <button*/}
            {/*    onClick={() => {*/}
            {/*      handleLanguageChange("en")*/}
            {/*      setIsMenuOpen(false)*/}
            {/*    }}*/}
            {/*    className={`px-3 py-1 rounded-full ${*/}
            {/*      currentLanguage === "en" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"*/}
            {/*    }`}*/}
            {/*  >*/}
            {/*    EN*/}
            {/*  </button>*/}
            {/*  <button*/}
            {/*    onClick={() => {*/}
            {/*      handleLanguageChange("kg")*/}
            {/*      setIsMenuOpen(false)*/}
            {/*    }}*/}
            {/*    className={`px-3 py-1 rounded-full ${*/}
            {/*      currentLanguage === "kg" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"*/}
            {/*    }`}*/}
            {/*  >*/}
            {/*    KG*/}
            {/*  </button>*/}
            {/*</div>*/}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

