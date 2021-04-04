/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Dodges Site',
  tagline: 'PUGs tonight?',
  url: 'https://www.dodgesdomain.com/',
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
        src: 'img/blueplate.png',
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
              to: 'docs/development/how-to-make-maps',
            },
            {
              label: 'Tribes Information',
              to: 'docs/information/patch-notes',
            },
            {
              label: 'TA Mods',
              to: 'https://www.tamods.org/',
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
            'https://github.com/ToddButler93/dodges-domain/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ToddButler93/dodges-domain/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
