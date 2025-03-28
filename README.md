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
