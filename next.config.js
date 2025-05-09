/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
    reactStrictMode: true,
    logging: {
        fetches: { hmrRefreshes: true, fullUrl: true },
    },
    experimental: {
        viewTransition: true,
        // ppr: "incremental",
        // dynamicIO: true,
        preloadEntriesOnStart: true,
        clientSegmentCache: true,
        optimisticClientCache: true,
        appDocumentPreloading: true,
    },
};

export default config;
