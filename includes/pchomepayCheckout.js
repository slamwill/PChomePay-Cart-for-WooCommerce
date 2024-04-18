const settingsPchomepay = window.wc.wcSettings.getSetting( 'pchomepay_data', {} );
const labelPchomepay = window.wp.htmlEntities.decodeEntities( settingsPchomepay.title ) || window.wp.i18n.__( 'Pchomepay', 'pchomepay' );
const ContentPchomepay = () => {
    return window.wp.htmlEntities.decodeEntities( settingsPchomepay.description || '' );
};
const BlockGatewayPchomepay = {
    name: 'pchomepay',
    label: window.wp.element.createElement(() =>
        window.wp.element.createElement(
            "span",
            null,
            window.wp.element.createElement("img", {
                src: myImagePath.pluginPath + 'pchomepay_logo.png',
                alt: settingsPchomepay.title,
            }),
            "  " + settingsPchomepay.title
        )
    ),
    content: Object( window.wp.element.createElement )( ContentPchomepay, null ),
    edit: Object( window.wp.element.createElement )( ContentPchomepay, null ),
    canMakePayment: () => true,
    ariaLabel: labelPchomepay,
    supports: {
        features: settingsPchomepay.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( BlockGatewayPchomepay );