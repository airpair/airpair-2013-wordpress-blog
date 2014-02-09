<?php

// Template Name: SEM
 
//* Force full width content layout
add_filter( 'genesis_pre_get_option_site_layout', '__genesis_return_full_width_content' );
 
/*remove_action( 'genesis_loop', 'genesis_do_loop' );
add_action( 'genesis_loop', 'custom_do_loop' );
 
function custom_do_loop() { ?>
 
	<p>My page content goes here</p>
 
<?php }*/
 
//* Run the Genesis loop
genesis();