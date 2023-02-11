// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gyre.ai',
  tagline: 'AI art and image server',
  url: 'https://gyre.ai',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/gyrelogo-64.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'stablecabal', // Usually your GitHub org/user name.
  projectName: 'gyre-www', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {tagName: 'meta', attributes: {property: 'og:image', content: "https://gyre.ai/img/gyrelogo-full.png"}},
    {tagName: 'meta', attributes: {name: 'twitter:card', content: "summary_large_image"}},
    {tagName: 'meta', attributes: {name: 'twitter:creator', content: "@hafriedlander"}},
    {tagName: 'meta', attributes: {name: 'twitter:image', content: "https://gyre.ai/img/gyrelogo-full.png"}},
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    // Redocusaurus config
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'apispecs/stablecabal.openapi.json',
            route: '/api/',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#1890ff',
        },
      },
    ],

  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'Gyre.ai',
        logo: {
          alt: 'Gyre.ai Logo',
          src: 'img/gyrelogo-256.png',
        },
        items: [
          {to: '/features', label: "Features", position: 'left'},
          {
            type: 'doc',
            docId: 'install/gyre-installer',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/stablecabal/gyre',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        //style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'OpenAPI',
                to: '/api',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/stFy2UPppg',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/hafriedlander',
              },
              {
                label: 'Commercial enquiries',
                href: 'mailto:commercial@gyre.ai'
              }
            ],
          },
          {
            title: 'Sourcecode',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/stablecabal/gyre',
              },
              {
                label: 'GitHub - Installer',
                href: 'https://github.com/stablecabal/gyre-installer',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Stable Cabal. These documents licensed under <a href="http://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA-4.0</a>. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
