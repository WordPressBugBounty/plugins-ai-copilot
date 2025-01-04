<?php

namespace QuadLayers\AICP\Api\Services\OpenAI\Assistants\Files;

use QuadLayers\AICP\Api\Services\OpenAI\Base;
use QuadLayers\AICP\Services\OpenAI\Assistants\Files\Post as API_Fetch_Post_Assistant_File_OpenAi;
use QuadLayers\AICP\Models\Assistants_Files as Models_Assistant_File;

class Edit extends Base {
	protected static $route_path = 'assistants/files';

	public function callback( \WP_REST_Request $request ) {
		try {

			$file_id       = $request->get_param( 'file_id' );
			$attachment_id = $request->get_param( 'attachment_id' );

			$file_path = get_attached_file( $attachment_id );
			$file_name = get_post_meta( $attachment_id, '_wp_attached_file', true );
			$file_type = get_post_mime_type( $attachment_id );

			$response = ( new API_Fetch_Post_Assistant_File_OpenAi() )->get_data(
				array(
					'file' => array(
						'tmp_name' => $file_path,
						'name'     => $file_name,
						'type'     => $file_type,
					),
				)
			);

			if ( isset( $response['code'] ) ) {
				throw new \Exception( $response['message'], $response['code'] );
			}

			$file = Models_Assistant_File::instance()->update(
				$file_id,
				array(
					'attachment_id'   => $attachment_id,
					'openai_id'       => $response['openai_id'],
					'file_label'      => $response['file_label'],
					'file_origin'     => 'user',
					'file_size_bytes' => $response['file_size_bytes'],
					'file_status'     => 'ready',
				)
			)->getProperties();

			if ( ! $file ) {
				throw new \Exception( esc_html__( 'Unknown error.', 'ai-copilot' ), 500 );
			}

			return $this->handle_response( $file );
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
		return \WP_REST_Server::EDITABLE;
	}

	public static function get_rest_args() {
		return array(
			'file_id'       => array(
				'required'          => true,
				'validate_callback' => function ( $param, $request, $key ) {
					if ( ! is_numeric( $param ) ) {
						return new \WP_Error( 400, __( 'File ID is not set.', 'ai-copilot' ) );
					}
					return true;
				},
			),
			'attachment_id' => array(
				'required'          => true,
				'validate_callback' => function ( $param, $request, $key ) {
					if ( ! is_numeric( $param ) ) {
						return new \WP_Error( 400, __( 'Attachment ID is not set.', 'ai-copilot' ) );
					}
					return true;
				},
			),
		);
	}
}
