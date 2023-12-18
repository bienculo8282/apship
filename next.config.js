if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `)
}

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [
      process.env.WORDPRESS_API_URL.match(/(?!(w+)\.)\w*(?:\w+\.)+\w+/)[0], // Valid WP Image domain.
      '0.gravatar.com',
      '1.gravatar.com',
      '2.gravatar.com',
      'secure.gravatar.com',
      'i0.wp.com'
    ],
  },
  async redirects() {
    return [
      {
        source: '/posts/:slug',
        destination: 'https://hemdohoa.com/:slug',
        has: [
          {
            type: 'header',
            key: 'referer',
          },
        ],
        permanent: true,
      }
    ]
  },
}
