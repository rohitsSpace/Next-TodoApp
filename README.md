# TODO APP

> This is simple but elegant TODO app built with of [Next JS](https://nextjs.org/), LocalStorage (as a storage)

## Demo

![2021-08-15_21-27-44 (1)](https://user-images.githubusercontent.com/40739903/129485212-046e4fd7-e01f-4719-b7b9-556ea5345184.gif)

## Features

- Add/Delete category for your days to plan
- Add/Delete todo items into a single categories.
- You can change the order of your TODO [within a single category or multiple categories]
- No DB setup required (using local storage)
- SSR (server side rendering enabled as it comes by default with next JS).
- Built with react-bootstrap so its mobile responsive.

## Setup

Clone repository

```
git clone git@github.com:Rohitturbot/Next-TodoApp.git
```

go to

```
cd ./Next-TodoApp
```

install dependencies

```
yarn  install or npm i
```

run project

```
npm start
```

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


```
npm run build
```

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

## Deployment

I've used netlify to deploy the app, We can use [Netlify](https://netlify.com/) or [Varcel](https://vercel.com/) as well both are great and very simple to setup.
But in case of netlify you need to use `npx next export` to get the built to deploy.

Few steps to deploy on netlify [Manual, we can setup automatic deployment as well its easy to do ]

1. Create an account to netlify
2. Install `netlify CLI`
3. Login to netlify using cli
4. Prepare the build to deploy using `npx next export` >>> This will export the build to `out` dir
5. Now `run netlify deploy` it will ask few simple questions simply answer them and now just after 5 sec site is live `[as dev]`
6. To make your dev deploy to production run `netlify deploy --prod`


## Note

## Things can be improved

### User Experience vise improvements
- Search for task
- Edit of the task and category
- Show All the deleted tasks
- Show create/update or delete data of the a task and category

### Technical improvements

- Firebase or any DB can be used to save data rather than localStorage
- Edge cases handling and few logics can be improved of the app.
- Add storybooks for other components.
- Add CI/CD for the app to deploy on netlify [its manual now]