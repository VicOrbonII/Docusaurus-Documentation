/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Stock Knowledge',
  tagline: 'Play to Learn, learn to play!',
  url: 'https://Stock-Knowledge-Engineering.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
   organizationName: 'Stock-Knowledge-Engineering', // Usually your GitHub org/user name.
  projectName: 'Stock-Knowledge-Engineering.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Stock Knowledge',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
        
        
      },
     
    },
    
    footer: {
    
   
      
      style: 'dark',
      links: [
        
        
       
        {
          title: 'Follow us on',
          
           items: [
            
            {
               label:'Facebook',
              href: 'https://www.facebook.com/groups/1118893898545259?_rdc=1&_rdr',
              src: 'img/fb.png',
              
            },
            {
              href: 'https://github.com/Stock-Knowledge-Engineering',
              label: 'GitHub',
              
              
            },
            {
              href: 'https://twitter.com/StockKnowledge_',
              label: 'Twitter',
              
              
            },
             {
              
              href: 'https://www.instagram.com/stockknowledgetool/?hl=en',
              label: 'Instagram',
              
              
            },
            {
              href: 'https://www.linkedin.com/company/stock-knowledge/mycompany',
              label: 'LinkIn',
            
              
            },
            
           
          ],
        },
        
      ],
     
      
     
    
      copyright: `Copyright © ${new Date().getFullYear()} Stock Knowledge Corp. Built with Docusaurus.`,
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

