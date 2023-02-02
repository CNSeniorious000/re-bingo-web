<script lang="ts">
  import type { ActionData } from "./$types";

  export let form: ActionData;
  console.log(form);
</script>

<div>
  <form action="/login" method="post" autocomplete="off">
    <label> username: <input name="username" type="text" /> </label>
    <label> password: <input name="password" type="password" /> </label>
    <button type="submit">login</button>
  </form>
</div>

<style lang="postcss">
  div {
    @apply h-full grid place-items-center;
  }
  form {
    @apply flex flex-col gap-4;
    @apply p-8 rounded-xl bg-white shadow-lg shadow-black/3;
    @apply dark:(bg-true-gray-700/50 shadow-none);
  }
  label {
    @apply flex flex-col gap-2;
  }
  input,
  button {
    @apply border-2 py-2 px-3 rounded-md border-true-gray-500/20;
    @apply outline-none transition-all;
  }
  input {
    @apply bg-transparent focus-visible:(!border-blue-500 bg-blue-500/5) hover:border-opacity-100;
    @apply dark:(focus-visible:(!border-blue-400 bg-blue-400/5));
  }
  button {
    @apply font-bold border-true-gray-900 mt-4 bg-true-gray-900 text-white dark:(border-white bg-white text-true-gray-900);
  }
  button:focus-visible,
  button:hover {
    @apply border-blue-500 bg-blue-500/5 text-blue-500;
    @apply dark:(border-blue-400 bg-blue-400/5 text-blue-400);
  }
</style>
