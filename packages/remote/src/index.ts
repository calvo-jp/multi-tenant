import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    data: {
      id: "1",
      slug: "app-1",
      name: "App 1",
      description: "App made using svelte. 🥳🎉",
      cover: {
        url: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        width: 1,
        height: 1,
      },
    },
  },
});

export default app;
