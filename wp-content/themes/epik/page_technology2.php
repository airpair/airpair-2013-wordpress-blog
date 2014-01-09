<?php

// Template Name: Technology2

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

/**
 * NEW STUFF ###################################################################################
 */

// Adds "portfolio" and "gallery clearfix" classes to every post
add_filter( 'post_class', 'portfolio_post_class' );
function portfolio_post_class( $classes ) {
    $classes[] = 'portfolio';
    $classes[] = 'gallery clearfix';
    return $classes;
}

add_filter( 'excerpt_more', 'portfolio_read_more_link' );
add_filter( 'get_the_content_more_link', 'portfolio_read_more_link' );
add_filter( 'the_content_more_link', 'portfolio_read_more_link' );
/**
 * Custom Read More link.
 *
 * @author Wes Straham
 * @since 1.0.0
 */
	function portfolio_read_more_link() {
		return '<a class="more-link" href="' . get_permalink() . '" rel="nofollow">Read More</a>';
}

// Remove post info and meta info
remove_action( 'genesis_entry_footer', 'genesis_post_meta' );
remove_action( 'genesis_entry_header', 'genesis_post_info', 12 );

/**
 * Adds Featured Image and links it to the Post
 *
 * @author Wes Straham
 * @since 1.0.0
 */
add_action( 'genesis_entry_header', 'epik_portfolio_do_post_image' ); 
function epik_portfolio_do_post_image() { 
	$img = genesis_get_image( array( 'format' => 'html', 'size' => 'portfolio-thumbnail', 'attr' => array( 'class' => 'alignnone post-image' ) ) ); printf( '<a href="%s" title="%s">%s</a>', get_permalink(), the_title_attribute('echo=0'), $img ); 
}	

/**
 * Opens Featured Images with prettyPhoto Slideshow
 *
 * @author Wes Straham
 * @since 1.0.0
 */
/*add_action( 'genesis_entry_header', 'epik_prettyPhoto_image' );
function epik_prettyPhoto_image() {
    $img = genesis_get_image( array( 'format' => 'html', 'size' => 'portfolio-thumbnail', 'attr' => array( 'class' => 'alignnone post-image' ) ) );
	printf( '<a href="%s" rel="prettyPhoto[gallery1]" title="%s">%s</a>', genesis_get_image( array( 'format' => 'url', 'size' => 'Portfolio Full', 'attr' => array( 'class' => 'alignnone post-image' ) ) ), the_title_attribute('echo=0'), $img );
}
*/


// Move title below post image
remove_action( 'genesis_entry_header', 'genesis_do_post_title' );
add_action( 'genesis_entry_content', 'genesis_do_post_title', 9 );

// Remove default content for this Page Template
remove_action( 'genesis_entry_content', 'genesis_do_post_image', 8 );
remove_action( 'genesis_entry_content', 'genesis_do_post_content' );

// Add Content for the Portfolio posts in this Page Template
//add_action( 'genesis_entry_content', 'epik_portfolio_do_post_content' );
function epik_portfolio_do_post_content() {
    
    if ( genesis_get_option( 'epik_portfolio_content' ) == 'excerpts' ) {
        the_excerpt();
    
    } else {
        if ( genesis_get_option( 'epik_portfolio_content_archive_limit' ) )
            the_content_limit( (int)genesis_get_option( 'epik_portfolio_content_archive_limit' ), __( 'Read More', 'epik' ) );
        else
            the_content(__( 'Read More', 'epik' ));
    }
} 

// Clear float using genesis_custom_loop() $loop_counter variable
// Outputs clearing div after every 4 posts
// $loop_counter is incremented after this function is run
add_action( 'genesis_entry_footer', 'portfolio_after_post' );
function portfolio_after_post() {
    global $loop_counter;
    
    if ( $loop_counter == 3 ) {
        $loop_counter = -1;
        echo '<div class="clear"></div>';
    }
}

// Remove standard loop
remove_action( 'genesis_loop', 'genesis_do_loop' );

// Add custom loop
add_action( 'genesis_loop', 'portfolio_loop' );
function portfolio_loop() {
    $paged = get_query_var( 'paged' ) ? get_query_var( 'paged' ) : 1;
    
    $include = genesis_get_option( 'epik_portfolio_cat' );
    $exclude = genesis_get_option( 'epik_portfolio_cat_exclude' ) ? explode(',', str_replace(' ', '', genesis_get_option( 'epik_portfolio_cat_exclude' ))) : '';
        
    $cf = genesis_get_custom_field( 'query_args' ); // Easter Egg
    $args = array( 'cat' => $include, 'category__not_in' => $exclude, 'showposts' => genesis_get_option( 'epik_portfolio_cat_num' ), 'paged' => $paged);
    $query_args = wp_parse_args($cf, $args);
    
    genesis_custom_loop( $query_args );
}

genesis();