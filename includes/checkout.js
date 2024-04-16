const settings = window.wc.wcSettings.getSetting( 'pchomepay_data', {} );
// const label = window.wp.htmlEntities.decodeEntities( settings.title ) || window.wp.i18n.__( 'My Custom Gateway', 'my_custom_gateway' );
// const label = window.wp.htmlEntities.decodeEntities( settings.title ) || window.wp.i18n.__( 'My Custom Gateway', 'pchomepay' );
const label = window.wp.htmlEntities.decodeEntities( settings.title ) || window.wp.i18n.__( 'Pchomepay', 'pchomepay' );
const Content = () => {
    return window.wp.htmlEntities.decodeEntities( settings.description || '' );
};
const Block_Gateway = {
    // name: 'my_custom_gateway',
    name: 'pchomepay',
    label: label,
    content: Object( window.wp.element.createElement )( Content, null ),
    edit: Object( window.wp.element.createElement )( Content, null ),
    canMakePayment: () => true,
    ariaLabel: label,
    supports: {
        features: settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( Block_Gateway );