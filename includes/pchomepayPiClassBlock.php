<?php

use Automattic\WooCommerce\Blocks\Payments\Integrations\AbstractPaymentMethodType;

class PchomepayPi_Gateway_Blocks extends AbstractPaymentMethodType {

    private $gateway;
    protected $name = 'pchomepay_pi';// your payment gateway name

    public function initialize() {
        $this->settings = get_option( 'woocommerce_my_custom_gateway_settings', [] );
        $this->gateway = new WC_PI_Gateway_PChomePay();
    }

    public function is_active() {
        return $this->gateway->is_available();
    }

    public function get_payment_method_script_handles() {

        wp_register_script(
            'pchomepay-pi-blocks-integration',
            plugin_dir_url(__FILE__) . 'pchomepayPiCheckout.js',
            [
                'wc-blocks-registry',
                'wc-settings',
                'wp-element',
                'wp-html-entities',
                'wp-i18n',
            ],
            null,
            true
        );
        if( function_exists( 'wp_set_script_translations' ) ) {            
            wp_set_script_translations( 'pchomepay-pi-blocks-integration');
            
        }
        return [ 'pchomepay-pi-blocks-integration' ];
    }
    public function get_payment_method_data() {
        return [
            'title' => $this->gateway->title,
            'description' => $this->gateway->description,
        ];
    }
}

?>