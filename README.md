# Job Assistance System - MVP

A full-stack job application tracking system for job seekers to manage their applications.

## 🎯 Features (Planned)

- User authentication (sign up, login, logout)
- User profile management
- Browse job listings
- Apply to jobs
- Track application status

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Hosting**: Vercel
- **Version Control**: GitHub

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or higher
- npm or yarn
- Supabase account
- Git

### Installation

1. Clone the repository:
```bash
   git clone https://github.com/Vigneshprasad10/Job-Assistance-MVP.git
   cd Job-Assistance-MVP
```

2. Install dependencies:
```bash
   npm install
```

3. Set up environment variables:
```bash
   copy .env.example .env.local
```
   Then fill in your Supabase credentials in `.env.local`

4. Run the development server:
```bash
   npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure
```
src/
├── app/              # Next.js app router pages
├── components/       # React components
│   ├── ui/          # Reusable UI components
│   ├── forms/       # Form components
│   └── layout/      # Layout components
├── lib/             # Utility libraries
│   ├── supabase/   # Supabase clients
│   └── utils/      # Helper functions
├── types/           # TypeScript type definitions
└── constants/       # App constants
```

## 📋 Development Progress

- [x] Project setup
- [ ] Supabase configuration
- [ ] Authentication system
- [ ] User profiles
- [ ] Job listings
- [ ] Job applications
- [ ] Application tracking

## 👤 Author

Vignesh Prasad

## 📝 License

MIT
