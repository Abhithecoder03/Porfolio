let userConfig = null;

try {
  // Dynamically import the user-specific configuration file
  userConfig = await import('./v0-user-next.config');
} catch (e) {
  // Log the error or silently ignore, based on your preference
  console.warn("Custom user config not found, using default config.");
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

// Merge the userConfig into nextConfig if available
if (userConfig) {
  mergeConfig(nextConfig, userConfig);
}

/**
 * Merges the user configuration into the nextConfig object.
 * @param {Object} nextConfig - The default Next.js config.
 * @param {Object} userConfig - The user-supplied config to merge.
 */
function mergeConfig(nextConfig, userConfig) {
  for (const key in userConfig) {
    if (userConfig.hasOwnProperty(key)) {
      // If the property in nextConfig is an object and not an array, merge them.
      if (
        typeof nextConfig[key] === 'object' &&
        !Array.isArray(nextConfig[key]) &&
        nextConfig[key] !== null
      ) {
        nextConfig[key] = {
          ...nextConfig[key],
          ...userConfig[key],
        };
      } else {
        nextConfig[key] = userConfig[key];
      }
    }
  }
}

export default nextConfig;
