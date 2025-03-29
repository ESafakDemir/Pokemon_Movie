<<<<<<< HEAD
# PokemonMovie

# Movie Search App

This is a React-based movie search application that uses the OMDb API to fetch movie data. Users can search for movies by name, view details, paginate through results, and more.

## Features

- Search movies by title, year, and type (movie, series, or episode).
- Pagination: Displays 10 movies per page.
- Displays movie details including poster, title, year, IMDb ID, and more.
- Debounced search functionality to prevent excessive API calls as the user types.
- If the search box is empty, fetches and displays all movies.
- Default search term is set to "Pokemon" on initial load.
- Error handling when no movies are found or if an invalid API key is used.

## Technologies Used

- React
- Redux (with Redux Toolkit)
- OMDb API
- Custom Debounce Hook

## Installation

Follow these steps to set up the project locally:

### 1. Clone the repository

### 2. Install dependencies
Run the following command to install all required dependencies

### 3. Set up your OMDb API key
You need an OMDb API key to fetch movie data. You can get a free API key from OMDb API.

### 4. Run the application
Start the development server by running

### Usage

Search for movies: Start typing in the search box to search for movies. The application will display matching results.
Pagination: Use the pagination buttons to navigate through movie pages.
View movie details: Click on a movie to view more details about it, including its poster, genre, director, cast, and IMDb rating.

### Troubleshooting

If you encounter the error Invalid API key!, ensure that your API key is correctly set in the .env file.

If you encounter Movie not found! errors, verify that the search term is correctly typed and the movies exist for that search.
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 5914572 (movie first commit)
