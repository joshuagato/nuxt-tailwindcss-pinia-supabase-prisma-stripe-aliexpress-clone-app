module.exports = {
    apps: [
        {
            name: "NuxtAppName",
            port: "3000",
            exec_mode: "cluster",
            instances: "max",
            script: "./.output/server/index.mjs",
            env: {
                HOST: "0.0.0.0",
                PORT: 3000,
                NODE_ENV: "production",
            },
            env_production: {
                HOST: "0.0.0.0",
                PORT: 3000,
                NODE_ENV: "production",
            },
        },
    ],
};
