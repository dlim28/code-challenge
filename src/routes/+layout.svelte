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

<nav class="flex flex-col py-4 justify-center items-center bg-white shadow">
	<button class="w-1/3 flex items-center justify-center" on:click={() => {hidden = !hidden}}>
		<img src="/src/images/user-icon.svg" alt="A user profile icon" width="50" height="50" />
	</button>
	{#if !hidden}
		<ul transition:slide class="flex flex-col justify-center items-center">
			<li class="py-1">Home</li>
			<li class="py-1">Profile</li>
			<li class="py-1" on:click={() => {coinDialog.showModal()}}>Preferred Coin</li>
			<li class="py-1">Logout</li>
		</ul>
	{/if}
</nav>

<slot />

<Dialog dialogId="coinDialog" closeModal="{() => {coinDialog.close()}}"/>