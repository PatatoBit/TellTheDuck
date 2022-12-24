<script lang="ts">
	import Duck from '../components/Duck.svelte';
	import '../styles/index.scss';

	let userInput: string = '';
</script>

<main>
	<Duck />

	<div class="user">
		<form
			on:submit={(e) => {
				e.preventDefault();
				alert(`I hope you get better! ${userInput}`);
				userInput = '';
			}}
		>
			<input class="input" type="text" placeholder="Tell me anything!" bind:value={userInput} />
			<button class="input">🦆</button>
		</form>
	</div>
</main>
