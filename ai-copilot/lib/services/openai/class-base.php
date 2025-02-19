<?php

namespace QuadLayers\AICP\Services\OpenAI;

use QuadLayers\AICP\Services\Services_Interface;
use QuadLayers\AICP\Helpers;
use QuadLayers\AICP\Models\Admin_Menu_Services;

/**
 * Base Class
 */
abstract class Base implements Services_Interface {

	/**
	 * Base fetch url
	 *
	 * @var string
	 */
	protected $fetch_url = 'https://api.openai.com/v1';

	/**
	 * Assistant Label Prefix
	 *
	 * @var string
	 */
	protected $prefix = 'Ai Copilot / ';

	/**
	 * Function to get response and parse to data
	 *
	 * @param array $args Args to get response with.
	 * @return array
	 */
	public function get_data( $args = null ) {
		$response = $this->get_response( $args );
		$data     = $this->response_to_data( $response );
		return $data;
	}

	/**
	 * Function to query Open AI data.
	 *
	 * @param string $args Args to set query.
	 * @return array
	 *
	 * @throws \Exception If API Key is not found.
	 */
	public function get_response( $args = null ) {

		$admin_menu_services = Admin_Menu_Services::instance();
		$settings            = $admin_menu_services->get();

		if ( empty( $settings->get( 'openai_api_key' ) ) ) {
			throw new \Exception( esc_html__( 'You have reached the limit of your free credits.', 'ai-copilot' ), 404 );
		}

		$api_key = $settings->get( 'openai_api_key' );

		$body = $args;

		$headers = array(
			'Content-Type'  => 'application/json',
			'Authorization' => 'Bearer ' . $api_key,
		);

		$url     = $this->get_url( $args );
		$timeout = Helpers::get_timeout();

		$response = wp_remote_post(
			$url,
			array(
				'method'  => 'POST',
				'timeout' => $timeout,
				'headers' => $headers,
				'body'    => wp_json_encode( $body ),
			)
		);

		$response = $this->handle_response( $response );

		return $response;
	}

	/**
	 * Function to parse response to usable data.
	 *
	 * @param array $response Raw response from openai.
	 * @return array
	 */
	public function response_to_data( $response = null ) {
		return $response;
	}

	/**
	 * Function to handle query response.
	 *
	 * @param array $response
	 * @return array
	 */
	public function handle_response( $response = null ) {

		$data = json_decode( wp_remote_retrieve_body( $response ), true );

		if ( null === $data && json_last_error() !== JSON_ERROR_NONE ) {
			$data = array(
				'error' => array(
					'code'    => 404,
					'message' => sprintf( esc_html__( 'Response is not valid json: %s', 'ai-copilot' ), $data ),
				),
			);
		}

		return $this->handle_error( $data ) ? $this->handle_error( $data ) : $data;
	}

	/**
	 * Function to handle error on query response.
	 *
	 * @param array $response Open AI response.
	 * @return array
	 */
	public function handle_error( $response = null ) {
		$is_error = isset( $response['error'] );

		if ( $is_error ) {
			$message = isset( $response['error']['message'] ) ? $response['error']['message'] : esc_html__( 'Unknown error.', 'ai-copilot' );
			$code    = isset( $reponse['error']['code'] ) ? $response['error']['code'] : 413;
			return array(
				'code'    => $code,
				'message' => $message,
			);
		}
		return false;
	}
}
