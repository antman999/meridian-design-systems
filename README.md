<p align="center">
  <a href="https://github.com/antman999/meridian-design-systems">
    <img src="https://raw.githubusercontent.com/antman999/meridian-design-systems/main/public/small-logo.png?raw=true" alt="MD logo" width="400" />
  </a>
</p>

<div id="user-content-toc" align="center">
  <ul>
    <summary><h1 style="display: inline-block;">🌌 Build with ease</h1></summary>
  </ul>
</div>

<p align="center">
  <img alt="Bundle Size" src="https://img.shields.io/bundlephobia/minzip/%40antman999%2Fmeridian-design-systems"/>
  <a href="https://github.com/antman999/meridian-design-systems/blob/main/LICENSE">
    <img alt="MIT License" src="https://img.shields.io/github/license/antman999/meridian-design-systems"/>
  </a>
  <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@antman999/meridian-design-systems.svg?style=flat"/>
  <img alt="Github Stars" src="https://badgen.net/github/stars/antman999/meridian-design-systems" />
</p>

Welcome to Meridian Design Systems, an open-source library aimed at streamlining the creative process for designers and developers. As a work in progress, The goal of Meridian to simplify the way developers create for personal and business projects.

## Index

- 📘 [Documentation](#documentation)
- ✅ [Features](#features)
- 📦 [Installation](#installation)
- 💻 [Usage](#usage)
- 🗺 [Road Map](#roadmap)
- 📝 [Contributing](#contributing)
- ⚖️ [License](#license)

## Documentation

Documentation for all components can be found [here](https://meridian-design-systems.vercel.app/?path=/docs/getting-started-overview--docs). Each component has a docs page that outlines prop usage.

## Features

**Growing Component Library:** Meridian offers an expanding collection of pre-designed components, easing the design workflow and saving development time.

**Customizable to Your Brand:** Once the base components are set there will be a set of colors to use but you will able to customize it to your brand.

**Responsive and Accessible:** Ensuring inclusivity with designs that reach all users, regardless of their devices or abilities. There are A11Y tests to all components ensuring each version of the library is always up to industry standards.

**Evolving with the Industry:** One of the biggest focuses of the project is to evolve with the latest trends and practices, providing regular updates and hopefully with stakeholder support down the road.

**Regression Testing:** Each Pull request compares the previous design against the PR to ensure no UI regressions get shipped.

## Installation

To install Meridian in your project, use of the installation methods in your terminal.

### NPM

```bash
npm i @antman999/meridian-design-systems
```

### YARN

```bash
yarn add @antman999/meridian-design-systems
```

### PNPN

```bash
pnpn add @antman999/meridian-design-systems
```

## Usage

Once installed you can start importing components from meridian into your application!

### Example Usage

```jsx live=false
import { Button } from '@antman999/meridian-design-systems';

function App() {
  return (
    <div>
      <Button appearance='primary' onClick={() => alert('clicked')}>
        Button
      </Button>
    </div>
  );
}

export default App;
```

## Roadmap

Version `1.0.0` will launch with core components that are tested and accesible.

Visit the [figma](https://www.figma.com/file/vCRXNSDZGDM8Wy3b9ztHQS/Meridian-UI-Design-Systems) design systems file to see all upcoming components and improvements before the official launch.

After version `1.0.0` the focus will be utility hooks, layouts, and out of the box theming for your application.

## Contributing

I'm currently working on this as a way to understand the needs of developers and overall make it easier to use components. If you see something you'd like to improve please feel welcomed to open a PR.

## License

MIT © [Anthony Mendoza](https://github.com/antman999)
