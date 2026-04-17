<?php
/**
 * Plugin Name:             AI Copilot
 * Plugin URI:              https://quadlayers.com/products/ai-copilot/
 * Description:             Boost your productivity with AI-driven tools, automated content generation, and enhanced editor utilities.
 * Version:                 1.5.5
 * Text Domain:             ai-copilot
 * Author:                  QuadLayers
 * Author URI:              https://quadlayers.com
 * License:                 GPLv3
 * Domain Path:             /languages
 * Request at least:        4.7
 * Tested up to:            6.9
 * Requires PHP:            5.6
 * WC requires at least:    4.0
 * WC tested up to:         10.7
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'QUADLAYERS_AICP_PLUGIN_NAME', 'AI Copilot' );
define( 'QUADLAYERS_AICP_PLUGIN_VERSION', '1.5.5' );
define( 'QUADLAYERS_AICP_PRO_MIN_PLUGIN_VERSION', '1.2.0' );
define( 'QUADLAYERS_AICP_PLUGIN_FILE', __FILE__ );
define( 'QUADLAYERS_AICP_PLUGIN_DIR', __DIR__ . DIRECTORY_SEPARATOR );
define( 'QUADLAYERS_AICP_PLUGIN_BASENAME', plugin_basename( __FILE__ ) );
define( 'QUADLAYERS_AICP_WORDPRESS_URL', 'https://wordpress.org/plugins/ai-copilot/' );
define( 'QUADLAYERS_AICP_REVIEW_URL', 'https://wordpress.org/support/plugin/ai-copilot/reviews/?filter=5#new-post' );
/**
 * Load composer autoload
 */
require_once __DIR__ . '/vendor/autoload.php';
/**
 * Load vendor_packages packages
 */
require_once __DIR__ . '/vendor_packages/wp-i18n-map.php';
require_once __DIR__ . '/vendor_packages/wp-notice-plugin-promote.php';
require_once __DIR__ . '/vendor_packages/wp-plugin-table-links.php';
require_once __DIR__ . '/vendor_packages/wp-plugin-feedback.php';
/**
 * Load plugin classes
 */
require_once __DIR__ . '/lib/class-plugin.php';
/**
 * On plugin activation
 */
register_activation_hook(
	__FILE__,
	function () {
		do_action( 'quadlayers_aicp_activation' );
	}
);

/**
 * Declarate compatibility with WooCommerce Custom Order Tables
 */
add_action(
	'before_woocommerce_init',
	function () {
		if ( class_exists( '\Automattic\WooCommerce\Utilities\FeaturesUtil' ) ) {
			\Automattic\WooCommerce\Utilities\FeaturesUtil::declare_compatibility( 'custom_order_tables', __FILE__, true );
		}
	}
);
