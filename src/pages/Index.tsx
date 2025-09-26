import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  ExternalLink,
  Calendar,
  Award,
  User,
  Code,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import profile from "@/assets/profile.jpeg";
import cookbookLogo from "@/assets/cookbook-logo.png";
import ecommerceLogo from "@/assets/ecommerce-logo.png";
import skinCancerLogo from "@/assets/skin-cancer.png";
import securicamLogo from "@/assets/securicam-logo.png";
import dicodingLogo from "@/assets/dicoding-logo.png";
import googleDeveloperLogo from "@/assets/google-developer-logo.png";
import cvFarischa from "@/assets/Farischa_CV_Newest.pdf";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      delay: 0.1
    }
  }
};

  const skills = [
    { name: "Kotlin", level: 90, category: "Programming" },
    { name: "JavaScript", level: 90, category: "Programming" },
    { name: "Dart", level: 75, category: "Programming" },
    { name: "TypeScript", level: 85, category: "Programming" },
    { name: "Android Jetpack", level: 88, category: "Framework" },
    { name: "React.js", level: 88, category: "Framework" },
    { name: "Node.js", level: 82, category: "Backend" },
    { name: "Tailwind CSS", level: 90, category: "Styling" },
    { name: "Git", level: 85, category: "Tools" },
  ];

  const projects = [
    {
      id: 1,
      title: "Dashboard Learning Management System",
      description:
        "This is a dashboard for a Learning Management System (LMS) that allows users to make a report of courses, students, and instructors. It includes features such as course creation, student enrollment, and instructor management.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: ["Typescript", "sequilize", "chart", "react.js", "node.js"],
      role: "Fullstack Developer",
      challenges:
        "Implementation of real-time data visualization and responsive design",
      github:
        "https://github.com/farischamakay/Dashboard-Employee-Tracking?tab=readme-ov-file",
      demo: "#",
    },
    {
      id: 2,
      title: "Skin cancer Detection App",
      description:
        "This is a skin cancer detection app that uses machine learning to analyze images of skin lesions.",
      image: skinCancerLogo,
      tech: ["Kotlin", "Python", "MLkit", "TensorFlow Lite"],
      role: "Android Developer",
      challenges: "Implementation on device machine learning model",
      github: "https://github.com/farischamakay/Applied-ML-on-device-android",
      demo: "#",
    },
    {
      id: 3,
      title: "E-Commerce Mobile App",
      description:
        "This is E-commerce based on android application, build using Kotlin language with several key features including displaying a list of products, adding items to the cart and wishlist, performing checkout, and conducting payment transactions all within a single Android application. I created this project with a strong intent to enhance my skills and gain a deeper understanding of Android Architecture Components. This project reflects my dedication to learning and applying the latest technologies in mobile application development.",
      image: ecommerceLogo,
      tech: ["Kotlin", "Android Jetpack", "MVVM", "Injection", "Room"],
      role: "Android Developer",
      challenges:
        "Implementation real-time data visualization dan responsive design",
      github: "https://github.com/farischamakay/Ecommerce.git",
      demo: "#",
    },
    {
      id: 4,
      title: "Cookbook - Recipe App",
      description: "Final project for academy",
      image: cookbookLogo,
      tech: ["Dart", "Python", "Flutter", "Flask", "Firebase"],
      role: "Mobile Developer",
      challenges:
        "Create a model to get high predict the recipe based on ingredients using machine learning",
      github:
        "https://github.com/farischamakay/Final-project-recipe-recommendation",
      demo: "#",
    },
    {
      id: 5,
      title: "SecuriCam - Security Camera System",
      description: "Capstone project for Bangkit Academy 2022",
      image: securicamLogo,
      tech: ["Kotlin", "Machine Learning", "Firebase"],
      role: "Android Developer",
      challenges:
        "Live detection of security camera footage using machine learning",
      github: "https://github.com/khoerulih/SecuriCam.git",
      demo: "#",
    },
  ];

  const certificates = [
    {
      id: 1,
      title: "Memulai Pemrograman dengan Java",
      issuer: "Dicoding Indonesia",
      date: "2024",
      link: "https://www.dicoding.com/certificates/98XWLQN6JZM3",
      image: dicodingLogo,
      credentialId: "98XWLQN6JZM3",
    },
    {
      id: 2,
      title: "Belajar Penerapan Machine Learning untuk Android",
      issuer: "Dicoding Indonesia",
      date: "2024",
      link: "https://www.dicoding.com/certificates/L4PQ16MEQXO1",
      image: dicodingLogo,
      credentialId: "L4PQ16MEQXO1",
    },
    {
      id: 3,
      title: "Memulai Pemrograman dengan Dart",
      issuer: "Dicoding Indonesia",
      date: "2023",
      link: "https://www.dicoding.com/certificates/QLZ9Q8O2EZ5D",
      image: dicodingLogo,
      credentialId: "QLZ9Q8O2EZ5D",
    },
    {
      id: 4,
      title: "Memulai Pemrograman dengan Dart",
      issuer: "Dicoding Indonesia",
      date: "2023",
      link: "https://www.dicoding.com/certificates/QLZ9Q8O2EZ5D",
      image: dicodingLogo,
      credentialId: "QLZ9Q8O2EZ5D",
    },
    {
      id: 5,
      title: "Associate Android Developer",
      issuer: "Google Developers",
      date: "2022",
      link: "https://www.credential.net/16f08374-3fcc-49c2-8a82-1b38b81d9243#acc.uVZD9Nrw",
      image: googleDeveloperLogo,
      credentialId: "1235",
    },
  ];

  const experiences = [
    {
      company: "Project : Client Management System - Raisecall",
      position: "Fullstack Developer",
      period: "Apr 2025 - Jun 2025",
      description:
        " Assigned  as  a  Fullstack  Developer  to  work  on  the  Raisecall  application  project  for  the  Client-Management.Collaborated with the development team to build and enhance key features of the application, ensuring they met businessrequirements and design specifications",
      achievements: [
        "Built responsive user interfaces using React JS. (Framework Next Js)",
        "Developed and maintained backend APIs using NestJS.",
        "Integrated frontend and backend systems to ensure seamless data flow.",
        "Wrote clean, maintainable, and well-documented code.",
        "Performed debugging and bug fixing based on QA and user feedback.",
      ],
    },
    {
      company: "Project : MyTelkomsel - Indihome",
      position: "Android Developer",
      period: "Nov 2023 - Apr 2025",
      description:
        "Assigned to the TDW team, I contributed as an Android Developer of the MyTelkomsel app, specifically focused onIndiHome-related features. I worked in an agile environment with cross-functional teams including UI/UX designers, solutionarchitects, QA, and backend developers to deliver high-quality, scalable, and maintainable Android app",
      achievements: [
        "Feature  Development  –  Implemented  new  features  based  on  sprint  planning  and  UI/UX  designs,  ensuring  smoothfunctionality and user experience.",
        "Bug Fixing & Optimization – Investigated and resolved issues reported by the QA team, improving application stability andperformance.",
        "Code Quality & Best Practices – Applied clean code principles, and best practices to ensure maintainability and scalability.",
        "Collaboration  with  Solution  Architects  (SA)  –  Analyzed  technical  documentation  in  Confluence  to  align  with  systemarchitecture and business requirements.",
        "Performance  Optimization  –  Enhanced  application  performance  by  reducing  memory  leaks,  optimizing  API  calls,  andimproving UI rendering efficiency.",
      ],
    },
    {
      company: "Bangkit Academy",
      position: "Contributor Mentor & Advisor",
      period: "Feb 2023 - Jan 2025",
      description:
        "Served as a dedicated Mentor for three consecutive cohorts at Bangkit Academy, a career readiness program supported by Google, GoTo, and Traveloka. Provided guidance, technical support, and motivation to cohorts of students throughout their learning journey. After completing the mentorship role, continued contributing to the program as an Advisor for one batch, supporting and supervising new mentors to ensure the quality and consistency of mentoring.",
      achievements: [
        "Provide a supportive learning environment that will lead to a high graduation rate among your students, which is 89% atminimum.",
        "Mentored and guided capstone teams to successfully complete their projects on time while maintaining high standards of development.",
        "Helped teams integrate machine learning models into their Android applications using TensorFlow Lite (TFLite) and ML Kit,ensuring efficient on-device inference.",
        "Leveraged my expertise to help teams gain deeper insights and find innovative solutions to their technical challenges.",
        "Assisted teams in choosing the most suitable technologies and tools tailored to their specific problem statements, ensuringscalability and efficiency.",
        "Provided insights on agile development practices, sprint planning, and version control (Git) to help teams manage their projects effectively.",
        "Collaborating with other mentors and contributors to share best practices and improve the overall mentoring process.",
      ],
    },
    {
      company: "PT Mostrans",
      position: "Mobile Developer Intern",
      period: "May 2023 - Aug 2023",
      description:
        "As a Mobile Developer Intern at PT Mostrans, I was responsible for developing and maintaining the company's mobile applications. I worked closely with the development team to implement new features, fix bugs, and optimize the performance of the applications. My role involved collaborating with designers and backend developers to ensure a seamless user experience and efficient data handling.",
      achievements: [
        "Develop new features and functionalities for Driver app based on project requirements.",
        "Write clean, maintainable, and efficient code using clean architecture based on Kotlin.",
        "Create GraphQL schema and Integrate the APIs to add additional functionality to the application.",
        "Resolve bugs, errors, and performance issues within the Driver application. ",
        "Work closely with the design team to implement intuitive and visually appealing user interfaces (UI) for Driver App.",
        "Participate in code reviews to ensure code quality, maintainability, and adherence to coding guidelines.",
      ],
    },

    {
      company: "PT Supernova Flexible Packaging",
      position: "Information Technology Intern",
      period: "Mar 2022 - Aug 2022",
      description:
        "During my 6 months of internship, I participated as an ERP support intern with the following jobs:",
      achievements: [
        "Monitoring the work order section and do the analysis to solve work order unbalance if there is a request for assistance from the PPIC team.",
        "Do some tasks to edit ERP report program with Crystal Report Program.",
        "Provide support from the ERP side to the SAP team in the new program that will go live.",
        "Create User Acceptance Test in the form of text or video. ",
        "Make an ERP program archive into HelpNDoc.",
      ],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih, saya akan segera membalas pesan Anda.",
    });
  };

  const NavItem = ({
    id,
    label,
    icon: Icon,
  }: {
    id: string;
    label: string;
    icon: unknown;
  }) => (
    <button
      onClick={() => {
        setActiveTab(id);
        setIsMenuOpen(false);
      }}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        activeTab === id
          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
          : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-all duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="text-white" size={20} />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              <NavItem id="home" label="Home" icon={User} />
              <NavItem id="about" label="About" icon={User} />
              <NavItem id="portfolio" label="Portfolio" icon={Briefcase} />
              <NavItem id="certificates" label="Certificates" icon={Award} />
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-2">
                <NavItem id="home" label="Home" icon={User} />
                <NavItem id="about" label="About" icon={User} />
                <NavItem id="portfolio" label="Portfolio" icon={Briefcase} />
                <NavItem id="certificates" label="Certificates" icon={Award} />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Home Section */}
        {activeTab === "home" && (
          <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8 animate-fade-in">
                    <div className="space-y-4">
                      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full">
                        <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          Welcome to my portfolio
                        </span>
                      </div>
                      <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                        Farischa{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          Makay
                        </span>
                      </h1>
                      <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                        Android | Fullstack Developer
                      </p>
                      <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl">
                        "Hi, I’m Farischa — but you can call me Far! I’m an
                        Android Developer with 2 years of experience crafting
                        mobile apps using Kotlin and Flutter. 📱☕
                        📍Currently living in Jakarta, Indonesia. I’m a coffee
                        enthusiast who loves exploring new opportunities (and
                        occasionally debugging life 😄)."
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={cvFarischa}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                          <Download className="mr-2" size={20} />
                          Download CV
                        </Button>
                      </a>
                      <a
                        href="https://wa.me/6282192577546"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          className="border-2 border-gray-300 dark:border-gray-600 px-8 py-3 rounded-xl text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                        >
                          <Mail className="mr-2" size={20} />
                          Contact Me
                        </Button>
                      </a>
                    </div>

                    <div className="flex space-x-6">
                      <a
                        href="https://github.com/farischamakay"
                        className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                      >
                        <Github
                          className="text-gray-600 dark:text-gray-300"
                          size={24}
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/farischa-makay-507795191/"
                        className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                      >
                        <Linkedin
                          className="text-gray-600 dark:text-gray-300"
                          size={24}
                        />
                      </a>
                      <a
                        href="https://www.instagram.com/far_makay/"
                        className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                      >
                        <Instagram
                          className="text-gray-600 dark:text-gray-300"
                          size={24}
                        />
                      </a>
                    </div>
                  </div>

                  <div className="flex justify-center lg:justify-end animate-fade-in">
                    <div className="relative">
                      <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl">
                        <img
                          src={profile}
                          alt="Profile"
                          className="w-full h-full object-cover rounded-3xl"
                        />
                      </div>
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                        <Code className="text-white" size={28} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills Preview */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Skills & Expertise
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Technologies I work with
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills.map((skill, index) => (
                    <Card
                      key={skill.name}
                      className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                    >
                      <CardContent className="p-0">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {skill.name}
                          </h3>
                          <Badge variant="secondary" className="text-xs">
                            {skill.category}
                          </Badge>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        <div className="text-right mt-2">
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* About Section */}
        {activeTab === "about" && (
          <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  About{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Me
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  An android developer with a passion for creating user-friendly
                  apps and also having knowledge in web development.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 mb-20">
                <div className="space-y-6">
                  <Card className="p-8 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg">
                    <CardContent className="p-0">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        My Story
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        My journey began when I stepped into university. I never
                        imagined that coding—something that once felt so
                        unfamiliar—would one day become a core part of my life.
                        It hasn't always been easy, but I truly enjoy every step
                        of the learning process. Today, I’ve graduated and now
                        work as a Junior Consultant, working projects in Android
                        and Web development. My goal is to continue learning and
                        doing what I love every day. 😊
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        I'm currently open for opportunities and collaborations,
                        so don't hesitate to reach out!
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-8 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg">
                    <CardContent className="p-0">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Values & Mindset
                      </h2>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-300">
                            Growth mindset - Always learning
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-300">
                            Problem solver - Finding solutions
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-300">
                            Collaborative approach
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-300">
                            User-centric solutions
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-300">
                            Clean code advocate
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="p-8 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg">
                    <CardContent className="p-0">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Education & Background
                      </h2>
                      <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <GraduationCap className="text-white" size={24} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              Information Technology
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                              President University
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              2019 - 2023 | GPA: 3.66/4.00
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Code className="text-white" size={24} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              Android Development Bootcamp
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                              Phincon Academy
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              2023 | Intensive 3 months
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Code className="text-white" size={24} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              Mobile Development Bootcamp
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                              Bangkit Academy
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              2022 | Intensive 6 months
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Experience Timeline */}
              <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ 
                    once: true, 
                    margin: "-50px 0px -100px 0px",
                    amount: 0.2 
                  }}
              variants={cardVariants}
              custom={index}
              >
              <Card className="p-8 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.position}
                        </h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="mt-2 md:mt-0 w-fit"
                      >
                        <Calendar className="mr-1" size={14} />
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Contributions:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                          >
                            <ChevronRight
                              size={16}
                              className="text-blue-500"
                            />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
              </Card>
              </motion.div>
              ))}
              </div>

              {/* Contact Info */}
              <Card className="p-8 mt-10 border-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl">
                <CardContent className="p-0">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Let's Connect!</h2>
                    <p className="text-blue-100 text-lg">
                      Thanks for visiting my portfolio! If you have any
                      questions, opportunities, or just want to say hi, feel
                      free to reach out.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="flex flex-col items-center space-y-2">
                      <Mail className="w-8 h-8" />
                      <span className="font-medium">Email</span>
                      <span className="text-blue-100">
                        farischamakay09@gmail.com
                      </span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Phone className="w-8 h-8" />
                      <span className="font-medium">Phone</span>
                      <span className="text-blue-100">+62 821-9257-7546</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <MapPin className="w-8 h-8" />
                      <span className="font-medium">Location</span>
                      <span className="text-blue-100">Jakarta, Indonesia</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Portfolio Section */}
        {activeTab === "portfolio" && (
          <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  My{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Portfolio
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  A collection of projects that showcase my skills and
                  experience in web development
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <Card
                    key={project.id}
                    className="group overflow-hidden border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={project.github}
                          className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
                        >
                          <Github
                            size={16}
                            className="text-gray-700 dark:text-gray-300"
                          />
                        </a>
                        <a
                          href={project.demo}
                          className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
                        >
                          <ExternalLink
                            size={16}
                            className="text-gray-700 dark:text-gray-300"
                          />
                        </a>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="mb-4">
                        <Badge variant="outline" className="mb-2">
                          {project.role}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                            Challenge & Solution:
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                            {project.challenges}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Skills Section */}
              <div className="mt-20">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Technical Skills
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Technologies and tools I use
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills.map((skill) => (
                    <Card
                      key={skill.name}
                      className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                    >
                      <CardContent className="p-0">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {skill.name}
                          </h3>
                          <Badge variant="secondary" className="text-xs">
                            {skill.category}
                          </Badge>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        <div className="text-right mt-2">
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Certificates Section */}
        {activeTab === "certificates" && (
          <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Certificates
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Professional certifications and achievements that validate my
                  expertise
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certificates.map((cert) => (
                  <Card
                    key={cert.id}
                    className="group overflow-hidden border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge className="bg-white/90 text-gray-900 hover:bg-white">
                          <Award className="mr-1" size={12} />
                          {cert.date}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-3">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          ID: {cert.credentialId}
                        </div>
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            View Credential
                            <ExternalLink className="ml-1" size={14} />
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="text-white" size={20} />
                </div>
                <span className="font-bold text-xl">Farischa Makay</span>
              </div>
              <p className="text-gray-400">
                Android | Fullstack Developer passionate about creating amazing
                digital experiences.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setActiveTab("home")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => setActiveTab("about")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => setActiveTab("portfolio")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Portfolio
                </button>
                <button
                  onClick={() => setActiveTab("certificates")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Certificates
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/farischamakay"
                  className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/farischa-makay-507795191/"
                  className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://wa.me/6282192577546"
                  className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Farischa Makay. Made with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
