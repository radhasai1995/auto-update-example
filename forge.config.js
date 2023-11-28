module.exports = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-snap',
      config: {},
    },
    {
      name: '@reforged/maker-appimage',
      config: {},
    }
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
  publishers: [
    {
      "name": "@electron-forge/publisher-github",
      "config": {
        authors: "RadhaKrishna Dodla",
        description: "Sample test",
        "repository": {
          "owner": "radhasai1995",
          "name": "auto-update-example"
        },
        prerelease: false,
        draft: false,
      }
    }
  ]
};
