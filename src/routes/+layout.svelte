<script lang="ts">
	import '../app.css';
	import MenuButton from './MenuButton.svelte';
</script>

<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width" />
		<title>Lockrace</title>
	</head>
	<body class="p-2">
		<slot />
    <MenuButton />
		<script
			async
			crossorigin="anonymous"
			data-clerk-publishable-key="pk_test_Z2xvd2luZy1jcm93LTEyLmNsZXJrLmFjY291bnRzLmRldiQ"
			src="https://glowing-crow-12.clerk.accounts.dev/npm/@clerk/clerk-js@4/dist/clerk.browser.js"
			type="text/javascript"
		></script>
		<script>
			addEventListener('load', async function () {
				await window.Clerk.load();
			});
		</script>
	</body>
</html>
