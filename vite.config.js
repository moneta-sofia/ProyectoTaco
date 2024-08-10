import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
	const isProduction = command === 'build';
	const baseUrl = isProduction ? '/your-production-path/' : '/';

	return {
		base: baseUrl,
		// other configurations...
	};
});