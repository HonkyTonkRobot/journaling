# 🧪 Local Development Guide: Eleventy Journal Blog

This guide walks you through running your Eleventy-based journal blog locally, step by step.

---

## 🛠 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node)

---

## 🚀 Steps

### 1. Clone your journal repo

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub username and repo name.

---

### 2. Initialize the project

If this is your first time setting up the project:

```bash
npm install
```

This installs Eleventy and any other dependencies listed in `package.json`.

---

### 3. Run the Eleventy development server

```bash
npx eleventy --serve
```

You should see output like:

```
[11ty] Server at http://localhost:8080/
```

Open your browser to `http://localhost:8080` to view the site.

---

### 4. Make a change to a post

Try editing one of the Markdown files inside the `posts/` directory. The server should automatically reload when you save changes.

---

### 5. Stop the server

When you're done, press `CTRL + C` in the terminal to stop the server.

---

## 🧼 Optional: Clean Build

To build the static site manually:

```bash
npm run build
```

This will generate the HTML in the `_site/` folder.

---

## ✅ You're ready!

Now you can test your changes before pushing them to GitHub. Once you're happy with the result, push to `main`, and your GitHub Action will deploy the site automatically.
