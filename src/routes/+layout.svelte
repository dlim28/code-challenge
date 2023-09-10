<script>
	import { slide } from 'svelte/transition'
	import Dialog from "$lib/components/dialog.svelte";
	import {onMount} from "svelte";

	let hidden = true;
	let coinDialog;

	onMount(() => {
		coinDialog = document.getElementById("coinDialog")
	})
</script>

<nav class="flex flex-col py-4 justify-center items-center bg-green-600">
	<button class="w-1/3 flex items-center justify-center" on:click={() => {hidden = !hidden}}>
		<img src="/src/images/user-icon.svg" alt="A user profile icon" width="50" height="50" />
	</button>
	{#if !hidden}
		<ul transition:slide class="text-zinc-200">
			<li class="py-1">User Option 1</li>
			<li class="py-1">User Option 2</li>
			<li class="py-1" on:click={() => {coinDialog.showModal()}}>Preferred Coin</li>
			<li class="py-1">User Option 4</li>
		</ul>
	{/if}
</nav>

<slot />

<Dialog dialogId="coinDialog" closeModal="{() => {coinDialog.close()}}"/>