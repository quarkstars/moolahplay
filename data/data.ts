export interface Link {
  name: string;
  url: string;
}

export interface Site {
  name: string;
  logoUrl: string;
  heroTitle: string;
  heroTagline: string;
  heroDescription: string;
  heroFeatureImageUrl: string;
  bannerImage: string;
  googleUrl: string;
  appleUrl: string;
  footerTitle: string;
  footerSubtitle: string;
  links: Link[];
}

export const sites: Site[] = [
  {
    name: 'Moolah Play by Ellis Island',
    logoUrl: '/img/moolah-ellis-logo.png',
    heroTitle: 'Money in Minutes',
    heroTagline: 'Sidestep the paperwork!',
    heroDescription: 'Download our mobile app today to apply!',
    heroFeatureImageUrl: '/img/hero-feature-image.png',
    bannerImage: '/img/banner-image.png',
    googleUrl: 'https://play.google.com/store/apps/details?id=com.markertrax.ellisisland',
    appleUrl: 'https://apps.apple.com/us/app/moolah-play-by-ellis/id1518314033',
    footerTitle: 'Easy Money',
    footerSubtitle: 'Free to Apply',
    links: [
      {
        name: 'Home',
        url: '/',
      },
      {
        name: 'FAQ',
        url: '/faq',
      },
      {
        name: 'Support',
        url: '/support',
      },
      {
        name: 'Sign In',
        url: '/signin',
      },
    ],
  },
  {
    name: 'Moolah Play by Casino',
    logoUrl: '/img/casino-logo.png',
    heroTitle: 'Play Now, Pay Later',
    heroTagline: 'Sidestep the paperwork!',
    heroDescription: 'Download our mobile app today to apply!',
    heroFeatureImageUrl: '/img/hero-feature-image.png',
    bannerImage: '/img/banner-image.png',
    googleUrl: 'https://play.google.com/store/apps/details?id=com.markertrax.ellisisland',
    appleUrl: 'https://apps.apple.com/us/app/moolah-play-by-ellis/id1518314033',
    footerTitle: 'Easy Money',
    footerSubtitle: 'Free to Apply',
    links: [
      {
        name: 'Home',
        url: '/',
      },
      {
        name: 'FAQ',
        url: '/faq',
      },
      {
        name: 'Support',
        url: '/support',
      },
      {
        name: 'Sign In',
        url: '/signin',
      },
    ],
  },
];
