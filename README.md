# Expressions Church Website 🚀

## 📖 Overview
A custom WordPress site using Elementor, SCSS, and Webpack.

## 🛠 Tech Stack
- WordPress + Elementor
- SCSS + Webpack
- GitHub Actions (CI/CD)
- LocalWP for local development

## 🏗️ Setup Instructions
1. Clone the repo:
   ```bash
   git clone https://github.com/yourname/expressions-church.git

2. Install dependencies:
   ```bash
   npm install

3. Start the local server:
   ```bash
   npm start

## 🚀 Deployment Process
- Feature branches → staging
- staging tested → merged into main (triggers GitHub Actions auto-deploy)

# 📝 Contribution Guidelines
- Use feature branches for new work.
- Follow commit message conventions (feat:, fix:, chore:).
- Push only necessary files (follow .gitignore).
---

### **🔹 2. Code Documentation (Inline Comments & DocBlocks)**
✅ **Purpose:** Explains complex logic within the code itself.
✅ **Best Practice:** Use **DocBlocks** for functions and meaningful **inline comments**.

#### **📌 Example: PHP DocBlock for a Theme Function**
```php
/**
 * Enqueue theme styles and scripts.
 *
 * @return void
 */
function expressions_enqueue_assets() {
    wp_enqueue_style('theme-style', get_stylesheet_uri(), [], '1.0.0', 'all');
    wp_enqueue_script('theme-script', get_template_directory_uri() . '/js/main.js', [], '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'expressions_enqueue_assets');
💡 Why?

DocBlock helps developers understand function purpose, parameters, and return values.
Inline comments help clarify intent for complex logic.
