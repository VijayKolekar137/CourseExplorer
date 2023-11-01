export const dummyCourseData = [
  {
    id: 1,
    name: "Web Development Fundamentals",
    instructor: "Sarah Johnson",
    description:
      "Learn the basics of web development and create your first website.",
    enrollmentStatus: "Open",
    thumbnail: "Images/Web Development Fundamentals.jpeg",
    percentageCompleted: 40,
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic HTML and CSS knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to HTML",
        content: "HTML structure, elements, and tags.",
      },
      {
        week: 2,
        topic: "Styling with CSS",
        content: "CSS basics and styling web pages.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 2,
    name: "Advanced JavaScript Programming",
    instructor: "Mike Brown",
    description: "Master advanced JavaScript concepts and techniques.",
    enrollmentStatus: "Open",
    thumbnail: "Images/Advanced JavaScript Programming.jpeg",
    percentageCompleted: 30,
    duration: "12 weeks",
    schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Advanced JavaScript Topics",
        content: "Closures, promises, and asynchronous programming.",
      },
      {
        week: 2,
        topic: "React and Front-End Development",
        content: "Building interactive web applications with React.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 201,
        name: "John Smith",
        email: "john@example.com",
      },
      {
        id: 202,
        name: "Emily Davis",
        email: "emily@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 3,
    name: "Data Science for Beginners",
    instructor: "David Clark",
    description:
      "Learn the fundamentals of data science and data analysis using Python.",
    enrollmentStatus: "Open",
    thumbnail: "Images/Data Science for Beginners.jpeg",
    percentageCompleted: 90,
    duration: "14 weeks",
    schedule: "Wednesdays and Fridays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: ["Basic programming knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Data Science",
        content: "Overview of data science and its applications.",
      },
      {
        week: 2,
        topic: "Python Programming for Data Analysis",
        content: "Python basics for data analysis.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 301,
        name: "Linda Harris",
        email: "linda@example.com",
      },
      {
        id: 302,
        name: "Mark Wilson",
        email: "mark@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 4,
    name: "Mobile App Development with React Native",
    instructor: "Linda Garcia",
    description:
      "Create cross-platform mobile apps using React Native framework.",
    enrollmentStatus: "Open",
    thumbnail: "Images/Mobile App Development with React Native.jpeg",
    percentageCompleted: 70,
    duration: "12 weeks",
    schedule: "Mondays and Thursdays, 6:30 PM - 8:30 PM",
    location: "Online",
    prerequisites: ["Basic programming knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native and setting up the development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
    ],
    students: [
      {
        id: 401,
        name: "Sophie Turner",
        email: "sophie@example.com",
      },
      {
        id: 402,
        name: "James White",
        email: "james@example.com",
      },
    ],
  },
  {
    id: 5,
    name: "Machine Learning Fundamentals",
    instructor: "Sophia Turner",
    description:
      "An introduction to machine learning and its applications in real-world scenarios.",
    enrollmentStatus: "Open",
    thumbnail: "Images/Machine Learning Fundamentals.jpeg",
    percentageCompleted: 10,
    duration: "16 weeks",
    schedule: "Tuesdays and Thursdays, 6:30 PM - 8:30 PM",
    location: "Online",
    prerequisites: ["Basic programming and mathematics knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Machine Learning",
        content: "Overview of machine learning concepts and algorithms.",
      },
      {
        week: 2,
        topic: "Supervised Learning",
        content: "Classification and regression algorithms.",
      },
    ],
    students: [
      {
        id: 501,
        name: "Sophie Jackson",
        email: "sophie@example.com",
      },
      {
        id: 502,
        name: "James Brown",
        email: "james@example.com",
      },
    ],
  },
];

export default dummyCourseData;
