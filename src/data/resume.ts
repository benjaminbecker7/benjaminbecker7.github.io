import { Resume } from '@/types/resume';

export const resumeData: Resume = {
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
            'Helped develop an iOS app using Swift and WebKit to display our web app to creators, which was downloaded and used by 30-40% of our creators daily',
            'Created an exponential backoff system to avoid spamming users with notifications',
            'Designed and implemented features to increase creator sharing, which ended up increasing daily sharing rates by over 5x',
            'Designed and implemented nominators and rankers to properly display relevant deals to creators',
            'Created new frontend components for displaying shared images and video to the user'
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
          ]
        },
        {
          title: 'Software Engineer II',
          startDate: 'September 2021',
          endDate: 'October 2022',
          achievements: [
            'Led the development of a feature for closing a Virtual Desk with its windows in C++. This feature was used by tens of thousands of ChromeOS users daily',
            'Implemented pipelines in a Wayland server to maintain the z-ordering of PIP windows within the compositor when displaying videos from the Chrome browser'
          ]
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
          achievements: []
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
          achievements: []
        },
        {
          title: 'Research Intern',
          startDate: 'February 2019',
          endDate: 'June 2020',
          achievements: []
        }
      ]
    }
  ],
  education: [
    {
      school: 'Colgate University',
      location: 'Hamilton, NY',
      degree: 'B.A. double major in Political Science and Computer Science',
      graduationDate: 'May 2021'
    }
  ],
  skills: [
    'C++',
    'TypeScript',
    'SQL',
    'NextJS',
    'React',
    'NodeJS',
    'Data analytics',
    'Swift',
    'API Design',
    'Operating Systems'
  ]
};