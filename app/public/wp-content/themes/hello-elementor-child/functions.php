<?php
// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if (!function_exists('chld_thm_cfg_locale_css')):
    function chld_thm_cfg_locale_css($uri)
    {
        if (empty($uri) && is_rtl() && file_exists(get_template_directory() . '/rtl.css')) {
            $uri = get_template_directory_uri() . '/rtl.css';
        }
        return $uri;
    }
endif;
add_filter('locale_stylesheet_uri', 'chld_thm_cfg_locale_css');

if (!function_exists('child_theme_enqueue_assets')):
    function child_theme_enqueue_assets()
    {
        // Get the file modification time for cache busting
        $css_version = file_exists(get_stylesheet_directory() . '/dist/style.css') ? filemtime(get_stylesheet_directory() . '/dist/style.css') : null;
        $js_version = file_exists(get_stylesheet_directory() . '/dist/bundle.js') ? filemtime(get_stylesheet_directory() . '/dist/bundle.js') : null;

        // Enqueue Google Fonts (Poppins)
        wp_enqueue_style('child-theme-google-fonts', 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap', array(), null);

        // Enqueue Parent Theme Styles (ensure it's loaded first)
        wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');

        // Enqueue Webpack-compiled CSS
        if ($css_version) {
            wp_enqueue_style('child-theme-style', get_stylesheet_directory_uri() . '/dist/style.css', array('parent-style'), $css_version);
        }

        // Enqueue Webpack-compiled JS
        if ($js_version) {
            wp_enqueue_script('child-theme-script', get_stylesheet_directory_uri() . '/dist/bundle.js', array(), $js_version, true);
        }
    }
endif;
add_action('wp_enqueue_scripts', 'child_theme_enqueue_assets');