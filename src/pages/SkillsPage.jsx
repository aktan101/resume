import { useTranslation } from "react-i18next"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaGitSquare
} from "react-icons/fa"
import {SiJson, SiRedux, SiSupabase, SiTailwindcss} from "react-icons/si";
import {IoLogoIonic} from "react-icons/io5";

const SkillsPage = () => {
  const { t } = useTranslation()

  const frontendSkills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 100 },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: 99 },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, level: 75 },
    { name: "React", icon: <FaReact className="text-blue-400" />, level: 75 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, level: 95 },
    { name: "Redux Toolkit", icon: <SiRedux className="text-purple-600" />, level: 70 },
    { name: "i18 Next", icon: <IoLogoIonic className="text-light-blue-500" />, level: 70 },
    { name: "Supabase", icon: <SiSupabase className="text-green-600" />, level: 40 },
    { name: "JSON", icon: <SiJson className="text-yellow-500" />, level: 80 },
    { name: "GitHub", icon: <FaGitSquare className="text-black" />, level: 63 },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 0 },
    { name: "Express.js", icon: null, level: 0 },
    { name: "MongoDB", icon: <FaDatabase className="text-green-600" />, level: 0 },
    { name: "RESTful APIs", icon: null, level: 0 },
    { name: "Firebase", icon: null, level: 0 },
  ]

  const toolsSkills = [
    { name: "Git", icon: <FaGitAlt className="text-red-500" />, level: 0 },
    { name: "Docker", icon: <FaDocker className="text-blue-500" />, level: 0 },
    { name: "Figma", icon: <FaFigma className="text-purple-500" />, level: 0 },
    { name: "VS Code", icon: null, level: 0 },
    { name: "Webpack", icon: null, level: 0 },
  ]

  const renderSkillBar = (skill) => (
    <div key={skill.name} className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center">
          {skill.icon && <span className="mr-2 text-xl">{skill.icon}</span>}
          <span className="font-medium text-gray-700">{skill.name}</span>
        </div>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
      </div>
    </div>
  )

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{t("skills.title")}</h2>
          <p className="text-gray-600">{t("skills.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaReact className="mr-2 text-blue-500" />
              {t("skills.frontend")}
            </h3>
            <div>{frontendSkills.map(renderSkillBar)}</div>
          </div>

          {/* Backend Skills */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaNodeJs className="mr-2 text-green-500" />
              {t("skills.backend")}
            </h3>
            <div>{backendSkills.map(renderSkillBar)}</div>
          </div>

          {/* Tools Skills */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaGitAlt className="mr-2 text-red-500" />
              {t("skills.tools")}
            </h3>
            <div>{toolsSkills.map(renderSkillBar)}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsPage

