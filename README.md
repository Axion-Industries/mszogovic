
# Ms. Zogovic's Math Class - Digital Learning Platform

A comprehensive digital learning platform designed for high school mathematics education, specifically tailored for Algebra 2 Honors and AP Statistics courses at Doral Academy.

## 🎯 Overview

This web application serves as a centralized hub for Ms. Zogovic's mathematics students, providing access to course materials, assignments, resources, and interactive tools. The platform follows modern educational best practices with a focus on accessibility, mobile responsiveness, and user-friendly design.

## 🏫 School Information

- **Institution**: Doral Academy
- **Instructor**: Mrs. Zogovic
- **Courses**: Algebra 2 Honors with Trigonometry, AP Statistics
- **Academic Year**: 2024-2025

## 🚀 Features

### Core Functionality
- **Dual Course Support**: Separate sections for Algebra 2 Honors and AP Statistics
- **Interactive Calculator**: Full-featured scientific calculator with trigonometric functions
- **Resource Library**: Comprehensive curriculum guides, worksheets, and supplementary materials
- **Assignment Tracking**: Assignment lists with due dates and completion status
- **Class News**: Important announcements and updates
- **Dark/Light Mode**: User preference-based theme switching
- **Mobile Responsive**: Optimized for all device sizes

### Educational Approach

#### Algebra 2 Honors - Four-Pillar Function Approach
Each function family is explored through:
1. **Solve Equations**: Algebraic techniques for finding solutions
2. **Solve Inequalities**: Graphical and algebraic methods
3. **Analyze Graphs**: Properties, transformations, domain, range, end behavior
4. **Applications**: Real-world modeling and problem-solving

#### AP Statistics - 2025 College Board Framework
Aligned with the revised AP Statistics curriculum featuring:
- Statistical Practices Framework
- Unit-based organization
- Comprehensive resource integration
- Practice problems and assessments

## 🛠 Technology Stack

### Frontend
- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Wouter**: Lightweight routing library
- **Lucide React**: Beautiful icon library
- **Radix UI**: Accessible component primitives

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **TypeScript**: Server-side type safety
- **Drizzle ORM**: Lightweight database toolkit

### Development Tools
- **Vite**: Fast build tool and development server
- **ESBuild**: Fast JavaScript bundler
- **PostCSS**: CSS processing
- **Tailwind CSS**: Utility-first styling

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience with hover effects and animations
- **Tablet**: Touch-friendly interface with optimized layouts
- **Mobile**: Streamlined navigation and touch-optimized controls

### Breakpoints
- `xs`: 475px (extra small phones)
- `sm`: 640px (small tablets)
- `md`: 768px (medium tablets)
- `lg`: 1024px (laptops)
- `xl`: 1280px (desktops)

## 🎨 Design System

### Color Palette
```css
--edu-blue: #2563eb     /* Primary blue for Algebra 2 */
--edu-green: #059669    /* Primary green for AP Statistics */
--edu-accent: #dc2626   /* Accent red for highlights */
--edu-bg: #f8fafc       /* Light background */
--edu-card: #ffffff     /* Card background */
--edu-text: #1e293b     /* Primary text color */
```

### Typography
- **Headings**: System font stack with fallbacks
- **Body**: Optimized for readability across devices
- **Code**: Monospace for calculator and technical content

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   └── ui/         # Shadcn/ui components
│   │   ├── pages/          # Application pages/routes
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions and configurations
│   │   ├── App.tsx         # Main application component
│   │   ├── main.tsx        # Application entry point
│   │   └── index.css       # Global styles
│   └── index.html          # HTML template
├── server/                 # Backend Express application
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API route definitions
│   ├── storage.ts          # Data storage logic
│   └── vite.ts             # Vite integration
├── shared/                 # Shared types and schemas
│   └── schema.ts           # TypeScript type definitions
├── attached_assets/        # Course curriculum documents
├── package.json            # Project dependencies
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

## 🔧 Installation & Setup

1. **Clone the repository** (if applicable)
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start development server**:
   ```bash
   npm run dev
   ```
4. **Access the application**:
   - Local: `http://localhost:5000`
   - Network: `http://0.0.0.0:5000`

## 📚 Course Content

### Algebra 2 Honors Curriculum
- **Quarter 1**: Linear Functions and Systems
- **Quarter 2**: Quadratic Functions and Complex Numbers
- **Quarter 3**: Polynomial and Rational Functions
- **Quarter 4**: Exponential, Logarithmic, and Trigonometric Functions

### AP Statistics Curriculum (2025 Framework)
- **Unit 1**: Exploring One-Variable Data
- **Unit 2**: Exploring Two-Variable Data
- **Unit 3**: Collecting Data
- **Unit 4**: Probability, Random Variables, and Probability Distributions
- **Unit 5**: Sampling Distributions
- **Unit 6**: Inference for Categorical Data
- **Unit 7**: Inference for Quantitative Data
- **Unit 8**: Inference for Categorical Data: Chi-Square
- **Unit 9**: Inference for Quantitative Data: Slopes

## 🎯 Learning Objectives

### Statistical Practices (AP Statistics)
1. **Formulate Questions**: Determine investigative questions for statistical studies
2. **Collect Data**: Identify and justify data collection methods
3. **Analyze Data**: Select and use appropriate statistical methods
4. **Interpret Results**: Draw conclusions and communicate findings

### Mathematical Practices (Algebra 2)
1. **Problem Solving**: Apply mathematical concepts to real-world situations
2. **Reasoning**: Construct viable arguments and critique others' reasoning
3. **Modeling**: Use mathematics to represent and solve problems
4. **Communication**: Express mathematical ideas clearly and precisely

## 🔗 External Resources

### Primary Learning Platforms
- [FlippedMath Algebra 2 Common Core](https://algebra2cc.flippedmath.com/)
- [FlippedMath AP Precalculus](https://precalculus.flippedmath.com/ap-precalc.html)
- [Khan Academy Algebra 2](https://www.khanacademy.org/math/algebra2)
- [Khan Academy Statistics](https://www.khanacademy.org/math/statistics-probability)

### Supplementary Tools
- Desmos Graphing Calculator
- GeoGebra Interactive Mathematics
- College Board AP Resources
- Statistical Analysis Software

## 📊 Features by Page

### Home Dashboard
- Personalized greeting with time-based messaging
- Quick access to both course sections
- Real-time clock display
- Dark/light mode toggle
- Responsive navigation

### Course Pages (Algebra 2 & AP Statistics)
- Course-specific color theming
- Framework explanations
- Assignment access
- Resource navigation
- Class news and announcements

### Calculator
- Scientific calculator functionality
- Trigonometric functions
- Memory operations
- Responsive button layout
- Keyboard support

### Resources
- Downloadable PDF materials
- Organized by topic and difficulty
- External link integration
- Search and filter capabilities
- Mobile-optimized viewing

### Help Center
- Step-by-step tutorials
- Frequently asked questions
- Feature explanations
- Contact information
- Troubleshooting guides

## 🌟 Accessibility Features

- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Semantic HTML and ARIA labels
- **High Contrast**: Dark mode for visual accessibility
- **Responsive Text**: Scalable fonts and layouts
- **Touch Targets**: Appropriately sized interactive elements

## 🚀 Performance Optimizations

- **Code Splitting**: Lazy loading of route components
- **Image Optimization**: Responsive images and proper formats
- **Caching**: Efficient resource caching strategies
- **Bundle Size**: Minimized JavaScript and CSS bundles
- **Progressive Enhancement**: Graceful degradation for older browsers

## 🔒 Privacy & Security

- **No Personal Data Collection**: Focus on educational content only
- **Secure Connections**: HTTPS enforced in production
- **Local Storage**: Minimal use of browser storage
- **Content Security**: Safe external resource loading

## 📈 Future Enhancements

### Planned Features
- **User Authentication**: Student login system
- **Grade Tracking**: Assignment grade management
- **Progress Analytics**: Learning progress visualization
- **Collaboration Tools**: Student discussion forums
- **Offline Support**: PWA capabilities for offline access

### Technical Improvements
- **Database Integration**: Persistent data storage
- **API Expansion**: Enhanced backend functionality
- **Testing Suite**: Comprehensive test coverage
- **CI/CD Pipeline**: Automated deployment processes

## 🤝 Contributing

This is an educational project for Doral Academy students. For suggestions or issues:
1. Contact Mrs. Zogovic directly
2. Use the help center within the application
3. Discuss during class or office hours

## 📄 License

This project is created for educational purposes at Doral Academy. All course materials and content are property of the respective educational institutions and content creators.

## 👩‍🏫 About the Instructor

**Mrs. Zogovic** brings extensive experience in mathematics education with a focus on:
- Student-centered learning approaches
- Technology integration in mathematics
- AP Statistics expertise
- Algebraic reasoning development
- Real-world application emphasis

## 📞 Support & Contact

For technical issues or educational support:
- **In-Class**: During regular class periods
- **Office Hours**: As scheduled by Mrs. Zogovic
- **Help Center**: Built-in application support
- **Email**: Through official school channels

---

**© 2024 Ms. Zogovic's Classroom. All rights reserved.**

*Built with ❤️ for mathematics education at Doral Academy*
