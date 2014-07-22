<?php
/**
 * Genesis Framework.
 *
 * WARNING: This file is part of the core Genesis Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package Genesis\Templates
 * @author  StudioPress
 * @license GPL-2.0+
 * @link    http://my.studiopress.com/themes/genesis/
 */

genesis_structural_wrap( 'site-inner', 'close' );
echo '</div>'; //* end .site-inner or #inner

do_action( 'genesis_before_footer' );
do_action( 'genesis_footer' );
do_action( 'genesis_after_footer' );

echo '</div>'; //* end .site-container or #wrap

do_action( 'genesis_after' );
wp_footer(); //* we need this for plugins
?>

  <!-- Custom AirPair Analytics -->
  <script type="text/javascript">
    function initBlogButtons() {
      jQuery('.trackCustomerLogin, .trackBookLogin').each( function(idx) {
        this.$btn = jQuery(this);
        this.$btn.mouseover(function(emover) {
          var btn = jQuery(this);
          jQuery(this).data('act', btn.html());
          btn.html("Sign in with Google for Video Chat");
          jQuery('<figure class="gSignin"><p>We use your google account for G+ Hangouts</p><img src="//airpair-blog.s3.amazonaws.com/wp-content/uploads/2014/01/Node.js-Pair-Programming-Help-On-AirPair-300x176.png"></figure>').insertAfter(btn);
        }).mouseout(function(emout) {
          var btn = jQuery(this);
          btn.html(jQuery(this).data('act'));
          btn.next('figure').remove();
        });
      });
    }

    function initPage() {
      require("/scripts/providers/olark")();
      initBlogButtons();
      AddJS = require('scripts/providers/addjs/index');
      if(typeof addjs === 'undefined'){
        window.addjs = new AddJS('0xxx5xrw5q');
      }
      addjs.bindTrackLinks();
      categories = '';
      jQuery(".entry-categories a").each(
        function(i,a){
          if (i < 3) { categories+=jQuery(a).text()+","; }
        });
      addjs.trackEvent('page','view', window.location.pathname, {categories:categories});
    }

  </script>
  <script src="//airpair.com/javascripts/providers.js" defer onload="initPage()"></script>
</body>
</html>
