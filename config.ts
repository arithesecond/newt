import type {TConfig} from '$lib/types/config.types'
const config: TConfig = {
    name: 'April',
    colors: {
        baseBg: '#1E1E2E',
        darkBg: '#181825',
        accent: '#CBA6F7',
        textPrimary: '#CDDCF4',
        textSecondary: '#1E1E2E'
    },

    // Defines the buttons that get rendered.
    // Uses lucide for icons. Define up to 12.
    buttons: [
        {
            name: 'Newt GitHub',
            href: 'https://github.com/arithefirst/newt',
            icon: 'app-window'
        }
    ],

    // Config for an optional background image
    image: {
        enabled: false,
        src: '/background-image.png'
    },

    // The greetings that get displayed
    // depending on the time of day
    greetings: {
        morning: 'Good morning',
        evening: 'Good evening',
        night: 'Good evening',
        late: 'Go to bed',
        punc: '!' // Punctiation at the end of the greeting (Use '' to disable)
    },

    // Date formatting options (Uses the same syntax as the
    // Date().toLocaleDateString() options)
    dateFormat: {
        month: 'short',
        day: 'numeric'
    },
    
    // Clock config
    time: {
        seconds: true,
        twelveHour: false
    },

    // Weather config. Requires your geo coordinates and
    // an OpenWeatherMap API key (It's free!)
    weather: {
        coordinates: {
            // Find yout coordinates at https://www.latlong.net
            lat: '40.776676', // Your latitude
            long: '-73.971321' // Your longitude
        },
        lang: 'en',
        openWeatherKey: '', // Get an API Key at https://openweathermap.org/api/one-call-3#start
        units: 'metric', // metric = C°, imperial = F°, standard = K
    }
}

export default config