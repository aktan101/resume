import { useTranslation } from "react-i18next"
import { FaCertificate, FaCalendarAlt, FaBuilding } from "react-icons/fa"
import certificat from "../assets/certificat.png"

const CertificatesPage = () => {
  const { t } = useTranslation()

  const certificates = [
    {
      id: 1,
      name: t("certificates.certificate1.name"),
      issuer: t("certificates.certificate1.issuer"),
      date: t("certificates.certificate1.date"),
      description: t("certificates.certificate1.description"),
      image: certificat,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{t("certificates.title")}</h2>
          <p className="text-gray-600">{t("certificates.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <div key={certificate.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-50 overflow-hidden">
                <img
                  src={certificate.image || "/placeholder.svg"}
                  alt={certificate.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    e.target.src = "https://media.istockphoto.com/id/1464539429/photo/thoughtful-business-man-with-a-digital-tablet.jpg?s=612x612&w=0&k=20&c=yLbK-rGNUkL0sPX4jw7Q_XE_vDtfj0X3nirixUlGtr4="
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCertificate className="text-blue-500 mr-2 flex-shrink-0" />
                  {certificate.name}
                </h3>

                <div className="flex items-center text-gray-600 mb-1">
                  <FaBuilding className="mr-2 text-gray-500" />
                  {certificate.issuer}
                </div>

                <div className="flex items-center text-gray-600 mb-3">
                  <FaCalendarAlt className="mr-2 text-gray-500" />
                  {certificate.date}
                </div>

                <p className="text-gray-600">{certificate.description}</p>

                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                  Просмотреть
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificatesPage
