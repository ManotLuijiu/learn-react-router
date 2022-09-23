module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-prettier/recommended',
    'stylelint-a11y/recommended',
    'stylelint-config-tailwindcss',
  ],
  plugins: ['stylelint-a11y', 'stylelint-prettier'],
  rules: {
    'a11y/media-prefers-reduced-motion': true,
    'a11y/font-size-is-readable': true,
    'a11y/no-outline-none': true,
    'a11y/selector-pseudo-class-focus': true,
    'alpha-value-notation': 'percentage',
    'prettier/prettier': [true, { singleQuote: true }],

    'color-no-invalid-hex': true,
    'font-family-name-quotes': 'always-where-recommended',
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'no-duplicate-selectors': true,
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['inside-block', 'first-nested'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'no-descending-specificity': [
      true,
      {
        ignore: ['selectors-within-list'],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'scss/at-extend-no-missing-placeholder': null,
    'color-function-notation': 'legacy',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep'],
      },
    ],
  },
};
