# Firebase Deployment Guide (Next.js Static Export)

This project is a [Next.js](https://nextjs.org) (App Router) portfolio built with `output: 'export'`. Static files are generated into `out/` and deployed to Firebase Hosting.

## Chatbot Setup (Groq API)

The chatbot is powered by the [Groq API](https://console.groq.com) and calls it directly from the browser (the key is exposed in the client bundle — perfect for a portfolio).

1. Create a free key at https://console.groq.com/keys
2. Copy `.env.example` to `.env.local` and paste your key:

```
NEXT_PUBLIC_GROQ_API_KEY=your_groq_api_key_here
NEXT_PUBLIC_GROQ_MODEL=llama-3.3-70b-versatile
```

3. Prepend with `NEXT_PUBLIC_` so Next.js inlines it at build time.

For GitHub Actions deploys, add the key as a repo secret named `NEXT_PUBLIC_GROQ_API_KEY` (Settings → Secrets and variables → Actions).

## Step 1: Install Firebase CLI
```bash
npm install -g firebase-tools
```

## Step 2: Login to Firebase
```bash
firebase login
```

## Step 3: Navigate to Project Folder
```bash
cd your-project-folder
```

## Step 4: Initialize Firebase
```bash
firebase init
```
- Select **Hosting**
- Create a new project or use existing project: `profile-ravi`
- Public directory: `out`
- Configure as single-page app: `Yes`
- Set up GitHub workflow: `Yes`

## Step 5: Enable Required Google APIs
- Go to [console.cloud.google.com](https://console.cloud.google.com)
- Select project `profile-ravi`
- Search and enable **IAM Service Account Credentials API**

## Step 6: Build the Project
```bash
npm run build
```

## Step 7: Local Preview of the Export
```bash
npx serve out
```

## Step 8: Deploy to Firebase
```bash
firebase deploy
```

## Live Links
- Project Console: https://console.firebase.google.com/project/profile-ravi/overview
- Hosting URL: https://profile-ravi.web.app
