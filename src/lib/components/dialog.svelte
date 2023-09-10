<script>
	import { preferredCoinData } from "$lib/store.ts";

	let preferredCoin;
	export let dialogId;
	export let closeModal;

	const submitCoin = () => {
		fetch(`https://trade.cointree.com/api/prices/AUD/${preferredCoin}`)
		.then(res => res.json())
		.then(data => {
			console.log(data)
			window.localStorage.setItem("preferredCoin", preferredCoin)
			$preferredCoinData = data
			closeModal()
		}).catch(error => {
			console.log(error)
			return [];
		})
	}
</script>

<style>
	.selected {
		background-color: #34d399;
		color: white;
	}
</style>

<dialog id="{dialogId}" class="relative" aria-labelledby="preferred-coin" aria-modal="true">
<!-- 	Background layer -->
	<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
<!-- 	Modal Body -->
		<div class="flex min-h-full items-end justify-center text-center">
			<div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl">
				<!--	Modal Title -->
				<h3 class="text-base font-semibold text-gray-900 px-4 py-4 bg-gray-50">
					Select your preferred coin:
				</h3>
				<!-- 	Modal Body -->
				<div class="bg-white px-4 py-4">
					<ul class="flex flex-col justify-center">
						<li class="flex justify-center py-4 rounded-xl transition duration-300" class:selected={preferredCoin === 'btc'} on:click={() => {preferredCoin = 'btc'}}>BTC</li>
						<li class="flex justify-center py-4 rounded-xl transition duration-300" class:selected={preferredCoin === 'eth'} on:click={() => {preferredCoin = 'eth'}}>ETH</li>
						<li class="flex justify-center py-4 rounded-xl transition duration-300" class:selected={preferredCoin === 'xrp'} on:click={() => {preferredCoin = 'xrp'}}>XRP</li>
					</ul>
				</div>
				<div class="bg-gray-50 flex py-3 px-6 gap-x-2">
					<button type="button" on:click={submitCoin} class="mt-3 inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm">Submit</button>
					<button type="button" on:click={closeModal} class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
				</div>
			</div>
		</div>
</dialog>
