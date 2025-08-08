# DevOps Project: Personal Portfolio Website

## Project Overview
This project demonstrates Git best practices through a simple personal portfolio website with HTML, CSS, and JavaScript.

## Project Structure
```
portfolio-website/
├── .gitignore
├── README.md
├── CHANGELOG.md
├── src/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── assets/
│       └── images/
├── docs/
│   ├── CONTRIBUTING.md
│   └── BRANCHING_STRATEGY.md
└── .github/
    └── pull_request_template.md
```

## Step-by-Step Implementation Guide

### Phase 1: Project Setup and Repository Creation

#### Step 1: Create Local Project
```bash
# Create project directory
mkdir portfolio
cd portfolio

# Initialize Git repository
git init
```

#### Step 2: Create Project Files

**Create `.gitignore`:**
```
```
**Create `README.md`:**

# Personal Portfolio Website

A responsive personal portfolio website showcasing web development skills.

## Features
- Responsive design
- Modern CSS Grid/Flexbox
- Interactive JavaScript elements
- Clean, professional layout

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- Git for version control

## Getting Started

### Prerequisites
- Modern web browser
- Git

### Installation
1. Clone the repository
   ```bash
   git clone https://github.com/anuragstark/git-practice.git
   ```
2. Navigate to project directory
   ```bash
   cd portfolio-website
   ```
3. Open `src/index.html` in your browser

## Development Workflow

### Branching Strategy
- `main`: Production-ready code
- `dev`: Development integration branch
- `feature/*`: Feature development branches

### Contributing
1. Create feature branch from `dev`
2. Make changes and commit
3. Create pull request to `dev`
4. After review, merge to `dev`
5. Deploy from `dev` to `main`

## Project Structure
```
src/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Styles
├── js/
│   └── script.js       # JavaScript functionality
└── assets/
    └── images/         # Image assets
```

## Version History
See [CHANGELOG.md](CHANGELOG.md) for detailed version history.

#### Step 3: Create Source Files

**Create `src/index.html`:**
```
```

**Create `src/css/style.css`:**
```
```

**Create `src/js/script.js`:**
```
```

#### Step 4: Create Documentation

**Create `docs/CONTRIBUTING.md`:**
```markdown
# Contributing Guidelines

Thank you for your interest in contributing to this project!

## Development Process

1. Fork the repository
2. Create a feature branch from `dev`
3. Make your changes
4. Test your changes
5. Submit a pull request

## Coding Standards

- Use consistent indentation (2 spaces)
- Write meaningful commit messages
- Add comments for complex logic
- Follow HTML5/CSS3/ES6+ standards

## Commit Message Format

```
type(scope): description

[optional body]

[optional footer]
```

Types: feat, fix, docs, style, refactor, test, chore
```

**Create `docs/BRANCHING_STRATEGY.md`:**
```markdown
# Branching Strategy

This project follows GitFlow workflow:

## Branch Types

### Main Branches
- **main**: Production-ready code
- **dev**: Integration branch for development

### Supporting Branches
- **feature/**: New features (`feature/add-contact-form`)
- **release/**: Release preparation (`release/v1.1.0`)

## Workflow

1. Create feature branch from `dev`
2. Develop feature
3. Create PR to `dev`
4. After testing, merge `dev` to `main`
5. Tag release in `main`
```

**Create `.github/pull_request_template.md`:**
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested locally
- [ ] All checks pass

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
```


### Phase 2:  Git Workflow Implementation
#### Step 5: Initial Commit and GitHub Setup
```bash
# Add all files
git add .

# Initial commit
git commit -m "feat: initial project setup with HTML, CSS, and JS

- Add responsive portfolio website structure
- Include navigation, hero, about, projects, and contact sections
- Implement smooth scrolling and interactive elements
- Add comprehensive documentation and Git workflow files"

# Create and push to GitHub (replace with your username)
git remote add origin https://github.com/yourusername/portfolio-website.git
git branch -M main
git push -u origin main
```

#### Step 6: Create Branch Structure
```bash
# Create dev branch
git checkout -b dev
git push -u origin dev

# Create feature branch for enhancements
git checkout -b feature/improve-styling
```

#### Step 7: Make Feature Changes
```bash
# Make some improvements (example changes)
# Edit src/css/style.css to add animations or improve styling

# Commit changes
git add .
git commit -m "feat(styling): add hover animations and improved responsive design

- Add smooth transitions for project cards
- Improve mobile navigation layout
- Enhance color scheme and typography"

# Push feature branch
git push -u origin feature/improve-styling
```

#### Step 8: Create More Features
```bash
# Create another feature branch
git checkout dev
git checkout -b feature/add-dark-mode

# Add dark mode functionality
# (make changes to CSS and JS files)

git add .
git commit -m "feat(ui): implement dark mode toggle

- Add dark mode CSS variables
- Create toggle button in navigation
- Store theme preference in localStorage
- Update all components for dark theme compatibility"

git push -u origin feature/add-dark-mode
```

#### Step 9: Version Tagging
```bash
# Switch to main branch
git checkout main

# Create and push tags
git tag -a v1.0.0 -m "Release version 1.0.0

Initial release featuring:
- Responsive portfolio website
- Modern CSS Grid/Flexbox layout
- Interactive JavaScript elements
- Complete Git workflow documentation"

git push origin v1.0.0

# Create additional tags for different versions
git tag -a v1.1.0 -m "Release version 1.1.0 - Enhanced styling and animations"
git tag -a v1.2.0 -m "Release version 1.2.0 - Dark mode implementation"
git push origin --tags
```

## Commands Summary

### Essential Git Commands Used
```bash
# Repository management
git init
git remote add origin <url>
git clone <url>

# Branch management
git branch <branch-name>
git checkout <branch-name>
git checkout -b <branch-name>
git branch -d <branch-name>

# Staging and committing
git add .
git add <file>
git commit -m "message"
git commit -am "message"

# Remote operations
git push origin <branch-name>
git pull origin <branch-name>
git fetch origin

# Tagging
git tag -a <tag-name> -m "message"
git push origin <tag-name>
git push origin --tags

# Merging (via GitHub PR or locally)
git merge <branch-name>
git merge --no-ff <branch-name>
```

## GitHub Workflow Process

1. **Create Pull Request**: From feature branch to dev
2. **Code Review**: Team members review changes
3. **Merge to Dev**: After approval and testing
4. **Integration Testing**: Test dev branch
5. **Release**: Merge dev to main
6. **Tag Release**: Create version tag
7. **Deploy**: Deploy from main branch

## Best Practices Demonstrated

- ✅ Meaningful commit messages following conventional format
- ✅ Proper branch structure (main/dev/feature)
- ✅ Comprehensive documentation
- ✅ .gitignore for project-specific files
- ✅ Version tagging with semantic versioning
- ✅ Pull request templates
- ✅ Contributing guidelines
- ✅ Changelog maintenance
- ✅ Branching strategy documentation

This project demonstrates a complete DevOps workflow using Git and GitHub best practices suitable for any development project.