// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dodges Domain',
  tagline: 'PUGs tonight?',
  url: 'https://www.dodgesdomain.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/blueplate.ico',
  organizationName: 'Toddbutler93', // Usually your GitHub org/user name.
  projectName: 'dodge-site', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/ToddButler93/dodges-domain/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/ToddButler93/dodges-domain/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'Dodges Domain',
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
          {
            to: 'docs/guide-install-setup',
            activeBasePath: 'docs',
            label: 'Tribes Installation',
            position: 'left',
          },
          {
            to: 'docs/gameplay/guide-quick',
            activeBasePath: 'docs',
            label: 'PUGs',
            position: 'left',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/ToddButler93/dodges-domain',
            label: 'GitHub',
            position: 'right',
          },
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
              label: 'Dodges Maps',
              to: 'docs/custommaps/trctf-blues',
              },
              {
                label: 'Tribes Development Guides',
                to: 'docs/development/guide-map-dev',
              },
              {
                label: 'Tribes Information',
                to: 'docs/information/patches',
              },
              {
                label: 'TA Mods',
                to: 'https://www.tamods.org/',
              },
              {
                label: 'Wilderzone (Maintained by Giga)',
                to: 'https://wilderzone.live/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Dodges Youtube',
                href: 'https://www.youtube.com/@Dodge-M8',
              },
              {
                label: 'Australian Discord',
                href: 'https://discord.gg/MYdN9Xm5Bg',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ToddButler93/dodges-domain',
              },
              {
                label: 'Not Tribes Related Stuff',
                href: '/docs/not-tribes/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}  Dodge.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
