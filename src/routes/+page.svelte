<script lang="ts">
	import "../app.css"
	import Dialog from "../lib/components/dialog.svelte"
</script>

<div class="rounded shadow-lg">
	<div class="flex flex-col items-center justify-center px-6 py-4 mt-6 border border-red-500">
		<img src="src/images/user-icon.svg" alt="A Placeholder" width="100" height="100">
		<h1 class="text-lg">Name of the coin</h1>
		<h2 class="font-semibold text-xl">Ask price: </h2>
	</div>
</div>

<div class="flex flex-col rounded shadow-2xl my-4 p-4 gap-y-2 border border-red-500">
	<div class="flex flex-row justify-evenly">
		<div class="flex flex-col text-center p-4">
			<p>Bid</p>
			<p class="italic">Bid Price</p>
		</div>
		<div class="flex flex-col text-center p-4">
			<p>Rate</p>
			<p class="italic">The Rate</p>
		</div>
	</div>
	<div class="flex flex-row justify-evenly">
		<div class="flex flex-col text-center p-4">
			<p>Spot Rate</p>
			<p class="italic">the spot rate</p>
		</div>
		<div class="flex flex-col text-center p-4">
			<p>Date</p>
			<p class="italic">The date</p>
		</div>
	</div>
</div>

<Dialog />