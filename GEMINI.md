# Project Overview

This is a React-based web application for a travel agency called "Soniya Trip Adventure". It is built with Vite and TypeScript, and it integrates with the Gemini API. The application showcases travel packages, displays customer testimonials, and provides a booking form for users.

## Building and Running

To build and run this project, you will need to have Node.js installed.

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Set Environment Variables:**
    Create a `.env.local` file in the root of the project and add the following line, replacing `your_api_key` with your actual Gemini API key:
    ```
    GEMINI_API_KEY=your_api_key
    ```

3.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3000`.

4.  **Build for Production:**
    ```bash
    npm run build
    ```
    This will create a `dist` directory with the production-ready files.

5.  **Preview the Production Build:**
    ```bash
    npm run preview
    ```

## Development Conventions

*   **Component-Based Architecture:** The application is structured into reusable React components, located in the `src/components` directory.
*   **Styling:** The project uses a utility-first CSS framework (likely Tailwind CSS, given the class names in `App.tsx`), but this is not explicitly confirmed in the dependencies.
*   **TypeScript:** The project uses TypeScript for static typing.
*   **Vite:** The project uses Vite for fast development and builds.
