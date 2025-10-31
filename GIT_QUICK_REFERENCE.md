# Git Quick Reference for Metic AI Project

Quick reference card for common Git operations when working on the Metic AI project.

## Initial Setup (One Time)

```bash
# Set your name and email (replace with your info)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Clone the repository to your Documents folder
cd ~/Documents  # Mac/Linux
cd C:\Users\YourUsername\Documents  # Windows
git clone https://github.com/mydigitalcrown/metic2.git
cd metic2

# Install dependencies
npm install
```

## Daily Workflow

### Start Your Work Session
```bash
# Pull latest changes from GitHub (requires internet)
git pull origin main

# Check current branch
git branch

# Start development server
npm run dev
```

### Check Your Changes
```bash
# See what files you've changed
git status

# See the actual code changes
git diff

# See changes for a specific file
git diff path/to/file.tsx
```

### Save Your Work Locally
```bash
# Stage all changes
git add .

# Or stage specific files
git add src/app/page.tsx
git add src/components/Header.tsx

# Commit with a message
git commit -m "Add new feature to homepage"

# View commit history
git log --oneline
```

### Share Your Work (Requires Internet)
```bash
# Push changes to GitHub
git push origin main

# If working on a different branch
git push origin your-branch-name
```

## Working with Branches

```bash
# Create a new branch for your feature
git checkout -b feature/new-homepage

# Switch to an existing branch
git checkout main

# List all branches
git branch -a

# Delete a local branch (after merging)
git branch -d feature/old-feature
```

## Common Scenarios

### Scenario 1: Made Changes, Want to Save Progress
```bash
git add .
git commit -m "Work in progress: updating header design"
git push origin main
```

### Scenario 2: Want to Discard Changes to a File
```bash
# Discard changes to a specific file (CAREFUL: can't undo!)
git restore path/to/file.tsx

# Discard all changes (CAREFUL: can't undo!)
git restore .
```

### Scenario 3: Committed But Forgot to Add Files
```bash
# Stage the forgotten files
git add forgotten-file.tsx

# Add to the last commit
git commit --amend --no-edit

# If already pushed, need to push again
git push origin main
```

### Scenario 4: See What Changed in Last Commit
```bash
# View last commit details
git show

# View specific commit
git show abc123

# View changes to a specific file in last commit
git show HEAD:path/to/file.tsx
```

### Scenario 5: Compare Current Code with Last Commit
```bash
# See all unstaged changes
git diff

# See staged changes (after git add)
git diff --staged

# Compare current branch with main
git diff main
```

## Emergency Commands

### Undo Last Commit (Keep Changes)
```bash
# Undo commit but keep your changes
git reset --soft HEAD^

# Undo commit and staging, but keep changes in files
git reset HEAD^
```

### Stash Changes Temporarily
```bash
# Save current changes without committing
git stash

# See list of stashes
git stash list

# Restore stashed changes
git stash pop

# Apply stash but keep it in stash list
git stash apply
```

### Pull Latest Changes When You Have Local Changes
```bash
# Save your changes
git stash

# Pull latest from GitHub
git pull origin main

# Restore your changes
git stash pop
```

## Useful Git Aliases (Optional)

Add these to `~/.gitconfig` to save time:

```ini
[alias]
    st = status
    co = checkout
    br = branch
    cm = commit -m
    aa = add .
    lg = log --oneline --graph --decorate
    last = log -1 HEAD
```

Then use like:
```bash
git st      # instead of git status
git aa      # instead of git add .
git cm "message"  # instead of git commit -m "message"
```

## Visual Studio Code Git Integration

VS Code has built-in Git support:

1. **Source Control Panel**: Click the branch icon in the left sidebar (Ctrl+Shift+G)
2. **Stage Changes**: Click the + icon next to files
3. **Commit**: Type message in the box and click ✓
4. **Push/Pull**: Click ... menu → Push/Pull
5. **View Changes**: Click file name in Source Control panel

## Checking Connection to GitHub

```bash
# Test if you can reach GitHub
git remote -v

# Verify you can authenticate
git ls-remote origin
```

## Getting Help

```bash
# Get help for any command
git help <command>
git help commit
git help branch

# Short help
git <command> --help
```

## Common Error Solutions

### Error: "Permission denied (publickey)"
- Need to set up SSH keys or use HTTPS with credentials
- See: https://docs.github.com/en/authentication

### Error: "Updates were rejected"
- Someone else pushed changes first
- Solution: `git pull origin main` then `git push origin main`

### Error: "Merge conflict"
- Git can't auto-merge your changes with remote changes
- Edit conflicted files (look for <<<< ==== >>>> markers)
- Stage resolved files: `git add <file>`
- Complete merge: `git commit`

### Error: "Detached HEAD state"
- You're not on a branch
- Solution: `git checkout main`

## Best Practices

✅ **DO:**
- Commit often with clear messages
- Pull before starting work
- Push at the end of your work session
- Use descriptive commit messages
- Keep commits focused (one feature/fix per commit)

❌ **DON'T:**
- Commit directly to main (use branches for big features)
- Force push (`git push -f`) unless you know what you're doing
- Commit sensitive data (passwords, API keys)
- Commit large binary files
- Make commits too large (break into smaller commits)

## Commit Message Guidelines

Good commit messages:
```
Add contact form validation
Fix header mobile menu overflow
Update AI services page content
Improve homepage loading performance
```

Bad commit messages:
```
update
fix bug
changes
asdf
WIP
```

## Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Visual Git Reference](https://marklodato.github.io/visual-git-guide/)
- [Oh Shit, Git!?!](https://ohshitgit.com/) - Fixing common mistakes

---

**Keep this file handy for quick reference! 📋**
