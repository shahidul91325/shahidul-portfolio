const config = {
  plugins: {
    // Processes `@import "tailwindcss"` in app/globals.css for the webpack
    // build path (Turbopack uses the @tailwindcss/turbopack loader).
    "@tailwindcss/postcss": {},
  },
};

export default config;
