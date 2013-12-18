<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
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
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<link rel="icon" href="//www.airpair.com/favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="//www.airpair.com/favicon.ico" type="image/x-icon" />
<?php // Loads HTML5 JavaScript file to add support for HTML5 elements in older IE versions. ?>
<!--[if lt IE 9]>
<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
<![endif]-->
<?php wp_head(); ?>
<link rel="stylesheet" type="text/css" href="/wp-content/themes/twentytwelve/custom.css" />
<link rel="stylesheet" type="text/css" href="/wp-content/themes/twentytwelve/css/landing.css">
<link rel='stylesheet' href='//fonts.googleapis.com/css?family=Open+Sans:400,700,300' type='text/css'>
</head>

<body <?php body_class(); ?>>

<nav class="cf" style="height:35px">
  <div class="tech" style="height:28px">
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
    <a class="wp" href="/wordpress" title="Wordpress coding help & resources">WordPress</a>
  </div>
</nav>

<div id="page" class="hfeed site" style="margin-top:-5px">
	<header id="masthead" class="site-header" role="banner">
		<hgroup>
			<a href="http://www.airpair.com/" title="Pair Programming"><img src="http://airpair-blog.s3.amazonaws.com/wp-content/uploads/2013/09/ap200x75.png" alt="Pair Programming"></a>

			<div class="masttitle">
			    <h2 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h2>
                <p class="site-description"><a href="http://airpa.ir/blog-side-mail-subscribe" target="_blank">Subscribe by email</a> for $45/hr promotions & AirPair news</p>
			</div>
		</hgroup>

		<nav id="site-navigation" class="main-navigation" role="navigation">
			<h3 class="menu-toggle"><?php _e( 'Menu', 'twentytwelve' ); ?></h3>
			<a class="assistive-text" href="#content" title="<?php esc_attr_e( 'Skip to content', 'twentytwelve' ); ?>"><?php _e( 'Skip to content', 'twentytwelve' ); ?></a>
			<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'nav-menu' ) ); ?>
		</nav><!-- #site-navigation -->

		<?php $header_image = get_header_image();
		if ( ! empty( $header_image ) ) : ?>
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php echo esc_url( $header_image ); ?>" class="header-image" width="<?php echo get_custom_header()->width; ?>" height="<?php echo get_custom_header()->height; ?>" alt="" /></a>
		<?php endif; ?>
	</header><!-- #masthead -->

	<div id="main" class="wrapper">
