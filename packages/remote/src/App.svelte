<script lang="ts">
  interface IApp {
    id: string;
    slug: string;
    name: string;
    description: string;
    cover: {
      url: string;
      width: number;
      height: number;
    };
  }

  export let data: IApp | undefined = undefined;
</script>

{#if data}
  <div class="container">
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>

      <div class="image">
        <img src={data.cover.url} alt={data.name} draggable="false" />
      </div>
    </div>
  </div>
{/if}

<style>
  :global(*, *::after, *::before) {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :global(html) {
    scroll-behavior: smooth;
  }

  :global(body) {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: white;
    color: #171717;
    scroll-behavior: smooth;
  }

  :global(input, select, textarea, button) {
    font: inherit;
    color: inherit;
  }

  :global(button) {
    cursor: pointer;
  }

  :global(a) {
    text-decoration: none;
  }

  :global(ol, ul) {
    list-style: none;
  }

  .container {
    max-width: 900px;
    margin: 0px auto;
    padding: 4rem;
  }

  h1 {
    font-family: "Source Serif Pro", Arial, Helvetica, sans-serif;
  }

  p {
    color: #262626;
  }

  .image {
    margin-top: 1rem;
    width: fit-content;
    display: flex;
    overflow: hidden;
  }

  .image img {
    max-width: 100%;
    max-height: 400px;
  }
</style>
