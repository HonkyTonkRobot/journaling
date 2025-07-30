// Minimal Eleventy Blog Setup

// 📁 Project Structure:
// .
// ├── .eleventy.js
// ├── package.json
// ├── posts/
// │   └── 2025-07-30-my-journal.md
// └── .github/workflows/deploy.yml

// -----------------------------
// .eleventy.js
module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "posts",     // Where to find .md files
      output: "_site"      // Where to output the HTML
    },
    markdownTemplateEngine: "njk"
  };
};

// -----------------------------
// package.json
{
  "name": "journal-blog",
  "version": "1.0.0",
  "scripts": {
    "build": "eleventy"
  },
  "devDependencies": {
    "@11ty/eleventy": "^3.0.0"
  }
}

// -----------------------------
// posts/2025-07-30-my-journal.md
---
title: "My Journal Entry"
author: j anders
date: 2025-07-30
description: First automated post!
---

This is the content of my journal post.

// -----------------------------
// .github/workflows/deploy.yml
name: Build and Deploy Journal

on:
  push:
    branches: [main]

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install and build
        run: |
          npm install
          npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site
          external_repository: yourusername/yourusername.github.io
          publish_branch: main
