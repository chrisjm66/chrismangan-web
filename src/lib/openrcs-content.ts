/** Edit this file to update the OpenRCS landing page. */
export const openRcsContent = {
	title: 'OpenRCS',
	intro:
		'Open Source Rail Control Simulator is a realistic, intuitive, and fun railroad signalling simulation. Open source and available for all major desktop operating systems (Windows, Mac, Linux).',
	primaryLink: {
		label: 'View on GitHub',
		href: 'https://github.com/chrisjm66/openrcs'
	},
	simulation: {
		title: 'Background',
		intro: [
			'Railroads exist in real-life, and thus operate within the laws of physics.',
			'A track circuit does not detect a train by reading an arbitrary list of train positions from an array, but from detecting an electrical circuit and sending that data to the control system.',
			'A track is not just a line on a signalling diagram. Instead, it is a piece of infrastructure that maintains a physical location, gradient, and curvature.',
			'This is a key driver in the development of OpenRCS.'
		],
		details: [
			'Railroad components are simulated in layers. First, there is the physical layer, where tracks, signals, stations, switches, crossings, and more objects are located in the physical world. Second, these physical objects are mapped onto a diagram.',
			'Extensibility is key. All components of the simulation are designed to be modular, allowing users to simulate railroads at backyard and Grand Central scale.'
		]
	},
	features: [
		'Interlocking logic brings routes, points, track occupancy, and signal aspects together. A route request has to fit the state of the railway, and the simulator can make the consequences of that decision visible. The aim is to make safe movement feel like an outcome of the system, not a rule bolted on afterward.',
		'The signalling diagram and scenario editor will make it possible to shape the railway itself. Edit tracks, signals, and the visual diagram, then define the scenario around the way that railway is meant to operate. It should be practical to build something small for experimentation or something richer for a longer session.',
		'Timetables give the simulation a reason to keep moving. Run a planned service, then add delays, conflicts, disruptions, and the small operational problems that make railway control interesting. The fun is in resolving a live situation without losing the larger plan.',
		'OpenRCS is written in Rust and Typescript, and licensed under GPLv3. It is intended to be a project people can study, improve, adapt, and share. The open-source model also makes it easier for new signalling systems, layouts, and scenarios to grow with the community.'
	]
};
