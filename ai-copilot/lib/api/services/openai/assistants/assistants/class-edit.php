<?php

namespace QuadLayers\AICP\Api\Services\OpenAI\Assistants\Assistants;

use QuadLayers\AICP\Api\Services\OpenAI\Base;
use QuadLayers\AICP\Services\OpenAI\Assistants\Assistants\Edit as API_Fetch_Edit_Assistant_OpenAi;
use QuadLayers\AICP\Models\Assistants as Models_Assistant;
use QuadLayers\AICP\Models\Assistants_Vector_Stores as Models_Vector_Stores;

class Edit extends Base {
	protected static $route_path = 'assistants';

	public function callback( \WP_REST_Request $request ) {
		try {
			$data = json_decode( $request->get_body(), true );

			if ( ! isset( $data['assistant_label'] ) && trim( $data['assistant_label'] ) === '' ) {
				return $this->handle_response(
					array(
						'code'    => 400,
						'message' => __( 'Label can not be empty string.', 'ai-copilot' ),
					)
				);
			}

			$response = ( new API_Fetch_Edit_Assistant_OpenAi() )->get_data( $data );

			if ( isset( $response['code'] ) ) {
				throw new \Exception( $response['message'], $response['code'] );
			}

			$response['visibility']              = $data['visibility'];
			$response['assistant_first_message'] = $data['assistant_first_message'];

			$assistant = Models_Assistant::instance()->update( $data['assistant_id'], $response );

			$vector_stores = Models_Vector_Stores::instance()->get_all();

			if ( null !== $vector_stores ) {
				$assistant_vector_store_labels = array();

				foreach ( $vector_stores as $vector_store ) {
					$openai_id = $vector_store->get( 'openai_id' );
					if ( in_array( $openai_id, $assistant->get( 'assistant_vector_store_ids' ), true ) ) {
						$assistant_vector_store_labels[] = $vector_store->get( 'vector_store_label' );
					}
				}

				$assistant->set( 'assistant_vector_store_labels', $assistant_vector_store_labels );
			} else {
				$assistant->set( 'assistant_vector_store_labels', array() );
			}

			return $this->handle_response( $assistant->getProperties() );
		} catch ( \Throwable $error ) {
			return $this->handle_response(
				array(
					'code'    => $error->getCode(),
					'message' => $error->getMessage(),
				)
			);
		}
	}

	public static function get_rest_method() {
		// Evitar usar \WP_REST_Server::EDITABLE, este contiene el metodo POST y termina pisando al POST registrado en el pro
		return 'PUT, PATCH';
	}

	public static function get_rest_args() {
		return array(
			'model'        => array(
				'required'          => true,
				'validate_callback' => function ( $param, $request, $key ) {
					if ( empty( $param ) ) {
						return new \WP_Error( 400, __( 'Model tags are empty.', 'ai-copilot' ) );
					}
					return true;
				},
			),
			'assistant_id' => array(
				'required'          => true,
				'validate_callback' => function ( $param, $request, $key ) {
					if ( ! is_numeric( $param ) ) {
						return new \WP_Error( 400, __( 'Assistant ID not found.', 'ai-copilot' ) );
					}
					return true;
				},
			),
		);
	}
}
