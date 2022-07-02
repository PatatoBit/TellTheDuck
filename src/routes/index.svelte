<script lang="ts">
  import Form from '$lib/components/Form.svelte';
  import Image from '$lib/components/Image.svelte';
  import { modal } from '$lib/store';
  import { goto } from '$app/navigation';

  let clicked = 0;
</script>

<div class="grid h-screen place-items-center dark:bg-black">
  <div class="flex flex-col items-center justify-center gap-12">
    <img class="w-56 h-56" src="assets/rubberduck.png" alt="Rubber Duck">
    <button class="font text-4xl dark:text-white bg-yellow-400 py-2 px-4 rounded-lg" on:click={() => ($modal = true)}>Tell the Duck</button>
  </div>
</div>

{#if $modal}
  <Form closeModal={() => ($modal = false)} />
{/if}
