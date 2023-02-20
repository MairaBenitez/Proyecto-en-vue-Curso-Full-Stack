const routes = [
  {
    name: "movieList",
    path: "/",
    component: () => import("./pages/MarvelMoviesList.vue"),
  },
  {
    name: "movie",
    path: "/movie/:id",
    component: () => import("./pages/Movie.vue"),
  },
  {
    name: "actor",
    path: "/actor/:id",
    component: () => import("./pages/Actor.vue"),
  },
];

export default routes;
