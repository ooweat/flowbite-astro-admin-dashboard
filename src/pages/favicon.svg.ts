import type { APIRoute } from 'astro';

export const get: APIRoute = function get(/* { params, request } */) {
	/* IDEA: Can be dynamicized (alternative colors…) */

	const icon = /* html */ `
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="25.000000pt" height="25.000000pt" viewBox="0 0 25.000000 25.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,25.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M0 125 l0 -125 125 0 125 0 0 125 0 125 -125 0 -125 0 0 -125z m98
13 c3 -54 5 -58 27 -58 22 0 24 4 27 58 3 51 5 57 26 60 22 3 23 2 20 -75 l-3
-78 -70 0 -70 0 -3 78 c-3 77 -2 78 20 75 21 -3 23 -9 26 -60z"/>
</g>
</svg>

`;

	return {
		body: icon,
		headers: {
			'Content-Type': 'image/svg+xml',
		},
	};
};
