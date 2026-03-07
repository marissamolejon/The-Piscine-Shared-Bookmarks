# Project: Shared Bookmarks
#### By Marissa Molejon (@marissamolejon) and Tatiana Kuzmina (@tanibien)

## Introduction
A small web application that allows users to save, organize, and share useful web resources with others. Users can add bookmarks with a title and description, browse bookmarks saved by different users, and interact with them through likes or quick copy actions.

## Link to the deployed website
https://the-shared-bookmarks.netlify.app/

https://marissamolejon.github.io/The-Piscine-Shared-Bookmarks/Project-Shared-Bookmarks/


### User Story

While working on projects, developers frequently discover useful tools, guides, and articles that they may want to revisit later. Instead of losing these resources in browser tabs or scattered notes, we want a lightweight application that allows users to store links in one place with a title and a brief explanation of what the resource is about.

The platform should support multiple users so that developers can explore the resources saved by others. Each user’s bookmarks should be displayed with the newest additions appearing first, making it easy to see recently discovered content. Users should also be able to interact with bookmarks by copying the link quickly or showing appreciation through a like feature.

Adding a new bookmark should be simple and accessible through a clear form where users can enter the URL, title, and description. This makes collecting, organizing, and sharing helpful developer resources much more efficient.

### Features

- Select different users to view their bookmarks

- Bookmarks displayed in reverse chronological order

- Add new bookmarks with URL, title, and description

- Input validation for form fields

- Like bookmarks to highlight useful resources

- Copy bookmark URLs directly to clipboard

- Accessible form structure

- Data stored using localStorage

### Technologies Used

- HTML5
- JavaScript 
- LocalStorage API
- DOM Manipulation




## Set up
To install `jest`:
```
npm install jest
```
To install `http-server`:
```
npm install http-server
```

## Rubric
- [x] The website must contain a drop-down which lists five users
- [x] Selecting a user must display the list of bookmarks for the relevant user
- [x] If there are no bookmarks for the selected user, a message is displayed to explain this
- [x] The list of bookmarks must be shown in reverse chronological order
- [x] Each bookmark has a title, description and created at timestamp displayed
- [x] Each bookmark’s title is a link to the bookmark’s URL
- [x] Each bookmark's "Copy to clipboard" button must copy the URL of the bookmark
- [x] Each bookmark's like counter works independently, and persists data across sessions
- [x] The website must contain a form with inputs for a URL, a title, and a description. The form should have a submit button.
- [x] Submitting the form adds a new bookmark for the relevant user only
- [x] After creating a new bookmark, the list of bookmarks for the current user is shown, including the new bookmark
- [x] The website must score 100 for accessibility in Lighthouse
- [x] Unit tests must be written for at least one non-trivial function

## Screenshot

![App Screenshot](https://i.postimg.cc/xj7SnHqc/Screenshot-2026-03-05-at-18-26-57.png)
![App Screenshot](https://i.postimg.cc/0Q0rhn9b/Screenshot-2026-03-05-at-18-27-15.png)
![App Screenshot](https://i.postimg.cc/XYsR1yRH/Screenshot-2026-03-05-at-18-37-06.png)
![App Screenshot](https://i.postimg.cc/zDQWVGHc/Screenshot-2026-03-06-at-23-37-24.png)


## Testing
To run the unit tests for this project, use the following command:
`npm test`
The tests verify the core validation logic in `script.js` ensuring that bookmarks are not saved with empty titles or invalid URLs.
