
![Logo of the project](https://github.com/tsquarius/proj_mgmt_app/blob/master/Logo.png)


# DASH. - a project management app
> my first full-stack project

DASH is a simple project / task management tool. It is built to function similar to other popular project management tools such as Trello.

[Link to site](https://dash-mgmt.herokuapp.com/#/)

### Overview

Within DASH, tasks are structured as follows:

* Collections
  * Boards
    * Cards (tasks)

**Collections** are is a collection of boards. These collections can be shared between users, providing them access to all the nested boards and cards.

**Boards** are sectioned into columns which help to break down your tasks into views that make sense for you.
Common ways to use the boards are:
1. Kanban - Sectioning the board into "Not Started", "In Progress", and "Completed" columns, allowing you to have an organized view of the status of your projects.
2. Monthly view - For a higher level view, you may choose to section your board into monthly columns, which helps you to see what the milestones and targets are for each month.

**Cards** represent individual tasks. These can be moved between columns in the board to track its progress.

## Tech

1. Ruby on Rails (5.2.3)
2. PostgreSQL
3. React (16.9.0)
4. Redux (4.04)
5. Npm (6.11.3)
6. Webpack (4.39.2)

Hosted on Heroku.

## Features

1. **Drag and drop** -
With the help of `react-beautiful-dnd`, cards can be moved seamlessly from column-to-column
via drag & drop. To make this work properly, I had to 
* implement a way to maintain the **order** of the cards within the state as well a ensure that it persists after moving. 
* to provide a more seamless feel, I created actions to asynchronously update the order via Redux

2. **Search/Filter** - "starts with..." search that allows you to filter the collection for cards that are relevant to you.
* with the help of Redux, I created the search action by asynchronously filtering the data already loaded into the state.
Using the search parameters in combination with a Selector function, I was able to control what the React Component renders.

3. **Mobile** - ensured that this app was not only accessible via Desktop, but also mobile. 
* one of the difficulties of this was that there can be large amounts of board columns and cards, which will inevitably go off screen. My solution for this was to create a layout with a "Netflix" feel. With the help of grids, I implemented side scrolling of columns and minimized the level of details shown on the cards. This provided for a cleaner feel.

4. **Tags & Comments** - Each card has the functionality to add tags as well as comments to improve the user experience

### Tags/Comments/Drag Drop
![Features1](https://github.com/tsquarius/proj_mgmt_app/blob/master/Features.gif)

### Filtering cards
![Features2](https://github.com/tsquarius/proj_mgmt_app/blob/master/Features2.gif)
