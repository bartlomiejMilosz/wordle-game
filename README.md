# Wordle Game

This is a Wordle game clone built with TypeScript and Vite. The game allows users to guess a word within a limited number of attempts.

## UI

Here’s a quick demonstration of the project UI:

![App ddemo](_design/app-demo.png)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/bartlomiejMilosz/wordle-game.git
   ```

2. Navigate to the project directory:

   ```sh
   cd wordle-game
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

## Usage

To start the development server, run:

```sh
npm run dev
```

To build the project, run:

```sh
npm run build
```

To preview the production build, run:

```sh
npm run preview
```

## Features

- Guess the word within a limited number of attempts.
- Visual feedback for correct, incorrect, and partially correct guesses.
- Responsive design.

## Project Structure

```uml
├── .gitignore
├── biome.json
├── index.html
├── package.json
├── public/
├── src/
│   ├── api/
│   │   ├── api-urls.ts
│   │   ├── fetch-word.ts
│   │   └── validate-word.ts
│   ├── app-state.ts
│   ├── app.ts
│   ├── handlers/
│   │   ├── handle-add-letter.ts
│   │   ├── handle-backspace.ts
│   │   ├── handle-commit.ts
│   │   └── handle-press-key.ts
│   ├── styles/
│   │   ├── reset.css
│   │   └── styles.css
│   ├── types/
│   │   └── custom-dom-elements.d.ts
│   └── utils/
│       ├── dom-utils.ts
│       └── loader.ts
├── tsconfig.json
└── vite.config.ts
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.
