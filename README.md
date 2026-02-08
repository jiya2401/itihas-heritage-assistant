<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1Wm1NwZZJmZk1UMPcgWyW6DlPQBj4zu83

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
# Itihas - Heritage Assistant

Itihas is an AI-powered heritage assistant designed to provide users with deep insights into historical places, cultural significance, and visual experiences. This project was created as part of the Gemini 3 Hackathon.

---

## Features

- **Multilingual Support**: Explore heritage sites in multiple languages.
- **Deep Insights**: Get detailed information about historical sites, including their cultural and historical significance.
- **Image Analysis**: Upload images of historical sites to analyze architectural details, materials, and more.
- **3D Visualization**: Experience immersive 3D visualizations of heritage sites.
- **Favorites**: Save your favorite places for quick access.

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- A valid Gemini API key (sign up at [Gemini API](https://gemini.google.com))

---

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/your-repo/itihas-heritage-assistant.git
cd itihas-heritage-assistant
```

### 2. Install Dependencies
Install the required dependencies using npm:
```bash 
npm install
```

### 3. Set Up Environment Variables
Create a `.env.local` file in the root directory and add your Gemini API key:
```
GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Run the Application
Start the development server:
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

---

## Project Structure

```
.
├── components/          # Reusable React components
├── services/            # API service integrations
├── App.tsx              # Main application file
├── index.html           # HTML entry point
├── index.tsx            # React entry point
├── translations.ts      # Multilingual translations
├── types.ts             # TypeScript types
├── vite.config.ts       # Vite configuration
├── package.json         # Project dependencies and scripts
└── .env.local           # Environment variables


Enjoy exploring the rich heritage of India with Itihas!
