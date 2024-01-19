const withNextIntl = require('next-intl/plugin')(
    // './i18n.ts'
);

module.exports = withNextIntl({
    // Other Next.js configuration ...
    images: {
        // domains: ['images.pexels.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                pathname: '**',
            },
        ],

    },

});