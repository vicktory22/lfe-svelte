<script lang="ts">
	type Team = {
		teamId: number;
		displayName: string;
		logo: string;
	};

	export let team: Team;
	export let spread: number;
</script>

<div class="card drop-shadow-lg max-w-full cursor-pointer">
	<div class="card-body">
		<div class="flex justify-around items-center">
			<div class="text-3xl font-bold">{spread}</div>
			<div class="flex flex-col items-center">
				<div>{team.displayName}</div>
				<div class="w-12"><img src={team.logo} alt="team logo" /></div>
			</div>
		</div>
	</div>
</div>
