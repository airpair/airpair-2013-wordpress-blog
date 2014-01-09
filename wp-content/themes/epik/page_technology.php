<?php

// Template Name: Technology

add_action( 'genesis_before_content', 'angularjs_title' );
function angularjs_title() {
	genesis_widget_area( 'angularjs_title', array(
		'before' => '',
		'after' => '',
	) );
}

add_action( 'genesis_after_content', 'angularjs_content' );
function angularjs_content() {
	genesis_widget_area( 'angularjs_content', array(
		'before' => '<center><h2 class="widget-title widgettitle"><a href="http://54.197.241.118/?page_id=586">Featured AngularJS Code Mentors</a></h2></center>',
		'after' => '',
	) );
}

add_action( 'genesis_after_content', 'angularjs_content2' );
function angularjs_content2() {
	genesis_widget_area( 'angularjs_content2', array(
		'before' => '<center><h2 class="widget-title widgettitle"><a href="http://54.197.241.118/?page_id=586">AngularJS Help Testimonials</a></h2></center>',
		'after' => '',
	) );
}

genesis();