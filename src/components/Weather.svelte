<script lang="ts">
  import config from '@config';
  import WeatherIcon from './WeatherIcon.svelte';

  type TWeatherData = {
    error: Error | null;
    noConfig: boolean;
    data: {
      weatherCode: string;
      temperature: number;
      weather: string;
    } | null;
  };

  async function getWeatherData(): Promise<TWeatherData> {
    const apiKey = import.meta.env.PUBLIC_WEATHER_API_KEY;
    if (apiKey && apiKey !== 'yourkeyhere') {
      try {
        const { lat, long } = config.weather.coordinates;
        const units = config.weather.units;

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=${units}`,
        );

        if (!response.ok) {
          throw new Error(`Weather API responded with status: ${response.status}`);
        }

        const responseJson = await response.json();

        return {
          error: null,
          noConfig: false,
          data: {
            weather: responseJson.weather[0].main,
            weatherCode: responseJson.weather[0].icon,
            temperature: Math.round(responseJson.main.temp),
          },
        };
      } catch (e) {
        return {
          error: e as Error,
          noConfig: false,
          data: null,
        };
      }
    }
    return {
      error: null,
      noConfig: true,
      data: null,
    };
  }
</script>

<div class="weather-container flex items-center justify-center gap-2 rounded-md p-3">
  {#await getWeatherData() then weather}
    {#if weather.noConfig}
      <div class="text-center text-amber-400">Weather API key not configured</div>
    {:else if weather.error}
      <div class="text-red-400">{weather.error}</div>
    {:else}
      <WeatherIcon weatherCode={weather.data?.weatherCode} />
      <div class="weather-info">
        <span class="temperature text-4xl font-bold">
          {`${weather.data?.temperature}${config.weather.units === 'imperial' ? '°F' : config.weather.units === 'metric' ? '°C' : 'K'}`}
        </span>
        <span class="weather-description ml-1 text-4xl">{weather.data?.weather}</span>
      </div>
    {/if}
  {/await}
</div>
