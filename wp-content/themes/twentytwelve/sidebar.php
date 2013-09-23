<?php
/**
 * The sidebar containing the main widget area.
 *
 * If no active widgets in sidebar, let's hide it completely.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?>

	<?php if ( is_active_sidebar( 'sidebar-1' ) ) : ?>

		<div id="secondary" class="widget-area" role="complementary">

      <style type="text/css">
        .social { height:80px; }
        .social li { float:left;margin-right:6px; }
      </style>

      <label>Follow AirPair</label>
      <ul class="social">
        <li><a href="http://twitter.com/airpair" target="_blank"><img src="/img/tw.png" /></a></li>
        <li><a href="http://facebook.com/airpair" target="_blank"><img src="/img/fb.png" /></a></li>
        <li><a href="https://plus.google.com/105075583437166504731" target="_blank"><img src="/img/gp.png" /></a></li>
        <li><a href="http://www.linkedin.com/company/airpair" target="_blank"><img src="/img/in.png" /></a></li>
      </ul>

			<?php dynamic_sidebar( 'sidebar-1' ); ?>
		</div><!-- #secondary -->
	<?php endif; ?>