"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
  FaTelegram,
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa"

const ContactPage = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Имитация отправки формы
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })

      // Сбросить статус через 5 секунд
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 1500)
  }

  // Социальные сети
  const socialLinks = [
    {
      name: "Telegram",
      icon: <FaTelegram className="text-[#0088cc]" size={24} />,
      url: "https://t.me/rise_x",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="text-[#25D366]" size={24} />,
      url: "https://wa.me/+996997889941",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-[#E1306C]" size={24} />,
      url: "https://instagram.com/rise_x_x",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-gray-800" size={24} />,
      url: "https://github.com/aktan707",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{t("contact.title")}</h2>
          <p className="text-gray-600">{t("contact.subtitle")}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">{t("contact.title")}</h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    {t("contact.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center w-full px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors disabled:bg-blue-300"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Отправка...
                    </span>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      {t("contact.send")}
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">Сообщение успешно отправлено!</div>
                )}
              </form>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">{t("contact.title")}</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">{t("contact.address")}</h4>
                    <p className="text-gray-600">г. Бишкек, ул. Киевская, 123</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaPhone className="text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">{t("contact.phone")}</h4>
                    <p className="text-gray-600">+996 997 88 99 41</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">{t("contact.emailAddress")}</h4>
                    <p className="text-gray-600">sadyrbekovaktan@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Социальные сети */}
              <div className="mt-8">
                <h4 className="font-medium text-gray-800 mb-4">{t("contact.findMe")}</h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-3 bg-white rounded-lg hover:shadow-md transition-all hover:-translate-y-1"
                    >
                      <div className="mb-2">{link.icon}</div>
                      <span className="text-sm text-gray-600">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11695.104173042994!2d74.58956082662536!3d42.87667421581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9fc7a8adcf1%3A0x6c7d03ed7e0515b8!2z0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1648123456789!5m2!1sru!2skg"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage

