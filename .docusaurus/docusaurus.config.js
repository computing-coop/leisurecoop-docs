export default {
  "title": "Leisure Cooperative",
  "tagline": "Documentation Website",
  "url": "https://docs.leisure.coop",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "computing-coop",
  "projectName": "leisurecoop-docs",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/buffalojunior/Documents/GitHub/leisure-coop-docs/sidebars.js",
          "editUrl": "https://github.com/computingcoop/leisurecoop-docs"
        },
        "blog": {
          "showReadingTime": false,
          "editUrl": "https://github.com/computingcoop/leisurecoops-docs"
        },
        "theme": {
          "customCss": "/Users/buffalojunior/Documents/GitHub/leisure-coop-docs/src/css/custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "navbar": {
      "title": "Leisure Cooperative",
      "logo": {
        "alt": "Leisure Cooperative Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "type": "doc",
          "docId": "articles",
          "position": "left",
          "label": "Operation"
        },
        {
          "to": "/finances",
          "label": "Finances",
          "position": "left"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Operation",
              "to": "/docs/articles"
            },
            {
              "label": "Finances",
              "to": "/docs/finances"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Are.na",
              "href": "https://are.na/leisure-cooperative"
            },
            {
              "label": "Signal",
              "href": "https://signal.group/#CjQKIIhjb0bblB6Ntvo8avESQgCJz1C4MVgSGlpXrojP00XaEhBXsyjpfJ4OI_dgJMoiTs5s"
            },
            {
              "label": "Mastodon",
              "href": "https://mastodon.green/web/accounts/31938"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Leisure Cooperative Home",
              "href": "https://leisure.coop"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 Leisure Cooperative, Built with Docusaurus."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false,
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};
module.exports = {
  url: 'https://leisurecoop-docs.netlify.app', // Url to your site with no trailing slash
  baseUrl: '/', // Base directory of your site relative to your repo
  // ...
};