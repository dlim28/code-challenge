<script>
	import { slide } from 'svelte/transition'
	let hidden = true;
</script>

<nav class="flex flex-col py-4 justify-center items-center bg-red-700">
	<button class="w-1/3 flex items-center justify-center" on:click={() => {hidden = !hidden}}>
		<img src="/src/images/user-icon.svg" alt="A user profile icon" width="50" height="50" />
	</button>
	{#if !hidden}
		<ul transition:slide>
			<li>User Option 1</li>
			<li>User Option 2</li>
			<li on:click={() => {console.log('open dialog')}}>Preferred Coin</li>
			<li>User Option 4</li>
		</ul>
	{/if}
</nav>

<slot />