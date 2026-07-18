import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const securityHeaders = [
	{
		key: 'Content-Security-Policy',
		value: "frame-ancestors 'none'; base-uri 'self'; form-action 'self'",
	},
	{
		key: 'X-Frame-Options',
		value: 'DENY',
	},
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff',
	},
	{
		key: 'Referrer-Policy',
		value: 'strict-origin-when-cross-origin',
	},
	{
		key: 'Permissions-Policy',
		value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
	},
];

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		qualities: [75, 90],
	},
	turbopack: {
		root: __dirname,
	},
	async headers() {
		return [
			{
				source: '/:path*',
				headers: securityHeaders,
			},
		];
	},
};

export default nextConfig;
