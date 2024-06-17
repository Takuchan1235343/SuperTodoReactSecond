module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {},

    },
    plugins: [
        function ({addUtilities}) {
            const newUtilities = {
                '.vertical-rl': {
                    writingMode: 'vertical-rl',
                },
            }
            addUtilities(newUtilities, ['responsive', 'hover'])
        }
    ],
}

