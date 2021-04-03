/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Dodges Site',
  tagline: 'PUGs tonight?',
  url: 'https://dodges-domain.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/blueplate.ico',
  organizationName: 'Toddbutler93', // Usually your GitHub org/user name.
  projectName: 'dodge-site', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Dodges Site',
      logo: {
        alt: 'Dodges Site Logo',
        src: 'img/blueplate.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Guides',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tribes Ascend',
          items: [
            {
              label: 'Tribes Guides',
              to: 'docs/',
            },
            {
              label: 'Tribes Development Guides',
              to: 'docs/how-to-make-maps',
            },
            {
              label: 'Tribes Information',
              to: 'docs/patch-notes',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UC06sxsfSsmjX8K3su-fNi_A',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/MYdN9Xm5Bg',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dodge.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ToddButler93/dodges-domain/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ToddButler93/dodges-domain/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
