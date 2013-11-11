<?php
?><!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<title><?php wp_title( '|', true, 'right' ); ?></title>
<link rel="profile" href="//gmpg.org/xfn/11" />
<link rel="icon" href="//www.airpair.com/favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="//www.airpair.com/favicon.ico" type="image/x-icon" />
<?php // Loads HTML5 JavaScript file to add support for HTML5 elements in older IE versions. ?>
<!--[if lt IE 9]>
<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
<![endif]-->
<link rel="stylesheet" href="/wp-content/themes/twentytwelve/css/landing.css">
<!-- <script src="//cdn.optimizely.com/js/280598780.js"></script> -->

<?php remove_action('wp_head', 'recent_comments_style'); ?>
<?php remove_action('wp_head', 'admin-bar-css'); ?>
<?php remove_action('wp_head', 'boxes-css'); ?>
<?php remove_action('wp_head', 'wlwmanifest_link'); ?>
<?php remove_action('wp_head', 'rsd_link'); ?>
<?php remove_action('wp_enqueue_scripts', 'dd_wp_enqueue_styles'); ?>
<?php remove_action('wp_enqueue_scripts', 'twentytwelve_scripts_styles'); ?>
<?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>

<nav class="cf">
  <div class="tech">
    <a class="android" href="/android" title="android coding help & resources">Android</a>
    <a class="angular" href="/angularjs" title="AngularJS coding help & resources">AngularJS</a>
    <a class="backbone" href="/backbone.js" title="Backbonejs coding help & resources">Backbone.js</a>
    <a class="devops" href="/devops" title="DevOps coding help & resources">DevOps</a>
    <a class="cpp" href="/c++" title="C++ coding help & resources">C++</a>
    <a class="css" href="/css" title="CSS coding help & resources">Css</a>
    <a class="ember" href="/ember.js" title="emberjs coding help & resources">Ember.js</a>
    <a class="git" href="/git" title="git coding help & resources">Git</a>
    <a class="html" href="/html" title="html5 coding help & resources">Html</a>
    <a class="ios" href="/ios" title="ios coding help & resources">iOS</a>
    <a class="java" href="/java" title="java coding help & resources">Java</a>
    <a class="js" href="/javascript" title="JavaScript coding help & resources">JavaScript</a>
    <a class="net" href="/.net" title="Microsoft .net coding help & resources">.NET</a>
    <a class="node" href="/node.js" title="Node coding help & resources">Node.js</a>
    <a class="perf" href="/performance-testing" title="Performance coding help & resources">Perf</a>
    <a class="php" href="/php" title="PHP coding help & resources">PHP</a>
    <a class="python" href="/python" title="Python coding help & resources">Python</a>
    <a class="ruby" href="/ruby" title="Ruby coding help & resources">Ruby</a>
    <a class="rails" href="/ruby-on-rails" title="RoR coding help & resources">Rails</a>
    <a class="wp" href="/wordpress" title="Wordpress coding help & resources">WorPress</a>
  </div>
  <a class="logo" href="/"></a>

  <div class="contactus">(800) 487-0668</div>

  <ul class="navigation">
    <li><a href="/pair-programming"><span>{</span> pair programming <span>}</span></a></li>
    <li><a href="/code-review"><span>{</span> code review <span>}</span></a></li>
    <li><a href="/problem-solving"><span>{</span> problem solving <span>}</span></a></li>
    <li><a href="/code-mentoring"><span>{</span> code mentoring <span>}</span></a></li>
  </ul>
</nav>
