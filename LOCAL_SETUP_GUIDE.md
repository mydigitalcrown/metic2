# Local Setup Guide for Metic AI Project

This guide will help you set up the Metic AI project on your local machine for offline development.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Git**: [Download Git](https://git-scm.com/downloads)
- **Node.js** (version 20 or higher): [Download Node.js](https://nodejs.org/)
- **Visual Studio Code** or **Visual Studio**: [Download VS Code](https://code.visualstudio.com/)

## Step 1: Clone the Repository to Your Documents

Open a terminal/command prompt and navigate to your Documents folder:

### On Windows:
```bash
cd C:\Users\YourUsername\Documents
git clone https://github.com/mydigitalcrown/metic2.git
cd metic2
```

### On Mac/Linux:
```bash
cd ~/Documents
git clone https://github.com/mydigitalcrown/metic2.git
cd metic2
```

**Alternative**: If you prefer using a GUI, you can use GitHub Desktop:
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Click "File" → "Clone Repository"
3. Enter the repository URL: `https://github.com/mydigitalcrown/metic2`
4. Choose your Documents folder as the local path
5. Click "Clone"

## Step 2: Install Dependencies

Once you've cloned the repository, install the required packages:

```bash
npm install
```

**Note**: You'll need an internet connection for this initial setup to download dependencies. After this step, you can work offline.

## Step 3: Open in Visual Studio Code

### From Terminal:
```bash
code .
```

### From Windows Explorer:
1. Navigate to `Documents\metic2`
2. Right-click in the folder
3. Select "Open with Code"

### From VS Code:
1. Open VS Code
2. Click "File" → "Open Folder"
3. Navigate to `Documents\metic2`
4. Click "Select Folder"

## Step 4: Working Offline

The project is now configured to work completely offline. You can:

### Run Development Server:
```bash
npm run dev
```
Then open your browser to: http://localhost:3000

### Build the Project:
```bash
npm run build
```

### Start Production Server:
```bash
npm run start
```

**Note**: If you encounter font-loading errors during offline builds, see the [Offline Mode Guide](./OFFLINE_MODE.md) for instructions on using system fonts.

## Step 5: VS Code Setup (Automatic)

This project includes pre-configured VS Code settings:

When you first open the project in VS Code, you'll see a prompt to install recommended extensions. Click **"Install All"** to get:
- Prettier (code formatting)
- ESLint (code quality)
- Tailwind CSS IntelliSense
- React snippets
- GitLens (enhanced Git)
- And more!

These extensions will automatically:
- Format your code on save
- Highlight errors in real-time
- Provide autocomplete for Tailwind classes
- Show Git blame information

See [.vscode/README.md](./.vscode/README.md) for more details.

## Step 6: Making Changes and Pushing to Git

### 1. Check What Files Changed:
```bash
git status
```

### 2. Stage Your Changes:

Stage all changes:
```bash
git add .
```

Or stage specific files:
```bash
git add path/to/file.tsx
```

### 3. Commit Your Changes:
```bash
git commit -m "Description of your changes"
```

### 4. Push to GitHub:
```bash
git push origin main
```

**Note**: Replace `main` with your branch name if working on a different branch.

## Git Workflow Example

Here's a complete workflow for making and pushing changes:

```bash
# 1. Make sure you're on the right branch
git branch

# 2. Pull latest changes (when online)
git pull origin main

# 3. Make your code changes in VS Code...

# 4. Check what changed
git status

# 5. Stage changes
git add .

# 6. Commit changes
git commit -m "Add new feature to homepage"

# 7. Push to GitHub (requires internet)
git push origin main
```

## Common Git Commands

| Command | Description |
|---------|-------------|
| `git status` | Check which files have changed |
| `git add .` | Stage all changes |
| `git add <file>` | Stage specific file |
| `git commit -m "message"` | Commit staged changes |
| `git push` | Push commits to GitHub |
| `git pull` | Pull latest changes from GitHub |
| `git log` | View commit history |
| `git branch` | List all branches |
| `git checkout -b new-branch` | Create and switch to new branch |

## Recommended VS Code Extensions

Install these extensions for better development experience:

1. **ES7+ React/Redux/React-Native snippets** - Code snippets
2. **Prettier - Code formatter** - Auto-format code
3. **ESLint** - Code linting
4. **Tailwind CSS IntelliSense** - Tailwind class suggestions
5. **GitLens** - Enhanced Git features
6. **Path Intellisense** - File path autocompletion

To install: Press `Ctrl+Shift+X` (Windows) or `Cmd+Shift+X` (Mac), search for the extension name, and click "Install".

## Project Structure

```
metic2/
├── src/
│   ├── app/
│   │   ├── components/       # Reusable components
│   │   │   ├── layout/       # Logo, Navigation
│   │   │   └── ui/           # Button, Header, Footer, etc.
│   │   ├── about/            # About page
│   │   ├── services/         # Services pages
│   │   ├── contact/          # Contact page
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Homepage
│   └── lib/
│       └── utils.ts          # Utility functions
├── public/                   # Static files (images, etc.)
├── package.json              # Dependencies and scripts
├── next.config.ts            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## Troubleshooting

### "npm: command not found"
- Node.js is not installed or not in PATH. Reinstall Node.js and restart your terminal.

### "git: command not found"
- Git is not installed or not in PATH. Install Git and restart your terminal.

### Port 3000 is already in use
- Another application is using port 3000. Either close that application or run:
  ```bash
  npm run dev -- -p 3001
  ```

### Changes not appearing in browser
- Try hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Or clear browser cache

### Build errors after making changes
- Run `npm install` to ensure all dependencies are installed
- Check the error message in terminal for specific issues
- Make sure your changes follow TypeScript syntax

## Working Without Internet

After initial setup (`npm install`), you can work completely offline:

✅ **You CAN do offline:**
- Run development server (`npm run dev`)
- Build the project (`npm run build`)
- Edit code in VS Code
- Use local Git commands (commit, branch, etc.)
- View the website locally

❌ **You NEED internet for:**
- Installing new npm packages
- Pushing/pulling from GitHub
- Downloading VS Code extensions
- Initial project setup

## Getting Help

If you encounter issues:

1. Check the error message in the terminal
2. Search for the error on [Stack Overflow](https://stackoverflow.com)
3. Check [Next.js documentation](https://nextjs.org/docs)
4. Review the [README.md](./README.md) file
5. Create an issue on the GitHub repository

## Next Steps

Once you're comfortable with the setup:

1. Read the [README.md](./README.md) for project overview
2. Review the [PROJECT_INSTRUCTIONS.md](./PROJECT_INSTRUCTIONS.md) for coding guidelines
3. Explore the codebase in VS Code
4. Make your first change and push it to GitHub!

---

**Happy Coding! 🚀**
