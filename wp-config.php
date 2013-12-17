<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

require( ABSPATH . '/wp-dbconfig.php' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '[wk%CuM_Vgdnc3{iHNK|%do4`YgQJbv)D|v+v[n{wHqtY?`U>2m;<N:tJQl$Gzan');
define('SECURE_AUTH_KEY',  '*Dn$Vh<|I2&Vn?k(T[ucX;`fMd75Bo:0x$J:GVo}fJ -sGzEbsw[qW(x>mfZjF?V');
define('LOGGED_IN_KEY',    '4zD@;C8O%=#|pK8JYe&*71+IyIIx_fPL+wq|;V+TCYx])YmRxX59lKWkTgQe]6ro');
define('NONCE_KEY',        '~oC7CzV)zMlnoQO4M^f} &17=lO|QUE:6S!}f,=J8fP|moQ_^#v_j))a$rol:9d`');
define('AUTH_SALT',        '3<!v[-+>.%xt@F?&KX|^wx$e-?gGy^[@zGf.6F6*W.a9A6/1KD-,~F0}|L VKS&7');
define('SECURE_AUTH_SALT', '4uOAtVT-V8&+.5MFqp ZpnH#B7dLUuk-k%{oMNEo@!3|g|PSS bV<eug{R];?7]E');
define('LOGGED_IN_SALT',   'IDrUIOD/<V/K|7cr3fk!CWD+P<h&|3DC/$8;W`{]iB;ZD<@(iK+/O_#+vWn> 2m|');
define('NONCE_SALT',       'VehPe[bx@4(E+Oq&U(4zqx,kKz{bH!ZcdTPht)(3ic6/;AP0:M<3{D9@4+``{1A`');
/**#@-*/


/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

/** Sets up wordpress hostnames from environment variables */
if (isset($_SERVER["WP_HOME"])) {
  define('WP_HOME',$_SERVER["WP_HOME"]);
}

if (isset($_SERVER["WP_SITE_URL"])) {
  define('WP_SITE_URL',$_SERVER["WP_SITE_URL"]);
}
