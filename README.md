
# React Hooks — Practical Examples

A collection of practical React examples exploring how built-in Hooks work, how they manage component state, and how they help components interact with each other.

This project brings multiple Hook concepts together in one Vite + React application, with small examples that make their behaviour easier to understand through code.

## Table of Contents

- [Overview](#overview)
- [Hooks Covered](#hooks-covered)
- [Key Concepts](#key-concepts)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Repo Focus](#repo-focus)

## Overview

The application demonstrates React Hooks through focused examples, including state updates, side effects, references, memoization, reducers, and shared context.

It also includes a custom `useLocalStorage` Hook that keeps a value synchronized with browser local storage.

The goal is to understand how these Hooks behave in real components rather than only learning their definitions.

## Hooks Covered

| Hook / Concept | What the example demonstrates |
|---|---|
| `useState` | Managing component state, updating values, and working with objects. |
| `useEffect` | Running side effects in response to dependency changes. |
| `useRef` | Keeping mutable values between renders and accessing DOM elements. |
| `useMemo` | Caching a calculated value until its dependencies change. |
| `useCallback` | Keeping a function reference stable between renders. |
| `useReducer` | Managing state through a reducer and dispatched actions. |
| `useLayoutEffect` | Running an effect synchronously after DOM mutations and before browser paint. |
| `useContext` | Reading shared values from a Context Provider. |
| `React.memo` | Memoizing a component to help avoid unnecessary re-renders when its props are unchanged. |
| Custom Hook | Persisting a value in browser local storage with `useLocalStorage`. |

## Key Concepts

### State Management

The `useState` example demonstrates:

- Updating numeric state.
- Using functional state updates.
- Updating object state.
- Preserving existing object properties with the spread operator.

The `useReducer` example uses actions such as `inc`, `dec`, and `input` to update state through a reducer function.

### Side Effects

The `useEffect` example uses a timer to update a counter and reads shared values through `useContext`.

The `useLayoutEffect` example demonstrates the difference in timing between `useEffect` and `useLayoutEffect` through console output.

### References and DOM Access

The `useRef` example demonstrates two common use cases:

- Tracking a mutable render count without using state for that value.
- Accessing an input element directly to change its border style.

### Memoization

The project includes examples of:

- `useMemo` for caching a calculated cube value.
- `useCallback` for keeping a callback reference stable.
- `React.memo` for memoizing the Navbar component.

### Context API

An `AppContext` is created and provided through `ContextProvider`.

Components consume shared values using `useContext`, demonstrating how data can be accessed without passing it through every intermediate component.

### Custom useLocalStorage Hook

The custom Hook stores a value in browser local storage and updates it when the value changes.

In the main application, it is used to persist a username and display a welcome message.

## Project Structure

```text
React-hooks/
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── context/
│   │   └── AppContext.jsx
│   ├── hooks/
│   │   ├── UseCallback.jsx
│   │   ├── UseEffectHook.jsx
│   │   ├── UseLayoutEffect.jsx
│   │   ├── UseLocalStorage.jsx
│   │   ├── UseMemo.jsx
│   │   ├── UseReducer.jsx
│   │   ├── UseRef.jsx
│   │   └── UseStateHook.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Building component-based UI and using Hooks. |
| JavaScript (ES Modules) | Application logic and state handling. |
| Vite 8 | Development server and production build tooling. |
| CSS | Styling the examples. |
| Oxlint | JavaScript and JSX linting. |

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/hadiashah01/React-hooks.git
```

2. Navigate into the project:

```bash
cd React-hooks
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local URL shown in your terminal.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Creates a production build. |
| `npm run preview` | Previews the production build locally. |
| `npm run lint` | Runs Oxlint. |

## Repo Focus

This project focuses on understanding:

- How React state updates trigger renders.
- How dependency arrays affect `useEffect`.
- Why refs can store values without triggering renders.
- When memoization is useful.
- How reducers organize state transitions.
- How Context API shares values across components.
- How custom Hooks encapsulate reusable logic.


## Author 

**Hadia Shahjahan**

**Repository:** [React-hooks](https://github.com/hadiashah01/React-hooks)  
**Github:** [Github Profile Link ](https://github.com/hadiashah01/)  
**Linkedin:** [Linkedin Profile Link ](https://www.linkedin.com/in/hadia-shahjahan/) 


