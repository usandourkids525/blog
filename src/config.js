const BASE_SITE_URL = 'https://mikebifulco.com';

const config = {
  employer: {
    name: 'Stripe',
    role: 'Developer Advocate',
    url: 'https://stripe.com',
  },
  title: `Mike Bifulco`,
  author: {
    name: `Mike Bifulco @irreverentmike`,
    summary: `| Designer, developer advocate, maker, podcaster.`,
    email: 'hello@mikebifulco.com',
    link: 'https://twitter.com/irreverentmike',
  },
  social: {
    twitter: `@irreverentmike`,
    instagram: `irreverentmike`,
    tiktok: `irreverentmike`,
    github: `mbifulco`,
  },
  // eslint-disable-next-line max-len
  description: `Resources for modern software designers and developers.  Tips and walkthroughs on using developer tools like React, node, and javascript.`,
  image_url: `${BASE_SITE_URL}/icons/icon-512x512.png`, // used for RSS feed image
  logoText: 'Mike Bifulco',
  defaultTheme: 'light',
  siteUrl: BASE_SITE_URL,
};

export default config;
