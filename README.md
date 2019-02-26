# nSuns Calculator

This tool is meant to act as a tracker for the nSuns program, more info found [here](http://www.reddit.com/r/nsuns).

This is a full-stack CRUD application built with a React/Redux frontend and Node/Express backend writing to a SQL database. The front page will calculate your Training Max or 1 Rep Max depending on which value you enter. By creating an account, the user has access to persisted login via JWT, custom accessory plans, and saved lift values. Currently the editing and adding accessories function is being built.

## Features to be built

- Accessory customization and more presets
- Responsive design
- Saving 1+ values on AMRAP sets
- A stats page that will record progress and visualize it
- External sources on particular lifts
- Support for different variations of nSuns
- Plate calculator
- Metric measurements

## Technologies Used

- Javascript
- React/Redux
- SQL
- Node/Express
- Jest/Enzyme
- Authentication with JWT and bcrypt

## Status

Currently refactoring this project to use Redux and potentially Postgres in the future

Future versions will have support for different variations, the current version and default is the 5day variant.
