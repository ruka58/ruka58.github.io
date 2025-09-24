// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "Projects I&#39;ve been working on to explore new ideas! To be continued...",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Modules I used to act as a Teaching Assistant.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-the-dac-paper-from-our-group-titled-security-of-approximate-neural-networks-against-power-side-channel-attacks-will-be-presented-by-me-at-ukairs-25-in-september-sparkles",
          title: 'The DAC paper from our group titled “Security of Approximate Neural Networks against...',
          description: "",
          section: "News",},{id: "news-our-paper-titled-barkbeetle-stealing-decision-tree-models-with-fault-injection-is-available-on-arxiv",
          title: 'Our paper titled “BarkBeetle: Stealing Decision Tree Models with Fault Injection” is available...',
          description: "",
          section: "News",},{id: "news-our-recent-paper-titled-rowhammer-mitigation-by-approximate-computing-a-compressed-sensing-case-study-is-accepted-by-iccad-25-sparkles",
          title: 'Our recent paper titled “Rowhammer Mitigation by Approximate Computing: A Compressed Sensing Case...',
          description: "",
          section: "News",},{id: "news-i-will-be-presenting-our-group-s-research-on-hardware-security-in-approximate-computing-on-30th-september-at-esweek-25-in-taipei",
          title: 'I will be presenting our group’s research on “Hardware Security in Approximate Computing”...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
