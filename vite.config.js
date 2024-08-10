import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
	const isProduction = command === 'build';
	const baseUrl = isProduction ? '/your-production-path/' : '/';

	return {
		base: baseUrl,
		// other configurations...
	};
});