
export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  instructorAvatar: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  studentsCount: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  image: string;
  whatYouWillLearn: string[];
  requirements: string[];
  courseContent: {
    section: string;
    lessons: string[];
  }[];
}

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js and more. Build real projects and become a full-stack developer.',
    instructor: 'John Smith',
    instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    price: 89.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviewCount: 12453,
    studentsCount: 45231,
    duration: '52 hours',
    level: 'Beginner',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop',
    whatYouWillLearn: [
      'Build responsive websites with HTML, CSS, and JavaScript',
      'Create dynamic web applications with React',
      'Develop backend APIs with Node.js and Express',
      'Work with databases like MongoDB',
      'Deploy applications to the cloud'
    ],
    requirements: [
      'Basic computer skills',
      'No programming experience required',
      'Access to a computer with internet connection'
    ],
    courseContent: [
      {
        section: 'HTML & CSS Fundamentals',
        lessons: ['Introduction to HTML', 'CSS Styling', 'Responsive Design', 'CSS Grid & Flexbox']
      },
      {
        section: 'JavaScript Essentials',
        lessons: ['Variables and Data Types', 'Functions and Scope', 'DOM Manipulation', 'Async JavaScript']
      },
      {
        section: 'React Development',
        lessons: ['React Components', 'State Management', 'Hooks', 'Routing']
      }
    ]
  },
  {
    id: '2',
    title: 'Python for Data Science',
    description: 'Master Python programming for data analysis, visualization, and machine learning applications.',
    instructor: 'Sarah Johnson',
    instructorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    price: 79.99,
    originalPrice: 149.99,
    rating: 4.7,
    reviewCount: 8967,
    studentsCount: 32145,
    duration: '38 hours',
    level: 'Intermediate',
    category: 'Data Science',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    whatYouWillLearn: [
      'Python programming fundamentals',
      'Data manipulation with Pandas',
      'Data visualization with Matplotlib and Seaborn',
      'Statistical analysis and hypothesis testing',
      'Introduction to machine learning'
    ],
    requirements: [
      'Basic programming knowledge helpful but not required',
      'High school level mathematics',
      'Python installed on your computer'
    ],
    courseContent: [
      {
        section: 'Python Basics',
        lessons: ['Python Syntax', 'Data Structures', 'Control Flow', 'Functions']
      },
      {
        section: 'Data Analysis',
        lessons: ['NumPy Arrays', 'Pandas DataFrames', 'Data Cleaning', 'Statistical Analysis']
      }
    ]
  },
  {
    id: '3',
    title: 'Digital Marketing Masterclass',
    description: 'Complete guide to digital marketing including SEO, social media, PPC, and content marketing.',
    instructor: 'Mike Wilson',
    instructorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    price: 69.99,
    originalPrice: 129.99,
    rating: 4.6,
    reviewCount: 5432,
    studentsCount: 18765,
    duration: '28 hours',
    level: 'Beginner',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    whatYouWillLearn: [
      'SEO optimization techniques',
      'Social media marketing strategies',
      'Google Ads and PPC campaigns',
      'Content marketing and copywriting',
      'Analytics and performance tracking'
    ],
    requirements: [
      'No prior marketing experience required',
      'Basic internet and computer skills',
      'Willingness to learn and practice'
    ],
    courseContent: [
      {
        section: 'Digital Marketing Foundations',
        lessons: ['Marketing Strategy', 'Customer Personas', 'Market Research', 'Competitive Analysis']
      },
      {
        section: 'SEO & Content Marketing',
        lessons: ['Keyword Research', 'On-page SEO', 'Content Creation', 'Link Building']
      }
    ]
  },
  {
    id: '4',
    title: 'UI/UX Design Complete Course',
    description: 'Learn user interface and user experience design from scratch. Master Figma, design principles, and prototyping.',
    instructor: 'Emily Chen',
    instructorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    price: 94.99,
    originalPrice: 179.99,
    rating: 4.9,
    reviewCount: 7654,
    studentsCount: 23456,
    duration: '45 hours',
    level: 'Beginner',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=250&fit=crop',
    whatYouWillLearn: [
      'Design principles and color theory',
      'User research and persona creation',
      'Wireframing and prototyping',
      'Figma and design tools mastery',
      'Usability testing and iteration'
    ],
    requirements: [
      'No design experience required',
      'Access to Figma (free account)',
      'Creative mindset and attention to detail'
    ],
    courseContent: [
      {
        section: 'Design Fundamentals',
        lessons: ['Design Principles', 'Color Theory', 'Typography', 'Layout and Composition']
      },
      {
        section: 'UX Research',
        lessons: ['User Research Methods', 'Creating Personas', 'User Journey Mapping', 'Wireframing']
      }
    ]
  }
];

export const categories = [
  'All Categories',
  'Web Development',
  'Data Science',
  'Marketing',
  'Design',
  'Business',
  'Photography',
  'Music',
  'Language Learning'
];

export const mockInstructors = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@example.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    bio: 'Full-stack developer with 8+ years of experience',
    courses: ['1'],
    totalStudents: 45231,
    totalEarnings: 125430
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    bio: 'Data scientist and Python expert',
    courses: ['2'],
    totalStudents: 32145,
    totalEarnings: 89230
  }
];

export const mockStudents = [
  {
    id: '1',
    name: 'Alex Rodriguez',
    email: 'alex@example.com',
    enrolledCourses: ['1', '3'],
    completedCourses: ['3'],
    progress: {
      '1': 65,
      '3': 100
    }
  }
];
