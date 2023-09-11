<script lang="ts">
	import "../app.css"
	import {browser} from "$app/environment";

	const getCoin = async (coin: string | null) => {
		const res = await fetch(`https://trade.cointree.com/api/prices/AUD/${coin}`)
		return await res.json();
	}
</script>

<style>
	body {
		background: #f3f4f6;
	}
</style>

{#if browser}
	{#await getCoin(window.localStorage.getItem('preferredCoin') ? window.localStorage.getItem('preferredCoin') : 'btc')}
	<h1>Waiting</h1>
	{:then data}
		<div class="overflow-hidden bg-white shadow-xl rounded-xl mx-2 mt-4 border border-gray-100">
			<div class="flex flex-col justify-center items-center px-4 py-6">
				<img src="src/images/user-icon.svg" alt="A Placeholder" width="100" height="100">
				<h3 class="text-lg font-semibold leading-6 text-gray-900">{data.buy}</h3>
				<h4 class="font-semibold text-xl italic">{data.ask.toFixed(3)}</h4>
			</div>
		</div>

		<div class="overflow-hidden bg-white shadow-xl rounded-xl mx-2 mt-2 border border-gray-100">
			<div class="grid grid-cols-2 px-2 py-2 gap-x-2 gap-y-2">
				<div class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white shadow-sm hover:border-gray-400">
					<div class="min-w-0 flex flex-col text-center p-4">
						<p>Bid</p>
						<p class="italic">{data.bid.toFixed(3)}</p>
					</div>
				</div>
				<div class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white shadow-sm hover:border-gray-400">
					<div class="min-w-0 flex flex-col text-center p-4">
						<p>Rate</p>
						<p class="italic text-sm truncate">{data.rate}</p>
					</div>
				</div>
				<div class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white shadow-sm hover:border-gray-400">
					<div class="min-w-0 flex flex-col text-center p-4">
						<p>Spot Rate</p>
						<p class="italic">{data.spotRate.toFixed(3)}</p>
					</div>
				</div>
				<div class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white shadow-sm hover:border-gray-400">
					<div class="min-w-0 flex flex-col text-center p-4">
						<p>Date</p>
						<p class="italic">{new Date(data.timestamp).toDateString()}</p>
					</div>
				</div>
			</div>
		</div>
	{:catch error}
		<p>{error.message}</p>
	{/await}
{/if}