<?php

if ( class_exists( 'QuadLayers\\WP_Plugin_Table_Links\\Load' ) ) {
	add_action('init', function() {
		new \QuadLayers\WP_Plugin_Table_Links\Load(
			QUADLAYERS_AICP_PLUGIN_FILE,
			array(
				array(
					'text'   => esc_html__( 'Settings', 'ai-copilot' ),
					'url'    => admin_url( 'admin.php?page=ai-copilot' ),
					'target' => '_self',
				),
				array(
					'text' => esc_html__( 'Premium', 'ai-copilot' ),
					'url'  => QUADLAYERS_AICP_PREMIUM_SELL_URL,
					'color' => 'green',
					'target' => '_blank',
				),
				array(
					'place' => 'row_meta',
					'text'  => esc_html__( 'Support', 'ai-copilot' ),
					'url'   => QUADLAYERS_AICP_SUPPORT_URL,
				),
				array(
					'place' => 'row_meta',
					'text'  => esc_html__( 'Documentation', 'ai-copilot' ),
					'url'   => QUADLAYERS_AICP_DOCUMENTATION_URL,
				),
			)
		);
	});

}
