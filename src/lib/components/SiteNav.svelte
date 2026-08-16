<script lang="ts">
	import { resolve } from '$app/paths';

	let { dark = false }: { dark?: boolean } = $props();

	const colors = $derived(
		dark
			? 'border-white/16 text-[#f7f7f5] [&_a]:text-[#b7b7b5] [&_a:hover]:text-white'
			: 'border-[#cfc0ec] text-[#1e1630] [&_a]:text-[#5a4f73] [&_a:hover]:text-[#6f3cc3]'
	);
</script>

<nav
	class={`mx-auto flex max-w-300 items-center justify-between border-b pb-4 text-sm ${colors}`}
	aria-label="Primary navigation"
>
	<a class="font-medium tracking-[-.03em] text-current! no-underline" href={resolve('/')}
		>Chris Mangan</a
	>
	<div class="flex items-center gap-5 text-xs">
		<a
			class="no-underline transition-colors focus-visible:ring-2 focus-visible:ring-[#8b5cf6] focus-visible:outline-none"
			href={resolve('openrcs')}>OpenRCS</a
		>
		<a
			class="no-underline transition-colors focus-visible:ring-2 focus-visible:ring-[#8b5cf6] focus-visible:outline-none"
			href="https://github.com/chrisjm66"
			target="_blank"
			rel="noopener noreferrer">GitHub ↗</a
		>
		<a
			class="no-underline transition-colors focus-visible:ring-2 focus-visible:ring-[#8b5cf6] focus-visible:outline-none"
			href="https://www.linkedin.com/in/manganchris/"
			target="_blank"
			rel="noopener noreferrer">LinkedIn ↗</a
		>
	</div>
</nav>
