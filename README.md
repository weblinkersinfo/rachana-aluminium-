# Rachana Aluminium - Web Application

A premium brand showcase website and information platform for **Rachana Aluminium**, a family-business manufacturer of high-quality aluminium windows, doors, and uPVC solutions.

This repository is set up as a monorepo containing both the frontend and backend applications.

---

## Project Structure

```
├── Backend/                 # Node.js + Express backend server
├── Frontend/                # Vite + React + Vanilla CSS frontend client
├── docs/                    # Architecture and project documentation
├── netlify.toml             # Netlify deployment configuration
├── render.yaml              # Render Blueprint specification file
└── README.md                # This file
```

---

## 📂 Documentation

All design system notes, architectural plans, wireframes, and project contexts have been organized into the [docs/](file:///c:/Users/AVINASH/OneDrive/Desktop/rachana%20aluminium/docs) directory:

- [Project Understanding](file:///c:/Users/AVINASH/OneDrive/Desktop/rachana%20aluminium/docs/project_understanding.md) - A synthesized breakdown of company background, values, segments, and positioning.
- [Project Context](file:///c:/Users/AVINASH/OneDrive/Desktop/rachana%20aluminium/docs/PROJECT_CONTEXT.md) - Contextual information, workshops, showrooms, and service regions.
- [Implementation Notes](file:///c:/Users/AVINASH/OneDrive/Desktop/rachana%20aluminium/docs/IMPLEMENTATION_NOTES.md) - Design directions, philosophy, customization options, and customer segments.
- [Design System](file:///c:/Users/AVINASH/OneDrive/Desktop/rachana%20aluminium/docs/design_system.md) - Design patterns, typography, spacing system, colors, and key components.
- [Information Architecture](file:///c:/Users/AVINASH/OneDrive/Desktop/rachana%20aluminium/docs/information_architecture.md) - Structural layout and navigation plans.
- [Page Architecture](file:///c:/Users/AVINASH/OneDrive/Desktop/rachana%20aluminium/docs/page_architecture.md) - Low-level breakdown of pages, sections, and component layouts.
- [Wireframes](file:///c:/Users/AVINASH/OneDrive/Desktop/rachana%20aluminium/docs/wireframes.md) - UI design wireframes.
- [Sitemap](file:///c:/Users/AVINASH/OneDrive/Desktop/rachana%20aluminium/docs/SITEMAP.md) - High-level navigation map.
- [System Windows Implementation Plan](file:///c:/Users/AVINASH/OneDrive/Desktop/rachana%20aluminium/docs/implementation_plan_system_windows.md) - The rebuilding specifications for the System Windows product page.

---

## 🖥️ Frontend (Netlify)

The client side is built using **Vite, React, and Vanilla CSS**, following a Minimal Luxury + Modern Architecture design style.

### Local Development

1. Navigate to the `Frontend` folder:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Build the application for production:
   ```bash
   npm run build
   ```

### Deployment (Netlify)

The frontend is configured for deployment on **Netlify**. A root-level `netlify.toml` is provided to handle the configuration automatically.
- **Base directory:** `Frontend`
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Routing:** Configured to redirect all URL paths to `/index.html` to support client-side routing (`react-router-dom`).

---

## ⚙️ Backend (Render)

The backend is built using **Express and Node.js** to handle inquiries and simple server functionality.

### Local Development

1. Navigate to the `Backend` folder:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
   The backend server will run on `http://localhost:5000` (or the port defined in your environment variable).

### Deployment (Render)

The backend is configured for deployment on **Render**. A root-level `render.yaml` Blueprint file is provided for deployment setup.
- **Service Type:** Web Service
- **Runtime:** Node
- **Root Directory:** `Backend`
- **Build Command:** `npm install`
- **Start Command:** `npm start` (runs `node index.js`)
