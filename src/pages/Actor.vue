<template>
    <div>
        <div class="info h5">
            <div class="info__name">
                <img :src="img_url">
                <h1>{{ name }}</h1>
            </div>
            <div class="info__flex">
                <div class="info__stat">
                    <h5>NAME:</h5>
                    <div>
                        {{ name }}
                    </div>
                </div>
                <div class="info__stat">
                    <h5>SURNAME: </h5>
                    <div>
                        {{ surname }}
                    </div>
                </div>
                <div class="info__stat">
                    <h5>BIRTH:</h5>
                    <div>
                        {{ birth }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import endpoints from '../endpoints';
export default {
    name: "Actor",
    data() {
        return {
            id: '',
            actor: {
                nombre: '',
                apellido: '',
                nacimiento: '',
                img_url: '',
            },
        }
    },
    computed: {
        name() {
            return this.actor.nombre
        },
        surname() {
            return this.actor.apellido
        },
        birth() {
            return this.actor.nacimiento
        },
        img_url() {
            return this.actor.img_url
        }
    },
    created() {
        this.id = this.$route.params.id.toString();
        endpoints.getActor(this.id).then((actor) => {
            this.actor = actor
        })
    },
    methods: {
    }
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