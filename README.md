# Weather Forecast Application

A modern weather forecast application built with Vue.js, TypeScript, and Tailwind CSS. Provides real-time weather data and forecasts for locations worldwide.

## Features

- Location search with auto-suggestions
- Current weather conditions display
- 7-day weather forecast
- Interactive temperature charts
- Responsive design for all devices
- Timezone-aware date formatting

## Tech Stack

- **Frontend**: Vue 3 (Composition API)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Bundler**: Vite
- **Testing**: Vitest + Vue Test Utils
- **Linting**: Prettier
- **CI/CD**: GitHub Actions
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 20+
- npm 9+

### Installation

```bash
git clone https://github.com/${{ github.repository }}.git
cd weather-app
npm install

Development
npm run dev

Build
npm run build

Testing
npm test           # Run unit tests
npm run test:cov   # Run tests with coverage
npm run test:ui    # Run tests with UI

Linting
npm run format  # Format code

CI/CD Pipeline
The CI/CD pipeline includes:

Type checking (TypeScript)

Unit testing (Vitest)

Production build (Vite)

Deployment to GitHub Pages

https://via.placeholder.com/800x300?text=CI/CD+Pipeline+Diagram

API Usage
This application uses the following APIs:

Geocoding API:
GET https://geocoding-api.open-meteo.com/v1/search?name={query}

Weather API:
GET https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}

Contributing
Contributions are welcome! Please follow these steps:

Fork the repository

Create a new branch (git checkout -b feature/your-feature)

Commit your changes (git commit -am 'Add some feature')

Push to the branch (git push origin feature/your-feature)

Create a new Pull Request

License
This project is licensed under the MIT License - see the LICENSE file for details.

Made with ❤️ using Vue 3 • TypeScript • Tailwind CSS • Vite • Vitest • Prettier • GitHub Actions • GitHub Pages