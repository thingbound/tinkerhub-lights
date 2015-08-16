var th = require('tinkerhub');

/*
 * Register the light type.
 */
th.types.registerDeviceType('light')
    .requireCapability('state', 'power')
    .when('dimmable')
        .action('setBrightness')
            .argument('percentage', 'Brightness Percentage')
            .returns('object', 'The new state')
            .done()
        .action('increaseBrightness')
            .argument('percentage', 'Percentage to increase')
            .returns('object', 'The new state')
            .done()
        .action('decreaseBrightness')
            .argument('percentage', 'Percentage to decrease')
            .returns('object', 'The new state')
            .done()
        .done()
    .done();
