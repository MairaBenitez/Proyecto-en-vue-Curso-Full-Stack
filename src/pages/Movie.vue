<template>
    <div>
        <div class="info h5">
            <div class="info__name">
                <img :src="img_url">
                <h1>{{ name || "-" }}</h1>
            </div>
            <div class="info__flex">
                <div class="info__stat">
                    <h5>NAME:</h5>
                    <div>
                        {{ name || "-" }}
                    </div>
                </div>
                <div class="info__stat">
                    <h5>DIRECTOR: </h5>
                    <div>
                        {{ director || "-" }}
                    </div>
                </div>
                <div class="info__stat">
                    <h5>DURATION:</h5>
                    <div>
                        {{ duration || "-" }}
                    </div>
                </div>
                <div class="info__stat">
                    <h5>SYNOPSIS: </h5>
                    <div>
                        {{ synopsis || "-" }}
                    </div>
                </div>
            </div>

        </div>
        <div class="info__stat">
            <h5>ACTORS: </h5>
            <div class="info__list" v-for="actor in actors" @click="actorDetails(actor.id)">
                {{ actor.nombre || "-" }}
            </div>
        </div>
    </div>
</template>

<script>





import endpoints from '../endpoints';
export default {
    name: "Movie",
    data() {
        return {
            id: '',
            movie: {
                nombre: '',
                director: '',
                duracion: '',
                img_url: '',
                sinopsis: '',
                actores: [],
            },
            arrayActores: []
        }
    },
    computed: {
        name() {
            return this.movie.nombre
        },
        director() {
            return this.movie.director
        },
        duration() {
            return this.movie.duracion
        },
        synopsis() {
            return this.movie.sinopsis
        },
        img_url() {
            return this.movie.img_url
        },
        actors() {
            return this.movie.actores.map((actor) => {
                return actor
            })
        },
    },
    created() {

        this.id = this.$route.params.id.toString();
        endpoints.getMovie(this.id).then((movie) => {
            movie.actores.forEach(actor => {
                endpoints.getActor(actor)
            });
            for (let index = 0; index < movie.actores.length; index++) {
                endpoints.getActor(movie.actores[index]).then((actor) => {
                    let objActor = {}
                    objActor.id = actor.id
                    objActor.nombre = actor.nombre + ' ' + actor.apellido
                    this.arrayActores.push(objActor)
                });
            }
            this.movie = movie
            this.movie.actores = this.arrayActores
        })
    },
    methods: {
        actorDetails(idActor) {
            this.$router.push({ name: 'actor', params: { id: idActor } })
        }
    },
};
</script>

<style scoped>
span {
    font-weight: bold;
}

.info {
    padding: 0 2em;
    margin-top: 2em;
    justify-items: stretch;
    align-items: stretch;
}

.info__name {
    grid-row: 1 / span 2;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
}

.info__stat {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
    box-shadow: 0 0 10px #e21010;
    transition: 200ms ease;
}

.info__stat:hover {
    box-shadow: 0 0 20px #e21010;
    transform: scale(105%);
}

.info__stat h5 {
    text-align: center;
    font-weight: bold;
    background-color: #e21010;
    color: white;
}

.info__stat>div {
    display: flex;
    justify-content: space-evenly;
}

.info__flex {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.info__list {
    min-width: 340px;
    padding: 30px;
    transition: 200ms ease;
    cursor: pointer;
}

.info__stat p,
.info__stat h5,
.info__stat div {
    margin: 0;
    padding: 0.5rem
}

@media screen and (max-width: 600px) {
    .info {
        display: flex;
        flex-direction: column;
    }

    .info__name {
        width: 100%;
        margin-bottom: 2em;
    }

    .info__flex {
        gap: 2em;
    }

    .info__stat {
        margin: 0;
    }

    hr {
        display: block;
        margin: 2em 0;
    }
}
</style>
