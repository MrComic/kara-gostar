module.exports = {
  apps: [
    {
      name: "app",
      script: "yarn",
      args: "start",
      stop_exit_codes: [0],
      exp_backoff_restart_delay: 100,
    },
  ],
};
