<template>
    <div class="page">
        <h1>Lista de Peliculas de Marvel ({{ count }})</h1>
        <div class="list">
            <MovieCard v-for="(movie, key) in movieList" :key="key" :name="movie.nombre" :id="movie.id"
                :img_url="movie.img_url" class="list__card" />
        </div>
    </div>
</template>

<script>
import endpoints from '../endpoints';
import MovieCard from '../components/MovieCard.vue';
export default {
    components: {
        MovieCard
    },
    name: "MovieList",
    data() {
        return {
            movieList: [],
            count: 0
        }
    },
    created() {
        endpoints.getMovieList().then((list) => {
            this.movieList = list
            this.count= this.movieList.length
        });
    }
}
</script>

<style scoped>
.list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 80px;
    margin-top: 40px;
}

.list__card {
    min-width: 340px;
    padding: 30px;
    transition: 200ms ease;
    cursor: pointer;
}

.list__card:hover {
    box-shadow: 0 0 40px gray;
    transform: scale(105%);
}
</style>