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

## Data Persistence

I opted to persist the data in localStorage as a single stringified-JSON blob. This comes with some limitations:

- Max storage size ~10MB (20MB for Chrome, but varies by browser)
- `onChange` I am re-serializing the entire dataset which is very inefficient. This is easily fixed by serializing each task individually.

## Additional Libraries Used

I only added `clsx` as a basic tool for conditionally applying classes to HTML elements.

## Known UX Issues

### Textarea size

Textarea for description doesn't autoresize. This requires either using `contentEditable` (which is a pain with React) or calculating the height dynamically (on input and also on window resize. There is probably a library I could use).

### Using `focus-within`

`focus-within` is definitely easier than managing the state within the `App.js` and storing an "expanded" task. I don't need nearly as much event handling and I get acessibility features out of the box.

The downside is that you often fight against it when you want to keep the card expanded when it would otherwise lose focus. Example: clicking the delete button.
