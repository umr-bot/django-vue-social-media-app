# vue_crash_todolist

## Project setup
```
npm install -g @vue/cli
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```
### Lints and fixes files
```
npm run lint
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### What you need to know:
Vue is a JavaScript framework used for building user interfaces and front-end applications.

It is a single page application framework - one page is loaded in the browser and everything else is done through a virtual DOM, and only certain parts of the page will be updated when they need to be It has its own router, so it can appear that you have multiple pages in your application.

Vue includes HTML, Javascript and CSS (template, functionality and styling)

To make HTTP requests to a back-end (API) -- ie. our Python Django:
-- for now I am making use of JSONPlaceholder, which provides a fake online REST API for Testing and Prototyping -- but I will soon change this to work with our code.

The view router: ie. GETTING DIFFERENT pages
-- I have currently just linked all the pages to the nav bar but will adjust this (first page= login/register page--> once you have logged in you can see the posts, edit your profile and access groups - where you can also send messages )