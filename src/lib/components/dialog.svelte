<script>

	export let preferredCoin;

	const submitCoin = () => {
		fetch(`https://trade.cointree.com/api/prices/AUD/${preferredCoin}`)
		.then(res => res.json())
		.then(data => {
			console.log(data)
		}).catch(error => {
			console.log(error)
			return [];
		})
	}
$: console.log(preferredCoin)
</script>

<dialog open>
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
</dialog>