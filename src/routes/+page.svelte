<script lang="ts">
	import { resolve } from '$app/paths';
	import SiteNav from '#lib/components/SiteNav.svelte';
</script>

<svelte:head>
	<title>Chris Mangan</title>
	<meta name="description" content="The personal site of Chris Mangan." />
</svelte:head>

<main class="bg-[#f2ecff] text-[#1e1630]">
	<div class="absolute inset-x-0 top-0 z-10 px-6 pt-5 sm:px-8">
		<SiteNav />
	</div>
	<section class="relative grid min-h-svh place-items-center px-6" aria-labelledby="page-title">
		<div class="relative -translate-y-6 text-center sm:-translate-y-10">
			<h1
				id="page-title"
				class="m-0 text-[clamp(3rem,7vw,5.25rem)] leading-[.92] font-semibold tracking-[-.055em]"
			>
				Chris Mangan
			</h1>

			<nav class="mt-8 flex flex-wrap justify-center gap-5" aria-label="Social links">
				<a
					class="group inline-flex items-center gap-1.5 border-b border-[#6f3cc3]/30 pb-1 text-sm font-medium text-[#6f3cc3] no-underline transition-[border-color,color,transform] duration-150 ease-out hover:border-[#6f3cc3] hover:text-[#4e2593] focus-visible:ring-3 focus-visible:ring-[#6f3cc3]/35 focus-visible:outline-none active:translate-y-px"
					href="https://www.linkedin.com/in/manganchris/"
					target="_blank"
					rel="noopener noreferrer"
				>
					LinkedIn

					<span class="transition-transform duration-150 group-hover:translate-x-0.5">↗</span>
				</a>

				<a
					class="group inline-flex items-center gap-1.5 border-b border-[#6f3cc3]/30 pb-1 text-sm font-medium text-[#6f3cc3] no-underline transition-[border-color,color,transform] duration-150 ease-out hover:border-[#6f3cc3] hover:text-[#4e2593] focus-visible:ring-3 focus-visible:ring-[#6f3cc3]/35 focus-visible:outline-none active:translate-y-px"
					href="https://github.com/chrisjm66"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub

					<span class="transition-transform duration-150 group-hover:translate-x-0.5">↗</span>
				</a>
			</nav>
		</div>
		<a
			class="absolute bottom-8 inline-flex items-center gap-2 text-xs font-medium tracking-[.08em] text-[#5a4f73] uppercase no-underline transition-colors hover:text-[#6f3cc3] focus-visible:ring-3 focus-visible:ring-[#6f3cc3]/35 focus-visible:outline-none"
			href={resolve('#openrcs-project')}>Scroll <span aria-hidden="true">↓</span></a
		>
	</section>

	<section
		class="relative mx-auto grid max-w-300 items-stretch gap-10 px-6 pt-8 pb-20 sm:pt-12 sm:pb-28 md:grid-cols-[1.1fr_.9fr]"
		id="openrcs-project"
		aria-labelledby="project-title"
	>
		<div class="flex min-h-72 flex-col py-6 sm:py-8">
			<div>
				<h2
					id="project-title"
					class="m-0 text-[clamp(2rem,4vw,3.5rem)] leading-none font-semibold tracking-[-.055em]"
				>
					OpenRCS
				</h2>
				<p
					class="mt-4 mb-0 max-w-110 text-[clamp(1rem,1.4vw,1.125rem)] leading-relaxed text-[#5a4f73]"
				>
					Open Source Rail Control Simulator, a detailed & open source railroad signalling simulator
				</p>
			</div>
			<a
				class="mt-auto inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#6f3cc3] no-underline transition-transform duration-150 hover:translate-x-1 focus-visible:ring-3 focus-visible:ring-[#6f3cc3]/35 focus-visible:outline-none"
				href={resolve('openrcs')}>View project <span>→</span></a
			>
		</div>
		<a
			class="group relative min-h-60 overflow-hidden bg-[#1e1630] [background:linear-gradient(135deg,#281b43,#1e1630)] focus-visible:ring-3 focus-visible:ring-[#6f3cc3]/35 focus-visible:outline-none"
			href={resolve('openrcs')}
			aria-label="View OpenRCS"
		>
			<div class="absolute inset-x-0 top-1/2 border-t border-[#c5a9ff]/25"></div>

			<div
				class="absolute top-[30%] right-[20%] size-3 rounded-full border border-[#c5a9ff]/55"
			></div>
			<div
				class="absolute bottom-[30%] left-[22%] h-px w-[48%] bg-[#c5a9ff]/35 transition-transform duration-150 group-hover:translate-x-3"
			></div>
		</a>
	</section>
</main>
