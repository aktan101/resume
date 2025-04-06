import { useTranslation } from "react-i18next"
import { FaGraduationCap, FaUser } from "react-icons/fa"
import user from "../assets/rise-x.jpg"
const AboutPage = () => {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{t("about.title")}</h2>
          <p className="text-gray-600">{t("about.subtitle")}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={user}
                alt={t("about.title")}
                className="w-full h-64 object-cover"
                onError={(e) => {
                  e.target.src = "https://www.shutterstock.com/image-photo/this-me-portrait-selfconfident-narcissistic-260nw-1788811412.jpg"
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <FaUser className="mr-2 text-blue-500" />
                  {t("home.name")}
                </h3>
                <p className="text-gray-600 mb-2">{t("home.position")}</p>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                    <FaGraduationCap className="mr-2 text-blue-500" />
                    {t("about.education")}
                  </h4>
                  <p className="text-gray-600 font-medium">{t("about.university")}</p>
                  <p className="text-gray-600">{t("about.degree")}</p>
                  <p className="text-gray-500 text-sm">{t("about.graduationYear")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{t("about.title")}</h3>
              <p className="text-gray-600 mb-4">{t("about.description1")}</p>
              <p className="text-gray-600 mb-4">{t("about.description2")}</p>
              <p className="text-gray-600 mb-4">{t("about.description3")}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Frontend</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>React.js</li>
                    <li>JavaScript / TypeScript</li>
                    <li>HTML5 / CSS3</li>
                    <li>Tailwind CSS</li>
                    <li>Redux</li>
                    <li>Git Hub</li>
                    <li>I18 Next</li>
                  </ul>
                </div>

                {/*<div className="bg-gray-50 p-4 rounded-lg">*/}
                {/*  <h4 className="font-semibold text-gray-800 mb-2">Backend</h4>*/}
                {/*  <ul className="list-disc list-inside text-gray-600">*/}
                {/*    <li>Node.js</li>*/}
                {/*    <li>Express.js</li>*/}
                {/*    <li>MongoDB</li>*/}
                {/*    <li>RESTful APIs</li>*/}
                {/*    <li>Firebase</li>*/}
                {/*  </ul>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage

