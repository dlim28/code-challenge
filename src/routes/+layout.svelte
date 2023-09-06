<script>
	import { slide } from 'svelte/transition'
	let hidden = true;
</script>

<nav class="flex flex-col">
	<div class="bg-red-700 justify-center py-4">
		<div on:click={() => {hidden = !hidden}}>User Icon</div>
		{#if !hidden}
			<ul transition:slide>
				<li>User Option 1</li>
				<li>User Option 2</li>
				<li>Preferred Coin</li>
				<li>User Option 4</li>
			</ul>
		{/if}
	</div>
</nav>

<slot />