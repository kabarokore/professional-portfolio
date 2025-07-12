const projects = [
  {
    id: "gerayo",
    image: "/gerayo.png",
    title: "Rwanda Public Transport App",
    description:
      "Gerayo is a mobile application designed to provide real-time information about public transport in Rwanda. Users can find nearby bus stops, view bus schedules, and track buses live.",
    languages: ["ReactJS", "Tailwind CSS", "NodeJS", "Firebase"],
    live: "https://gerayo.sorwazini.tech/",
    code: "https://github.com/kabarokore",
  },
  {
    id: "momo",
    image: "/momo.png",
    title: "MOMO Transaction-Analysis Dashboard",
    description:
      "A dashboard that provides insights into user transactions – history, trends, and patterns – to help users make informed financial decisions.",
    languages: ["HTML5", "CSS3", "JavaScript", "Flask", "Python", "Firebase"],
    live: "not yet deployed",
    code: "https://github.com/mutabazi-bruno/MoMo-Data-Analysis-Summative-Group-32.git",
  },
] as const

export default projects
