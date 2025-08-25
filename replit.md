# BosTubs - Wood-Fired Hot Tub Rental Service

## Overview

BosTubs is a luxury wood-fired hot tub rental service targeting customers in Pretoria, South Africa. The application provides a complete business website with booking functionality, allowing customers to browse services, view pricing packages, and submit rental requests. The platform emphasizes ease of use with a "no installation, no commitment" approach to hot tub rentals.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with multiple pages (Home, Gallery, Pricing, FAQ, Contact)
- **UI Components**: Comprehensive design system built on Radix UI primitives with shadcn/ui components
- **Styling**: Tailwind CSS with custom color scheme (cedar, fire, water themes) and design tokens
- **State Management**: TanStack Query for server state management and form handling with React Hook Form
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ESM modules for modern JavaScript features
- **API Design**: RESTful API with structured error handling and request logging middleware
- **Data Storage**: In-memory storage implementation (MemStorage) with interfaces designed for easy database migration
- **Validation**: Zod schemas for runtime type validation and data integrity

### Database Design
- **ORM**: Drizzle ORM configured for PostgreSQL with schema-first approach
- **Schema**: Two main entities - users (authentication) and booking_requests (core business data)
- **Migration Strategy**: Drizzle Kit for schema migrations and database management
- **Connection**: Neon Database serverless PostgreSQL (configured but not actively used in current implementation)

### Form Handling & Validation
- **Client-side**: React Hook Form with Zod resolvers for type-safe form validation
- **Server-side**: Zod schema validation with detailed error responses
- **User Feedback**: Toast notifications and comprehensive error handling

### Development & Build Process
- **Development Server**: Vite dev server with HMR for frontend, tsx for backend development
- **Build Process**: Vite for frontend compilation, esbuild for backend bundling
- **Code Quality**: TypeScript strict mode with comprehensive type checking
- **Asset Management**: Path aliases for clean import statements

## External Dependencies

### UI & Component Libraries
- **Radix UI**: Headless UI primitives for accessibility and functionality
- **Lucide React**: Icon library for consistent visual elements
- **Embla Carousel**: Carousel/slider functionality for image galleries

### Data & API Management
- **TanStack Query**: Server state management, caching, and synchronization
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime schema validation and type inference

### Database & ORM
- **Drizzle ORM**: Type-safe database operations and query building
- **Neon Database**: Serverless PostgreSQL hosting (configured for future use)
- **Drizzle Kit**: Database migration and schema management tools

### Styling & Design
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Class Variance Authority**: Component variant management
- **Date-fns**: Date manipulation and formatting utilities

### Development Tools
- **Vite**: Frontend build tool and development server
- **esbuild**: Fast JavaScript bundler for production builds
- **TypeScript**: Static type checking and enhanced developer experience

### External Services
- **Replit Integration**: Development environment with runtime error handling and deployment optimization
- **Image Assets**: Unsplash and Pixabay for gallery and hero images
- **Font Integration**: Google Fonts for typography (Playfair Display, DM Sans, Fira Code)

The architecture supports easy migration from in-memory storage to PostgreSQL, with all database schemas and connection configurations already in place. The modular design allows for straightforward feature additions and scaling as the business grows.