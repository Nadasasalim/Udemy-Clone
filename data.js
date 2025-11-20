export const siteContent = {
  logoText: "Udemy",
  nav: {
    leftLinks: [
      { id: "business", label: "Udemy Business" },
      { id: "teach", label: "Teach on Udemy" }
    ],
    rightButtons: [
      { id: "login", label: "Log in", variant: "outline" },
      { id: "signup", label: "Sign up", variant: "solid" },
      { id: "language", label: "🌐", variant: "icon" }
    ]
  },
  hero: {
    badge: "Sale ends soon",
    title: "Skills that drive you forward",
    subtitle:
      "Learn the latest skills to reach your professional and personal goals. Study at your own pace, with lifetime access on mobile and desktop.",
    searchPlaceholder: "Search for anything",
    popularSearchesLabel: "Popular:",
    popularSearches: ["Python", "Excel", "Web Development", "JavaScript", "React"]
  },
  categories: [
    { id: "python", label: "Python" },
    { id: "excel", label: "Excel" },
    { id: "webdev", label: "Web Development" },
    { id: "js", label: "JavaScript" },
    { id: "data-science", label: "Data Science" },
    { id: "aws", label: "AWS Certification" },
    { id: "drawing", label: "Drawing" }
  ],
  courseSection: {
    heading: "A broad selection of courses",
    subheading:
      "Choose from thousands of online video courses with new additions published every month.",
    tabsLabel: "Explore courses in",
    tabs: [
      { id: "most-popular", label: "Most popular" },
      { id: "trending", label: "Trending now" },
      { id: "new", label: "New and noteworthy" }
    ],
    courses: [
      {
        id: 1,
        title: "The Complete Python Bootcamp From Zero to Hero in Python",
        instructor: "Jose Portilla",
        rating: 4.6,
        ratingCount: 152342,
        hours: 22,
        lectures: 155,
        level: "All Levels",
        price: "$12.99",
        badge: "Bestseller",
        categoryId: "python",
        tabId: "most-popular"
      },
      {
        id: 2,
        title: "Microsoft Excel - Excel from Beginner to Advanced",
        instructor: "Kyle Pew",
        rating: 4.7,
        ratingCount: 198231,
        hours: 18,
        lectures: 120,
        level: "All Levels",
        price: "$14.99",
        badge: "Bestseller",
        categoryId: "excel",
        tabId: "most-popular"
      },
      {
        id: 3,
        title: "The Web Developer Bootcamp 2025",
        instructor: "Colt Steele",
        rating: 4.7,
        ratingCount: 302112,
        hours: 55,
        lectures: 450,
        level: "All Levels",
        price: "$15.99",
        badge: "Bestseller",
        categoryId: "webdev",
        tabId: "most-popular"
      },
      {
        id: 4,
        title: "Modern JavaScript from the Beginning",
        instructor: "Brad Traversy",
        rating: 4.7,
        ratingCount: 98765,
        hours: 25,
        lectures: 200,
        level: "Intermediate",
        price: "$11.99",
        badge: null,
        categoryId: "js",
        tabId: "most-popular"
      },
      {
        id: 5,
        title: "React - The Complete Guide 2025",
        instructor: "Maximilian Schwarzmüller",
        rating: 4.8,
        ratingCount: 215342,
        hours: 40,
        lectures: 300,
        level: "All Levels",
        price: "$15.99",
        badge: "Hot & new",
        categoryId: "webdev",
        tabId: "trending"
      },
      {
        id: 6,
        title: "Complete Data Science Bootcamp",
        instructor: "DataScience Pro",
        rating: 4.6,
        ratingCount: 64321,
        hours: 30,
        lectures: 220,
        level: "All Levels",
        price: "$13.99",
        badge: null,
        categoryId: "data-science",
        tabId: "trending"
      },
      {
        id: 7,
        title: "AWS Certified Solutions Architect Associate",
        instructor: "Cloud Academy",
        rating: 4.7,
        ratingCount: 75432,
        hours: 35,
        lectures: 260,
        level: "Intermediate",
        price: "$16.99",
        badge: null,
        categoryId: "aws",
        tabId: "new"
      },
      {
        id: 8,
        title: "The Ultimate Drawing Course - Beginner to Advanced",
        instructor: "Art Studio",
        rating: 4.5,
        ratingCount: 50321,
        hours: 15,
        lectures: 100,
        level: "Beginner",
        price: "$10.99",
        badge: null,
        categoryId: "drawing",
        tabId: "new"
      },
      
      {
        id: 9,
        title: "Data Science & Machine Learning Bootcamp",
        instructor: "Jane Doe",
        rating: 4.7,
        ratingCount: 45213,
        hours: 28,
        lectures: 210,
        level: "All Levels",
        price: "$14.99",
        badge: "Bestseller",
        categoryId: "data-science",
        tabId: "most-popular"
      },
      {
        id: 10,
        title: "Python for Data Analysis and Visualization",
        instructor: "John Smith",
        rating: 4.6,
        ratingCount: 32109,
        hours: 20,
        lectures: 160,
        level: "Intermediate",
        price: "$12.99",
        badge: null,
        categoryId: "data-science",
        tabId: "new"
      },
   
      {
        id: 11,
        title: "AWS Certified Cloud Practitioner (CLF-C02)",
        instructor: "Cloud Academy",
        rating: 4.7,
        ratingCount: 28765,
        hours: 18,
        lectures: 140,
        level: "Beginner",
        price: "$13.99",
        badge: "Bestseller",
        categoryId: "aws",
        tabId: "most-popular"
      },
      {
        id: 12,
        title: "Hands-On AWS for Solutions Architects",
        instructor: "DevOps Guru",
        rating: 4.5,
        ratingCount: 17342,
        hours: 24,
        lectures: 190,
        level: "Intermediate",
        price: "$15.99",
        badge: null,
        categoryId: "aws",
        tabId: "trending"
      },
     
      {
        id: 13,
        title: "Character Drawing: From Beginner to Pro",
        instructor: "Creative Studio",
        rating: 4.6,
        ratingCount: 20987,
        hours: 16,
        lectures: 110,
        level: "All Levels",
        price: "$11.99",
        badge: "Bestseller",
        categoryId: "drawing",
        tabId: "most-popular"
      },
      {
        id: 14,
        title: "Digital Illustration with Procreate",
        instructor: "Art Lab",
        rating: 4.7,
        ratingCount: 15678,
        hours: 14,
        lectures: 95,
        level: "Intermediate",
        price: "$13.99",
        badge: null,
        categoryId: "drawing",
        tabId: "trending"
      }
    ]
  },
  trustedCompanies: {
    tagline: "Trusted by companies of all sizes",
    description:
      "Top companies choose Udemy Business to build in-demand career skills.",
    companies: [
      { id: "nasdaq", name: "Nasdaq" },
      { id: "vw", name: "Volkswagen" },
      { id: "netapp", name: "NetApp" },
      { id: "eventbrite", name: "Eventbrite" }
    ]
  }
};
