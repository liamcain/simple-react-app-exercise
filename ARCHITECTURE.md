# Architecture

This document outlines the design decisions made while creating this simple TODO app.

## Requirements

1. User can create / update / delete TODOs
2. A Todo has a title, description, state (Done or not
3. TODOs are saved (the user can refresh the browserand the TODOs will still appearthere)
4. The user can search for TODOs (free search by titleor description)
5. [EXTRA] Make it pretty (or at lease possible to makepretty)
6. [EXTRA] If the users click on the TODO it moves themto a new page that displays theTODO (use a Router)

## Setup

Created using Create React App for a simple setup.

```bash
yarn create react-app take-home-todo --template typescript
```

## Styling

While I like Styled-Components and I would love to try out TailwindCSS, I think I'm going to stick with basic CSS for now to avoid extra setup.
