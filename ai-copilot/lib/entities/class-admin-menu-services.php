<?php
namespace QuadLayers\AICP\Entities;

use QuadLayers\AICP\Models\Transactions as Models_Transactions;

use QuadLayers\WP_Orm\Entity\SingleEntity;

class Admin_Menu_Services extends SingleEntity {
	public $openai_api_key = '';
	public $pexels_api_key = '';
	// phpcs:ignore
	public static $sanitizeProperties = array(
		'openai_api_key' => 'sanitize_text_field',
		'pexels_api_key' => 'sanitize_text_field',
	);
	// phpcs:ignore
	public static $validateProperties = array();

	public function get( string $key ) {
		$value = parent::get( $key );

		if ( 'pexels_api_key' === $key && ! $value ) {
			return base64_decode( 'bHJ0Nk9IQWJZWk5WUEVwbFNPVEhha2VoeXNzekRSVURTcFZMM2sxYVA4ZTZ5U0lsUXNyR2JuR3c' );
		}

		return $value;
	}
}
