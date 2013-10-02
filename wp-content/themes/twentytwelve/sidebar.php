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

    <div class="side-wid expert-help-wid">
      <h3 class="widget-title">Need expert help?</h3>
      <a href="http://airpa.ir/ap-blog-side-find"><img src="/img/find.png" alt="find an expert" /></a>
      <p>Already a pro? <a href="http://airpa.ir/ap-blog-side-get">Apply to be an expert</a></p>
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
      <div id="mc_embed_signup">
        <form action="http://airpair.us7.list-manage.com/subscribe/post?u=707a79398ffed7972e1e87db6&amp;id=903d16f497" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <label for="mce-EMAIL">Subscribe to our mailing list</label>
          <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
          <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
        </form>
      </div>
    </div>

		<?php dynamic_sidebar( 'sidebar-1' ); ?>
	</div><!-- #secondary -->
<?php endif; ?>