import { Resume } from '@/types/resume';

export const resumeData: Resume = {
  name: 'Ben Becker',
  title: 'Full-Stack Engineer',
  summary:
    'Full-stack engineer with 5+ years of experience across AI agent platforms, startups, Salesforce, and Google. I specialize in building internal tools, AI-powered workflows, and user-facing systems for technical users, with a track record of rapidly shipping ambiguous products from prototype to production.',
  contactInfo: {
    email: 'bckrben7@gmail.com',
    phone: '610-715-7578',
  },
  experiences: [
    {
      company: '11x AI',
      location: 'San Francisco, California',
      positions: [
        {
          title: 'Member of Technical Staff – Multi-modal Agents',
          startDate: 'January 2026',
          endDate: 'Present',
          achievements: [
            'Built internal AI skills, automations, and review agents used by a 10-person engineering team to accelerate development, testing, and code review workflows',
            'Partner directly with customers to understand ambiguous workflows, design agent behavior, and ship production voice/chat agents across multiple use cases',
            'Rapidly ship and iterate on new features on our voice platform with a weekly sprint cadence',
            'Quickly prototype polished product demos for high-value customer conversations, turning vague customer needs into working agent experiences',
            'Led a large refactoring effort across the voice platform, reducing dead code and simplifying core abstractions for faster feature development',
          ],
        },
      ],
    },
    {
      company: 'Salesforce',
      location: 'San Francisco, California',
      positions: [
        {
          title: 'Senior Full-Stack Software Engineer – Missionforce',
          startDate: 'June 2025',
          endDate: 'January 2026',
          achievements: [
            'Engineered and deployed custom full-stack components on the Salesforce platform to streamline critical Benefit Management processes for public sector clients',
            'Created brand new prompt templates for AI agents to be able to more effectively assist Benefit Management caseworkers',
            'Mentored junior engineers and new team members, accelerating their ramp-up and fostering a collaborative, high-performing environment',
            'Spearheaded org-wide innovation initiatives, leading multi-person teams to host presentations and discussions that promoted knowledge-sharing and strategic growth',
          ],
        },
      ],
    },
    {
      company: 'Flagship',
      location: 'San Francisco, California',
      positions: [
        {
          title: 'Full-Stack Software Engineer',
          startDate: 'April 2024',
          endDate: 'June 2025',
          achievements: [
            'Created a new product that uses AI and LLMs to allow brands to more easily search for and connect with content creators, used by companies across multiple industries',
            'Integrated AI-generated talking-points for content creators to more easily advertise brands to their followers',
            'Led a team of engineers and designers in owning an app that connects content creators with brands to sell the brands\' products, resulting in a 20% increase in weekly active users',
            'Led technical development for features in the NextJS TypeScript app, using React and MUI for the frontend and using Prisma to interact with our Postgres database',
            'Created datasets and analytics dashboards using Sigma and SQL to determine which growth areas to prioritize in order to continue to scale our user base of hundreds of creators nationwide',
            'Used Terraform to pipe data from our Postgres database to Google BigQuery',
            'Helped develop an iOS app using Swift and WebKit to display our web app to creators, which was downloaded and used by 30-40% of our creators daily',
            'Designed and implemented features to increase creator sharing, which ended up increasing daily sharing rates by over 5x',
            'Designed and implemented nominators and rankers to properly display relevant deals to creators',
            'Created an exponential backoff system to avoid spamming users with notifications, plus a tracking pixel system to monitor email open rates',
          ],
        },
      ],
    },
    {
      company: 'Google (ChromeOS)',
      location: 'Mountain View, California',
      positions: [
        {
          title: 'Software Engineer III',
          startDate: 'November 2022',
          endDate: 'April 2024',
          achievements: [
            'Created new virtual desk navigation features within ChromeOS in C++. These navigation features significantly improved the efficiency and visibility of virtual desks for tens of thousands of ChromeOS users daily',
            'Gave two internal tech talks on accessing Chrome\'s usage metrics storage system using Google\'s SQL framework and creating unit tests using Chromium\'s gTest framework',
            'Led a collaborative multi-team effort to create and expand pipelines for ChromeOS services to receive data from the Google Tasks third-party API',
          ],
          relatedProjects: ['Focus Mode', 'Desk Button'],
        },
        {
          title: 'Software Engineer II',
          startDate: 'September 2021',
          endDate: 'October 2022',
          achievements: [
            'Led the development of a feature for closing a Virtual Desk with its windows in C++. This feature was used by tens of thousands of ChromeOS users daily',
            'Implemented pipelines in a Wayland server to maintain the z-ordering of PIP windows within the compositor when displaying videos from the Chrome browser',
          ],
          relatedProjects: ['Close-All'],
        },
      ],
    },
    {
      company: 'Illumis',
      location: 'New York, New York',
      positions: [
        {
          title: 'Frontend Development Intern',
          startDate: 'June 2021',
          endDate: 'August 2021',
          achievements: [
            'Designed and created an internal-facing user interface to visualize the metadata and structure of a data warehouse using React and Material-UI in an Agile development environment',
            'Assisted in the development of a FastAPI backend to serve metadata to the frontend',
            'Deployed containerized applications to Google Cloud using Docker and Kubernetes',
          ],
          relatedProjects: ['Meta'],
        },
      ],
    },
    {
      company: 'Center for Political Accountability',
      location: 'Washington, D.C.',
      positions: [
        {
          title: 'Werner Brandt Research Fellow',
          startDate: 'June 2020',
          endDate: 'May 2021',
          achievements: [
            'Directed, compiled, and analyzed research on donations to IRS Section 527 non-profit organizations',
            'Created an application to streamline the processing of donation records into a list of aggregate contributions from individual donors over a specific period of time',
            'Performed statistical analyses of the data collected',
            'Created, trained, and used a machine learning model to more quickly label donations data',
          ],
          relatedProjects: ['The CPA Research Utility'],
        },
        {
          title: 'Research Intern',
          startDate: 'February 2019',
          endDate: 'June 2020',
          achievements: [
            'Designed and implemented an efficient categorization algorithm in Python to expedite research processes using sockets to link the program to a central data repository',
            'Led group of interns to continue research on donations to 527 non-profit organizations',
          ],
        },
      ],
    },
  ],
  education: [
    {
      school: 'Colgate University',
      location: 'Hamilton, NY',
      degree: 'B.A. double major in Political Science and Computer Science',
      graduationDate: 'May 2021',
      details: [
        'Seminars in Human-Computer Interaction and Applied Machine Learning',
        'Seminars in Constitutional Law, Administrative Law, and American Political Theory',
      ],
    },
  ],
  projects: [
    {
      name: 'Focus Mode',
      role: 'Project Member',
      organization: 'Google',
      date: 'September 2023 – April 2024',
      description: [
        'A feature in ChromeOS that allows users to set a Do Not Disturb mode timer and work on a particular task',
        'Interacts with the Google Tasks third-party API to synchronize user task data across multiple devices',
      ],
      technologies: ['C++', 'ChromeOS', 'Google Tasks API'],
    },
    {
      name: 'Desk Button',
      role: 'Project Member',
      organization: 'Google',
      date: 'March 2023 – September 2023',
      description: [
        'A feature in ChromeOS that allows users to switch between Virtual Desks and view their virtual desks without having to enter Overview Mode',
        'Involved an extensive refactor of Virtual Desk and Overview Mode code to allow the UI elements to exist independent of one another',
      ],
      technologies: ['C++', 'ChromeOS', 'UI Development'],
    },
    {
      name: 'Close-All',
      role: 'Project Lead',
      organization: 'Google',
      date: 'January 2022 – August 2022',
      description: [
        'A feature in ChromeOS that allows users to close a desk and all of the windows in the desk',
        'Provides users the option to undo the operation if they performed the action by accident',
        'Temporarily stores closed windows in local storage for efficient retrieval if the user undoes the operation',
      ],
      technologies: ['C++', 'ChromeOS', 'Local Storage'],
    },
    {
      name: 'Meta',
      role: 'Project Lead',
      organization: 'Illumis',
      date: 'June 2021 – August 2021',
      description: [
        'Internal tool coded in React and Material-UI for visualizing metadata and structure of a data warehouse',
        'Uses NGINX for load-balancing and was deployed to Google Cloud using Docker and Kubernetes',
        'Utilizes APIs created with FastAPI to serve data to the frontend',
      ],
      technologies: ['React', 'Material-UI', 'FastAPI', 'Docker', 'Kubernetes', 'Google Cloud'],
    },
    {
      name: 'The CPA Research Utility',
      role: 'Project Lead',
      organization: 'Center for Political Accountability',
      date: 'March 2019 – January 2021',
      description: [
        'A Python program that takes in categorized datasets and then uses those category labels to fill in categories for uncategorized datasets',
        'Utilizes Python dictionaries and a central data repository to store category data for later use',
        'Implements an intuitive command line user interface to maximize accessibility for users',
      ],
      technologies: ['Python', 'CLI Development', 'Data Processing'],
    },
  ],
  skills: [
    {
      category: 'Languages',
      items: ['TypeScript', 'Python', 'C++', 'SQL', 'JavaScript', 'Swift'],
    },
    {
      category: 'Frameworks',
      items: ['React', 'Next.js', 'TailwindCSS', 'MUI'],
    },
    {
      category: 'Platforms',
      items: ['Node.js', 'FastAPI', 'Postgres', 'Prisma', 'Docker', 'GCP', 'AWS', 'Railway'],
    },
    {
      category: 'AI Tooling',
      items: ['Claude Code', 'Cursor', 'Ollama', 'Vapi', 'Ultravox', 'Minimax'],
    },
  ],
};
