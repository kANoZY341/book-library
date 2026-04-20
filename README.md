# SWS 215 - Lab 12: Git, GitHub, and Branching Workflows

## Project Overview
This repository contains a full-stack Book Library application built using the MERN stack (MongoDB, Express, Node.js, and React). The primary focus of this lab was to implement professional version control workflows using Git and GitHub.

### Key Learning Objectives:
* **Feature Branching**: Developing new components (like the `UpdateBook` page) on isolated branches to protect the stable codebase.
* **Pull Requests**: Using GitHub's PR system to review and document code changes.
* **Merging**: Integrating completed features back into the `main` branch.
* **Remote Syncing**: Managing the relationship between local development and the remote GitHub repository.

---

## Tech Stack
* **Frontend**: React, React Router, Vite
* **Backend**: Node.js, Express, MongoDB, Mongoose
* **Version Control**: Git & GitHub

---

## Folder Structure
* `client/`: React frontend application.
* `server/`: Node.js/Express backend and MongoDB models.
* `.gitignore`: Configured to exclude `node_modules` and sensitive `.env` files.
* `.env.example`: Template for required environment variables.

---

## Git Workflow Practiced
1. **Initialize**: Started the local repository and linked to GitHub.
2. **Branching**: Created a `feature/update-book` branch for the Update Book functionality.
3. **Staging & Committing**: Practiced granular commits to track progress.
4. **Pushing**: Published the local feature branch to the remote repository.
5. **PR & Merge**: Successfully opened a Pull Request on GitHub and merged it into `main`.

---

## Setup Instructions
1. Clone the repository.
2. Run `npm install` in both the `client` and `server` directories.
3. Create a `.env` file in the `server` directory based on the `.env.example` file.
4. Run `npm start` (or your specific start script) to launch the application.