// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Leisure Cooperative',
  tagline: 'Documentation Website',
  url: 'https://docs.leisure.coop',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'computing-coop', // Usually your GitHub org/user name.
  projectName: 'leisurecoop-docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/computingcoop/leisurecoop-docs',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          editUrl:
            'https://github.com/computingcoop/leisurecoops-docs',
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
      navbar: {
        title: 'Leisure Cooperative',
        logo: {
          alt: 'Leisure Cooperative Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'articles',
            position: 'left',
            label: 'Operation',
          },
          {to: '/finances', label: 'Finances', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Operation',
                to: '/docs/articles',
              },
              {
                label: 'Finances',
                to: '/docs/finances',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Are.na',
                href: 'https://are.na/leisure-cooperative',
              },
              {
                label: 'Signal',
                href: 'https://signal.group/#CjQKIIhjb0bblB6Ntvo8avESQgCJz1C4MVgSGlpXrojP00XaEhBXsyjpfJ4OI_dgJMoiTs5s',
              },
              {
                label: 'Mastodon',
                href: 'https://mastodon.green/web/accounts/31938',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Leisure Cooperative Home',
                href: 'https://leisure.coop',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Leisure Cooperative, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
