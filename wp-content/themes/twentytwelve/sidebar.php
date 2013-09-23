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

    <div class="side-wid">
      <h3 class="widget-title">Need expert help?</h3>
      <br />
      <a href="http://airpa.ir/ap-blog-side-find" target="_blank"><img src="/img/find.png" alt="find an expert" /></a>
    </div>

    <div class="side-wid">
      <h3 class="widget-title">Follow AirPair for updates</h3>
      <ul class="social">
        <li><a href="http://twitter.com/airpair" target="_blank"><img src="/img/tw.png" /></a></li>
        <li><a href="http://facebook.com/airpair" target="_blank"><img src="/img/fb.png" /></a></li>
        <li><a href="https://plus.google.com/105075583437166504731" target="_blank"><img src="/img/gp.png" /></a></li>
        <li><a href="http://www.linkedin.com/company/airpair" target="_blank"><img src="/img/in.png" /></a></li>
        <li><a href="http://angel.co/airpair" target="_blank"><img src="/img/al.png" /></a></li>
      </ul>
    </div>

    <div class="side-wid-gray">
      <h3 class="widget-title">Subscribe by Email</h3>
      <form action='https://www.getvero.com/forms/33b965c1318bd3ff2ec43d39839c2202' method='post'><br/>    <label style="dispaly:block;font-size:11px">Your email</label><input name='email' type='email' style="90%" placeholder="Your email address"></input><br/>    <input type='submit' value='Subscribe' /><br/></form>
    </div>

		<?php dynamic_sidebar( 'sidebar-1' ); ?>
	</div><!-- #secondary -->
<?php endif; ?>