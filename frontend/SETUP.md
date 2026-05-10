# 🚀 Waveify.ai Landing Page - Setup Guide

## Step-by-Step Setup Instructions

### Step 1: Install Node.js (if not already installed)
Download and install from: https://nodejs.org/

### Step 2: Navigate to Project Directory
```bash
cd /path/to/waveify-ai-landing
```

### Step 3: Install Dependencies
```bash
npm install
```
This will install:
- React 18
- Vite
- Tailwind CSS
- Lucide React Icons
- And other required packages

### Step 4: Start Development Server
```bash
npm run dev
```

Output should show:
```
➜  Local:   http://localhost:3000/
➜  press h to show help
```

### Step 5: Open in Browser
The site will automatically open at `http://localhost:3000/`

## ✅ Verify Everything Works

1. **Check Homepage** - You should see:
   - Waveify.ai logo
   - Hero section with "Create Viral Content"
   - Chat interface demo
   - Multiple feature sections

2. **Test Email Modal** - Click any "Get Started" button:
   - Modal should popup
   - Try entering name and email
   - Click "Get Access Now"
   - You should see success message

3. **Check Console** - Open DevTools (F12):
   - Look for any red errors
   - Check Network tab for API calls to `localhost:8000`

## 🔌 Backend Integration

Your backend should be running at: `http://localhost:8000`

Expected endpoint:
```
POST http://console.waveify.ai/customers/subscribe
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
}
```

## 📝 Available npm Commands

```bash
# Start development server (hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# List all available commands
npm run
```

## 🛠️ Troubleshooting

### Port 3000 already in use?
Vite will automatically use the next available port (3001, 3002, etc.)

### Module not found errors?
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Backend not connecting?
1. Check backend is running on port 8000
2. Check browser console (F12) for error messages
3. Verify CORS is enabled on backend
4. Check Network tab to see request/response

### Styling looks broken?
```bash
# Rebuild Tailwind CSS
npm run dev
```

## 📦 Building for Production

1. **Build**:
   ```bash
   npm run build
   ```

2. **Test production build**:
   ```bash
   npm run preview
   ```

3. **Deploy** the `dist` folder to your hosting:
   - Vercel (recommended)
   - Netlify
   - GitHub Pages
   - Your own server

## 🌐 Environment Variables (Optional)

Create a `.env` file in project root:
```
VITE_API_URL=http://localhost:8000
VITE_API_ENDPOINT=/customers/subscribe
```

Then update `src/App.jsx` to use:
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
const response = await fetch(`${API_URL}/customers/subscribe`, { ... });
```

## 📱 Testing Responsiveness

In your browser:
1. Press F12 to open DevTools
2. Click the device icon (mobile emulator)
3. Test on different screen sizes

## 🎯 Next Steps

1. ✅ Get the landing page running locally
2. ✅ Test email form submission
3. ✅ Configure backend URL
4. ✅ Build production version
5. ✅ Deploy to hosting

## 💡 Pro Tips

- **Hot reload** - Changes save automatically when you edit files
- **Fast refresh** - Vite only rebuilds changed files
- **DevTools** - Use React DevTools extension for debugging
- **Network requests** - Check if backend calls are working in Network tab

## 🆘 Still Having Issues?

Check these files:
- `src/App.jsx` - Main component
- `tailwind.config.js` - Styling configuration
- `vite.config.js` - Build configuration
- `package.json` - Dependencies

---

**You're all set!** 🎉 The landing page is now running and ready to collect emails from interested users.
