<?php
/*
Template Name: Landing
*/
?>

<?php get_header('landing'); ?>

<nav class="cf">
  <a class="logo" href="/"></a>
  <ul class="social">
    <li><a href="http://twitter.com/airpair" target="_blank" class="twitter"></a></li>
    <li><a href="http://facebook.com/airpair" target="_blank" class="facebook"></a></li>
  </ul>
  <ul class="navigation">
    <li><a href="/pair-programming"><span>{</span> pair programming <span>}</span></a></li>
    <li class="active"><a href="/code-review"><span>{</span> code review <span>}</span></a></li>
    <li><a href="/problem-solving"><span>{</span> problem solving <span>}</span></a></li>
    <li><a href="/code-mentoring"><span>{</span> code mentoring <span>}</span></a></li>
  </ul>
</nav>

<?php the_content(); ?>

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