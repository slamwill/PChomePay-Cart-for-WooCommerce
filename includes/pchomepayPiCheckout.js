const settingsPi = window.wc.wcSettings.getSetting( 'pchomepay_pi_data', {} );
const labelPi = window.wp.htmlEntities.decodeEntities( settingsPi.title ) || window.wp.i18n.__( 'Pchomepay Pi', 'pchomepay_pi' );
const Content = () => {
    return window.wp.htmlEntities.decodeEntities( settingsPi.description || '' );
};
const Block_Gateway = {
    name: 'pchomepay_pi',
    label: labelPi,
    content: Object( window.wp.element.createElement )( Content, null ),
    edit: Object( window.wp.element.createElement )( Content, null ),
    canMakePayment: () => true,
    ariaLabel: labelPi,
    supports: {
        features: settingsPi.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( Block_Gateway );