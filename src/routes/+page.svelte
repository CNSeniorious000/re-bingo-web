<script lang="ts">
  import { onMount } from "svelte";
  let cookies: string[] = [];
  onMount(() => (cookies = document.cookie.split("; ")));
</script>

<ul>
  {#each cookies as cookie}
    <li>{cookie}</li>
  {/each}
</ul>

<main>
  <div>
    <a href="//bingo.muspimerol.site/graphql">GraphiQL Console</a>
    <a href="/login">login</a>
  </div>
</main>

<style lang="postcss">
  main {
    @apply h-full grid place-items-center;
  }
  div {
    @apply flex gap-4;
  }
  ul {
    @apply absolute w-full bottom-0 p-10 font-mono flex flex-col break-all;
  }
  li {
    @apply border-b-1 last:border-none py-0.75em first:pt-0;
    @apply border-true-gray-500/30 text-black dark:text-white
  }
  a {
    @apply p-4 bg-white rounded-lg shadow-black/3 shadow-lg ring-current hover:ring-1.75 transition-all;
    @apply dark:(bg-true-gray-900);
  }
</style>
