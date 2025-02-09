/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    // {type: 'autogenerated', dirName: '.'},
    { type: 'html', value: '<a class="navbar__brand custom-top-header" href="/"><div class="navbar__logo"><img src="/img/social/favicon-64x64.png" alt="Vesuvius Challenge Logo" class="themedImage_ToTc themedImage--dark_i4oU"></div><b class="navbar__title text--truncate">Vesuvius Challenge</b></a>' },
    { type: 'doc', id: 'landing' },
    { type: 'doc', id: 'grandprize' },
    // {
    //   type: 'category',
    //   label: 'Announcements',
    //   items: [
    //     // { type: 'doc', id: '28_2024_prizes' },
    //     // { type: 'doc', id: 'firstletters' },
    //     // { type: 'doc', id: 'grand_prize' },
    //     // { type: 'doc', id: 'open_source_prizes' },
    //     // { type: 'doc', id: 'private_prizes' },
    //     // { type: 'doc', id: 'first_letters' },
    //     // { type: 'doc', id: 'ink_detection' },
    //     // { type: 'doc', id: 'ink_detection_followup' },
    //     // { type: 'doc', id: 'segmentation' },
    //     // { type: 'doc', id: 'previous' },
    //   ],
    // },
    // { type: 'doc', id: 'submissions_closed' },
    {
      type: 'category',
      label: 'Overview',
      link: { type: 'doc', id: 'overview' },
      items: [
        { type: 'doc', id: '28_2024_prizes' },
        { type: 'doc', id: 'master_plan' },
        // { type: 'doc', id: 'grand_prize' },
        // { type: 'doc', id: 'open_source_prizes' },
        // { type: 'doc', id: 'private_prizes' },
        // { type: 'doc', id: 'first_letters' },
        // { type: 'doc', id: 'ink_detection' },
        // { type: 'doc', id: 'ink_detection_followup' },
        // { type: 'doc', id: 'segmentation' },
        // { type: 'doc', id: 'previous' },
      ],
    },
    { type: 'doc', id: 'winners' },
    { type: 'doc', id: 'community_projects' },
    {
      type: 'category',
      label: 'Data',
      link: { type: 'doc', id: 'data' },
      items: [
        // { type: 'doc', id: 'data_server' },
        { type: 'doc', id: 'data_scrolls' },
        { type: 'doc', id: 'data_fragments' },
        { type: 'doc', id: 'data_segments' },
        // { type: 'doc', id: 'data_organization' },
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Community tools',
    //   link: { type: 'doc', id: 'community_tools' },
    //   items: [
    //   ],
    // },
    {
      type: 'category',
      label: 'Tutorials',
      link: { type: 'doc', id: 'tutorial1' },
      items: [
        { type: 'doc', id: 'tutorial1' },
        { type: 'doc', id: 'tutorial2' },
        { type: 'doc', id: 'tutorial3' },
        { type: 'doc', id: 'tutorial4' },
        { type: 'doc', id: 'tutorial5' },
      ],
    },
    { type: 'doc', id: 'faq' },
    { type: 'doc', id: 'background' },
    { type: 'doc', id: 'livestream' },
    {
      type: 'link',
      label: 'Discord',
      href: 'https://discord.gg/V4fJhvtaQn',
    },
    {
      type: 'link',
      label: 'Twitter',
      href: 'https://twitter.com/scrollprize',
    },
    {
      type: 'link',
      label: 'Substack',
      href: 'https://scrollprize.substack.com/',
    },
  ],
};

module.exports = sidebars;
