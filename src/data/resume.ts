import { Resume } from '@/types/resume';

export const resumeData: Resume = {
  name: 'Benjamin Becker',
  contactInfo: {
    email: 'bckrben7@gmail.com',
    phone: '610-715-7578',
  },
  experiences: [
    {
      company: 'Flagship',
      location: 'San Francisco, California',
      positions: [
        {
          title: 'Full-Stack Software Engineer',
          startDate: 'April 2024',
          endDate: 'Present',
          achievements: [
            'Led a team of engineers and designers in owning an app that connects content creators with brands to sell the brands\' products, resulting in a 20% increase in weekly active users',
            'Led technical development for features in the NextJS typescript app, using React and MUI for the frontend and using Prisma to interact with our Postgres database',
            'Created datasets and analytics dashboards using Sigma and SQL to determine which growth areas to prioritize in order to continue to scale our user base of hundreds of creators nationwide',
            'Used Terraform to pipe data from our Postgres database to Google Bigquery',
            'Helped develop an iOS app using Swift and WebKit to display our web app to creators, which was downloaded and used by 30-40% of our creators daily'
          ]
        }
      ]
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
            'Led a collaborative multi-team effort to create and expand pipelines for ChromeOS services to receive data from the Google Tasks third-party API'
          ],
          relatedProjects: ['Focus Mode', 'Desk Button']
        },
        {
          title: 'Software Engineer II',
          startDate: 'September 2021',
          endDate: 'October 2022',
          achievements: [
            'Led the development of a feature for closing a Virtual Desk with its windows in C++. This feature was used by tens of thousands of ChromeOS users daily',
            'Implemented pipelines in a Wayland server to maintain the z-ordering of PIP windows within the compositor when displaying videos from the Chrome browser'
          ],
          relatedProjects: ['Close-All']
        }
      ]
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
            'Designed and created an internal-facing user interface to visualize the metadata and structure of a data warehouse using React and Material-UI',
            'Created APIs using FastAPI to serve data to the frontend and deployed applications to Google Cloud using Docker and Kubernetes'
          ],
          relatedProjects: ['Meta']
        }
      ]
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
            'Designed and implemented an efficient categorization algorithm in Python to expedite research processes',
            'Led group of interns to continue research on donations to 527 non-profit organizations'
          ],
          relatedProjects: ['The CPA Research Utility']
        },
        {
          title: 'Research Intern',
          startDate: 'February 2019',
          endDate: 'June 2020',
          achievements: [
            'Created Excel macros to streamline the processing of donation records into a list of aggregate contributions',
            'Performed statistical analyses of the data collected'
          ]
        }
      ]
    }
  ],
  education: [
    {
      school: 'Colgate University',
      location: 'Hamilton, NY',
      degree: 'B.A. double major in Political Science and Computer Science',
      graduationDate: 'May 2021',
      gpa: '3.42'
    }
  ],
  projects: [
    {
      name: 'Focus Mode',
      role: 'Project Member',
      organization: 'Google',
      date: 'September 2023 – April 2024',
      description: [
        'A feature in ChromeOS that allows users to set a Do Not Disturb mode timer and work on a particular task',
        'Interacts with the Google Tasks third-party API to synchronize user task data across multiple devices'
      ],
      technologies: ['C++', 'ChromeOS', 'Google Tasks API']
    },
    {
      name: 'Desk Button',
      role: 'Project Member',
      organization: 'Google',
      date: 'March 2023 – September 2023',
      description: [
        'A feature in ChromeOS that allows users to switch between Virtual Desks and view their virtual desks without having to enter Overview Mode',
        'Involved an extensive refactor of Virtual Desk and Overview Mode code to allow the UI elements to exist independent of one another'
      ],
      technologies: ['C++', 'ChromeOS', 'UI Development']
    },
    {
      name: 'Close-All',
      role: 'Project Lead',
      organization: 'Google',
      date: 'January 2022 – August 2022',
      description: [
        'A feature in ChromeOS that allows users to close a desk and all of the windows in the desk',
        'Provides users the option to undo the operation if they performed the action by accident',
        'Temporarily stores closed windows in local storage for efficient retrieval if the user undoes the operation'
      ],
      technologies: ['C++', 'ChromeOS', 'Local Storage']
    },
    {
      name: 'Meta',
      role: 'Project Lead',
      organization: 'Illumis',
      date: 'June 2021 – August 2021',
      description: [
        'Internal tool coded in React and Material-UI for visualizing metadata and structure of a data warehouse',
        'Uses NGINX for load-balancing and was deployed to Google Cloud using Docker and Kubernetes',
        'Utilizes APIs created with FastAPI to serve data to the frontend'
      ],
      technologies: ['React', 'Material-UI', 'FastAPI', 'Docker', 'Kubernetes', 'Google Cloud']
    },
    {
      name: 'The JacksaFactions Minecraft Server Plugin',
      role: 'Project Lead',
      organization: 'JacksaTV Minecraft Server',
      date: 'March 2021 – April 2021',
      description: [
        'Uses Spigot and Bungee APIs to create a faction system for Minecraft servers',
        'Interacts with a MySQL database to maintain data consistency across multiple servers on a network',
        'Implements the Java Multithreading and Runnable libraries and caching to curb server lag and increase scalability'
      ],
      technologies: ['Java', 'Spigot API', 'Bungee API', 'MySQL', 'Multithreading']
    },
    {
      name: 'The CPA Research Utility',
      role: 'Project Lead',
      organization: 'Center for Political Accountability',
      date: 'March 2019 – January 2021',
      description: [
        'A Python program that takes in categorized datasets and then uses those category labels to fill in categories for uncategorized datasets',
        'Utilizes Python dictionaries and a central data repository to store category data for later use',
        'Implements an intuitive command line user interface to maximize accessibility for users'
      ],
      technologies: ['Python', 'CLI Development', 'Data Processing']
    }
  ],
  skills: [
    'C++',
    'TypeScript',
    'Python',
    'Java',
    'React',
    'NextJS',
    'Docker',
    'Kubernetes',
    'SQL',
    'FastAPI',
    'Google Cloud',
    'UI Development',
    'API Design',
    'Operating Systems',
    'Data Analytics'
  ]
};