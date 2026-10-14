/*
 * SINGLE SOURCE OF TRUTH
 * Update this file to personalize the portfolio. Empty links are rendered honestly
 * as unavailable instead of sending visitors to a fabricated profile or demo.
 */

export type SkillGroup = {
  title: string
  icon: 'code' | 'braces' | 'database' | 'brain' | 'terminal'
  description: string
  skills: string[]
}

export type Project = {
  title: string
  eyebrow: string
  description: string
  stack: string[]
  github: string
  live: string
  featured?: boolean
  placeholder?: boolean
  visual: 'nodes' | 'terminal' | 'orbit'
}

export type TimelineItem = {
  period: string
  title: string
  organization: string
  description: string
  kind: 'education' | 'practice' | 'certificate' | 'activity'
  highlights?: string[]
}

export const portfolio = {
  person: {
    name: 'Nikhil Gopal More',
    firstName: 'Nikhil',
    initials: 'NM',
    title: 'Computer Engineering Student',
    focus: 'DSA & Competitive Programming',
    location: 'Chopda, Maharashtra',
    email: 'nikhilgopalmore@gmail.com',
    intro:
      'I build strong computer-science foundations through code, curiosity, and consistent problem solving.',
    bio:
      'I am a Computer Engineering student with a foundation in data structures, algorithms, and software development fundamentals. I regularly practice across HackerRank, LeetCode, CodeChef, and GeeksforGeeks while strengthening my programming, logical reasoning, and problem-solving skills.',
    goal:
      'My goal is to turn disciplined learning into useful, reliable software—growing from strong fundamentals into real-world engineering work.',
    availability: 'Open to learning, collaboration, and entry-level opportunities',
  },

  links: {
    email: 'mailto:nikhilgopalmore@gmail.com',
    github: '', // Add the full GitHub profile URL from the resume owner.
    linkedin: '', // Add the full LinkedIn profile URL from the resume owner.
    hackerRank: '',
    leetCode: '',
    geeksForGeeks: '',
    resume: '/resume.pdf',
  },

  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],

  stats: [
    { value: 4, suffix: '', label: 'Programming languages' },
    { value: 5, suffix: '', label: 'Certificates listed' },
    { value: 4, suffix: '', label: 'Coding platforms' },
    { value: 90, suffix: '%', label: 'SSC score' },
  ],

  education: {
    degree: 'B.Tech in Computer Engineering',
    institution: 'R. C. Patel Institute of Technology, Shirpur',
    period: '2025 — Present',
    details: ['Semester 1 CGPA: 7.50', 'Semester 2 CGPA: 7.80'],
  },

  skills: [
    {
      title: 'Programming Languages',
      icon: 'code',
      description: 'Languages listed in my current technical toolkit.',
      skills: ['C', 'Java', 'Python', 'SQL'],
    },
    {
      title: 'Data Structures & Algorithms',
      icon: 'braces',
      description: 'The problem-solving foundations I am actively strengthening.',
      skills: ['Arrays', 'Searching', 'Sorting', 'Basic Problem Solving'],
    },
    {
      title: 'Core Competencies',
      icon: 'brain',
      description: 'Concepts and thinking skills behind my development practice.',
      skills: ['Object-Oriented Programming', 'Logical Reasoning', 'Problem Solving'],
    },
    {
      title: 'Tools & Platforms',
      icon: 'terminal',
      description: 'Tools and practice ecosystems mentioned in my resume.',
      skills: ['GitHub', 'AutoCAD', 'HackerRank', 'LeetCode', 'CodeChef', 'GeeksforGeeks'],
    },
  ] satisfies SkillGroup[],

  projects: [
    {
      title: 'DSA Practice Portfolio',
      eyebrow: 'IN PROGRESS · RESUME-LISTED',
      description:
        'An evolving collection for documenting programming practice, data-structure solutions, and code implementations across C, Java, and Python.',
      stack: ['C', 'Java', 'Python', 'DSA'],
      github: '',
      live: '',
      featured: true,
      visual: 'terminal',
    },
    {
      title: 'Algorithm Explorer',
      eyebrow: 'CONCEPT PROJECT',
      description:
        'A suggested interactive visualizer that could turn array, searching, and sorting practice into clear step-by-step animations.',
      stack: ['Concept', 'Algorithms', 'Visualization'],
      github: '',
      live: '',
      placeholder: true,
      visual: 'nodes',
    },
    {
      title: 'AI Learning Atlas',
      eyebrow: 'CONCEPT PROJECT',
      description:
        'A suggested learning journal for organizing notes and small experiments from AI-focused and generative-AI coursework.',
      stack: ['Concept', 'AI Learning', 'Documentation'],
      github: '',
      live: '',
      placeholder: true,
      visual: 'orbit',
    },
  ] satisfies Project[],

  timeline: [
    {
      period: '2025 — PRESENT',
      title: 'B.Tech in Computer Engineering',
      organization: 'R. C. Patel Institute of Technology, Shirpur',
      description:
        'Building a formal foundation in computer engineering while developing programming and problem-solving skills.',
      kind: 'education',
      highlights: ['Semester 1 CGPA: 7.50', 'Semester 2 CGPA: 7.80'],
    },
    {
      period: 'ONGOING',
      title: 'DSA & Competitive Programming Practice',
      organization: 'HackerRank · LeetCode · CodeChef · GeeksforGeeks',
      description:
        'Regular practice in algorithms, C, Java, arrays, searching techniques, sorting logic, and foundational problem solving.',
      kind: 'practice',
    },
    {
      period: 'DATES NOT LISTED',
      title: 'Technical & AI Certifications',
      organization: 'CodeChef · AWS courses · SkillUp · Akritix',
      description:
        'Completed listed certifications and participation programs spanning C, Java, Python, AI-focused learning, generative AI, and a technical event at RCPIT.',
      kind: 'certificate',
    },
    {
      period: 'DATES NOT LISTED',
      title: 'Communication & Public Speaking',
      organization: 'College and school activities',
      description:
        'Participated in speaking activities, including a Science Day presentation and a school gathering speech, to develop confidence and clarity before audiences.',
      kind: 'activity',
    },
    {
      period: 'ACADEMIC FOUNDATION',
      title: 'Higher & Secondary Education',
      organization: 'Maharashtra State Board',
      description: 'Completed HSC with 73.33% and SSC with 90.00%.',
      kind: 'education',
    },
  ] satisfies TimelineItem[],

  certifications: [
    'CodeChef — C, Java & Python Programming',
    'AWS — AI-focused courses',
    'Science Day Speech — Participation certificate',
    'SkillUp — Generative AI',
    'Akritix — Technical Event Participation, RCPIT',
  ],

  interests: [
    'Coding & logic building',
    'Hackathons',
    'Communication',
    'Mystery solving',
    'Cosmic & space exploration',
    'Teamwork & collaboration',
  ],

  media: {
    backgroundVideo: '/videos/cosmic-background.mp4',
    backgroundVideoWebm: '/videos/cosmic-background.webm',
    poster: '/images/cosmic-poster.jpg',
    videoCredit: {
      label: 'Cosmic video by Frank Cone on Pexels',
      url: 'https://www.pexels.com/video/a-red-and-purple-nebula-with-stars-in-the-background-17463487/',
    },
  },
} as const
