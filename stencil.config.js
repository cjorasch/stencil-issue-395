exports.config = {
  bundles: [
    { components: ['my-app', 'app-home', 'my-component'] }
  ],
  collections: [{ name: '@ionic/core' }, { name: '@stencil/router' }]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
