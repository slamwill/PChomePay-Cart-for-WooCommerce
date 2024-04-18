const settingsPchomepayPi = window.wc.wcSettings.getSetting( 'pchomepay_pi_data', {} );
const labelPchomepayPi = window.wp.htmlEntities.decodeEntities( settingsPchomepayPi.title ) || window.wp.i18n.__( 'Pchomepay Pi', 'pchomepay_pi' );
const ContentPchomepayPi = () => {
    return window.wp.htmlEntities.decodeEntities( settingsPchomepayPi.description || '' );
};
const BlockGatewayPchomepayPi = {
    name: 'pchomepay_pi',
    label: window.wp.element.createElement(() =>
        window.wp.element.createElement(
            "span",
            null,
            window.wp.element.createElement("img", {
                src: myImagePath.pluginPath + 'pchomepay_logo.png',
                alt: settingsPchomepayPi.title,
            }),
            "  " + settingsPchomepayPi.title
        )
    ),
    content: Object( window.wp.element.createElement )( ContentPchomepayPi, null ),
    edit: Object( window.wp.element.createElement )( ContentPchomepayPi, null ),
    canMakePayment: () => true,
    ariaLabel: labelPchomepayPi,
    supports: {
        features: settingsPchomepayPi.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( BlockGatewayPchomepayPi );