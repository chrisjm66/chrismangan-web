<script lang="ts">
	import { resolve } from '$app/paths';
	import SiteNav from '$lib/components/SiteNav.svelte';
</script>

<svelte:head>
	<title>Page not found · Chris Mangan</title>
</svelte:head>

<main
	class="min-h-svh bg-[#f3f2ec] px-5 py-5 text-[#17201e] sm:px-10 lg:px-[clamp(2.5rem,4vw,4.5rem)]"
>
	<SiteNav />
	<div class="grid min-h-[calc(100svh-5rem)] content-center">
		<p class="m-0 text-[.675rem] leading-[1.3] font-bold tracking-[.12em] text-[#5f6965] uppercase">
			404 · Wrong track
		</p>
		<h1
			class="m-[.8rem_0_1rem] max-w-[8ch] text-[clamp(4.6rem,11.5vw,10.6rem)] leading-[.84] font-bold tracking-[-.085em]"
		>
			This page<br />isn’t here.
		</h1>
		<p class="mb-7 max-w-112 text-[1.1rem] text-[#5f6965]">
			The route you requested doesn’t lead anywhere. Let’s get you back on track.
		</p>
		<a
			class="inline-flex w-fit items-center gap-3 rounded-full bg-[#17201e] px-4 py-3 text-[.825rem] font-bold text-[#f3f2ec] no-underline"
			href={resolve('/')}>Return home <span>→</span></a
		>
	</div>
</main>
