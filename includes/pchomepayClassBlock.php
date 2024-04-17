<?php

use Automattic\WooCommerce\Blocks\Payments\Integrations\AbstractPaymentMethodType;

class Pchomepay_Gateway_Blocks extends AbstractPaymentMethodType {

    private $gateway;
    protected $name = 'pchomepay';// your payment gateway name

    public function initialize() {
        $this->settings = get_option( 'woocommerce_my_custom_gateway_settings', [] );
        $this->gateway = new WC_Gateway_PChomePay();
    }

    public function is_active() {
        return $this->gateway->is_available();
    }

    public function get_payment_method_script_handles() {

        wp_register_script(
            'pchomepay-blocks-integration',
            plugin_dir_url(__FILE__) . 'pchomepayCheckout.js',
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
            wp_set_script_translations( 'pchomepay-blocks-integration');
            
        }
        return [ 'pchomepay-blocks-integration' ];
    }
    public function get_payment_method_data() {
        return [
            'title' => $this->gateway->title,
            'description' => $this->gateway->description,
        ];
    }
}

?>