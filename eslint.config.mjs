import antfu from '@antfu/eslint-config'
import nextPlugin from '@next/eslint-plugin-next'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    ignores: ['node_modules', '**/node_modules/**', '.eslintrc.js', '**/.eslintrc.js/**'],
    formatters: true,
    react: true,
    plugins: { '@next/next': nextPlugin },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      'node/prefer-global/process': 'off',
      'react-hooks/rules-of-hooks': 'off',
      '@next/next/no-duplicate-head': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react-dom/no-dangerously-set-innerhtml': 'off',
      '@next/next/no-page-custom-font': 'off',
    },
  },
  ...tailwind.configs['flat/recommended'],
)
