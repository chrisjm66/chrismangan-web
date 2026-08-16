<script lang="ts">
	import SiteNav from '#lib/components/SiteNav.svelte';
	import { openRcsContent } from '#lib/openrcs-content.js';
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->

<svelte:head>
	<title>{openRcsContent.title}</title>
	<meta name="description" content={openRcsContent.description} />
</svelte:head>

<main class="min-h-svh bg-[#090909] px-5 py-5 text-[#f7f7f5] sm:px-8 lg:px-[clamp(2rem,5vw,5rem)]">
	<SiteNav dark />

	<section class="mx-auto max-w-300 py-[clamp(5rem,13vh,9rem)]">
		<h1 class="m-0 text-[clamp(3.25rem,7vw,6.25rem)] leading-[.9] font-medium tracking-[-.07em]">
			{openRcsContent.title}
		</h1>
		<p class="mt-5 mb-0 max-w-135 text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.6] text-[#b7b7b5]">
			{openRcsContent.intro}
		</p>
		<p class="mt-4 mb-0 text-sm text-[#8a8a88]">
			{openRcsContent.description}
		</p>
		<a
			class="mt-7 inline-flex items-center gap-2 rounded-md bg-[#8b5cf6] px-4 py-2.5 text-sm font-medium text-white no-underline transition-[transform,background-color] duration-150 ease-out hover:bg-[#a78bfa] focus-visible:ring-3 focus-visible:ring-[#8b5cf6]/50 focus-visible:outline-none active:scale-[.97]"
			href={openRcsContent.primaryLink.href}
			target="_blank"
			rel="noopener noreferrer">{openRcsContent.primaryLink.label} <span>↗</span></a
		>
	</section>

	<section
		class="mx-auto max-w-300 border-t border-white/16 py-[clamp(4rem,10vw,8rem)]"
		aria-labelledby="simulation-title"
	>
		<h2
			id="simulation-title"
			class="m-0 max-w-145 text-[clamp(2rem,4vw,4rem)] leading-[.98] font-medium tracking-[-.055em]"
		>
			{openRcsContent.simulation.title}
		</h2>
		<div
			class="mt-6 max-w-140 space-y-5 text-[clamp(1rem,1.25vw,1.125rem)] leading-[1.65] text-[#b7b7b5]"
		>
			{#each openRcsContent.simulation.intro as paragraph (paragraph)}
				<p class="m-0">{paragraph}</p>
			{/each}
		</div>
		<ul class="mt-12 grid list-none gap-x-10 p-0 md:grid-cols-3">
			{#each openRcsContent.simulation.details as detail (detail)}
				<li class="border-t border-white/16 py-5 text-sm leading-[1.65] text-[#b7b7b5]">
					{detail}
				</li>
			{/each}
		</ul>
	</section>

	<section
		class="mx-auto max-w-300 border-t border-white/16 py-[clamp(4rem,10vw,8rem)]"
		aria-labelledby="features-title"
	>
		<h2
			id="features-title"
			class="m-0 text-[clamp(2rem,4vw,4rem)] leading-none font-medium tracking-[-.055em]"
		>
			Features
		</h2>
		<ul class="mt-10 list-none border-t border-white/16 p-0">
			{#each openRcsContent.features as feature (feature)}
				<li
					class="border-b border-white/16 py-7 text-[clamp(1rem,1.25vw,1.125rem)] leading-[1.65] text-[#b7b7b5]"
				>
					{feature}
				</li>
			{/each}
		</ul>
	</section>
</main>
