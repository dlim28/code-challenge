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

<nav class="flex flex-col xl:grid xl:grid-cols-3 py-4 xl:px-4 justify-center items-center bg-gradient-to-r from-green-400 to-green-500 shadow-lg">
	<h1 class="hidden xl:grid text-xl font-bold xl:col-start-2 xl:justify-center">Coin Exchange</h1>
	<button class="items-center justify-center lg:col-start-3 lg:justify-self-end" on:click={() => {hidden = !hidden}}>
		<svg fill="none" stroke="currentColor" stroke-width="1.0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="50" height="50">
			<path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
		</svg>
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