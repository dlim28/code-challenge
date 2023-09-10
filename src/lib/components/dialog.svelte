<script>
	import { fade } from 'svelte/transition'

	let preferredCoin;
	export let dialogId;
	export let closeModal;

	const submitCoin = () => {
		fetch(`https://trade.cointree.com/api/prices/AUD/${preferredCoin}`)
		.then(res => res.json())
		.then(data => {
			console.log(data)
			closeModal()
		}).catch(error => {
			console.log(error)
			return [];
		})
	}
</script>

<dialog id="{dialogId}" transition:fade={{delay: 250, duration: 500}}>
	<h1>Select a preferred coin:</h1>
	<input type="radio" name="btc" value="btc" bind:group={preferredCoin}/>
	<label for="btc">BTC</label>
	<input type="radio" name="eth" value="eth" bind:group={preferredCoin}/>
	<label for="eth">ETH</label>
	<input type="radio" name="xrp" value="xrp" bind:group={preferredCoin}/>
	<label for="xrp">XRP</label>

	<button on:click={submitCoin}>
		Submit
	</button>
	<button on:click={closeModal}>
		Cancel
	</button>
</dialog>