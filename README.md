# VyomGarud Landing Page

A modern, responsive landing page for VyomGarud - a military-grade UAV/drone systems company. Built with the MERN stack (MongoDB, Express, React, Node.js) featuring a dark, futuristic aesthetic with smooth animations.

## 🚀 Features

- **Modern Tech Stack**: MERN (MongoDB, Express, React, Node.js)
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion for fluid interactions
- **Military-Grade Aesthetic**: Dark theme with charcoal, white, and orange (#ff7b00) color scheme
- **Contact Form**: Functional contact form with email integration
- **SEO Optimized**: Meta tags and semantic HTML

## 📋 Sections

1. **Hero** - Company name, tagline, CTA buttons, and bold visual
2. **About** - Mission and company overview
3. **Capabilities** - 4 product/service cards with detailed features
4. **Highlights** - 3 key feature bullets with statistics
5. **Contact** - Contact form and company information
6. **Footer** - Quick links and social media

## 🛠️ Tech Stack

### Frontend
- React 18.2
- Vite (Build tool)
- Tailwind CSS
- Framer Motion (Animations)
- React Icons
- Axios

### Backend
- Node.js
- Express.js
- Nodemailer (Email handling)
- CORS

### Fonts
- Poppins (Headings)
- Inter (Body text)
- Montserrat (Accents)

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Instructions

1. **Clone or navigate to the project directory**
   ```bash
   cd "C:\Users\mhite\OneDrive\Desktop\MY MAJOR PROJECTS\Vyomguard Landing Page"
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Configure environment variables**
   - Copy `.env.example` to `.env`
   - Add your email credentials for the contact form:
     ```
     PORT=5000
     EMAIL_USER=your_email@gmail.com
     EMAIL_PASS=your_app_password
     ```

5. **Run the application**
   
   **Development mode (both server and client):**
   ```bash
   npm run dev
   ```

   **Or run separately:**
   
   Terminal 1 (Backend):
   ```bash
   npm run server
   ```
   
   Terminal 2 (Frontend):
   ```bash
   npm run client
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 🎨 Design Specifications

### Color Palette
- **Charcoal Dark**: `#1C2833` (Primary background)
- **Charcoal**: `#2C3E50` (Secondary background)
- **Charcoal Light**: `#34495E` (Tertiary background)
- **Orange**: `#ff7b00` (Primary accent)
- **White**: `#ffffff` (Text)

### Typography
- **Headings**: Poppins (Bold, 600-800 weight)
- **Body**: Inter (Regular, 400-600 weight)
- **Accents**: Montserrat (Medium-Bold, 500-700 weight)

### Animation Style
- Subtle entrance animations
- Hover effects with glow
- Smooth transitions (CSS & Framer Motion)
- Floating particles in hero section
- Animated background grid

## 📁 Project Structure

```
vyomguard-landing-page/
├── client/                    # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Capabilities.jsx
│   │   │   ├── Highlights.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
├── server.js                  # Express backend
├── package.json
├── .env.example
└── README.md
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the client:
   ```bash
   cd client
   npm run build
   ```
2. Deploy the `client/dist` folder

### Backend (Heroku/Railway/Render)
1. Set environment variables on your hosting platform
2. Deploy with:
   ```bash
   npm start
   ```

### Full Stack (Railway/Render)
- Can deploy both frontend and backend together
- Configure build commands:
  - Build: `npm install && cd client && npm install && npm run build`
  - Start: `npm start`

## 📧 Contact Form Setup

To enable the contact form:

1. **Gmail Setup** (Recommended for testing):
   - Enable 2-factor authentication on your Gmail account
   - Generate an App Password: https://myaccount.google.com/apppasswords
   - Add credentials to `.env` file

2. **Alternative Email Services**:
   - Update the `transporter` configuration in `server.js`
   - Supported services: Gmail, Outlook, Yahoo, SendGrid, etc.

## 🎯 Evaluation Criteria (100 points)

- ✅ **Design and Visual Quality**: 30 pts
- ✅ **Responsiveness and Layout**: 20 pts
- ✅ **Code Quality and Organization**: 20 pts
- ✅ **Brand Fit and Creativity**: 15 pts
- ✅ **Bonus or Extras**: 15 pts (Animations, Email integration, Professional polish)

## 🌟 Key Features Implemented

- Dark, modern, military/futuristic aesthetic
- Fully responsive design (mobile, tablet, desktop)
- Smooth animations with Framer Motion
- Clean, organized component structure
- Professional typography and spacing
- Interactive elements with hover effects
- Functional contact form with backend
- SEO-friendly structure
- Performance optimized

## 🔧 Development Notes

- Uses Vite for fast development and optimized builds
- Tailwind CSS for rapid styling
- Framer Motion for professional animations
- Component-based architecture for maintainability
- Express backend for form handling
- CORS enabled for API communication

## 📝 License

This project was created as part of the VyomGarud Web Developer Assessment.

## 🤝 Contact

For questions or support, contact: +91 8881444693

---

**Built with ❤️ for VyomGarud - Next-Generation UAV Systems**
