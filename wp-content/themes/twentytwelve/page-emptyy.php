< ?php
/*
Template Name: Empty
*/
?>

<?php get_header(); ?>
<body>

<link rel="stylesheet" href="/stylesheets/landing_jk.css">
<script src="//cdn.optimizely.com/js/280598780.js"></script>

<?php while ( have_posts() ) : the_post(); ?>
  <?php get_template_part( 'content', 'page' ); ?>
  <?php comments_template( '', true ); ?>
<?php endwhile; // end of the loop. ?>

<div style="clear:both;height:5px"></div>
  <div class="footer" style="background:black;height:0px;padding:20px;color:white">
    <div>
      &copy; <a href="http://airpair.com/" style="color:white">airpair, inc.</a> 2013
    </div>
  </div>
</div>

<script src="/javascripts/providers.js" defer onload="require('scripts/providers/all');"></script>
<script src="http://i.po.st/static/v3/post-widget.js#publisherKey=miu9e01ukog3g0nk72m6" type="text/javascript"></script>

</body>

</html>