# nSuns Calculator

This tool is meant to act as a tracker for the nSuns program, more info found [here](http://www.reddit.com/r/nsuns).

This is a full-stack CRUD application built with a React/Redux frontend and Node/Express backend writing to a SQL database. The front page will calculate your Training Max or 1 Rep Max depending on which value you enter. By creating an account, the user has access to persisted login via JWT, custom accessory plans, and saved lift values.

## Instructions

This workout program is intended for people who have some experience with lifting and form. It's recommended that new lifters use something like [Greyskull Linear Progression (GSLP)](https://thefitness.wiki/routines/r-fitness-basic-beginner-routine/) for 3-6 months. This program has less volume compared to nSuns but new lifters tend to gain muscle quickly so the volume isn't needed.

### Using nSuns

First thing to do is to calculate your 1 Rep Max using something like [this](https://strengthlevel.com/one-rep-max-calculator). Your training max is then calculated as 90% of that. Each day has two primary lifts, your T1 and T2 lifts. Once both are done, there are accessory lifts. Accessory lifts are going to be specific to your needs. Accessories are also necessary to offset the amount of push work done in the primary lifts. The nSuns subreddit recommends 3-6 accessories a day with 7 being high and 8 being too many.

## Features to be built

- Responsive design
- Saving 1+ values on AMRAP sets
- A stats page that will record progress and visualize it
- External sources on particular lifts
- Additional accessory presets
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

Redux refactor completed, all basic functions working. Currently styling and working on mobile responsiveness.
