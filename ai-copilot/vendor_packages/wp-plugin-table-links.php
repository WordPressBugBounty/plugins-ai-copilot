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
					'url'  => 'https://quadlayers.com/products/ai-copilot/?utm_source=aicp_plugin&utm_medium=plugin_table&utm_campaign=premium_upgrade&utm_content=premium_link',
					'color' => 'green',
					'target' => '_blank',
				),
				array(
					'place' => 'row_meta',
					'text'  => esc_html__( 'Support', 'ai-copilot' ),
					'url'   => 'https://quadlayers.com/account/support/?utm_source=aicp_plugin&utm_medium=plugin_table&utm_campaign=support&utm_content=support_link',
				),
				array(
					'place' => 'row_meta',
					'text'  => esc_html__( 'Documentation', 'ai-copilot' ),
					'url'   => 'https://quadlayers.com/documentation/ai-copilot/?utm_source=aicp_plugin&utm_medium=plugin_table&utm_campaign=documentation&utm_content=documentation_link',
				),
			)
		);
	});

}
