# 🌿 Florem — Premium Tile Gallery

A modern, full-stack tile gallery web application where users can browse premium ceramic, porcelain, stone, and clay tiles. Built with Next.js and powered by MongoDB, with secure authentication via Better Auth.

🔗 **Live Site:** [https://florem.vercel.app](https://florem.vercel.app)
📦 **Repository:** [https://github.com/farman-arefin-tamim/florem](https://github.com/farman-arefin-tamim/florem)

---

## ✨ Key Features

- 🖼️ Browse a full collection of premium tiles across multiple categories (Ceramic, Porcelain, Stone, Clay)
- 🔐 User authentication with email/password and Google OAuth (via Better Auth)
- 👤 Personal profile page for logged-in users
- 🔒 Protected routes — only authenticated users can access profile pages
- 📱 Fully responsive design with DaisyUI + Tailwind CSS
- ⚡ Fast performance with Next.js App Router and Turbopack

---

## 🛠️ Tech Stack & NPM Packages

| Package | Purpose |
|---|---|
| `next` | React framework (App Router) |
| `react` / `react-dom` | UI library |
| `better-auth` | Authentication (email/password + Google OAuth) |
| `mongodb` | MongoDB driver for database connection |
| `tailwindcss` | Utility-first CSS framework |
| `daisyui` | Tailwind CSS component library |
| `next/font` | Optimized Google Fonts (Plus Jakarta Sans) |

---

## 🚀 Local Setup

### Prerequisites

- Node.js v18+
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account
- A [Google Cloud Console](https://console.cloud.google.com/) project with OAuth 2.0 credentials

### 1. Clone the Repository

```bash
git clone https://github.com/farman-arefin-tamim/florem.git
cd florem
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory and add the following values:

```env
# MongoDB
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/florem?retryWrites=true&w=majority

# Better Auth
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=your_random_secret_here

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

> To generate a **`BETTER_AUTH_SECRET`**, run: `openssl rand -base64 32`

### 4. Google OAuth Setup

Go to [Google Cloud Console](https://console.cloud.google.com/) and:

1. Create a new project
2. Navigate to **APIs & Services → Credentials → Create OAuth 2.0 Client ID**
3. Add the following to Authorized Redirect URIs:
   ```
   http://localhost:3000/api/auth/callback/google
   ```
4. Copy the Client ID and Secret into your `.env.local` file

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## ☁️ Deployment (Vercel)

1. Import the project into Vercel
2. Go to **Settings → Environment Variables** and add all values from `.env.local`, replacing the URLs with your production URL:
   ```
   BETTER_AUTH_URL=https://your-app.vercel.app
   NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
   ```
3. Add the production redirect URI in Google Cloud Console:
   ```
   https://your-app.vercel.app/api/auth/callback/google
   ```
4. In MongoDB Atlas → **Network Access**, allow `0.0.0.0/0` (required because Vercel uses dynamic IPs)
5. Deploy!

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/auth/[...all]/   # Better Auth API route
│   ├── all-tiles/           # Tile gallery page
│   ├── login/               # Login page
│   ├── sign-up/             # Registration page
│   ├── my-profile/          # Protected profile page
│   ├── about/               # About page
│   ├── layout.js            # Root layout
│   └── page.js              # Home page
├── components/              # Shared components (Navbar, Header, Footer)
└── lib/
    ├── auth.js              # Better Auth server config
    └── auth-client.js       # Better Auth client config
middleware.js                # Route protection
data.json                    # Tile data
```

---

## 📄 Author

Farman Arefin Tamim