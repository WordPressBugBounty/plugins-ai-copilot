<?php

namespace QuadLayers\AICP\Models\Virtual;

use QuadLayers\AICP\Entities\Virtual\Image_Pexels;
use QuadLayers\WP_Orm\Builder\SingleVirtualRepositoryBuilder;

/**
 * Models_Images_Pexels Class
 */
class Images_Pexels {

	protected static $instance;
	protected $repository;

	private function __construct() {

		$builder = ( new SingleVirtualRepositoryBuilder() )
		->setEntity( Image_Pexels::class );

		$this->repository = $builder->getRepository();
	}

	public function create( $data ) {
		return $this->repository->create( $data );
	}

	public static function instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}
}
