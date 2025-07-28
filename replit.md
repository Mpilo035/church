# Grace Community Church Website

## Overview

This is a full-stack web application for Grace Community Church, built with React on the frontend and Express.js on the backend. The application serves as a complete church website with features for newsletter subscriptions, contact forms, event management, and information about the church's services and ministries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Module System**: ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Validation**: Zod schemas shared between frontend and backend
- **Development**: Hot module replacement with Vite integration

## Key Components

### Database Schema
The application uses four main tables:
- `users`: User authentication (username, password)
- `newsletters`: Newsletter subscriptions (firstName, lastName, email)
- `contacts`: Contact form submissions (name, email, subject, message)
- `events`: Church events (title, description, dateTime)

### API Endpoints
- `POST /api/newsletter`: Subscribe to newsletter
- `POST /api/contact`: Submit contact form
- `GET /api/events`: Retrieve church events

### UI Components
- **Navigation**: Responsive hamburger menu with smooth scrolling
- **Hero Section**: Church introduction with social media links
- **About Section**: Church history and leadership information
- **Services Section**: Service times and location details
- **Events Section**: Dynamic event listings from database
- **Ministries Section**: Information about church programs
- **Newsletter Section**: Email subscription form
- **Contact Section**: Contact form with validation

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **API Processing**: Express server validates requests with Zod schemas
3. **Database Operations**: Drizzle ORM handles PostgreSQL interactions
4. **Response Handling**: Data returned to frontend with proper error handling
5. **UI Updates**: React components update based on query results

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **State Management**: TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React icons
- **Date Handling**: date-fns library

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod for schema validation
- **Environment**: Node.js with ES modules

### Development Tools
- **Build Tool**: Vite with React plugin
- **Database Migrations**: Drizzle Kit for schema management
- **Type Checking**: TypeScript compiler
- **Development Server**: Vite dev server with HMR

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Development Mode**: Uses Vite dev server with hot reloading
- **Production Mode**: Serves static files from Express server

### Storage Strategy
- **Development**: In-memory storage implementation for rapid prototyping
- **Production**: PostgreSQL database with Drizzle ORM
- **Migration Path**: Easy switch from memory to database storage

The application follows a clean architecture with shared types between frontend and backend, making it maintainable and type-safe. The storage abstraction allows for easy testing and development while providing a clear path to production database integration.