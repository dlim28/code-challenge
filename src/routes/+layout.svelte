<script>
	import { slide } from 'svelte/transition'
	import {onMount} from "svelte";
	import Dialog from "$lib/components/dialog.svelte";

	let hidden = true;
	let coinDialog;

	onMount(() => {
		coinDialog = document.getElementById("coinDialog")
	})
</script>

<nav class="flex flex-col xl:grid xl:grid-cols-3 py-4 xl:px-4 justify-center items-center bg-gradient-to-r from-green-300 via-green-400 to-green-500 shadow-lg">
	<h1 class="hidden xl:grid text-xl font-bold xl:col-start-2 xl:justify-center">Coin Exchange</h1>
	<button class="items-center justify-center lg:col-start-3 lg:justify-self-end" on:click={() => {hidden = !hidden}}>
		<svg fill="none" stroke="currentColor" stroke-width="1.0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="50" height="50">
			<path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
		</svg>
	</button>
	{#if hidden}
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="currentColor" class="xl:hidden w-3 h-3">
			<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
		</svg>
	{:else}
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="currentColor" class="xl:hidden w-3 h-3">
			<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
		</svg>
	{/if}
	{#if !hidden}
		<ul transition:slide class="flex flex-col justify-center items-center xl:block xl:absolute xl:top-12 xl:right-6 xl:z-10 xl:mt-2 xl:w-48 xl:origin-top-right rounded-md xl:bg-white py-1 xl:shadow-lg xl:ring-1 xl:ring-black xl:ring-opacity-5 xl:focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
			<li class="cursor-pointer block px-4 py-2 text-sm text-gray-700 xl:hover:bg-gray-200" role="menuitem" tabindex="-1" id="user-menu-item-0">Profile</li>
			<li class="cursor-pointer block px-4 py-2 text-sm text-gray-700 xl:hover:bg-gray-200" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</li>
			<li class="cursor-pointer block px-4 py-2 text-sm text-gray-700 xl:hover:bg-gray-200" on:click={() => {coinDialog.showModal()}}>Preferred Coin</li>
			<li class="cursor-pointer block px-4 py-2 text-sm text-gray-700 xl:hover:bg-gray-200" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</li>
		</ul>
	{/if}
</nav>

<slot />

<Dialog dialogId="coinDialog" closeModal="{() => {coinDialog.close()}}"/>