import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronUp,
  ChevronDown,
  Moon,
  Sun,
  Menu,
  X,
  Smartphone,
  Layers,
  Cpu,
  Globe,
  Database
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import profile from "@/assets/profile_new.jpg";
import cookbookLogo from "@/assets/cookbook-logo.png";
import ecommerceLogo from "@/assets/ecommerce-logo.png";
import obatkuLogo from "@/assets/Obatku.png";
import securicamLogo from "@/assets/securicam-logo.png";
import dicodingLogo from "@/assets/dicoding-logo.png";
import googleDeveloperLogo from "@/assets/google-developer-logo.png";
import cvFarischa from "@/assets/Farischa_CV_Newest.pdf";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();
  const [activeExperience, setActiveExperience] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll for experience slider
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
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
    { name: "Kotlin", category: "Language" },
    { name: "Java", category: "Language" },
    { name: "Dart", category: "Language" },
    { name: "Flutter", category: "Framework" },
    { name: "Android Jetpack", category: "Framework" },
    { name: "Compose Multiplatform", category: "Framework" },
  ];

  const projects = [
    {
      id: 1,
      title: "OBATKU",
      description:
        "A smart medicine reminder mobile application designed to help users manage their medication schedules more effectively and never miss a dose.",
      image: obatkuLogo,
      tech: ["Kotlin Multiplatform", "Android", "iOS", "Supabase"],
      role: "Mobile Developer",
      challenges: "Building a multiplatform app for Android and iOS while handling platform-specific behaviors like notifications and background reminders.",
      link: "https://www.obatkuapp.my.id/",
    },
    {
      id: 2,
      title: "E-Commerce Mobile App",
      description:
        "A robust Android e-commerce application built with Kotlin. Features include product browsing, cart management, wishlist, and secure checkout.",
      image: ecommerceLogo,
      tech: ["Kotlin", "Android Jetpack", "Room", "Coroutines", "Unit Test", "Jacoco"],
      role: "Android Developer",
      challenges:
        "Implementing complex state management and ensuring smooth performance.",
      link: "https://github.com/farischamakay/Ecommerce.git",
    },
    {
      id: 3,
      title: "Cookbook - Recipe App",
      description: "A cross-platform recipe recommendation app built with Flutter. Uses a Python/Flask backend for ML suggestions.",
      image: cookbookLogo,
      tech: ["Flutter", "Dart", "Python", "Flask"],
      role: "Mobile Developer",
      challenges:
        "Seamless integration between Flutter frontend and Python backend.",
      link: "https://github.com/farischamakay/Final-project-recipe-recommendation",
    },
    {
      id: 4,
      title: "SecuriCam - Smart Security",
      description: "IoT-integrated security camera system utilizing deep learning for object detection and real-time mobile monitoring.",
      image: securicamLogo,
      tech: ["Kotlin", "Firebase", "API integration", "WebRTC"],
      role: "Android Developer",
      challenges:
        "Low-latency video streaming and efficient on-device inference.",
      link: "https://github.com/khoerulih/SecuriCam.git",
    },
  ];

  // ... (Keep certificates array as is or update if needed)

  const experiences = [
    {
      company: "Bank Rakyat Indonesia (BRI)",
      position: "Mobile Developer",
      period: "Jun 2025 - Present",
      description:
        "Part of the Technology & Platform Engineer (TPE) Research team. Building internal libraries and standardizing mobile development.",
      achievements: [
        "Developing internal libraries using Flutter and Kotlin.",
        "Researching mobile technologies to improve efficiency.",
        "Optimizing mobile app performance.",
      ],
    },
    {
      company: "Project : Client Management System - Raisecall",
      position: "Fullstack Developer",
      period: "Apr 2025 - Jun 2025",
      description:
        "Assigned as a Fullstack Developer to work on the Raisecall application project for the Client-Management. Collaborated with the development team to build and enhance key features of the application, ensuring they met business requirements and design specifications.",
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
        "Assigned to the TDW team, I contributed as an Android Developer of the MyTelkomsel app, specifically focused on IndiHome-related features. I worked in an agile environment with cross-functional teams including UI/UX designers, solution architects, QA, and backend developers to deliver high-quality, scalable, and maintainable Android app.",
      achievements: [
        "Feature Development – Implemented new features based on sprint planning and UI/UX designs, ensuring smooth functionality and user experience.",
        "Bug Fixing & Optimization – Investigated and resolved issues reported by the QA team, improving application stability and performance.",
        "Code Quality & Best Practices – Applied clean code principles, and best practices to ensure maintainability and scalability.",
        "Collaboration with Solution Architects (SA) – Analyzed technical documentation in Confluence to align with system architecture and business requirements.",
        "Performance Optimization – Enhanced application performance by reducing memory leaks, optimizing API calls, and improving UI rendering efficiency.",
      ],
    },
    {
      company: "Bangkit Academy",
      position: "Contributor Mentor & Advisor",
      period: "Feb 2023 - Jan 2025",
      description:
        "Served as a dedicated Mentor for three consecutive cohorts at Bangkit Academy, a career readiness program supported by Google, GoTo, and Traveloka. Provided guidance, technical support, and motivation to cohorts of students throughout their learning journey. After completing the mentorship role, continued contributing to the program as an Advisor for one batch, supporting and supervising new mentors to ensure the quality and consistency of mentoring.",
      achievements: [
        "Provide a supportive learning environment that will lead to a high graduation rate among your students, which is 89% at minimum.",
        "Mentored and guided capstone teams to successfully complete their projects on time while maintaining high standards of development.",
        "Helped teams integrate machine learning models into their Android applications using TensorFlow Lite (TFLite) and ML Kit, ensuring efficient on-device inference.",
        "Leveraged my expertise to help teams gain deeper insights and find innovative solutions to their technical challenges.",
        "Assisted teams in choosing the most suitable technologies and tools tailored to their specific problem statements, ensuring scalability and efficiency.",
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
        "Resolve bugs, errors, and performance issues within the Driver application.",
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
        "Create User Acceptance Test in the form of text or video.",
        "Make an ERP program archive into HelpNDoc.",
      ],
    },
  ];

  // Auto-scroll for experience slider
  useEffect(() => {
    if (activeTab === "about" && !isPaused) {
      const interval = setInterval(() => {
        setActiveExperience((prev) => (prev + 1) % experiences.length);
      }, 5000); // 5 seconds interval
      return () => clearInterval(interval);
    }
  }, [activeTab, experiences.length, isPaused]);

  const handleNext = () => {
    setActiveExperience((prev) => (prev + 1) % experiences.length);
  };

  const handlePrev = () => {
    setActiveExperience((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  // Re-adding certificates buffer if it was accidentally removed during previous edits, or ensuring it's defined before usage.
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
    icon: React.ElementType;
  }) => (
    <button
      onClick={() => {
        setActiveTab(id);
        setIsMenuOpen(false);
      }}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${activeTab === id
        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-slate-900 dark:bg-white rounded-lg flex items-center justify-center">
                <Code className="text-white dark:text-slate-900" size={20} />
              </div>
              <span className="font-bold text-xl text-slate-900 dark:text-white tracking-tight">
                Farischa Makay
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <NavItem id="home" label="Home" icon={User} />
              <NavItem id="about" label="About" icon={User} />
              <NavItem id="portfolio" label="Portfolio" icon={Briefcase} />
              <NavItem id="certificates" label="Certificates" icon={Award} />
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
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
      <main className="pt-24 pb-12">
        {/* Home Section */}
        {activeTab === "home" && (
          <div className="min-h-[calc(100vh-6rem)] flex flex-col justify-center">
            {/* Hero Section */}
            <section className="px-4 sm:px-6 lg:px-8 mb-20">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  <div className="space-y-8 order-2 lg:order-1 animate-fade-in">
                    <div className="space-y-6">
                      <div className="inline-flex items-center px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                          Welcome to my portfolio
                        </span>
                      </div>
                      <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
                        Mobile <br />
                        <span className="text-blue-600 dark:text-blue-500">Developer</span>
                      </h1>
                      <p className="text-xl text-slate-600 dark:text-slate-300 font-medium font-sans">
                        Specializing in mobile applications.
                      </p>
                      <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
                        "Hi, I’m Farischa — but you can call me Far! I’m an Android Developer with 3+ years of experience crafting mobile apps using Kotlin and Flutter. 📱☕ 📍Currently living in Jakarta, Indonesia. I’m a coffee enthusiast who loves exploring new opportunities (and occasionally debugging life 😄)."
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <a
                        href={cvFarischa}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 text-white px-8 py-6 rounded-xl text-lg font-semibold shadow-sm hover:shadow-md transition-all duration-300">
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
                          className="border-2 border-slate-200 dark:border-slate-700 px-8 py-6 rounded-xl text-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
                        >
                          <Mail className="mr-2" size={20} />
                          Contact Me
                        </Button>
                      </a>
                    </div>

                    <div className="flex space-x-4 pt-4">
                      {[
                        { icon: Github, href: "https://github.com/farischamakay" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/farischa-makay-507795191/" },
                        { icon: Instagram, href: "https://www.instagram.com/far_makay/" }
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-3 bg-white dark:bg-gray-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          <social.icon size={22} />
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      className="relative"
                    >
                      <div className="relative z-10 rounded-2xl p-2 bg-white dark:bg-gray-800 shadow-2xl border border-gray-100 dark:border-gray-700 rotate-2 hover:rotate-0 transition-all duration-500 ease-in-out">
                        <img
                          src={profile}
                          alt="Profile"
                          className="w-[300px] lg:w-[400px] h-auto rounded-xl shadow-sm"
                        />
                      </div>
                      {/* Simple decorative elements */}
                      <div className="absolute top-10 -right-10 w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-xl -z-0"></div>
                      <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-purple-100 dark:bg-purple-900/30 rounded-full blur-xl -z-0"></div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills Preview */}
            <section className="px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Technologies</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center text-center justify-center gap-2 group"
                      >
                        <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] px-2 py-0.5">
                          {skill.category}
                        </Badge>
                        <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* About Section */}
        {activeTab === "about" && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
            <div className="mb-12 text-center lg:text-left">
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                Passionate about crafting intuitive and performant mobile experiences.
              </p>
            </div>

            <div className="grid gap-8">
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <div className="space-y-6">
                  <Card className="p-8 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-0">
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        My Story
                      </h2>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        My journey began when I stepped into university. I never
                        imagined that coding—something that once felt so
                        unfamiliar—would one day become a core part of my life.
                        It hasn't always been easy, but I truly enjoy every step
                        of the learning process. Today, I’ve graduated and now
                        work as an Android Developer. My goal is to continue learning and
                        doing what I love every day. 😊
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        I'm currently open for opportunities and collaborations,
                        so don't hesitate to reach out!
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-8 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-0">
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        Values & Mindset
                      </h2>
                      <div className="space-y-3">
                        {[
                          "Growth mindset - Always learning",
                          "Problem solver - Finding solutions",
                          "Collaborative approach",
                          "User-centric solutions",
                          "Clean code advocate"
                        ].map((value, i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                            <span className="text-slate-600 dark:text-slate-300">
                              {value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="p-8 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 h-full">
                    <CardContent className="p-0">
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                        Education & Background
                      </h2>
                      <div className="space-y-8">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                            <GraduationCap className="text-white" size={24} />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                              Information Technology
                            </h3>
                            <p className="text-blue-600 dark:text-blue-400 font-medium">
                              President University
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                              2019 - 2023 | GPA: 3.66/4.00
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                            <Code className="text-white" size={24} />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                              Android Development Bootcamp
                            </h3>
                            <p className="text-blue-600 dark:text-blue-400 font-medium">
                              Phincon Academy
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                              2023 | Intensive 3 months
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>


              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Experience</h2>
                <div
                  className="relative min-h-[400px] md:min-h-[300px] flex items-center bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-slate-100 dark:border-slate-700 shadow-sm transition-all duration-300"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  {/* Progress Indicators & Controls */}
                  <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-10 bg-slate-50 dark:bg-slate-900/50 p-2 rounded-full backdrop-blur-sm">
                    <button
                      onClick={handlePrev}
                      className="p-1 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label="Previous experience"
                    >
                      <ChevronUp size={16} />
                    </button>
                    <div className="flex flex-col gap-1.5">
                      {experiences.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveExperience(idx)}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === activeExperience
                            ? "bg-blue-600 h-4"
                            : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400"
                            }`}
                          aria-label={`Go to experience ${idx + 1}`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={handleNext}
                      className="p-1 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label="Next experience"
                    >
                      <ChevronDown size={16} />
                    </button>
                  </div>

                  <div className="w-full pr-12 md:pr-16">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeExperience}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="py-2"
                      >
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                          {experiences[activeExperience].position}
                        </h3>
                        <div className="text-blue-600 dark:text-blue-400 font-medium text-base md:text-lg mb-1">
                          {experiences[activeExperience].company}
                        </div>
                        <p className="text-xs md:text-sm text-slate-500 mb-4 font-medium flex items-center gap-2">
                          <Calendar size={14} />
                          {experiences[activeExperience].period}
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm md:text-base leading-relaxed">
                          {experiences[activeExperience].description}
                        </p>
                        <div className="space-y-2">
                          {experiences[activeExperience].achievements.map((ach, i) => (
                            <div key={i} className="flex gap-3">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                              <p className="text-slate-600 dark:text-slate-400 text-sm">{ach}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}

        {/* Portfolio Section */}
        {activeTab === "portfolio" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Farischa Makay Portfolio</h1>
              <p className="text-lg text-slate-600 dark:text-slate-400">Selected work showcasing mobile expertise.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {projects.map((project, index) => (
                <motion.a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="group relative block overflow-hidden rounded-[2.5rem] bg-white dark:bg-gray-800 shadow-sm hover:shadow-2xl transition-all duration-500 ring-1 ring-slate-200 dark:ring-slate-700"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                    
                    <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-xl rounded-2xl text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 border border-white/20">
                      <ExternalLink size={24} />
                    </div>
                  </div>

                  <div className="p-8 lg:p-10">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="secondary" className="bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-[11px] px-3 py-1 font-medium border-none rounded-full">
                          {t}
                        </Badge>
                      ))}
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base mb-8 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-wider group-hover:gap-2 transition-all duration-300">
                      Explore Project
                      <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        )}

        {/* Certificates Section */}
        {activeTab === "certificates" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Certifications</h1>
              <p className="text-lg text-slate-600 dark:text-slate-400">Professional achievements and continuous learning.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert) => (
                <div key={cert.id} className="flex gap-4 p-5 bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 flex-shrink-0 bg-slate-50 dark:bg-slate-700 rounded-lg p-2 flex items-center justify-center">
                    <img src={cert.image} alt="Logo" className="w-full h-full object-contain opacity-80" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white leading-tight mb-1">{cert.title}</h4>
                    <p className="text-sm text-slate-500 mb-2">{cert.issuer} • {cert.date}</p>
                    <a href={cert.link} target="_blank" className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1">
                      View Credential <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Modern Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <span className="font-bold text-xl text-slate-900 dark:text-white tracking-tight mb-4 block">
                Farischa Makay
              </span>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm">
                Mobile developer passionate about building amazing digital experiences.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">Links</h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                <li><button onClick={() => setActiveTab("home")} className="hover:text-blue-600 transition-colors">Home</button></li>
                <li><button onClick={() => setActiveTab("portfolio")} className="hover:text-blue-600 transition-colors">Portfolio</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">Connect</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="https://github.com/farischamakay" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><Github size={20} /></a>
                <a href="https://linkedin.com/in/farischa-makay-507795191" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><Linkedin size={20} /></a>
                <a href="mailto:farischamakay09@gmail.com" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><Mail size={20} /></a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 dark:border-slate-800 text-center text-slate-400 text-sm">
            © 2025 Farischa Makay. Crafted with precision.
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Index;
