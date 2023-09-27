<script lang="ts">
	let showModal = false;

	function closeModal() {
		showModal = false;
	}
</script>

<label class="btn btn-primary btn-lg px-3 rounded-full py-4 fixed bottom-3 left-3" for="menu-modal">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-6 w-6"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M4 6h16M4 12h16M4 18h7"
		/></svg
	>
</label>
<input class="modal-state" id="menu-modal" type="checkbox" bind:checked={showModal} />

<div class="modal w-screen">
	<label class="modal-overlay" for="menu-modal" />
	<div class="modal-content flex flex-col gap-5 w-screen p-0">
		<nav class="menu bg-gray-2 p-2 rounded-md">
			<section
				class="menu-section"
				on:click={() => closeModal()}
				on:keydown={undefined}
				role="button"
				tabindex="0"
			>
				<ul class="menu-items">
					<li class="menu-item"><a href="/">Home</a></li>
					<li class="menu-item"><a href="/games">Make Pick</a></li>
					<li class="menu-item"><a href="/scoreboard">Scoreboard</a></li>
					<li class="menu-item"><a href="/chat">Chat</a></li>
					<li class="menu-item"><a href="/players">Players</a></li>
				</ul>
			</section>
		</nav>
	</div>
</div>
