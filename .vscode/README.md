# Metic AI - VS Code Workspace

This folder contains VS Code workspace settings to enhance your development experience.

## Files Included

### settings.json
Workspace-specific settings including:
- **Auto-format on save** with Prettier
- **Auto-fix ESLint errors** on save
- **Tailwind CSS IntelliSense** configuration
- **TypeScript** workspace version settings
- **Search exclusions** for node_modules, .next, build folders
- **Emmet** support in TypeScript files

### extensions.json
Recommended VS Code extensions:
- **ESLint** - JavaScript/TypeScript linting
- **Prettier** - Code formatter
- **Tailwind CSS IntelliSense** - Autocomplete for Tailwind classes
- **ES7+ React/Redux snippets** - Code snippets for React
- **Path Intellisense** - Autocomplete file paths
- **GitLens** - Enhanced Git features
- **Error Lens** - Inline error highlighting
- **TypeScript Next** - Latest TypeScript features

## How to Use

When you open this project in VS Code, you'll be prompted to install recommended extensions. Click "Install All" to set up the optimal development environment.

### Manual Extension Installation

If the prompt doesn't appear:
1. Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac)
2. Type "@recommended" in the search box
3. Install all recommended workspace extensions

## Customization

These are workspace settings that apply only to this project. They won't affect your global VS Code settings.

To customize:
1. Open `.vscode/settings.json`
2. Add or modify settings as needed
3. Save the file

### Common Customizations

**Change tab size:**
```json
"editor.tabSize": 4
```

**Disable format on save:**
```json
"editor.formatOnSave": false
```

**Change default formatter:**
```json
"editor.defaultFormatter": "another.formatter"
```

## Troubleshooting

### Settings not applying
- Restart VS Code
- Check that you've opened the project folder (not just a file)
- Ensure the `.vscode` folder is at the project root

### Extensions not working
- Install recommended extensions
- Reload VS Code window (`Ctrl+Shift+P` → "Developer: Reload Window")
- Check extension requirements (some need npm packages installed)

### Prettier/ESLint conflicts
- The workspace settings are configured to use Prettier as the formatter and ESLint for linting
- Make sure both extensions are installed and enabled

## Version Control

The `.vscode/` folder is tracked in Git to ensure all team members have the same development environment. However:
- User-specific settings (like font size, theme) should be in your global settings
- Workspace settings here are for project-specific configurations only
