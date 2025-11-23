# Quickstart Guide

This guide provides instructions on how to set up the development environment and run the "Physical AI & Humanoid Robotics Book" project.

## Prerequisites

- Node.js (version 18+ recommend)
- Python (version 3.10+ recommended)
- Git

## Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install Node.js dependencies:**
   The project uses Docusaurus. Navigate to the website directory and install the dependencies.
   ```bash
   cd website # Assuming the docusaurus site is in a 'website' directory
   npm install
   ```

3. **Install Python dependencies:**
   The project uses Python for code examples and validation scripts.
   ```bash
   pip install -r requirements.txt
   ```
   *(Note: A `requirements.txt` file will need to be created with the Python dependencies like PyTorch, TensorFlow, PyBullet, MuJoCo, etc.)*

## Running the website

To start the Docusaurus development server:
```bash
cd website
npm start
```
This will open the website in your browser at `http://localhost:3000`.

## Running Validation Scripts

The project includes validation scripts to ensure the quality of the content.
```bash
python validate.py
```
*(Note: The exact command and script name may vary.)*
