export const PROFILE = {
  name: 'Nathaniel Miamba',
  tagline: 'B.Tech Engineering Student | Software Testing & Automation',
  email: 'jiparitech@gmail.com',
  phone: '+918360274523',
  whatsapp: '918360274523',
  location: 'Punjab, India',
  locationUrl:
    'https://www.google.com/maps/search/?api=1&query=Punjab%2C%20India',
  university: 'Lovely Professional University',
  degree: 'B.Tech Engineering',
  profileImage: '/assets/images/profile-picture.jpg',
  socials: {
    linkedin: 'https://www.linkedin.com/in/nathaniel-miamba',
    github: 'https://github.com/nath-1233?tab=repositories',
    youtube: 'https://www.youtube.com/@Jiparitech',
    facebook: 'https://www.facebook.com/profile.php?id=61583260030771',
  },
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export const SKILL_GROUPS = [
  {
    title: 'Software Testing',
    description: 'Designing and executing tests to ensure reliable software.',
    skills: [
      'Manual Testing',
      'Test Case Design',
      'Test Scenario Creation',
      'Functional Testing',
      'Regression Testing',
      'Smoke Testing',
      'Integration Testing',
      'Bug Reporting',
    ],
  },
  {
    title: 'Automation',
    description: 'Automating repetitive tasks and testing workflows.',
    skills: ['Automation Anywhere', 'Test Automation', 'Process Automation'],
  },
  {
    title: 'Programming & Database',
    description: 'Building and validating logic with core languages.',
    skills: ['Java', 'Python', 'SQL', 'JUnit'],
  },
  {
    title: 'Technology',
    description: 'Working with modern tools and development concepts.',
    skills: [
      'Microsoft Azure',
      'Database Management',
      'Git / GitHub',
      'Software Development Concepts',
    ],
  },
]

export const PROJECTS = [
  {
    id: 'autocharge-hub',
    title: 'AutoCharge Hub',
    subtitle: 'Autonomous EV Wireless Charging & Service Station',
    description:
      'An innovative EV service station concept designed to combine wireless EV charging, automatic vehicle alignment, AI-based energy management, vehicle inspection, automated payment, safety monitoring, renewable energy, battery storage, and cloud monitoring into an integrated system.',
    image: '/projects/autocharge-hub.png',
    tags: [
      'EV Technology',
      'Wireless Charging',
      'AI',
      'IoT',
      'Automation',
      'Cloud',
      'Energy Management',
      'Vehicle Inspection',
    ],
    link: '#contact',
    featured: true,
  },
  {
    id: 'automation',
    title: 'Automation Projects',
    subtitle: 'Bots and process automation experiments',
    description:
      'A collection of automation projects including a calculator bot, data processing automation, user input automation, and business process automation built while learning RPA tools.',
    image: '/projects/automation.png',
    tags: [
      'Calculator Bot',
      'Data Processing',
      'User Input Automation',
      'Business Process',
    ],
    link: '#contact',
    featured: false,
  },
]

export const JOURNEY = [
  {
    title: 'Programming Foundations',
    detail:
      'Started with Java and Python, building a strong grasp of core programming concepts and problem solving.',
  },
  {
    title: 'Data Structures & Algorithms',
    detail:
      'Practicing DSA to write efficient, well-structured, and testable code.',
  },
  {
    title: 'Database Technologies',
    detail:
      'Learning SQL and database management to model and query real-world data.',
  },
  {
    title: 'Microsoft Azure',
    detail:
      'Exploring cloud fundamentals and services through Azure training.',
  },
  {
    title: 'Software Quality Assurance',
    detail:
      'Understanding QA principles, the testing lifecycle, and quality standards.',
  },
  {
    title: 'Manual Testing',
    detail:
      'Writing test scenarios and test cases, reporting bugs, and documenting results.',
  },
  {
    title: 'Test Automation',
    detail:
      'Getting hands-on with Automation Anywhere, JUnit, and automated test workflows.',
  },
  {
    title: 'Practical Engineering Projects',
    detail:
      'Applying everything to real projects like AutoCharge Hub and automation bots.',
  },
]

export const CERTIFICATIONS = [
  {
    name: 'Microsoft Azure Fundamentals',
    org: 'Microsoft',
    date: '2025',
    link: '#',
  },
  {
    name: 'Software Testing & QA Training',
    org: 'Training Program',
    date: '2025',
    link: '#',
  },
  {
    name: 'Automation Anywhere Essentials',
    org: 'Automation Anywhere University',
    date: '2025',
    link: '#',
  },
  {
    name: 'Programming & Database Certification',
    org: 'Technical Training',
    date: '2024',
    link: '#',
  },
]
