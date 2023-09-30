<script lang="ts">
	export let awayTeam: any;
	export let homeTeam: any;
</script>

<div class="flex justify-around">
	<div class="flex-1 flex flex-col justify-around items-center">
		<div class="avatar avatar-lg avatar-squared">
			<img src={awayTeam.logo} alt="away team logo" />
		</div>
		<div class="font-bold">{awayTeam.shortName}</div>
	</div>

	<div class="text-center text-xl font-bold">@</div>

	<div class="flex-1 flex flex-col justify-center items-center">
		<div class="avatar avatar-lg avatar-squared">
			<img src={homeTeam.logo} alt="home team logo" />
		</div>
		<div class="font-bold">{homeTeam.shortName}</div>
	</div>
</div>
