<template>
  <div class="card" @click="movieDetails">
    <div class="card__image">
      <img :src="img_url" class="card-img-top" :alt="name">
    </div>
    <h4 class="card-title">{{ name }}</h4>
  </div>
</template>

<script>

export default {
  name: "MovieCard",
  props: [
    'name', 
    'id',
    'img_url'
  ]
    ,
  computed: {
  },
  methods: {
    movieDetails() {
      this.$router.push({ name: 'movie', params: { id: this.id } })
    }
  }
};
</script>

<style>
.card__image {
  width: 500px;
  height: 500px;
  object-fit: cover;
  overflow: hidden;
}

.card-img-top {
  width: 500px;
  height: 500px;
}

.card-title {
  margin-top: 40px;
  text-align: center;
}
</style>