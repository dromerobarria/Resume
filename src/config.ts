export const config = {
  profile: {
    name: 'Daniel Romero',
    role: 'Lead Software Engineer, iOS',
    location: 'Ñuñoa, Santiago, Chile',
    email: 'daniel.romero.barria@gmail.com',
    phone: '+56 9 8998 0754',
    linkedin: 'https://linkedin.com/in/daniel-romero-8851499a',
    github: 'https://github.com/dromerobarria',
    website: 'https://dromerobarria.github.io/Resume/',
  },

  seo: {
    title: 'Daniel Romero — Lead iOS Software Engineer',
    description:
      'iOS Developer with 10+ years of experience building apps from scratch to production, leading mobile teams, and delivering high-quality user experiences. Expert in Swift, UIKit, SwiftUI, and modern iOS architecture.',
    ogImage: '',
  },

  about: {
    bio: [
      'iOS Developer with over 10 years of experience, fluent in both English and Spanish. Throughout my career I have built apps from scratch to production, contributed to large-scale applications with thousands of users, and led mobile teams to deliver high-quality products and outstanding user experiences. I adapt easily to different teams and enjoy finding creative and viable solutions to a wide range of software engineering challenges.',
      'I am passionate about the Swift language and committed to continuous learning. I actively participate in conferences and meetups, and enjoy fostering community by sharing knowledge and mentoring others in the iOS ecosystem. Beyond iOS, I have experience in Android development with Kotlin, and basic knowledge of cross-platform frameworks like Flutter. Additionally, I have developed apps independently (indie dev), publishing on the App Store with a focus on generating revenue and owning the entire product lifecycle.',
    ],
    funFact: 'Host of the YouTube channel "Banana Split", focused on mobile content.',
  },

  experience: [
    {
      company: 'Thoughtworks',
      role: 'Lead Mobile Engineer',
      period: 'Jul 2025 - Present',
      description:
        'Worked on a large-scale iOS application for an international retail client in the U.S. The app incorporated Flutter modules alongside native iOS code; my work spanned new features, reusable package development, and modular app architecture.',
    },
    {
      company: 'Falabella',
      role: 'Senior Software Engineer, iOS',
      period: 'May 2025 - Jul 2025',
      description:
        'Contributed to the maintenance of the main app, identifying and resolving bugs to ensure a stable and reliable experience for the app\'s large user base.',
    },
    {
      company: 'SumUp',
      role: 'iOS Software Engineer',
      period: 'Sep 2024 - Apr 2025',
      description:
        'Part of a large cross-functional team alongside Product Managers, Backend Engineers, Android Engineers and Product Designers. Lead iOS for Chilean Digital Account, Release Manager, implemented features such as physical card request using UIKit and SwiftUI. Contributed to the main app, global banking features, design system libraries, and modularized architecture. Organized a local Swift meetup in Santiago presenting Tap to Pay.',
    },
    {
      company: 'Thoughtworks',
      role: 'Lead Software Engineer, iOS',
      period: 'Oct 2023 - Sep 2024',
      description:
        'Embedded in a large cross-functional team delivering features for CVS. Maintained and refactored unit test plans during a large-scale migration, performed accessibility audits, UI tests. Redesigned highly coupled classes to improve maintainability, introduced dependency injection via dynamic container. Led the iOS community at Thoughtworks Chile.',
    },
    {
      company: 'Rivii',
      role: 'Freelance iOS',
      period: 'May 2024 - Jul 2024',
      description:
        'Freelance development of a new login flow (VTR integration) and app maintenance, including migration of third-party dependencies from CocoaPods to SPM.',
    },
    {
      company: 'Mobdev',
      role: 'Principal Software iOS Engineer',
      period: 'May 2021 - Oct 2023',
      description:
        'Worked on Scotiabank products: new business banking features, flow implementation, maintenance and continuous improvement. Contributed to app modularization and migrated dependencies to SPM. As Principal, coordinated iOS developers on best practices, mentoring, and recruitment.',
    },
    {
      company: 'Anthos Academy',
      role: 'Mobile Mentor',
      period: 'Jan 2023 - Mar 2023',
      description:
        'Mobile instructor teaching iOS development and the Apple ecosystem — UI approaches, architectural patterns, best practices, and job interview preparation. Most of my students now work as iOS developers.',
    },
    {
      company: 'Cornershop',
      role: 'iOS Developer',
      period: 'Dec 2020 - May 2021',
      description:
        'iOS Developer on the Cornershop Shopper app, working with various architectural patterns and contributing to a Scrum team.',
    },
    {
      company: 'Mobdev - Scotiabank',
      role: 'iOS Developer',
      period: 'Dec 2019 - Dec 2020',
      description:
        'iOS Developer on ScotiaPay: feature implementation, unit tests, bug fixes with MVP architecture, CI/CD, code reviews and pair programming. Features including insurance flows, onboarding tutorials, and guest access.',
    },
    {
      company: 'Onfire',
      role: 'iOS Developer',
      period: 'Jan 2018 - Dec 2019',
      description:
        'Sole iOS developer, responsible for designing and architecting the queue event management app. Led the entire process from initial concept to production with Clean Swift. Managed Apple Developer certificates and App Store deployment.',
    },
    {
      company: 'Jumpit Labs',
      role: 'Chief iOS Developer',
      period: 'Jan 2016 - Jan 2018',
      description:
        'Led a team of 5 iOS developers across multiple startup projects: implementation, unit tests, risk analysis, delivery estimates, and code reviews with Scrum. Projects built with UIKit, Objective-C, Swift, and Clean Swift.',
    },
    {
      company: 'Funky Fat Stock Company',
      role: 'Lead iOS Developer & Mobile Developer',
      period: 'Jan 2014 - Jan 2016',
      description:
        'Mobile and web solutions for geographic challenges using GIS, GPS, and Geofencing. Main product: Libeat, a proximity marketing tool.',
    },
  ],

  projects: [
    {
      name: 'CVS Pharmacy App',
      description: 'Large-scale iOS app for one of the largest pharmacy chains in the U.S. Features, testing, accessibility, and architecture.',
      tech: ['Swift', 'UIKit', 'SwiftUI', 'XCTest', 'A11y'],
    },
    {
      name: 'SumUp Digital Account',
      description: 'Digital banking platform for merchants in Chile. Banking flows, physical card requests, modular design system.',
      tech: ['Swift', 'SwiftUI', 'UIKit', 'SPM'],
    },
    {
      name: 'Scotiabank Chile',
      description: 'Business and personal banking app. Financial features, modularization, migration to SPM.',
      tech: ['Swift', 'UIKit', 'MVP', 'SPM', 'CocoaPods'],
    },
    {
      name: 'Cornershop Shopper',
      description: 'App for Cornershop shoppers, facilitating the shopping and delivery experience.',
      tech: ['Swift', 'UIKit', 'Scrum'],
    },
    {
      name: 'Libeat',
      description: 'Proximity marketing tool using GIS, GPS, and Geofencing to connect users with nearby brands.',
      tech: ['Swift', 'Objective-C', 'CoreLocation', 'MapKit'],
    },
    {
      name: 'Banana Split (YouTube)',
      description: 'YouTube channel about mobile content and iOS development.',
      tech: ['Content Creation', 'iOS', 'Swift'],
    },
    {
      name: 'Chile Premier',
      description: 'Indie app published on the App Store for tracking the Chilean football league.',
      tech: ['Swift', 'SwiftUI', 'App Store'],
      appStoreUrl: 'https://apps.apple.com/cl/app/chile-premier/id6749191545',
    },
    {
      name: 'CuandoEsFeriado',
      description: 'Indie app that shows Chilean holidays with notifications and countdown.',
      tech: ['Swift', 'SwiftUI', 'Notifications'],
      appStoreUrl: 'https://apps.apple.com/cl/app/cuandoesferiado/id6760665917',
    },
    {
      name: 'Planta Feliz',
      description: 'Indie app for plant care and tracking with watering reminders.',
      tech: ['Swift', 'SwiftUI', 'Local Notifications'],
      appStoreUrl: 'https://apps.apple.com/cl/app/planta-feliz/id6752497061',
    },
    {
      name: 'SubSight',
      description: 'Indie app for managing and tracking personal subscriptions.',
      tech: ['Swift', 'SwiftUI', 'StoreKit'],
      appStoreUrl: 'https://apps.apple.com/cl/app/subsight/id6746824760',
    },
  ],

  skills: {
    'Advanced Languages': ['Objective-C', 'Swift (6+ years)'],
    'Intermediate Languages': ['C', 'C++', 'R', 'Ruby', 'Node.js', 'Python', 'Kotlin'],
    'Basic Languages': ['Prolog', 'Scheme'],
    'UI Frameworks': ['UIKit', 'SwiftUI'],
    'iOS Architecture': ['MVC', 'MVP', 'VIPER', 'Clean Swift', 'MVVM', 'TCA'],
    'iOS Frameworks': [
      'CoreLocation',
      'MapKit',
      'Core Data',
      'SwiftData',
      'Realm',
      'HealthKit',
      'StoreKit',
      'CoreGraphics',
    ],
    Modularization: ['SPM (Swift Package Manager)', 'CocoaPods'],
    Testing: ['Test Plans', 'Unit Testing', 'Snapshot Testing', 'Accessibility (A11y)'],
    Tools: ['Tuist', 'XcodeGen', 'Fastlane', 'Firebase', 'Xcode Cloud', 'CI/CD'],
    Other: ['Android (Kotlin)', 'Flutter (basic)'],
  },

  education: [
    {
      institution: 'Universidad Técnica Federico Santa María',
      degree: 'Postgraduate studies in Software Engineering',
      period: '2008 - 2020',
    },
    {
      institution: 'Village English, Toronto, Canada',
      degree: 'Academic English Program: Deluxe Fluency — 10-month exchange',
      period: '2006 - 2007',
    },
    {
      institution: 'Hispano Británico, Iquique',
      degree: 'High School',
      period: '2003 - 2006',
    },
  ],

  certifications: [
    { name: 'TOEFL', score: '75' },
    { name: 'TOEIC', score: '750' },
  ],

  languages: 'Excellent communication skills, with extensive experience presenting fluently in both English and Spanish.',

  community:
    'Host of Cocoaheads Chile (Swift community), with over 10 talks given. Attendee at conferences such as NSSpain, NYSwifty, and Swiftable.',

  console: {
    welcomeMessage: `> Building DanielRomero.xcodeproj...
> Compiling About.swift...
> Compiling Experience.swift...
> Compiling Projects.swift...
> Compiling Skills.swift...
> Linking DanielRomero...
> Build Succeeded ✓
>
> Welcome! I'm Daniel Romero, Lead iOS Software Engineer
> with 10+ years of experience crafting iOS apps.
> Navigate through the files on the left to learn more about me.
>
> print("Hello, World! 👋")`,
  },
};

export type Config = typeof config;
