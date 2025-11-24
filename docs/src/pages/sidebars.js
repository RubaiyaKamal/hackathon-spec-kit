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
  // Main documentation sidebar
  tutorialSidebar: [
    // Introduction at the TOP
    {
      type: 'doc',
      id: 'intro',
      label: '📖 Introduction',
    },

    // Part 1: Foundations
    {
      type: 'category',
      label: '🚀 Part 1: Foundation & Setup',
      collapsed: false,
      items: [
        'part1-foundations/01-introduction',
        'part1-foundations/02-history',
        'part1-foundations/03-core-tech',
      ],
    },

    // Part 2: Perception
    {
      type: 'category',
      label: '👁️ Part 2: Perception',
      collapsed: true,
      items: [
        'part2-perception/04-computer-vision',
        'part2-perception/05-sensor-fusion',
        'part2-perception/06-3d-perception-and-slam',
      ],
    },

    // Part 3: Intelligence
    {
      type: 'category',
      label: '🧠 Part 3: AI & Intelligence',
      collapsed: true,
      items: [
        'part3-intelligence/07-machine-learning-for-robotics',
        'part3-intelligence/08-reinforcement-learning',
        'part3-intelligence/09-foundation-models-in-robotics',
      ],
    },

    // Part 4: Motion
    {
      type: 'category',
      label: '🤸 Part 4: Motion & Control',
      collapsed: true,
      items: [
        'part4-motion/10-kinematics-and-dynamics',
        'part4-motion/11-motion-planning',
        'part4-motion/12-control-systems',
      ],
    },

    // Part 5: Applications
    {
      type: 'category',
      label: '🏭 Part 5: Real-World Applications',
      collapsed: true,
      items: [
        'part5-applications/13-manufacturing-applications',
        'part5-applications/14-healthcare-applications',
        'part5-applications/15-service-robotics',
      ],
    },

    // Part 6: Future
    {
      type: 'category',
      label: '🔮 Part 6: Future & Practical Guide',
      collapsed: true,
      items: [
        'part6-future/16-ethics-and-safety-in-robotics',
        'part6-future/17-future-trends-in-robotics',
        'part6-future/18-build-your-own-robot',
      ],
    },
  ],
};

module.exports = sidebars;