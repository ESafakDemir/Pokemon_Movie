import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = 'ebb2fd40';  // Hesabıma tanımlı API key 
const BASE_URL = 'https://www.omdbapi.com/';

// Movie fetching async 
export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async ({ searchTerm = 'Pokemon', page = 1 }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}?s=${searchTerm}&page=${page}&apikey=${API_KEY}`);
      const data = await response.json();

      // Yanıtın formatını kontrol et
      console.log(data); // API'den gelen yanıtı görmek için

      // Yanıtın başarılı olup olmadığını kontrol et
      if (data.Response === 'True') {
        return data.Search; // Geçerli sonuçlar döndürülür
      } else {
        return rejectWithValue(data.Error); // Eğer film bulunamadıysa hata mesajını döndür
      }
    } catch (error) {
      return rejectWithValue(error.message); // Diğer hatalar
    }
  }
);

// Slice oluşturuluyor
const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload; // Hata mesajını alıyoruz
      });
  },
});

export default moviesSlice.reducer;
