<script lang="ts">
	import { isBefore } from 'date-fns';
	import { format } from 'date-fns-tz';

	export let gameTime;

	const time = format(gameTime, 'hh:mm a');
	const timeZone = format(gameTime, 'z', { timeZone: 'America/Los_Angeles' });

	const hasStarted = isBefore(new Date(), gameTime);
</script>

<div class="text-xs">
	{#if hasStarted}
		<span class="font-bold">{time}</span>
		<span class="pl-1 self-start">{timeZone}</span>
	{:else}
		<span class="font-bold text-error">Game started</span>
	{/if}
</div>
