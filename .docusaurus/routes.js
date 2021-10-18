
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog','40f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/founding',
    component: ComponentCreator('/blog/founding','4cf'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/blog',
    component: ComponentCreator('/blog/tags/blog','265'),
    exact: true
  },
  {
    path: '/blog/tags/leisuretalk',
    component: ComponentCreator('/blog/tags/leisuretalk','c0f'),
    exact: true
  },
  {
    path: '/finances',
    component: ComponentCreator('/finances','29d'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','153'),
    routes: [
      {
        path: '/docs/articles',
        component: ComponentCreator('/docs/articles','3ff'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/bylaws',
        component: ComponentCreator('/docs/bylaws','3cd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/overview',
        component: ComponentCreator('/docs/overview','9fa'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
