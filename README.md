# Local Operator Website

Local Operator is a Python-based agent that runs locally on your device, securely executing commands through a conversational chat interface. This repository serves as the official website for Local Operator and is built with React, TypeScript, Vite, and Material UI.

This repository is for the public website only.  The Local Operator tool is located at [here](https://github.com/damianvtran/local-operator).

## Overview

Local Operator empowers users with:

- **Interactive CLI Interface:** Chat with an AI assistant that executes Python code locally.
- **Server Mode:** Run as a FastAPI server to securely interact via a web interface.
- **Code Safety Verification:** Built-in safety checks analyze code for dangerous operations before execution.
- **Contextual Execution:** Maintains execution context between code blocks for seamless multi-step tasks.
- **Conversation History:** Tracks all interactions for a continuous, context-aware experience.
- **Local Model Support:** Enables on-device model execution (e.g., via Ollama) for enhanced privacy and performance.

This website not only showcases the key features of Local Operator but also offers links to documentation and the CLI tool installation.

## Tech Stack

- **React** with **TypeScript**
- **Vite** for fast bundling and development
- **Material UI** for component styling
- **Styled Components** for additional styling flexibility
- **Font Awesome** for icons

## Getting Started

### Prerequisites

- Node.js v23+
- yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/damianvtran/local-operator-site.git
   cd local-operator-site
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

### Running Locally

Start the development server:

```bash
yarn dev
```

Access the site in your browser at [http://localhost:5173](http://localhost:5173) (or the port otherwise specified by Vite).

### Building for Production

To build the production version:

```bash
yarn build
```

Then, preview the production build locally:

```bash
yarn preview
```

## Linting and Code Quality

This project is set up with ESLint using React and TypeScript best practices. You can verify code quality by running:

```bash
yarn lint
```

For production applications, consider enabling type-aware linting. In your ESLint configuration, update the `languageOptions` with your tsconfig paths:

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You may also switch to stricter rules using `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked` along with stylistic rules if desired.

## Deployment

The production build output from Vite can be deployed on any static hosting service that supports modern JavaScript, such as Vercel, Netlify, or GitHub Pages.

## Contact

For further information or questions, please refer to the [Local Operator GitHub repository](https://github.com/damianvtran/local-operator).
