import {post1, post2, post3, post4, post5, post6, post7,
    post8, post9, post10
} from '../assets';
import { FaLock, FaEye, FaBell, FaShieldAlt, FaUserCog, FaHome, FaEnvelopeOpen, FaBriefcase, FaUsers } from "react-icons/fa";


export const posts = [
    {
      id: 1,
      user: {
        name: "Peter Griffin",
        avatar: "https://randomuser.me/api/portraits/men/11.jpg",
      },
      content: "Excited to announce that I've joined Tech Co. as a Software Engineer! Looking forward to this new journey.",
      image: post1,
      timestamp: "2024-10-12T09:24:00",
      likes: 120,
      comments: 30,
    },
    {
      id: 2,
      user: {
        name: "Spongebob",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      },
      content: "Just completed a 5K run! Feeling great and energized.",
      image: post2,
      timestamp: "2024-10-11T14:45:00",
      likes: 80,
      comments: 15,
    },
    {
      id: 3,
      user: {
        name: "Carol Williams",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      },
      content: "Check out my latest blog post on React performance optimization techniques.",
      image: post3,
      timestamp: "2024-10-10T18:30:00",
      likes: 200,
      comments: 45,
      link: "https://yourblog.com/react-performance",
    },
    {
      id: 4,
      user: {
        name: "Squidward",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      },
      content: "Thrilled to be part of the upcoming open-source project on machine learning!",
      image: post4,
      timestamp: "2024-10-09T10:15:00",
      likes: 150,
      comments: 25,
    },
    {
      id: 5,
      user: {
        name: "Eva Green",
        avatar: "https://randomuser.me/api/portraits/women/5.jpg",
      },
      content: "Attended a fantastic workshop on UX design today. Learned so much!",
      image: post5,
      timestamp: "2024-10-08T16:50:00",
      likes: 95,
      comments: 20,
    },
    {
      id: 6,
      user: {
        name: "Frank Miller",
        avatar: "https://randomuser.me/api/portraits/men/6.jpg",
      },
      content: "Launching my new portfolio website next week. Stay tuned!",
      image: post6,
      timestamp: "2024-10-07T08:40:00",
      likes: 180,
      comments: 35,
      link: "https://frankmiller.dev",
    },
    {
      id: 7,
      user: {
        name: "Grace Lee",
        avatar: "https://randomuser.me/api/portraits/women/7.jpg",
      },
      content: "Collaborated with an amazing team to develop a mobile app for local communities.",
      image: post7,
      timestamp: "2024-10-06T13:20:00",
      likes: 110,
      comments: 22,
    },
    {
      id: 8,
      user: {
        name: "Henry Davis",
        avatar: "https://randomuser.me/api/portraits/men/8.jpg",
      },
      content: "Reading 'Clean Code' by Robert C. Martin. Highly recommend it!",
      image: post8,
      timestamp: "2024-10-05T19:10:00",
      likes: 75,
      comments: 10,
    },
    {
      id: 9,
      user: {
        name: "Isabella Martinez",
        avatar: "https://randomuser.me/api/portraits/women/9.jpg",
      },
      content: "Proud to have received the Employee of the Month award!",
      image: post9,
      timestamp: "2024-10-04T11:05:00",
      likes: 160,
      comments: 40,
    },
    {
      id: 10,
      user: {
        name: "Jack Wilson",
        avatar: "https://randomuser.me/api/portraits/men/10.jpg",
      },
      content: "Exploring new technologies in cloud computing. Exciting times ahead!",
      image: post10,
      timestamp: "2024-10-03T17:55:00",
      likes: 130,
      comments: 28,
    },
  ];
  
  export const networks = [
    {
      id: 1,
      name: "Jerry Smith",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
      occupation: "Operations at Antler",
    },
    {
      id: 2,
      name: "Kramer Johnson",
      avatar: "https://randomuser.me/api/portraits/men/13.jpg",
      occupation: "Product Manager at Fat Panda",
    },
    {
      id: 3,
      name: "Lisa Brown",
      avatar: "https://randomuser.me/api/portraits/women/14.jpg",
      occupation: "Sales Manager at Bubblegum",
    },
    {
      id: 4,
      name: "Mary Davis",
      avatar: "https://randomuser.me/api/portraits/women/15.jpg",
      occupation: "Engineering Manager at Sparkle",
    },
    {
      id: 5,
      name: "Nick Garcia",
      avatar: "https://randomuser.me/api/portraits/men/16.jpg",
      occupation: "HR Director at Fancy Pants",
    },
    {
      id: 6,
      name: "Olivia Thompson",
      avatar: "https://randomuser.me/api/portraits/women/17.jpg",
      occupation: "Marketing Director at Crazy Eights",
    },
    {
      id: 7,
      name: "Peter Parker",
      avatar: "https://randomuser.me/api/portraits/men/18.jpg",
      occupation: "Software Engineer at Sweet Pea",
    },
    {
      id: 8,
      name: "Quinn Wilson",
      avatar: "https://randomuser.me/api/portraits/men/19.jpg",
      occupation: "QA Manager at Blueberry",
    },
    {
      id: 9,
      name: "Rachel Green",
      avatar: "https://randomuser.me/api/portraits/women/20.jpg",
      occupation: "UX Designer at Green Apple",
    },
    {
      id: 10,
      name: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/21.jpg",
      occupation: "Product Manager at Blueberry",
    }
  ]

  export const notifications = [
    {
      id: 1,
      title: "Job Application Update",
      message: "Your application for the Software Engineer position has been reviewed.",
      timestamp: "2024-10-17T08:45:00Z",
      isRead: false,
    },
    {
      id: 2,
      title: "New Connection Request",
      message: "John Doe has sent you a connection request.",
      timestamp: "2024-10-17T07:30:00Z",
      isRead: true,
    },
    {
      id: 3,
      title: "Interview Scheduled",
      message: "Your interview for the Senior Developer role is scheduled for tomorrow at 10:00 AM.",
      timestamp: "2024-10-16T14:15:00Z",
      isRead: false,
    },
    {
      id: 4,
      title: "New Job Posting",
      message: "A new job matching your skills has been posted: Frontend Developer at XYZ Corp.",
      timestamp: "2024-10-15T12:10:00Z",
      isRead: true,
    },
    {
      id: 5,
      title: "Profile View",
      message: "Your profile was viewed by a recruiter.",
      timestamp: "2024-10-15T10:05:00Z",
      isRead: false,
    },
    {
      id: 6,
      title: "System Maintenance",
      message: "The system will undergo maintenance on Friday, October 20, 2024.",
      timestamp: "2024-10-14T09:20:00Z",
      isRead: true,
    },
    {
      id: 7,
      title: "Meeting Reminder",
      message: "You have a meeting with John Doe on October 25, 2024 at 10:00 AM.",
      timestamp: "2024-10-13T08:15:00Z",
      isRead: false,
    },
    {
      id: 8,
      title: "Feedback Request",
      message: "Your recent project has received feedback from your team members.",
      timestamp: "2024-10-12T16:45:00Z",
      isRead: true,
    },
    {
      id: 9,
      title: "Project Update",
      message: "Your team has completed a project milestone.",
      timestamp: "2024-10-11T14:30:00Z",
      isRead: false,
    },
    {
      id: 10,
      title: "New Project Announcement",
      message: "The company is launching a new project, which will take place in 3 months.",
      timestamp: "2024-10-10T12:10:00Z",
      isRead: true,
    }
  ];
  
  export const sidebarLinks = [
    {
      id: 1,
      title: "Account preferences",
      icon: <FaUserCog />,
      route: "account",
    },
    {
      id: 2,
      title: "Sign in & security",
      icon: <FaLock />,
      route: "security",
    },
    {
      id: 3,
      title: "Visibility",
      icon: <FaEye />,
      route: "visibility",
    },
    {
      id: 4,
      title: "Data privacy",
      icon: <FaShieldAlt />,
      route: "data-privacy",
    },
    {
      id: 5,
      title: "Notifications",
      icon: <FaBell />,
      route: "notifications",
    }
  ]
  export const navbarLinks = [
    {
      id: 1,
      title: "Home",
      icon: <FaHome />,
      route: "/",
    },
    {
      id: 2,
      title: "MyNetwork",
      icon: <FaUsers />,
      route: "/my-network",
    }, 
    {
      id: 3,
      title: "Jobs",
      icon: <FaBriefcase />,
      route: "/jobs",
    },
    {
      id: 4,
      title: "Messaging",
      icon: <FaEnvelopeOpen />,
      route: "/messages",
    },
    {
      id: 5,
      title: "Notifications",
      icon: <FaBell />,
      route: "/notifications",
    }
  ]

  export const conversations = [
    {
      id: 1,
      contactName: "John Doe",
      contactAvatar: "https://via.placeholder.com/150",
      lastMessage: "Looking forward to the meeting next week!",
      messages: [
        { id: 1, from: "user", content: "Hey, how are you doing?" },
        { id: 2, from: "John Doe", content: "I’m good, how about you?" },
        { id: 3, from: "user", content: "Great! Thanks for asking." },
        { id: 4, from: "John Doe", content: "Looking forward to the meeting next week!" }
      ]
    },
    {
      id: 2,
      contactName: "Jane Smith",
      contactAvatar: "https://via.placeholder.com/150",
      lastMessage: "Sure, I can help with that.",
      messages: [
        { id: 1, from: "user", content: "Can you review my PR?" },
        { id: 2, from: "Jane Smith", content: "Sure, I can help with that." }
      ]
    }
  ];
  

  