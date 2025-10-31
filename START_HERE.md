# Getting Started with Metic AI Project - Quick Start

Welcome! This guide will get you up and running with the Metic AI project on your local machine in Visual Studio Code.

## 🚀 Quick Start (5 Minutes)

### Step 1: Install Prerequisites (if you haven't already)
- [Git](https://git-scm.com/downloads) - For version control
- [Node.js](https://nodejs.org/) - Version 20+ recommended
- [Visual Studio Code](https://code.visualstudio.com/) - Code editor

### Step 2: Clone to Your Documents Folder

**Windows:**
```bash
cd C:\Users\YourUsername\Documents
git clone https://github.com/mydigitalcrown/metic2.git
cd metic2
```

**Mac/Linux:**
```bash
cd ~/Documents
git clone https://github.com/mydigitalcrown/metic2.git
cd metic2
```

### Step 3: Install Dependencies
```bash
npm install
```
⏱️ This will take 1-2 minutes. **You need internet for this step only.**

### Step 4: Open in Visual Studio Code
```bash
code .
```

### Step 5: Install Recommended Extensions
When VS Code opens, you'll see a popup in the bottom-right corner:
- Click **"Install All"** to install recommended extensions
- This gives you auto-formatting, linting, and IntelliSense

### Step 6: Start Development Server
```bash
npm run dev
```

Open your browser to: **http://localhost:3000**

🎉 **You're ready to code!**

---

## 📚 What's Next?

Now that you're set up, explore these guides based on what you need:

### For Daily Development
- **[Git Quick Reference](./GIT_QUICK_REFERENCE.md)** - Git commands cheat sheet
- **[Local Setup Guide](./LOCAL_SETUP_GUIDE.md)** - Detailed setup and workflow guide
- **[VS Code Workspace](./.vscode/README.md)** - Understanding the VS Code setup

### For Offline Work
- **[Offline Mode Guide](./OFFLINE_MODE.md)** - Work without internet connection

### For Project Understanding
- **[README.md](./README.md)** - Project overview and tech stack
- **[Project Instructions](./PROJECT_INSTRUCTIONS.md)** - Coding guidelines and conventions

---

## 🔄 Basic Git Workflow

Once you're coding, here's the workflow for saving and pushing your changes:

```bash
# 1. Check what you changed
git status

# 2. Stage your changes
git add .

# 3. Commit with a message
git commit -m "Describe what you changed"

# 4. Push to GitHub (requires internet)
git push origin main
```

💡 **Tip:** See [GIT_QUICK_REFERENCE.md](./GIT_QUICK_REFERENCE.md) for more git commands!

---

## 🛠️ Common Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start development server (http://localhost:3000) |
| `npm run build` | Build for production |
| `git status` | Check what files you changed |
| `git add .` | Stage all changes |
| `git commit -m "msg"` | Commit changes |
| `git push origin main` | Push to GitHub |

---

## ❓ Troubleshooting

**"npm: command not found"**
→ Install Node.js from https://nodejs.org/

**"git: command not found"**
→ Install Git from https://git-scm.com/downloads

**Port 3000 already in use**
→ Run `npm run dev -- -p 3001` to use port 3001

**Changes not showing in browser**
→ Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

**Build fails with font errors (offline)**
→ See [OFFLINE_MODE.md](./OFFLINE_MODE.md) for offline configuration

---

## 🎯 Your First Change

Try making a simple change to see everything working:

1. Open `src/app/page.tsx` in VS Code
2. Find the main heading text (around line 20-30)
3. Change the text to something else
4. Save the file (`Ctrl+S` or `Cmd+S`)
5. Check your browser - it should auto-refresh!
6. Commit your change:
   ```bash
   git add src/app/page.tsx
   git commit -m "Update homepage heading"
   git push origin main
   ```

---

## 📖 Documentation Structure

```
metic2/
├── START_HERE.md                 ← YOU ARE HERE
├── LOCAL_SETUP_GUIDE.md          ← Detailed setup guide
├── GIT_QUICK_REFERENCE.md        ← Git commands cheat sheet
├── OFFLINE_MODE.md               ← Working without internet
├── README.md                     ← Project overview
├── PROJECT_INSTRUCTIONS.md       ← Coding guidelines
└── .vscode/
    └── README.md                 ← VS Code configuration guide
```

---

## 🆘 Need Help?

1. **Check the guides** - Most common questions are answered in the docs above
2. **Search the error** - Copy/paste error messages into Google
3. **Check Next.js docs** - https://nextjs.org/docs
4. **Create a GitHub issue** - If you found a bug or have questions

---

## ✅ Checklist - Am I Ready?

- [ ] Git installed and working
- [ ] Node.js installed (version 20+)
- [ ] Visual Studio Code installed
- [ ] Repository cloned to Documents folder
- [ ] Dependencies installed (`npm install` completed)
- [ ] Dev server running (`npm run dev` works)
- [ ] VS Code extensions installed
- [ ] Browser showing the site at localhost:3000
- [ ] Made a test change and saw it update

If you checked all boxes, you're all set! Happy coding! 🚀

---

**Last Updated:** October 2025
**Maintained by:** Metic AI Team
