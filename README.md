# FINCLARITY HUB SERVICES — Website

Accurate Books. Clear Reports. Better Business Decisions.

A modern, high-converting React + Vite web application built for **FINCLARITY HUB SERVICES**, providing QuickBooks bookkeeping and financial support for small businesses, startups, NGOs, freelancers, and growing organizations across East Africa.

---

## 🚀 Features

- **Executive Aesthetic & Visual Dashboard**: Dark navy (`#0B192C`), financial emerald green (`#059669`), and warm gold accents with financial dashboard previews.
- **6 Detailed Core Services**: QuickBooks Bookkeeping, Bank Reconciliation, Financial Reporting, Bookkeeping Cleanup & Catch-Up, Small Business Support, and NGO/Project Expenditure Tracking.
- **Multi-Region WhatsApp Routes**: Direct contextual WhatsApp links for Kenya (`+254 719 611 029`) and Uganda (`+256 789 873 376`).
- **Interactive Lead Generation**: Consultation booking form with service category selection and confirmation state.
- **Netlify SPA Compatibility**: Built-in `netlify.toml` and `public/_redirects` (`/* /index.html 200`) for seamless SPA routing.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Icons**: `lucide-react`
- **Styling**: Vanilla CSS (Custom properties, Glassmorphism, CSS Grid & Flexbox)
- **Deployment**: Netlify Ready (`dist`)

---

## 💻 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mugaruranelson-cmd/finclarity.git
   cd finclarity
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🌐 Deploying to Netlify

1. Connect your GitHub repository to [Netlify](https://app.netlify.com).
2. Set the build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
3. Click **Deploy Site**. The included `netlify.toml` and `_redirects` will automatically handle routing rules.
