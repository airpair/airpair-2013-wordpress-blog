<?php
Template Name: TechPage
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */

get_header(); ?>

  <link rel="stylesheet" href="http://www.airpair.com/stylesheets/landing_jk.css">

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

  <div class='outer-container cf fold cf' id="languages">
    <div class="middle-container">
      <div class="jumbotron cf">
        <div class="inner-container">

          </div>
        </div>
        <div class="arrow-up"></div>
        <div class="jumbo-sub-head">
          <div class="inner-container">
            <h2 class="yellow"><span>{</span> code in the right direction <span>}</span></h2>
            <h3>Code review is peer examination of source code with the purpose of removing mistakes made during initial development. Without code reviews, problems in your code are more likely to be deployed to production.</h3>

            <a href="/find-an-expert" class="button green">Get started with airpair code reviews</a>
            <p class="apply">or click a language above to learn more</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class='fold-border'>
  </div>

  <div class="outer-container cf" id="should" style="background:none repeat scroll 0 0 #E2E2E2">
    <div class="middle-container">
      <?php while ( have_posts() ) : the_post(); ?>
        <?php get_template_part( 'content', 'page' ); ?>
        <?php comments_template( '', true ); ?>
      <?php endwhile; // end of the loop. ?>
    </div>
  </div>

  <footer>
      &copy; <a href="http://airpair.com/">airpair, inc. 2013 | </a>
  </footer>

  </body>

</html>
