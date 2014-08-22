<?php

if( $_REQUEST['type'] === '500'){
    header('HTTP/1.1 500 Internal Server Error');
    die( 'Oops. Something bad happened on the server.' );
}

if( $_SERVER['REQUEST_METHOD'] === 'POST' ){

    $contentType = $_SERVER[ 'HTTP_CONTENT_TYPE' ];

    // handle application/x-www-form-urlencoded request data
    if( strpos( $contentType, 'application/x-www-form-urlencoded' ) !== FALSE ) {
        header('Content-Type: text/plain');

        print_r( $_POST );
    }

    // handle application/json request data
    if( strpos( $contentType, 'application/json' ) !== FALSE ){
        header('Content-Type: application/json' );

         echo file_get_contents( 'php://input' ); // echo back request body
    }
}