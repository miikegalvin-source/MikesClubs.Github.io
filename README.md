# Golf Club Storefront

A static website storefront for showcasing golf clubs and bundles.  
Built to be simple, mobile-friendly, and fast to host on **GitHub Pages**.

---

## 🌐 Live Site
Once published with GitHub Pages, your storefront will be available here:  

---

## 📂 Project Structure
.
├── index.html # Main storefront (search, filter, sort clubs)
├── bundles.html # Special bundle packages
├── assets/
│ ├── styles.css # Site styling
│ ├── script.js # Logic for storefront page
│ ├── bundles.js # Logic for bundle page
│ └── images/ # Club & bundle photos
├── data/
│ ├── products.json # Product catalog
│ └── bundles.json # Bundle definitions
└── README.md
## 🚀 Deployment on GitHub Pages
1. Create a **public repository** on GitHub named:  
MikesClubs.github.io

csharp
Copy code
2. Push this project to your repo:
```bash
git init
git add .
git commit -m "Initial storefront publish"
git branch -M main
git remote add origin https://github.com/Miikegalvin-source/MikesClubs.github.io.git
git push -u origin main # This file
