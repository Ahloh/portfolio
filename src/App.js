import React, { useState, useEffect } from 'react';
import { Search, Moon, Sun, Mail, Linkedin, Github, Menu, X, Download, ExternalLink, ArrowLeft, Inbox } from 'lucide-react';
import jsPDF from 'jspdf';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [messages, setMessages] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const saved = localStorage.getItem('contactMessages');
    if (saved) {
      setMessages(JSON.parse(saved));
    }
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      description: 'Modern portfolio website built with React featuring dark mode, project showcase, blog, and contact system.',
      fullDescription: 'A fully responsive portfolio website designed to showcase my work and skills as a computer science student. Built with React and Tailwind CSS, this site features smooth page transitions, a dark/light mode toggle, interactive project cards, a searchable blog section, and an integrated contact form using EmailJS for direct communication. The site is deployed on Netlify with continuous deployment from GitHub.',
      tech: ['React', 'Tailwind CSS', 'EmailJS'],
      features: ['Dark/Light Mode Toggle', 'Responsive Design', 'Email Contact Form', 'Project Showcases', 'Blog with Search'],
      link: 'https://github.com/Ahloh/portfolio',
      github: 'https://github.com/Ahloh/portfolio'
    },
    {
      id: 2,
      title: 'Private Memory Gallery',
      description: 'Password-protected personal website for sharing music, videos, and photos with my girlfriend.',
      fullDescription: 'A secure, password-protected web application designed as a private space for sharing memories. Features include media galleries for photos and videos, integrated music player, custom authentication system, and responsive design for mobile viewing. Built with a focus on privacy and user experience, this site serves as a personal digital scrapbook accessible only with the correct access code.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      features: ['Password Protection', 'Photo Gallery', 'Video Player', 'Music Integration', 'Mobile Responsive'],
      link: 'https://github.com/Ahloh/memory-gallery',
      github: 'https://github.com/Ahloh/memory-gallery'
    },
    {
      id: 3,
      title: 'Ad-Free WiFi Network',
      description: 'Custom home network setup using Raspberry Pi with Pi-hole for network-wide ad blocking.',
      fullDescription: 'A network-level ad blocker and DNS server built using Raspberry Pi and Pi-hole software. This project creates an ad-free browsing experience for all devices connected to the home network without requiring individual ad blockers on each device. The setup includes DNS filtering, network monitoring, custom blocklists, and a web dashboard for managing the system. This solution blocks ads, tracking, and malicious domains at the network level, improving browsing speed and privacy for all connected devices.',
      tech: ['Raspberry Pi', 'Pi-hole', 'Linux'],
      features: ['Network-Wide Ad Blocking', 'DNS Filtering', 'Custom Blocklists', 'Web Dashboard', 'Network Monitoring'],
      link: 'https://github.com/Ahloh/pihole-setup',
      github: 'https://github.com/Ahloh/pihole-setup'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Building My Portfolio Website with React',
      date: 'January 20, 2026',
      excerpt: 'How I built a modern portfolio website from scratch using React, Tailwind CSS, and EmailJS.',
      category: 'Web Development',
      content: `Creating a portfolio website is one of the best projects for any developer. It showcases your skills while giving you a platform to share your work. Here's how I built mine.

I chose React because I wanted to learn modern frontend development. React's component-based architecture made it easy to break down the site into reusable pieces like the navigation bar, project cards, and blog posts.

The design focuses on simplicity and usability. I implemented a dark mode toggle because I personally prefer dark interfaces. I use the color scheme uses a gradient from blue to purple in light mode, giving it a modern feel without being overwhelming.

One challenge was implementing the contact form. I needed a way to receive messages without setting up a backend server(Maybe my next project). EmailJS solved this perfectly. It's a service that sends emails directly from the frontend using their API. I integrated it so that when someone fills out the contact form, I receive an email with their message.

The site is fully responsive. I used Tailwind CSS for styling, which made responsive design straightforward with its utility classes. The mobile menu collapses into a hamburger menu, and all pages adapt to different screen sizes.

For deployment, I chose Netlify. It connects directly to my GitHub repository, so every time I push changes, the site automatically rebuilds and deploys. This continuous deployment workflow makes updates effortless.

Building this portfolio taught me a lot about React hooks, state management, and modern CSS. The best part is having a live site where I showcase my work and share my learning journey through blog posts like this one.`
    },
    {
      id: 2,
      title: 'Creating a Private Memory Gallery for Two',
      date: 'January 15, 2026',
      excerpt: 'Building a password-protected website to share music, videos, and photos privately with my girlfriend.',
      category: 'Web Development',
      content: `Sometimes the best projects come from personal needs. I wanted a private space online where my girlfriend and I could share our favorite memories, music, and videos without worrying about privacy.

The concept was simple: a password-protected website that only we could access. No social media, no public sharing, just our own digital space.

I started with the authentication. Instead of building a complex user system, I implemented a simple password gate. When you visit the site, you're prompted for a code. Only the correct code grants access. This approach keeps things simple while providing the security we need.

The homepage features our photo gallery. I organized photos into albums by date and event. Each photo can be viewed in full screen with smooth transitions. I added lazy loading so the page loads quickly even with many images.

For videos, I created a custom video player. Rather than relying on YouTube or other platforms, I host our videos directly. This gives us complete privacy and control. The player includes standard controls like play, pause, volume, and fullscreen.

The music section was my favorite to build. I integrated a playlist feature where we can add our favorite songs. The player runs in the background, so you can browse photos or videos while music plays. I added a pause and skip options to make it feel like a real music app.

Everything is responsive and works perfectly on our phones. Since we often share memories on the go, mobile support was essential. I used CSS Grid for layouts and media queries to ensure everything looks great on any screen size.

This project taught me about handling media files, building custom players, and creating secure authentication. But more importantly, it gave us a special place to preserve and share our memories together.`
    },
    {
      id: 3,
      title: 'Setting Up Ad-Free WiFi with Raspberry Pi and Pi-hole',
      date: 'January 10, 2026',
      excerpt: 'How I built a network-wide ad blocker using a Raspberry Pi, eliminating ads for all devices on my home network.',
      category: 'Networking',
      content: `I think Ads are everywhere online. They slow down websites, track your behavior, and ruin your browsing experience. I wanted a solution that would block ads for every device on my home network without installing ad blockers on each one individually.

The answer was Pi-hole, a network-level ad blocker that runs on a Raspberry Pi. It works by acting as a DNS server for your network, blocking requests to known advertising and tracking domains before they even reach your devices.

I started by setting up the Raspberry Pi. I used a Raspberry Pi 4 with 2GB of RAM, though older models work fine too. After installing Raspberry Pi OS Lite (a minimal version without a desktop interface), I configured it with a static IP address so it would always be reachable on the network.

Installing Pi-hole was straightforward. Their installation script handles everything automatically. Once installed, I accessed the web dashboard to configure settings and view statistics. The dashboard shows how many queries are being blocked, which domains are most frequently accessed, and detailed logs of all DNS requests.

The real power comes from configuring your router to use the Pi-hole as the DNS server. This means every device that connects to your WiFi automatically routes through Pi-hole. No configuration needed on phones, tablets, computers, or smart devices. They all benefit from ad blocking instantly.

I customized the blocklists to be aggressive with advertising while allowing legitimate services. Pi-hole comes with default blocklists, but I added additional ones for tracking, malware, and telemetry. You can whitelist specific domains if something breaks, which happened a few times with certain apps.

The results were immediate and impressive. Pages load faster without downloading ad scripts and images.  The dashboard reports blocking about 25-30% of all DNS queries, which represents thousands of blocked ads and trackers every day.

Beyond ad blocking, Pi-hole improves privacy by preventing tracking domains from collecting your browsing data. It also adds a layer of security by blocking known malicious domains.

This project taught me about DNS, networking, Linux server administration, and how the internet handles requests behind the scenes. The Raspberry Pi runs 24/7 consuming minimal power while protecting every device on my network. It's one of those projects that keeps giving value every single day.`
    }
  ];

  const filteredBlogPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Blog', id: 'blog' },
    { name: 'About', id: 'about' },
    { name: 'Resume', id: 'resume' },
    { name: 'Now', id: 'now' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_n9v20m4',
          template_id: 'template_n6kagem',
          user_id: 'tupQMaAspfx6bqkNA',
          template_params: templateParams
        })
      });

      if (response.ok) {
        alert('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again or email me directly at ppierre5@oldwestbury.edu');
    }
  };

  const HomePage = () => (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Hi, My Name Is Christopher Louis
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
          I'm a Computer Science student who wants to learn networking, cybersecurity and always exploring software development.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => setCurrentPage('about')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            About Me
          </button>
          <button
            onClick={() => setCurrentPage('contact')}
            className="border-2 border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500 px-8 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );

  const ProjectDetailPage = () => {
    const project = projects.find(p => p.id === selectedProject);
    if (!project) return null;

    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <button
          onClick={() => setSelectedProject(null)}
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-6"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </button>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          {project.title}
        </h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span key={i} className="bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-200 dark:border-blue-900">
              {tech}
            </span>
          ))}
        </div>
        <div className="prose dark:prose-invert max-w-none mb-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Key Features</h2>
          <ul className="space-y-2">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <span className="text-blue-600 dark:text-blue-400">→</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <ExternalLink size={20} />
            View on GitHub
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors flex items-center gap-2"
          >
            <Github size={20} />
            Source Code
          </a>
        </div>
      </div>
    );
  };

  const ProjectsPage = () => {
    if (selectedProject) return <ProjectDetailPage />;

    return (
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">Projects</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg">
          Selected work from my portfolio
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project.id)}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-all cursor-pointer hover:border-blue-500"
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-200 dark:border-blue-900">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="text-blue-600 dark:text-blue-400 hover:underline">
                View Details →
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const BlogDetailPage = () => {
    const post = blogPosts.find(p => p.id === selectedBlog);
    if (!post) return null;

    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <button
          onClick={() => setSelectedBlog(null)}
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-6"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </button>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm text-gray-500 dark:text-gray-500">{post.date}</span>
          <span className="text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
            {post.category}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-gray-100">
          {post.title}
        </h1>
        <div className="prose dark:prose-invert max-w-none">
          {post.content.split('\n\n').map((paragraph, i) => (
            <p key={i} className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    );
  };

  const BlogPage = () => {
    if (selectedBlog) return <BlogDetailPage />;

    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">Blog</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
          Thoughts on development, computer science, and learning
        </p>
        <div className="relative mb-8">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500"
          />
        </div>
        <div className="space-y-6">
          {filteredBlogPosts.map(post => (
            <div
              key={post.id}
              onClick={() => setSelectedBlog(post.id)}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-all cursor-pointer hover:border-blue-500"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm text-gray-500 dark:text-gray-500">{post.date}</span>
                <span className="text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                  {post.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">{post.excerpt}</p>
              <div className="text-blue-600 dark:text-blue-400 hover:underline">
                Read More →
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const AboutPage = () => (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-gray-100">About Me</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          I'm Christopher, a college student focused on cybersecurity and networking. My background started in computer science, then narrowed toward security because hands on work mattered more than theory.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          My journey in technology started with curiosity about how tje internet works. I spend time learning about prevous hacks, trying to break in systems, and learning how networks fail and recover. IProgress matters more to me than perfection. This site exists to keep me honest. It shows what I am learning, what I am building, and how my thinking changes over time.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Technical</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>Basic networking</li>
              <li>Windows basics</li>
              <li>Command line</li>
              <li>Git basics</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Non-Technical</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>Problem solving under pressure</li>
              <li>Learning from failure</li>
              <li>Self directed learning</li>
              <li>Clear documentation</li>
            </ul>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Interests</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I am interested in cybersecurity and networking, especially how systems communicate, break, and recover. I like learning through hands on work such as home labs, virtual machines, and small experiments. I focus on problem solving, automation through simple scripts, and improving by documenting mistakes and progress over time.
        </p>
      </div>
    </div>
  );

  const ResumePage = () => {
  const handleDownload = () => {
    const doc = new jsPDF();
    let y = 20;
    
    // Header
    doc.setFontSize(20);
    doc.setFont(undefined, 'bold');
    doc.text('CHRISTOPHER LOUIS', 105, y, { align: 'center' });
    y += 8;
    
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.text('516-476-1190 | ppierre5@oldwestbury.edu | Long Island, NY', 105, y, { align: 'center' });
    y += 5;
    doc.text('linkedin.com/in/christopher-louis-9531741b0 | github.com/Ahloh', 105, y, { align: 'center' });
    y += 15;
    
    // Summary
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('SUMMARY', 20, y);
    y += 7;
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    const summaryText = 'A tech-savvy student focused on cybersecurity and networking. Combines academic foundation with hands-on experience in security operations and technical troubleshooting. Building practical skills through personal projects including network security, web development, and automation.';
    const summaryLines = doc.splitTextToSize(summaryText, 170);
    doc.text(summaryLines, 20, y);
    y += summaryLines.length * 5 + 10;
    
    // Education
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('EDUCATION', 20, y);
    y += 7;
    doc.setFontSize(10);
    doc.text('Bachelor of Science in Computer Science', 20, y);
    y += 5;
    doc.setFont(undefined, 'normal');
    doc.text('SUNY College at Old Westbury | Expected Graduation: 2027', 20, y);
    y += 12;
    
    // Experience
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('EXPERIENCE', 20, y);
    y += 7;
    doc.setFontSize(10);
    doc.text('Teller', 20, y);
    y += 5;
    doc.setFont(undefined, 'normal');
    doc.text('GardaWorld Security | Hempstead, NY | November 2023 - Present', 20, y);
    y += 5;
    doc.text('• Collaborated with team members to troubleshoot technical issues', 25, y);
    y += 5;
    doc.text('• Trained new technicians on safety and operational procedures', 25, y);
    y += 5;
    doc.text('• Tracked inventory and ordered supplies', 25, y);
    y += 5;
    doc.text('• Maintained cash drawer accuracy and performed audits', 25, y);
    y += 12;
    
    // Projects
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('PROJECTS', 20, y);
    y += 7;
    
    doc.setFontSize(10);
    doc.text('Personal Portfolio Website', 20, y);
    y += 5;
    doc.setFont(undefined, 'normal');
    doc.text('React, Tailwind CSS, EmailJS, Netlify', 20, y);
    y += 5;
    doc.text('• Built modern portfolio website with dark/light mode toggle', 25, y);
    y += 5;
    doc.text('• Implemented responsive design and integrated contact form', 25, y);
    y += 5;
    doc.text('• Deployed with continuous deployment from GitHub', 25, y);
    y += 7;
    
    doc.setFont(undefined, 'bold');
    doc.text('Private Memory Gallery', 20, y);
    y += 5;
    doc.setFont(undefined, 'normal');
    doc.text('HTML, CSS, JavaScript', 20, y);
    y += 5;
    doc.text('• Created password-protected website for secure media sharing', 25, y);
    y += 5;
    doc.text('• Built custom video and music players for privacy', 25, y);
    y += 5;
    doc.text('• Designed responsive interface for mobile and desktop', 25, y);
    y += 7;
    
    doc.setFont(undefined, 'bold');
    doc.text('Ad-Free WiFi Network', 20, y);
    y += 5;
    doc.setFont(undefined, 'normal');
    doc.text('Raspberry Pi, Pi-hole, Linux', 20, y);
    y += 5;
    doc.text('• Configured network-wide ad blocking with Pi-hole', 25, y);
    y += 5;
    doc.text('• Set up DNS filtering and custom blocklists', 25, y);
    y += 5;
    doc.text('• Achieved 25-30% reduction in network queries', 25, y);
    y += 12;
    
    // Technical Skills
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('TECHNICAL SKILLS', 20, y);
    y += 7;
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.text('Languages: JavaScript, Python, HTML, CSS, Operating Systems, Git', 20, y);
    y += 5;
    doc.text('Frameworks: React, Node.js', 20, y);
    y += 5;
    doc.text('Tools: Git, GitHub, VS Code, MongoDB', 20, y);
    y += 5;
    doc.text('Business: Budgeting, Reconciliation, Email Marketing, Account Management', 20, y);
    y += 12;
    
    // Certifications
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('CERTIFICATIONS', 20, y);
    y += 7;
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.text('• Plan to take CompTIA A+ Mid 2026', 20, y);
    y += 5;
    doc.text('• Plan to take CompTIA Network+ Mid 2026', 20, y);
    
    // Save PDF
    doc.save('Christopher_Louis_Resume.pdf');
  };

    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">Resume</h1>
          <button 
            onClick={handleDownload}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download size={20} />
            Download
          </button>
        </div>
        
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
            Education
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Bachelor of Science in Computer Science</h3>
              <p className="text-gray-600 dark:text-gray-300">SUNY College at Old Westbury</p>
              <p className="text-gray-500 dark:text-gray-400">Expected Graduation: 2027</p>
            </div>
          </div>
        </section>

        <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
              Experience
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Teller</h3>
                <p className="text-gray-600 dark:text-gray-300">GardaWorld Security | Hempstead, NY</p>
                <p className="text-gray-500 dark:text-gray-400 mb-2">November 2023 - Present</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Collaborated with team members to troubleshoot technical issues</li>
                  <li>Trained new technicians on safety and operational procedures</li>
                  <li>Tracked inventory and ordered supplies</li>
                  <li>Maintained cash drawer accuracy and performed audits</li>
                  <li>Helped streamline daily operations</li>
                </ul>
              </div>
            </div>
          </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Languages</h3>
              <p className="text-gray-700 dark:text-gray-300">JavaScript, Python, HTML, CSS, Operating Systems, Git </p>            </div>
            <div>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Frameworks & Libraries</h3>
              <p className="text-gray-700 dark:text-gray-300">React, Node.js.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Tools & Platforms</h3>
              <p className="text-gray-700 dark:text-gray-300">Git, GitHub, VS Code, MongoDB</p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Business Skills</h3>
              <p className="text-gray-700 dark:text-gray-300">Budgeting, Reconciliation, Email Marketing, Account Management, Banking Ethics, Effective Communication</p>
            </div>
          </div>
        </section>

         <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
              Certifications
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400">→</span>
                <span>Plan to take CompTIA A+ Mid 2026</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400">→</span>
                <span>Plan to take CompTIA Network+ Mid 2026</span>
              </li>
            </ul>
          </section>
      </div>
    </div>
  );
  };

  const NowPage = () => (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">What I'm Doing Now</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">Last updated: January 2026</p>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Current Projects</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400">→</span>
              <span>Python automation scripts</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400">→</span>
              <span>Home lab setup</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400">→</span>
              <span>Redesigning my portfolio with modern animations and interactions</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Learning</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400">→</span>
              <span>Advanced algorithms and data structures for technical interviews</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400">→</span>
              <span>TypeScript for building type-safe applications</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400">→</span>
              <span>networking fundamentals such as TCP IP, ports, DNS</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Goals</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400">→</span>
              <span>Complete three major projects before summer 2026</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400">→</span>
              <span>Write one technical blog post per week</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400">→</span>
              <span>Secure a  internship for summer 2026</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Reading</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400">→</span>
              <span>"The Alchemist" by Paulo Coelho</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400">→</span>
              <span> Then "Cybersecurity Essentials" by Cisco Press</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">Get in Touch</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-12 text-lg">
        I'm always open to new opportunities and collaborations. Feel free to reach out.
      </p>

      <div className="space-y-6 mb-12">
        <a href="mailto:ppierre5@oldwestbury.edu" className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <Mail className="text-blue-600 dark:text-blue-400" size={24} />
          <div>
            <h3 className="font-bold text-gray-900 dark:text-gray-100">Email</h3>
            <p className="text-gray-600 dark:text-gray-300">ppierre5@oldwestbury.edu</p>
          </div>
        </a>
        
        <a href="https://www.linkedin.com/in/christopher-louis-9531741b0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <Linkedin className="text-blue-600 dark:text-blue-400" size={24} />
          <div>
            <h3 className="font-bold text-gray-900 dark:text-gray-100">LinkedIn</h3>
            <p className="text-gray-600 dark:text-gray-300">christopher-louis-9531741b0</p>
          </div>
        </a>

        <a href="https://github.com/Ahloh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <Github className="text-blue-600 dark:text-blue-400" size={24} />
          <div>
            <h3 className="font-bold text-gray-900 dark:text-gray-100">GitHub</h3>
            <p className="text-gray-600 dark:text-gray-300">Ahloh</p>
          </div>
        </a>
      </div>

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Send a Message</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold mb-2 text-gray-900 dark:text-gray-100">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-600"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2 text-gray-900 dark:text-gray-100">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-600"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2 text-gray-900 dark:text-gray-100">Message</label>
            <textarea
              rows="6"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-600"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-bold"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );

  const MessagesPage = () => (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="flex items-center gap-3 mb-8">
        <Inbox className="text-blue-600 dark:text-blue-400" size={32} />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">Messages</h1>
      </div>
      
      {messages.length === 0 ? (
        <div className="text-center py-16">
          <Inbox className="mx-auto text-gray-400 mb-4" size={64} />
          <p className="text-gray-600 dark:text-gray-400 text-lg">No messages yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map(msg => (
            <div key={msg.id} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">{msg.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{msg.email}</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{msg.timestamp}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{msg.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />;
      case 'projects': return <ProjectsPage />;
      case 'blog': return <BlogPage />;
      case 'about': return <AboutPage />;
      case 'resume': return <ResumePage />;
      case 'now': return <NowPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-950' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}>
      <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => setCurrentPage('home')}
              className="relative group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-lg italic" style={{ fontFamily: 'cursive' }}>CL</span>
              </div>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
            </button>

            <div className="hidden md:flex items-center gap-8">
              {navigation.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setSelectedProject(null);
                    setSelectedBlog(null);
                  }}
                  className={`hover:text-blue-500 dark:hover:text-blue-400 transition-colors ${
                    currentPage === item.id
                      ? 'text-blue-600 dark:text-blue-400 font-bold'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {darkMode ? <Sun className="text-gray-300" size={20} /> : <Moon className="text-gray-700" size={20} />}
              </button>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2"
            >
              {menuOpen ? <X className="text-gray-900 dark:text-gray-100" /> : <Menu className="text-gray-900 dark:text-gray-100" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800">
            <div className="px-4 py-4 space-y-3 bg-white dark:bg-gray-900">
              {navigation.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMenuOpen(false);
                    setSelectedProject(null);
                    setSelectedBlog(null);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    currentPage === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center gap-2 w-full px-3 py-2 text-gray-700 dark:text-gray-300"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </div>
        )}
      </nav>

      <main>
        {renderPage()}
      </main>

      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400">
              © 2026 Christopher. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="mailto:ppierre5@oldwestbury.edu" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Mail size={20} />
              </a>
              <a href="https://www.linkedin.com/in/christopher-louis-9531741b0" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/Ahloh" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;