import React, { useState, useEffect } from 'react';
import styles from './NewTabPage.module.css';

// Edit these to customize your shortcuts
const SHORTCUTS = [
  { label: 'GitHub',      url: 'https://github.com',              emoji: '🐙' },
  { label: 'YouTube',     url: 'https://youtube.com',             emoji: '📺' },
  { label: 'Gmail',       url: 'https://mail.google.com',         emoji: '📧' },
  { label: 'Hacker News', url: 'https://news.ycombinator.com',    emoji: '🔶' },
  { label: 'Reddit',      url: 'https://reddit.com',              emoji: '👾' },
  { label: 'Spotify',     url: 'https://open.spotify.com',        emoji: '🎵' },
];

const QUOTES = [
  "A horse never forgets where it put its second hat.",
  "The soup is listening. Speak clearly.",
  "You cannot fold a river, but you can certainly try.",
  "Clocks are just angry circles.",
  "Never trust a man who winks at furniture.",
  "Tuesday is the least haunted day of the week.",
  "If you listen closely to a pencil, it will say nothing. It is a pencil.",
  "The moon is not made of cheese, but no one has asked the moon.",
  "Every mirror is just a window that forgot which side it was on.",
  "A fish does not need an umbrella, but it would probably enjoy one.",
  "The smell of rain is just the earth's search history.",
  "Somewhere, a lamp is very proud of itself.",
  "Your shadow is just your body's way of saying hello to the floor.",
  "Bread knows what it did.",
  "History has never recorded a triangle behaving suspiciously. Until now.",
  "The chair is not thinking about you. This is good.",
  "At some point, the gravel made its decision and never looked back.",
  "A well-rested spoon outlives three forks.",
  "Nobody has ever fully understood what the mailbox wants.",
  "According to experts, most clouds are just guessing.",
  "The escalator has seen things.",
  "Every staple was once a tiny dream.",
  "Something is happening near the hedge, but it is fine.",
  "A confident beetle is still a beetle.",
];

const WMO_CODES = {
  0:  { label: 'Clear sky',              emoji: '☀️' },
  1:  { label: 'Mainly clear',           emoji: '🌤️' },
  2:  { label: 'Partly cloudy',          emoji: '⛅' },
  3:  { label: 'Overcast',               emoji: '☁️' },
  45: { label: 'Foggy',                  emoji: '🌫️' },
  48: { label: 'Icy fog',                emoji: '🌫️' },
  51: { label: 'Light drizzle',          emoji: '🌦️' },
  53: { label: 'Drizzle',                emoji: '🌦️' },
  55: { label: 'Heavy drizzle',          emoji: '🌦️' },
  61: { label: 'Light rain',             emoji: '🌧️' },
  63: { label: 'Rain',                   emoji: '🌧️' },
  65: { label: 'Heavy rain',             emoji: '🌧️' },
  71: { label: 'Light snow',             emoji: '🌨️' },
  73: { label: 'Snow',                   emoji: '❄️' },
  75: { label: 'Heavy snow',             emoji: '❄️' },
  77: { label: 'Snow grains',            emoji: '🌨️' },
  80: { label: 'Light showers',          emoji: '🌦️' },
  81: { label: 'Showers',               emoji: '🌧️' },
  82: { label: 'Heavy showers',          emoji: '⛈️' },
  85: { label: 'Snow showers',           emoji: '🌨️' },
  86: { label: 'Heavy snow showers',     emoji: '❄️' },
  95: { label: 'Thunderstorm',           emoji: '⛈️' },
  96: { label: 'Thunderstorm w/ hail',   emoji: '⛈️' },
  99: { label: 'Thunderstorm, heavy hail', emoji: '⛈️' },
};

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning, Trevor.';
  if (hour < 17) return 'Good afternoon, Trevor.';
  return 'Good evening, Trevor.';
}

function getDailyQuote() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  return QUOTES[dayOfYear % QUOTES.length];
}

function NewTabPage() {
  const [time, setTime] = useState(new Date());
  const [query, setQuery] = useState('');
  const [engine, setEngine] = useState('google');
  const [weather, setWeather] = useState(null);
  const [weatherError, setWeatherError] = useState(false);
  const [notes, setNotes] = useState(() => localStorage.getItem('newtab-notes') || '');

  // Clock tick
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  // Weather fetch via geolocation + Open-Meteo (no API key required)
  useEffect(() => {
    if (!navigator.geolocation) { setWeatherError(true); return; }
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph`
          );
          const data = await res.json();
          setWeather(data.current_weather);
        } catch {
          setWeatherError(true);
        }
      },
      () => setWeatherError(true)
    );
  }, []);

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
    localStorage.setItem('newtab-notes', e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    const base = engine === 'google'
      ? 'https://www.google.com/search?q='
      : 'https://duckduckgo.com/?q=';
    window.location.href = base + encodeURIComponent(query);
  };

  const hours   = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const dateStr = time.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  const weatherInfo = weather ? (WMO_CODES[weather.weathercode] ?? { label: 'Unknown', emoji: '🌡️' }) : null;

  return (
    <div className={styles.page}>

      {/* Clock + Greeting */}
      <div className={styles.clockSection}>
        <div className={styles.clock}>{hours}:{minutes}</div>
        <div className={styles.date}>{dateStr}</div>
        <div className={styles.greeting}>{getGreeting()}</div>
      </div>

      {/* Search */}
      <form className={styles.searchForm} onSubmit={handleSearch}>
        <div className={styles.searchBar}>
          <button
            type="button"
            className={styles.engineToggle}
            onClick={() => setEngine(e => e === 'google' ? 'ddg' : 'google')}
            title={`Switch to ${engine === 'google' ? 'DuckDuckGo' : 'Google'}`}
          >
            {engine === 'google' ? 'G' : '🦆'}
          </button>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
          />
          <button type="submit" className={styles.searchSubmit}>→</button>
        </div>
      </form>

      {/* Shortcuts */}
      <div className={styles.shortcuts}>
        {SHORTCUTS.map(({ label, url, emoji }) => (
          <a key={url} href={url} className={styles.shortcut}>
            <span className={styles.shortcutEmoji}>{emoji}</span>
            <span className={styles.shortcutLabel}>{label}</span>
          </a>
        ))}
      </div>

      {/* Widgets: Weather + Notes */}
      <div className={styles.widgets}>

        <div className={styles.widget}>
          <div className={styles.widgetTitle}>WEATHER</div>
          {weatherError && <div className={styles.widgetMuted}>Location unavailable</div>}
          {!weather && !weatherError && <div className={styles.widgetMuted}>Fetching…</div>}
          {weather && weatherInfo && (
            <div className={styles.weatherContent}>
              <span className={styles.weatherEmoji}>{weatherInfo.emoji}</span>
              <span className={styles.weatherTemp}>{Math.round(weather.temperature)}°F</span>
              <span className={styles.weatherDesc}>{weatherInfo.label}</span>
              <span className={styles.weatherWind}>Wind {Math.round(weather.windspeed)} mph</span>
            </div>
          )}
        </div>

        <div className={`${styles.widget} ${styles.notesWidget}`}>
          <div className={styles.widgetTitle}>NOTES</div>
          <textarea
            className={styles.notesArea}
            value={notes}
            onChange={handleNotesChange}
            placeholder="jot something down..."
            spellCheck={false}
          />
        </div>

      </div>

      {/* Daily Quote */}
      <div className={styles.quote}>"{getDailyQuote()}"</div>

    </div>
  );
}

export default NewTabPage;
