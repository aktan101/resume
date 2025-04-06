import { useTranslation } from "react-i18next"
import { FaCheckCircle, FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa"

const ExperiencePage = () => {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-gray-50 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{t("experience.title")}</h2>
          <p className="text-gray-600">{t("experience.subtitle")}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-blue-500">
            {/* Проект 1 */}
            <div className="mb-12 relative">
              <div className="absolute -left-10 top-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <FaCode className="text-white" />
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{t("experience.project1.name")}</h3>
                  <span className="text-blue-500 font-medium">{t("experience.project1.period")}</span>
                </div>

                <p className="text-gray-700 font-medium mb-2">{t("experience.project1.position")}</p>
                <p className="text-gray-600 mb-4">{t("experience.project1.description")}</p>

                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mb-2 mr-2">
                    {t("experience.project1.technologies")}
                  </span>
                </div>

                <h4 className="text-gray-800 font-medium mb-2">Достижения:</h4>
                <ul className="space-y-2 mb-4">
                  {t("experience.project1.achievements", { returnObjects: true }).map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 mt-5">
                  <a
                    href={t("https://aktan101.github.io/beach-kg/")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors text-sm"
                  >
                    <FaGithub />
                    {t("experience.viewProject")}
                  </a>
                </div>
              </div>
            </div>

            {/* Проект 2 */}
            <div className="relative">
              <div className="absolute -left-10 top-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <FaCode className="text-white" />
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{t("experience.project2.name")}</h3>
                  <span className="text-blue-500 font-medium">{t("experience.project2.period")}</span>
                </div>

                <p className="text-gray-700 font-medium mb-2">{t("experience.project2.position")}</p>
                <p className="text-gray-600 mb-4">{t("experience.project2.description")}</p>

                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mb-2 mr-2">
                    {t("experience.project2.technologies")}
                  </span>
                </div>

                <h4 className="text-gray-800 font-medium mb-2">Достижения:</h4>
                <ul className="space-y-2 mb-4">
                  {t("experience.project2.achievements", { returnObjects: true }).map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 mt-5">
                  <a
                    href={t("https://aktan707.github.io/lesson-w/")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors text-sm"
                  >
                    <FaGithub />
                    {t("experience.viewProject")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperiencePage

