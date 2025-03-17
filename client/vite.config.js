import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc';
import path from "path";
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(
    {
        // server:{port:8080},
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            // eslint-disable-next-line no-undef
            "@": path.resolve(__dirname, "src"),
        },
    },
})
