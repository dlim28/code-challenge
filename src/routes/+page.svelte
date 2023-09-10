<script lang="ts">
	import "../app.css"
	import { preferredCoinData } from "$lib/store.ts";
	import {browser} from "$app/environment";

	const getCoin = async (coin: string | null) => {
		const res = await fetch(`https://trade.cointree.com/api/prices/AUD/${coin}`)
		return await res.json();
	}
</script>

{#if browser}
	{#await getCoin(window.localStorage.getItem('preferredCoin') ? window.localStorage.getItem('preferredCoin') : 'btc')}
	<h1>WAiting</h1>
	{:then data}
		<div class="rounded shadow-lg">
			<div class="flex flex-col items-center justify-center px-6 py-4 mt-6 border border-red-500">
				<img src="src/images/user-icon.svg" alt="A Placeholder" width="100" height="100">
				<h1 class="text-lg">{data.buy}</h1>
				<h2 class="font-semibold text-xl italic">{data.ask.toFixed(3)}</h2>
			</div>
		</div>

		<div class="flex flex-col rounded shadow-2xl my-4 p-4 gap-y-2 border border-red-500">
			<div class="flex flex-row justify-evenly">
				<div class="flex flex-col text-center p-4">
					<p>Bid</p>
					<p class="italic">{data.bid.toFixed(3)}</p>
				</div>
				<div class="flex flex-col text-center p-4">
					<p>Rate</p>
					<p class="italic">{data.rate}</p>
				</div>
			</div>
			<div class="flex flex-row justify-evenly">
				<div class="flex flex-col text-center p-4">
					<p>Spot Rate</p>
					<p class="italic">{data.spotRate.toFixed(3)}</p>
				</div>
				<div class="flex flex-col text-center p-4">
					<p>Date</p>
					<p class="italic">{new Date(data.timestamp).toDateString()}</p>
				</div>
			</div>
		</div>
	{:catch error}
		<p>{error.message}</p>
	{/await}
{/if}