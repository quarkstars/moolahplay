module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',

  theme: {
    fontWeight: {
      medium: '600',
    },
    extend: {
      textShadow: {
        sm: '0 1px 1px var(--tw-shadow-color)',
        DEFAULT: '1px 2px 2px var(--tw-shadow-color)',
        lg: '4px 8px 8px var(--tw-shadow-color)',
      },
      colors: {
        primary: '#439980',
        'primary-shade': '#2a7c2a',
        'primary-tint': '#9bc174',

        secondary: '#458ed6',
        'secondary-shade': '#1f5993',
        'secondary-tint': '#69b8e0',

        tertiary: '#8167b2',
        'tertiary-shade': '#454589',
        'tertiary-tint': '#ad89c9',

        success: '#6da544',

        warning: '#dd9522',
        'warning-shade': '#bf7321',
        'warning-tint': '#e8c05d',

        danger: '#cc392e',
        'danger-shade': '#992032',
        'danger-tint': '#dd6b58',

        'base-100': '#EDF2F7',
        'base-200': '#E2E8F0',
        'base-300': '#CBD5E0',
        'base-400': '#A0AEC0',
        'base-500': '#718096',
        'base-600': '#4A5568',
        'base-700': '#2D3748',
        'base-800': '#1A202C',
        'base-900': '#171923',
      },
    },
    fontFamily: {
      english: ['"Noto Sans"'],
    },
    screens: {
      mobile: '390px',

      xs: '576px',

      sm: '768px',

      md: '996px',

      lg: '1200px',
    },
  },
  plugins: [],
};
