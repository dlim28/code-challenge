<script>
	import "../app.css"
	import {browser} from "$app/environment";
	import { recommendedCoins } from "$lib/store.ts";
	import {onMount} from "svelte";

	onMount(() => {
		getRecommendedCoins()
	})

	const getCoin = async (coin) => {
		const res = await fetch(`https://trade.cointree.com/api/prices/AUD/${coin}`)
		return await res.json();
	}
	const getListOfCoins = async () => {
		if(!isMobileScreen()) {
			const listOfCoins = await fetch(`https://trade.cointree.com/api/prices/AUD/`)
			return await listOfCoins.json();
		} else {
			return []
		}
	}

	const getRecommendedCoins = async () => {
		await getListOfCoins().then(arrayOfCoins => {
			let recommended = []

			for (let i = 0; i < 4; i++) {
				 recommended.push(arrayOfCoins[(Math.floor(Math.random() * arrayOfCoins.length))])
			 }
			 console.log(recommended)
			$recommendedCoins = recommended
		})
	}

	$: isMobileScreen = () => {return window.innerWidth < 1280}
	$: hasData = $recommendedCoins.length > 0
</script>

{#if browser}
	{#await getCoin(window.localStorage.getItem('preferredCoin') ? window.localStorage.getItem('preferredCoin') : 'btc')}
	<h1>Waiting</h1>
	{:then data}
		<div class="xl:grid xl:grid-cols-2 xl:h-screen xl:mb-8">
			<div class="xl:col-start-1 xl:grid xl:grid-cols-2 overflow-hidden bg-white shadow-xl rounded-xl mx-2 xl:mx-4 mt-4 border border-gray-100">
				<div class="flex flex-col justify-center items-center px-4 py-6 xl:grid-start-1">
					<img src="src/images/user-icon.svg" alt="A Placeholder" width="100" height="100">
					<h3 class="text-lg font-semibold leading-6 text-gray-900">{data.buy}</h3>
					<h4 class="font-semibold text-xl italic">{data.ask.toFixed(3)}</h4>
				</div>
				<div class="hidden xl:flex flex-col justify-center items-center px-4 xl:grid-start-2">
					<div class="px-2 py-2 space-y-2 w-full">
						<div class="relative flex items-center justify-center space-x-3 rounded-lg border border-gray-300 bg-white shadow-sm hover:border-gray-400">
							<div class="min-w-0 flex flex-col text-center p-4">
								<p>Bid</p>
								<p class="italic">{data.bid.toFixed(3)}</p>
							</div>
						</div>
						<div class="relative flex items-center justify-center space-x-3 rounded-lg border border-gray-300 bg-white shadow-sm hover:border-gray-400">
							<div class="min-w-0 flex flex-col text-center p-4">
								<p>Rate</p>
								<p class="italic text-sm truncate">{data.rate}</p>
							</div>
						</div>
						<div class="relative flex items-center justify-center space-x-3 rounded-lg border border-gray-300 bg-white shadow-sm hover:border-gray-400">
							<div class="min-w-0 flex flex-col text-center p-4">
								<p>Spot Rate</p>
								<p class="italic">{data.spotRate.toFixed(3)}</p>
							</div>
						</div>
						<div class="relative flex items-center justify-center space-x-3 rounded-lg border border-gray-300 bg-white shadow-sm hover:border-gray-400">
							<div class="min-w-0 flex flex-col text-center p-4">
								<p>Date</p>
								<p class="italic">{new Date(data.timestamp).toDateString()}</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="xl:col-start-1 overflow-hidden bg-white shadow-xl rounded-xl mx-2 xl:mx-4 mt-2 xl:mt-4 border border-gray-100">
				<div class="grid grid-cols-2 px-2 py-2 gap-x-2 gap-y-2">
					{#if hasData && !isMobileScreen()}
						{#each $recommendedCoins as coin}
							<div class="relative flex items-center justify-center space-x-3 rounded-lg border border-gray-300 bg-white shadow-sm hover:border-gray-400">
								<div class="min-w-0 flex flex-col text-center p-4">
									<p>{coin.buy}</p>
										<p class="italic">${coin.ask.toFixed(3)}</p>
								</div>
							</div>
						{/each}
					{:else}
						<div class="relative flex items-center justify-center space-x-3 rounded-lg border border-gray-300 bg-white shadow-sm hover:border-gray-400">
							<div class="min-w-0 flex flex-col text-center p-4">
								<p>Bid</p>
								<p class="italic">{data.bid.toFixed(3)}</p>
							</div>
						</div>
						<div class="relative flex items-center justify-center space-x-3 rounded-lg border border-gray-300 bg-white shadow-sm hover:border-gray-400">
							<div class="min-w-0 flex flex-col text-center p-4">
								<p>Rate</p>
								<p class="italic text-sm truncate">{data.rate}</p>
							</div>
						</div>
						<div class="relative flex items-center justify-center space-x-3 rounded-lg border border-gray-300 bg-white shadow-sm hover:border-gray-400">
							<div class="min-w-0 flex flex-col text-center p-4">
								<p>Spot Rate</p>
								<p class="italic">{data.spotRate.toFixed(3)}</p>
							</div>
						</div>
						<div class="relative flex items-center justify-center space-x-3 rounded-lg border border-gray-300 bg-white shadow-sm hover:border-gray-400">
							<div class="min-w-0 flex flex-col text-center p-4">
								<p>Date</p>
								<p class="italic">{new Date(data.timestamp).toDateString()}</p>
							</div>
						</div>
					{/if}
				</div>
			</div>

			<!--  Table for desktop view  -->
			<div class="hidden xl:inline xl:h-screen col-start-2 row-start-1 row-span-2 bg-white shadow-xl rounded-xl mx-2 mt-4 xl:mx-4 border border-gray-100">
				<div class="h-screen overflow-y-auto px-8 rounded-xl">
					<table class="min-w-full divide-y divide-gray-300">
						<thead class="sticky top-0 bg-white w-full">
						<tr>
							<th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Name</th>
							<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Ask</th>
							<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Bid</th>
							<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Rate</th>
						</tr>
						</thead>
						<tbody class="divide-y divide-gray-200">
							{#await getListOfCoins()}
								<tr>Waiting</tr>
							{:then listOfCoins}
								{#each listOfCoins as coin}
									<tr>
										<td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{coin.buy}</td>
										<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{coin.ask.toFixed(3)}</td>
										<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{coin.bid.toFixed(3)}</td>
										<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{coin.rate}</td>
									</tr>
								{/each}
							{:catch error}
								<tr>{error.message}</tr>
							{/await}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	{:catch error}
		<p>{error.message}</p>
	{/await}
{/if}