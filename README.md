# Epi_FlipBoard_2020

## Description

3rd year free chosen project in which the goal is to implement an __RSS Articles feed__ that aggregates content from websites, magazines and social media.
It is inspired from the famous __FlipBoard Online Magazines__ : [FlipBoard](https://flipboard.com).


By default in the home page, all articles are filtered and displayed by most popular.


Furthermore, several categories are available (*listed below*) to filter articles from all services (*listed below*).


An authentification system is present, so the user can select and save articles to his __Favorite__ category.


Currently, the available services are :

* **New York Times**

* **The Guardian**

* **Yahoo**

The available categories are :

* **World**

* **Sport**

* **Culture**

* **Favorite**

## Requirements

| Technology    | Version |
|:-------       | -------:|
| node | v10.1+ |
| npm | v5+ |

You might be able to run the project with versions older than those listed above.

## How to setup the project

In order to start the project, you need to have the requirements satisfied.

To run the **server** : 1) Navigate to ./server folder 2) `node server`.

To build and run the **web client** : 1) Navigate to ./web_client 2) `npm install && npm start`.

## What are the different technologies used for the project

### Node.js & Express.js

Used as the __server__ and __backend__ framework for the project, it is reponsible of for the process and interaction with third-party APIs to fetch datas for all services supported by the application.


All datas travel from and to web client/server using http secured requests and authentification is encrypted using bcrypt package.


Note: check out __Endpoints.md__ for further details.


Runs on:

* `localhost:3000`.

### MongoDB

Used as the database for the project and set-up locally with AWS.
Datas are organized into collections with clean separation.


Runs on:

* `localhost:3000`.

### React.js

Used as the web client. It is reponsible to display and visually structured all the datas for the user experience.


Runs on:

* `localhost:8080` for local machine.

## Contributors

### Back End Developers

gabriel.pironneau@epitech.eu

hugo.lacour@epitech.eu

### Front End Web Developer

thomas1.vigier@epitech.Eu
