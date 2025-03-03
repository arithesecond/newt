import type { TConfig } from '$lib/types/config.types';
const config: TConfig = {
  name: 'April',
  locale: 'en',
  midgap: 24, // Gap between buttons and the time/weather (in Tailwind size units)
  colors: {
    baseBg: '#1E1E2E',
    darkBg: '#181825',
    accent: '#CBA6F7',
    textPrimary: '#CDDCF4',
    textSecondary: '#1E1E2E',
  },

  // Defines the buttons that get rendered.
  // Uses lucide for icons. Define up to 12.
  buttons: {
    gap: 6, // Gap between buttons (in Tailwind size units)
    buttons: [
      {
        name: 'Mail',
        icon: 'mail',
        href: 'https://mail.google.com/',
      },
      {
        name: 'Github',
        icon: 'github',
        href: 'https://github.com/',
      },
      {
        name: 'Proxmox',
        icon: 'server',
        href: 'https://pve.arithefirst.com',
      },
      {
        name: 'Vercel',
        icon: 'triangle',
        href: 'https://vercel.com/april-halls-projects',
      },
      {
        name: 'Cloudflare',
        icon: 'cloud',
        href: 'https://dash.cloudflare.com',
      },
      {
        name: 'Calendar',
        icon: 'calendar',
        href: 'https://calendar.google.com/calendar',
      },
      {
        name: 'Trilium',
        icon: 'notebook-text',
        href: 'https://notes.arithefirst.com',
      },
      {
        name: 'YouTube',
        icon: 'youtube',
        href: 'https://youtube.com',
      },
      {
        name: 'Twitch',
        icon: 'twitch',
        href: 'https://twitch.tv',
      },
      {
        name: 'T3 Chat',
        icon: 'messages-square',
        href: 'https://t3.chat',
      },
    ],
  },

  // Config for an optional background image
  image: {
    enabled: true,
    src: 'background-image.png',
  },

  // The greetings that get displayed
  // depending on the time of day
  greetings: {
    morning: 'Good morning',
    evening: 'Good afternoon',
    night: 'Good evening',
    late: 'Go to Sleep',
    punc: '!', // Punctiation at the end of the greeting (Use '' to disable)
  },

  // Date formatting options (Uses the same syntax as the
  // Date().toLocaleDateString() options)
  dateFormat: {
    month: 'short',
    day: 'numeric',
  },

  // Clock config
  time: {
    seconds: true,
    twelveHour: false,
  },

  // Weather config. Requires your geo coordinates and
  // an OpenWeatherMap API key (It's free!)
  weather: {
    coordinates: {
      // Find yout coordinates at https://www.latlong.net
      lat: '39.765450', // Your latitude
      long: '-75.267387', // Your longitude
    },
    units: 'metric', // metric = C°, imperial = F°, standard = K
  },
};

export default config;
