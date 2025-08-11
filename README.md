![AUTOMATA](https://res.cloudinary.com/drcbqssyo/image/upload/v1754909121/zapier_home_qhh5lh.png)

# AUTOMATA 🚀

AUTOMATA is a powerful workflow automation platform that allows users to connect their favorite apps and automate repetitive tasks without any coding knowledge. Built with modern web technologies, it provides a visual drag-and-drop interface for creating complex workflows (called "Zaps") that can trigger actions across multiple applications.

## 📋 Table of Contents

- [Description](#description)
- [Features](#features)
- [Components](#components)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Contributing](#contributing)

## 🎯 Description

AUTOMATA is an automation platform inspired by Zapier, designed to help users streamline their workflows by connecting different applications and services. The platform features a visual workflow builder that allows users to create automation rules (Zaps) by selecting triggers and actions from various integrated applications.

### Key Concepts

- **Zaps**: Automated workflows that connect triggers to actions
- **Triggers**: Events that start a workflow (e.g., new email, form submission)
- **Actions**: Tasks performed in response to triggers (e.g., send notification, create record)
- **Apps**: Third-party services that can be integrated (Gmail, Slack, Trello, etc.)

## ✨ Features

### Core Features
- **Visual Workflow Builder**: Drag-and-drop interface for creating automations
- **Multi-App Integration**: Connect with popular services like Gmail, Slack, Trello, Salesforce (currently: Gmail, Solana)
- **Real-time Execution**: Workflows run automatically when triggers are activated
- **User Authentication**: Secure login and signup system
- **Dashboard**: Manage and monitor all your automations in one place
- **Analytics**: Track workflow performance and execution history

### User Experience
- **No-Code Automation**: Create complex workflows without programming knowledge
- **Intuitive Interface**: Clean, modern UI with smooth animations
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Real-time Updates**: Live status updates and notifications
- **Template Library**: Pre-built automation templates for common use cases

### Technical Features
- **Microservices Architecture**: Scalable backend with separate services
- **Event-Driven Processing**: Kafka-based message queuing for reliable execution
- **Database Management**: PostgreSQL with Prisma ORM
- **Type Safety**: Full TypeScript implementation
- **API-First Design**: RESTful APIs for all operations

## 🏗️ Components

### Frontend (Web App)
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations and transitions
- **React Hooks**: Custom hooks for data management
- **Axios**: HTTP client for API communication

### Backend Services
- **Express.js**: RESTful API server
- **Authentication**: JWT-based user authentication
- **Database**: PostgreSQL with Prisma ORM
- **Message Queue**: Kafka for event processing
- **Validation**: Zod schema validation

### Hooks Services
- **Zap Triggers**: Webhooks for external triggers
- **Express Middleware**: Custom middleware for API requests

### Processing Services
- **Event Processing**: Kafka-based message queuing for reliable execution

### Worker Services
- **Background Jobs**: Background tasks for long-running processes
- **Actions**: Tasks performed in response to triggers (e.g., send notification, create record)

### Infrastructure
- **Turbo**: Monorepo build system
- **Docker**: Containerized development environment
- **Database Migrations**: Automated schema management
- **Type Generation**: Shared TypeScript types across packages

## 🏗️ Architecture
![Automata Architecture](https://res.cloudinary.com/drcbqssyo/image/upload/v1754909121/zapier_architecture_xnnhst.png)

## 📁 Project Structure

```
AUTOMATA/
├── apps/                          # Application packages
│   ├── backend/                   # Express.js API server
│   │   ├── src/
│   │   │   ├── index.ts          # Server entry point
│   │   │   ├── middleware.ts     # Express middleware
│   │   │   └── router/           # API route handlers
│   │   └── package.json
│   ├── web/                      # Next.js frontend application
│   │   ├── app/                  # App Router pages
│   │   │   ├── (auth)/           # Authentication pages
│   │   │   ├── (dashboard)/      # Dashboard pages
│   │   │   └── (home)/           # Marketing pages
│   │   ├── components/           # Reusable UI components
│   │   ├── hooks/                # Custom React hooks
│   │   └── providers/            # Context providers
│   ├── hooks/                    # Web hooks Trigger handlers
│   ├── processor/                # Event processing service
│   └── worker/                   # Background job worker
├── packages/                     # Shared packages
│   ├── config-eslint/           # ESLint configuration
│   ├── config-tailwind/         # Tailwind CSS configuration
│   ├── config-typescript/       # TypeScript configuration
│   ├── database/                # Database schema and client
│   │   ├── prisma/              # Prisma schema and migrations
│   │   └── src/                 # Database utilities
│   └── types/                   # Shared TypeScript types
├── docker-compose.yml           # Development environment
├── package.json                 # Root package configuration
├── turbo.json                   # Turbo build configuration
└── README.md                    # This file
```

## 🛠️ Technologies Used

### Frontend
- **Next.js 15.4.2**: React framework with App Router
- **React 19.1.0**: UI library
- **TypeScript 5.8.2**: Type-safe JavaScript
- **Tailwind CSS 4.1.5**: Utility-first CSS framework
- **Framer Motion 12.23.12**: Animation library
- **Lucide React 0.534.0**: Icon library
- **Axios 1.11.0**: HTTP client
- **Sonner 2.0.6**: Toast notifications

### Backend
- **Express.js 5.1.0**: Web framework
- **Node.js**: JavaScript runtime
- **TypeScript 5.5.4**: Type-safe development
- **Prisma**: Database ORM
- **PostgreSQL**: Primary database
- **Kafka**: Message queuing
- **JWT**: Authentication tokens
- **bcrypt**: Password hashing
- **Zod**: Schema validation

### Development Tools
- **Turbo 2.5.5**: Monorepo build system
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Docker**: Containerization
- **npm 11.4.2**: Package manager

### Database
- **PostgreSQL**: Primary database
- **Prisma**: Database ORM and migrations
- **MySQL**: Development database (Docker)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (>= 18.0.0)
- **npm** (>= 11.4.2)
- **Docker** and **Docker Compose**
- **PostgreSQL** (for production)

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/SajalDBansal/automata-workflow-manager
cd AUTOMATA
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create `.env` files in the following locations:

**Root `.env`:**
```env
DATABASE_URL="postgresql://username:password@localhost:5432/automata"
NEXT_PUBLIC_BACKEND_URL="http://localhost:3000"
```

**Backend `.env` (apps/backend/.env):**
```env
DATABASE_URL="postgresql://username:password@localhost:5432/automata"
JWT_SECRET="your-jwt-secret-key"
PORT=3000
```

**Web `.env` (apps/web/.env):**
```env
NEXT_PUBLIC_BACKEND_URL="http://localhost:3000"
```

### 4. Start Development Database

```bash
$ docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```

### 5. Set Up Database

```bash
# Generate Prisma client
npm run generate

# Run database migrations
npm run db:migrate

# Seed the database (optional)
npm run db:seed
```

### 6. Start Development Servers

```bash
# Start all services in development mode
npm run dev
```

This will start:
- **Frontend**: http://localhost:3001
- **Backend**: http://localhost:3000
- **Database**: localhost:5432 (PostgreSQL)

## 💻 Usage

### Creating Your First Zap

1. **Sign Up/Login**: Create an account or log in to your existing account
2. **Navigate to Dashboard**: Access your automation dashboard
3. **Create New Zap**: Click "Create Zap" to start building a workflow
4. **Choose Trigger**: Select an app and event that will start your automation
5. **Configure Trigger**: Set up the specific conditions for your trigger
6. **Add Actions**: Choose what should happen when the trigger fires
7. **Test & Publish**: Test your automation and publish it to start running

### Example Workflow

** Webhook to Gmail Notification Than Send Solana Transaction**
- **Trigger**: New webhook in Zap Triggers
- **Action**: Send Gmail notification
- **Action**: Send Solana transaction
- **Result**: Automatic Gmail notifications and Solana transactions for important webhooks

### Managing Zaps

- **View All Zaps**: See all your automations in the dashboard
- **Edit Zaps**: Modify existing workflows anytime
- **Pause/Resume**: Control when automations are active
- **View History**: Check execution logs and performance

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev              # Start all services in development mode
npm run build           # Build all packages
npm run lint            # Lint all packages
npm run format          # Format code with Prettier

# Database
npm run db:migrate:dev  # Create new migration
npm run db:migrate:deploy # Apply migrations
npm run db:push         # Push schema changes
npm run db:seed         # Seed database with sample data
npm run generate        # Generate Prisma client

# Individual Services
npm run dev --filter=web      # Start only web app
npm run dev --filter=backend  # Start only backend
```

### Code Structure

- **Type Safety**: All packages use TypeScript with strict configuration
- **Shared Types**: Common types are defined in `packages/types`
- **Database Schema**: Managed through Prisma in `packages/database`
- **API Routes**: RESTful endpoints in `apps/backend/src/router`
- **UI Components**: Reusable components in `apps/web/components`

### Adding New Features

1. **Backend API**: Add routes in `apps/backend/src/router`
2. **Database Schema**: Update Prisma schema in `packages/database/prisma`
3. **Frontend Components**: Create components in `apps/web/components`
4. **Types**: Update shared types in `packages/types`
5. **Testing**: Add tests for new functionality

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use conventional commit messages
- Ensure all tests pass
- Update documentation as needed
- Follow the existing code style

---

**AUTOMATA** - Automate your work, amplify your productivity! 🚀
