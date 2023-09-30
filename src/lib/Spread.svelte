<script lang="ts">
	export let spread;
	export let homeTeam;
	export let awayTeam;

	const team = spread < 0 ? homeTeam : awayTeam;
	const adjustedSpread = spread < 0 ? spread : -spread;
</script>

<div class="text-xs">
	Spread: <span class="font-bold">{`${team} ${adjustedSpread}`}</span>
</div>
