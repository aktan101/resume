import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { FaDownload, FaEnvelope } from "react-icons/fa"
import user from '../assets/rise-x.jpg'
const HomePage = () => {
  const { t } = useTranslation()

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
            <p className="text-blue-500 font-medium mb-2">{t("home.greeting")}</p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">{t("home.name")}</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-6">{t("home.position")}</h2>
            <p className="text-gray-600 mb-8 max-w-lg">{t("home.description")}</p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn btn-outline">
                <FaEnvelope />
                {t("home.contactMe")}
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center animate-fadeIn">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src={user}
                alt={t("home.name")}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage

