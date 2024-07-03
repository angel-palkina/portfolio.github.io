module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    // Include popular linting rulesets here
    'eslint:recommended',
    'plugin:svelte3/recommended', // Use recommended rules from the Svelte plugin
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3', // Process Svelte files with the Svelte plugin
    },
  ],
};
