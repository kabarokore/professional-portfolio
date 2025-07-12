"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Calendar, GraduationCap, Star, Award } from "lucide-react";
import personalInfo from "@/data/personal-info"
import contact from "@/data/contact"
import skills from "@/data/skills"
import education from "@/data/education"
import experience from "@/data/experience"
 // Fixed import
import projects from "@/data/projects"
import languages from "@/data/languages"
import activities from "@/data/activities"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black -200 via-green-400 to-black -200 py-24 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-60 items-center">
            {/* Profile Image - Enhanced */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-black -200  via-green-400 to-black-200 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-100 to-green-200 flex items-center justify-center overflow-hidden shadow-2xl border-4 border-white/20">
                  <img
                    src="/jesca.jpeg?height=400&width=400"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Hero Content - Enhanced */}
            <div className="text-center lg:text-left space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-black -500/20 backdrop-blur-sm rounded-full border border-blue-300/30 mb-6">
                  <Star className="w-4 h-4 text-blue-300 mr-2" />
                  <span className="text-blue-100 text-sm font-medium">Available for opportunities</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent mb-6 leading-tight">
                  {personalInfo.name}
                </h1>
                <p className="text-2xl lg:text-3xl text-blue-200 mb-8 font-light">{personalInfo.title}</p>
                <p className="text-lg text-blue-100/90 leading-relaxed max-w-2xl">{personalInfo.about}</p>
              </div>
              {/* Enhanced Social Links */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-black -500 text-white shadow-lg  hover:bg-white/20 hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-0"
                  onClick={() => window.open(contact.linkedin, "_blank")}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
                <Button
                  size="lg"
                  className="bg-black -500 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  onClick={() => window.open(contact.github, "_blank")}
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
                <Button
                  size="lg"
                  className="bg-black -500 text-white hover:bg-white/20 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  onClick={() => window.open(`mailto:${contact.email}`)}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section - Enhanced */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-black -50 rounded-full border border-green -400-200 mb-6">
              <Code className="w-4 h-4 text-blue-100 mr-2" />
              <span className="text-blue-100 text-sm font-medium">Technical Expertise</span>
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-green-800 bg-clip-text text-transparent mb-6">
              Technical Skills
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-gradient-to-br from-white to-green-50/50"
              >
                <CardContent className="p-8">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{skill.name}</h3>
                      <p className="text-slate-600 font-medium">
                        {skill.years} • {skill.level}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Experience Section - Enhanced */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-black -50 rounded-full border border-indigo-200 mb-6">
              <Award className="w-4 h-4 text-blue-100 mr-2" />
              <span className="text-blue-100 text-sm font-medium">Professional Journey</span>
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-green-800 bg-clip-text text-transparent mb-6">
              Experience
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              My path in software engineering and cybersecurity
            </p>
          </div>
          <div className="space-y-8">
            {experience.map((exp: { title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; institution: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; duration: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined }, index: Key | null | undefined) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white hover:scale-[1.02]"
              >
                <CardContent className="p-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">{exp.title}</h3>
                        <p className="text-xl text-green-600 font-semibold">{exp.institution}</p>
                      </div>
                    </div>
                    <div className="flex items-center bg-black -100 px-4 py-2 rounded-full mt-4 md:mt-0">
                      <Calendar className="w-4 h-4 text-blue-300 mr-2" />
                      <span className="text-blue-200 font-medium">{exp.duration}</span>
                    </div>
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Projects Section - Enhanced */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-black -50 rounded-full border border-purple-200 mb-6">
              <ExternalLink className="w-4 h-4 text-blue-200 mr-2" />
              <span className="text-blue-200 text-sm font-medium">Portfolio Showcase</span>
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-green-800 bg-clip-text text-transparent mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Innovative solutions I've built and contributed to
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:scale-[1.02] bg-gradient-to-br from-white to-slate-50"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.png"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-green-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-700 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.languages.map((lang, index) => (
                      <Badge
                        key={index}
                        className="bg-gradient-to-r from-slate-500 to-green-600 text-white border-0 px-3 py-1 text-sm font-medium"
                      >
                        {lang}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.live !== "not yet deployed" && (
                      <Button
                        className="bg-black -500 text-blue-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex-1"
                        onClick={() => window.open(project.live, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      className="border-2 border-slate-300 bg-black -500 text-blue-200 shadow-lg transform hover:scale-105 transition-all duration-200 flex-1 "
                      onClick={() => window.open(project.code, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Education Section - Enhanced */}
      <section className="py-24 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-black -500 rounded-full border border-green-200 mb-6">
              <GraduationCap className="w-4 h-4 text-blue-200 mr-2" />
              <span className="text-blue-200 text-sm font-medium">Academic Foundation</span>
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-green-800 bg-clip-text text-transparent mb-6">
              Education
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Building knowledge through formal education</p>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white hover:scale-[1.02]"
              >
                <CardContent className="p-10">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-800 mb-3">{edu.title}</h3>
                      <p className="text-xl text-slate-500 font-semibold mb-4">{edu.institution}</p>
                      <div className="items-center bg-black -500 px-4 py-2 rounded-full inline-flex">
                        <Calendar className="w-4 h-4 text-blue-200 mr-2" />
                        <span className="text-blue-200 font-medium">{edu.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Languages & Activities - Enhanced */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Languages */}
            <div>
              <div className="mb-12">
                <div className="inline-flex items-center px-4 py-2 bg-black -500 rounded-full border border-green-200 mb-6">
                  <span className="text-blue-200 text-sm font-medium">🌍 Global Communication</span>
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-green-600 bg-clip-text text-transparent">
                  Languages
                </h2>
              </div>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-gradient-to-r from-white to-orange-50/30"
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-800 text-lg">{lang.language}</span>
                        <Badge className="bg-gradient-to-r from-black -500 to-green-500 text-white border-0 px-3 py-1">
                          {lang.level}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            {/* Activities */}
            <div>
              <div className="mb-12">
                <div className="inline-flex items-center px-4 py-2 bg-black -500 rounded-full border border-pink-200 mb-6">
                  <span className="text-blue-200 text-sm font-medium">🎯 Beyond Code</span>
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-green-800 bg-clip-text text-transparent">
                  Activities
                </h2>
              </div>
              <div className="space-y-6">
                {activities.map((activity, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-gradient-to-r from-white to-pink-50/30"
                  >
                    <CardContent className="p-8">
                      <h3 className="font-bold text-slate-800 text-xl mb-3">{activity.title}</h3>
                      <p className="text-green-600 font-semibold mb-3">{activity.institution}</p>
                      <p className="text-slate-700 leading-relaxed">{activity.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section - Enhanced */}
      <section className="py-24 px-4 bg-gradient-to-r from-slate-900 via-green-900 to-slate-900 text-green-500 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-black -500 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Mail className="w-4 h-4 text-blue-300 mr-2" />
              <span className="text-blue-100 text-sm font-medium">Get In Touch</span>
            </div>
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-slate-500 to-green-500 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-blue-100/90 mb-16 max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on projects, or just have a chat about
              technology
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
              { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone}` },
              { icon: Linkedin, label: "LinkedIn", value: "Connect", href: contact.linkedin },
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <item.icon className="w-10 h-10 text-blue-300 mx-auto mb-4 group-hover:text-white transition-colors" />
                  <span className="block text-sm text-blue-200 mb-2">{item.label}</span>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-white hover:text-blue-200 transition-colors font-medium"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* Footer - Enhanced */}
      <footer className="bg-slate-950 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-400 text-lg">
              © 2025 <span className="text-white font-semibold">{personalInfo.name}</span>. Crafted with{" "}
              <span className="text-red-400">&hearts;</span> 
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}