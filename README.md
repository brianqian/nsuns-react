# nSuns Calculator

This tool is meant to act as a tracker for the nSuns program, more info found [here](http://www.reddit.com/r/nsuns).

This is a full-stack CRUD application built with a React/Redux frontend and Node/Express backend writing to a SQL database. The front page will calculate your Training Max or 1 Rep Max depending on which value you enter. By creating an account, the user has access to persisted login via JWT, custom accessory plans, and saved lift values.

## Instructions

This workout program is intended for people who have some experience with lifting and form. It's recommended that new lifters use something like [Greyskull Linear Progression (GSLP)](https://thefitness.wiki/routines/r-fitness-basic-beginner-routine/) for 3-6 months. This program has less volume compared to nSuns but new lifters tend to gain muscle quickly so the volume isn't needed.

### Using nSuns

First thing to do is to calculate your 1 Rep Max using something like [this](https://strengthlevel.com/one-rep-max-calculator). Your training max is then calculated as 90% of that. Each day has two primary lifts, your T1 and T2 lifts. Once both are done, there are accessory lifts. Accessory lifts are going to be specific to your needs. Accessories are also necessary to offset the amount of push work done in the primary lifts. The nSuns subreddit recommends 3-6 accessories a day with 7 being high and 8 being too many.

## Features to be built

- ~~Responsive design~~
- ~~Rest Timers~~
- ~~Metric measurements~~
- Support for different variations of nSuns
- Additional accessory presets
- Saving 1+ values on AMRAP sets
- A stats page that will record progress and visualize it
- Plate calculator
- External sources on particular lifts

## Technologies Used

- Javascript
- React/Redux
- Styled Components
- SQL
- Node/Express
- Jest/Enzyme
- Authentication with JWT and bcrypt

## Status

Redux refactor completed, all basic functions working. Currently styling and working on mobile responsiveness.

## Issues

- A major pain point in this project was caused by choosing to let the users choose their base accessory setting. I had the option to seed the database on account creation which would have made it much easier to update. With the current version, the accessory plan for each user gets seeded when the user makes their first CRUD action. This means when the user edits their accessories there needs to be a check if it's the first time they're doing so. If it is the first time, the database gets seeded and returns a starting ID and how many rows were added.

  The first time I tried this I tried to break up this process into three steps: seed the database, execute the CRUD action, and update the store with the new data. I ran into a problem where my actions were getting executed with an accessory ID that didn't exist in the database. When entering multiple values into the database, mySQL only returns the starting value of the primary key and how many rows were affected. I had no way of identifying the specific accessory I wanted to change.

  The solution to this was to pass along a copy of the accessory plan and edit it before seeding the database. Then I could also pass that edited plan to the reducers to update the store. This resulted in a monster of a thunk that needs to be broken down somehow in the future.

- Another issue I ran into was a problem with understanding how React keys work. Every time I tried to interact with my website, everything that was generated using an array as a source would re-render. I thought at first that it was changes to the store that triggered this so I added specific actions/state to keep track of menus that should stay open or closed. It wasn't until later I found out that it was because I was using uuid to generate a unique key based on time within my render methods. Since React checks for changes in properties, it seemed like each item had something different about it and would trigger a re-render. Uuid was originally used because I had no database id's to assign to the default values so that was replaced by manually setting id's until a better solution.
