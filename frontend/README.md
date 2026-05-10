# Waveify.ai - Landing Page

A modern, responsive landing page for Waveify.ai - an AI video generator for Instagram and TikTok, powered by HeyGen.

## 📋 Features

- ✨ Stunning gradient design with animated backgrounds
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎬 Interactive chat-like interface demo
- 💌 Email collection modal with name field
- 🔌 Backend integration ready (localhost:8000)
- ⚡ Fast performance with Vite
- 🎨 Beautiful UI with Tailwind CSS
- 🎭 8 feature highlights
- 📚 6 use case scenarios
- 💬 Social proof testimonials

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Navigate to the project directory**:
   ```bash
   cd waveify-ai-landing
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   The site will open automatically at `http://localhost:3000`

### Building for Production

```bash
npm run build
npm run preview
```

## 🔧 Configuration

### Backend Integration

The email form sends data to: `http://console.waveify.ai/customers/subscribe`

**Request Payload:**
```json
{
  "name": "string",
  "email": "string"
}
```

To change the endpoint, edit `src/App.jsx` line 20:
```javascript
const response = await fetch('http://console.waveify.ai/customers/subscribe', {
```

## 📁 Project Structure

```
waveify-ai-landing/
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── src/
│   ├── App.jsx            # Main React component
│   ├── main.jsx           # React entry point
│   └── index.css          # Tailwind directives
└── README.md              # This file
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color theme.

### Content
Edit `src/App.jsx` to change:
- Hero headline and copy
- Feature list
- Use cases
- Testimonials
- CTA buttons

### Backend URL
Change the API endpoint in `src/App.jsx` around line 20.

## 📦 Dependencies

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **PostCSS & Autoprefixer** - CSS processing

## 🔐 Security Notes

- Never commit sensitive data (API keys, tokens)
- Backend validation is recommended
- CORS may need to be configured on your backend
- Consider rate limiting for email submissions

## 📊 Features Breakdown

### Hero Section
- Brand logo with gradient text
- Main headline with CTA button
- Interactive chat interface demo
- Email collection modal

### How It Works
- 3-step process visualization
- Simple explanation of the workflow

### Features
- 8 key features with icons
- Benefits and capabilities highlighted

### Technology
- Avatar IV explanation
- Advanced AI capabilities

### Use Cases
- 6 target personas
- Each with CTA button

### ROI Section
- Why Waveify.ai wins
- Real creator testimonials
- Cost-benefit analysis

### Email Modal
- Name and email collection
- Loading states
- Success confirmation
- Auto-close after submission

## 🚦 Development

### Hot Module Replacement (HMR)
Vite automatically refreshes the browser when you save changes.

### Debugging
- Open browser DevTools (F12)
- Check Console tab for errors
- Network tab shows API calls to backend

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Backend Integration

Your backend should:
1. Accept POST requests at `/customers/subscribe`
2. Validate name and email fields
3. Store subscriber data
4. Return 200 OK status on success
5. Handle CORS properly

## 📄 License

Created with ❤️ for Waveify.ai

## 💡 Tips

- Use real backend URL in production
- Add analytics to track conversions
- Test on mobile devices
- Monitor backend logs for errors
- Consider adding email validation

---

**Need help?** Check the inline comments in `src/App.jsx` or review the fetch implementation around line 11-60.
