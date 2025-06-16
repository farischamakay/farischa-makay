
import React, { useState, useEffect } from 'react';
import { Download, Mail, Github, Linkedin, Instagram, MapPin, Phone, Send, ExternalLink, Calendar, Award, User, Code, Briefcase, GraduationCap, ChevronRight, Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const skills = [
    { name: 'JavaScript', level: 90, category: 'Programming' },
    { name: 'TypeScript', level: 85, category: 'Programming' },
    { name: 'React.js', level: 88, category: 'Framework' },
    { name: 'Node.js', level: 82, category: 'Backend' },
    { name: 'Tailwind CSS', level: 90, category: 'Styling' },
    { name: 'Git', level: 85, category: 'Tools' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'Modern dashboard untuk manajemen toko online dengan real-time analytics',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      role: 'Frontend Developer',
      challenges: 'Implementasi real-time data visualization dan responsive design',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplikasi manajemen tugas dengan fitur kolaborasi tim',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      role: 'Fullstack Developer',
      challenges: 'Real-time collaboration dan optimasi database queries',
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Learning Management System',
      description: 'Platform pembelajaran online dengan video streaming',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      tech: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS S3'],
      role: 'Lead Developer',
      challenges: 'Video streaming optimization dan payment gateway integration',
      github: '#',
      demo: '#'
    }
  ];

  const certificates = [
    {
      id: 1,
      title: 'React Developer Certificate',
      issuer: 'Meta (Facebook)',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
      credentialId: 'META-2024-001'
    },
    {
      id: 2,
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
      credentialId: 'FCC-2023-JS'
    },
    {
      id: 3,
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
      credentialId: 'AWS-CP-2024'
    }
  ];

  const experiences = [
    {
      company: 'TechCorp Indonesia',
      position: 'Senior Frontend Developer',
      period: '2023 - Present',
      description: 'Memimpin tim frontend dalam pengembangan aplikasi e-commerce dengan 1M+ users',
      achievements: ['Meningkatkan page load speed 40%', 'Implementasi design system', 'Mentoring junior developer']
    },
    {
      company: 'StartupXYZ',
      position: 'Fullstack Developer',
      period: '2022 - 2023',
      description: 'Mengembangkan platform SaaS dari zero to one dengan teknologi modern',
      achievements: ['Membangun MVP dalam 3 bulan', 'Integrasi payment gateway', 'Setup CI/CD pipeline']
    },
    {
      company: 'Digital Agency ABC',
      position: 'Frontend Developer',
      period: '2021 - 2022',
      description: 'Mengembangkan website dan aplikasi web untuk berbagai klien',
      achievements: ['20+ project selesai', 'Responsive design expert', 'Client satisfaction 95%']
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih, saya akan segera membalas pesan Anda.",
    });
  };

  const NavItem = ({ id, label, icon: Icon }: { id: string; label: string; icon: any }) => (
    <button
      onClick={() => {
        setActiveTab(id);
        setIsMenuOpen(false);
      }}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        activeTab === id
          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
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
        {activeTab === 'home' && (
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
                        John <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Doe</span>
                      </h1>
                      <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                        Fullstack Developer | React Specialist
                      </p>
                      <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl">
                        "Turning ideas into real-world digital experiences with modern technologies and creative solutions."
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                        <Download className="mr-2" size={20} />
                        Download CV
                      </Button>
                      <Button variant="outline" className="border-2 border-gray-300 dark:border-gray-600 px-8 py-3 rounded-xl text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300">
                        <Mail className="mr-2" size={20} />
                        Contact Me
                      </Button>
                    </div>

                    <div className="flex space-x-6">
                      <a href="#" className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                        <Github className="text-gray-600 dark:text-gray-300" size={24} />
                      </a>
                      <a href="#" className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                        <Linkedin className="text-gray-600 dark:text-gray-300" size={24} />
                      </a>
                      <a href="#" className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                        <Instagram className="text-gray-600 dark:text-gray-300" size={24} />
                      </a>
                    </div>
                  </div>

                  <div className="flex justify-center lg:justify-end animate-fade-in">
                    <div className="relative">
                      <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl">
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
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
                    <Card key={skill.name} className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                      <CardContent className="p-0">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
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
                          <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
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
        {activeTab === 'about' && (
          <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Passionate developer with 3+ years of experience creating digital solutions that make a difference
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 mb-20">
                <div className="space-y-6">
                  <Card className="p-8 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg">
                    <CardContent className="p-0">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Story</h2>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        Saya memulai perjalanan sebagai developer sejak kuliah di Teknik Informatika. 
                        Passion saya terhadap teknologi dimulai dari rasa ingin tahu tentang bagaimana 
                        aplikasi dan website yang sering saya gunakan dibuat.
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Setelah lulus, saya memutuskan untuk fokus pada pengembangan web modern dengan 
                        React dan Node.js. Saya percaya bahwa teknologi harus mempermudah hidup manusia, 
                        dan itulah yang menjadi motivasi saya dalam setiap project.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-8 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg">
                    <CardContent className="p-0">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Values & Mindset</h2>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-300">Growth mindset - Always learning</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-300">Collaborative approach</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-300">User-centric solutions</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-300">Clean code advocate</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="p-8 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg">
                    <CardContent className="p-0">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education & Background</h2>
                      <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <GraduationCap className="text-white" size={24} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">S1 Teknik Informatika</h3>
                            <p className="text-gray-600 dark:text-gray-300">Universitas Indonesia</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">2018 - 2022 | GPA: 3.7/4.0</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Code className="text-white" size={24} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">Bootcamp Fullstack</h3>
                            <p className="text-gray-600 dark:text-gray-300">Hacktiv8 Indonesia</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">2022 | Intensive 6 months</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Experience Timeline */}
              <div className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300">My professional journey</p>
                </div>

                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <Card key={index} className="p-8 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.position}</h3>
                            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                          </div>
                          <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                            <Calendar className="mr-1" size={14} />
                            {exp.period}
                          </Badge>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                                <ChevronRight size={16} className="text-blue-500" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <Card className="p-8 border-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl">
                <CardContent className="p-0">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Let's Connect!</h2>
                    <p className="text-blue-100 text-lg">Ready to discuss your next project?</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="flex flex-col items-center space-y-2">
                      <Mail className="w-8 h-8" />
                      <span className="font-medium">Email</span>
                      <span className="text-blue-100">john.doe@email.com</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Phone className="w-8 h-8" />
                      <span className="font-medium">Phone</span>
                      <span className="text-blue-100">+62 812-3456-7890</span>
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
        {activeTab === 'portfolio' && (
          <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  A collection of projects that showcase my skills and experience in web development
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <Card key={project.id} className="group overflow-hidden border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
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
                          <Github size={16} className="text-gray-700 dark:text-gray-300" />
                        </a>
                        <a
                          href={project.demo}
                          className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
                        >
                          <ExternalLink size={16} className="text-gray-700 dark:text-gray-300" />
                        </a>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                      
                      <div className="mb-4">
                        <Badge variant="outline" className="mb-2">
                          {project.role}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Challenge & Solution:</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{project.challenges}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Skills Section */}
              <div className="mt-20">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300">Technologies and tools I use</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills.map((skill) => (
                    <Card key={skill.name} className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                      <CardContent className="p-0">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
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
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
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
        {activeTab === 'certificates' && (
          <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certificates</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Professional certifications and achievements that validate my expertise
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certificates.map((cert) => (
                  <Card key={cert.id} className="group overflow-hidden border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
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
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-3">{cert.issuer}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          ID: {cert.credentialId}
                        </div>
                        <Button variant="outline" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          View Credential
                          <ExternalLink className="ml-1" size={14} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Achievement Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
                <Card className="p-6 text-center border-0 bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold mb-2">15+</div>
                    <div className="text-blue-100">Certificates Earned</div>
                  </CardContent>
                </Card>
                <Card className="p-6 text-center border-0 bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold mb-2">3+</div>
                    <div className="text-purple-100">Years Experience</div>
                  </CardContent>
                </Card>
                <Card className="p-6 text-center border-0 bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-green-100">Projects Completed</div>
                  </CardContent>
                </Card>
                <Card className="p-6 text-center border-0 bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-orange-100">Client Satisfaction</div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="mt-20">
                <Card className="p-8 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl">
                  <CardContent className="p-0">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
                      <p className="text-lg text-gray-600 dark:text-gray-300">
                        Interested in working together? Let's discuss your project!
                      </p>
                    </div>
                    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Name
                          </label>
                          <Input 
                            placeholder="Your name" 
                            className="bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email
                          </label>
                          <Input 
                            type="email" 
                            placeholder="your.email@example.com" 
                            className="bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Message
                        </label>
                        <Textarea 
                          placeholder="Tell me about your project..." 
                          rows={6}
                          className="bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 resize-none"
                          required
                        />
                      </div>
                      <div className="text-center">
                        <Button 
                          type="submit"
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <Send className="mr-2" size={20} />
                          Send Message
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
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
                <span className="font-bold text-xl">John Doe</span>
              </div>
              <p className="text-gray-400">
                Fullstack Developer passionate about creating amazing digital experiences.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button onClick={() => setActiveTab('home')} className="block text-gray-400 hover:text-white transition-colors">
                  Home
                </button>
                <button onClick={() => setActiveTab('about')} className="block text-gray-400 hover:text-white transition-colors">
                  About
                </button>
                <button onClick={() => setActiveTab('portfolio')} className="block text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </button>
                <button onClick={() => setActiveTab('certificates')} className="block text-gray-400 hover:text-white transition-colors">
                  Certificates
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 John Doe. Made with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
