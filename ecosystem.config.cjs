module.exports = {
    apps: [
        {
            name: "AliExpress_Clone",
            exec_mode: "cluster",
            instances: "max",
            script: "./.output/server/index.mjs",
            args: "--host 0.0.0.0 --port 3000",
            env: {
                NODE_ENV: "production",
                HOST: "0.0.0.0",
                PORT: 3000,
                NITRO_HOST: "0.0.0.0",
                NITRO_PORT: 3000,
            },
        },
    ],
};
