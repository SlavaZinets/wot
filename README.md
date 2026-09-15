# wot

A one-page web app for looking up player statistics in *World of Tanks*, built on the official Wargaming API.

## Features

- Search for players by nickname or account ID
- Region selection: **EU**, **ASIA**, or **NA**
- Displays a list of matching players (with a "show more" button when there are more than ten results) and their clan tag
- Click a player to view their stats
- Click the logo to reload the page

## Stack

- Vanilla JavaScript (ES modules)
- [Parcel](https://parceljs.org/) as the bundler/dev server
- Wargaming public API for player and clan data

## Running locally

```bash
npm install
npm test
```

`npm test` runs `npx parcel index.html`, which starts Parcel's dev server and serves the app locally.

To create a production build:

```bash
npm run build
```
