# Gemini CLI Project Rules

This project uses Next.js, TypeScript, and Tailwind CSS v4.

## General Principles
- Use TypeScript for all components and logic.
- Adhere to the existing directory structure (App Router).
- Maintain consistent indentation (2 spaces).

## Styling with Tailwind CSS v4
- **Tailwind CSS v4:** Always use Tailwind CSS v4 features. 
- **Zero Configuration:** Avoid adding unnecessary configuration in `tailwind.config.js` as v4 is CSS-first.
- **CSS Variables:** Prefer using CSS variables defined in `globals.css` for theme extensions.
- **Modern Features:** Leverage native CSS features supported by v4 (like `@theme`, `@lightningcss`, etc.).

## Development Workflow
- **Surgical Updates:** Only modify files explicitly requested or strictly necessary for the task.
- **Performance:** Keep components lean and use Server Components by default unless client-side interactivity is required.
- **Linting:** Ensure all changes pass the ESLint configuration defined in `eslint.config.mjs`.

## Component Guidelines
- Place reusable UI elements in `app/components/`.
- Use functional components with explicit prop types.
- Follow the existing naming convention for components (PascalCase).
