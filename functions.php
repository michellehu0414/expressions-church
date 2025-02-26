<?php
// Exit if accessed directly
if (!defined('ABSPATH'))
    exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if (!function_exists('chld_thm_cfg_locale_css')):
    function chld_thm_cfg_locale_css($uri)
    {
        if (empty($uri) && is_rtl() && file_exists(get_template_directory() . '/rtl.css'))
            $uri = get_template_directory_uri() . '/rtl.css';
        return $uri;
    }
endif;
add_filter('locale_stylesheet_uri', 'chld_thm_cfg_locale_css');

if (!function_exists('child_theme_configurator_css')):
    function child_theme_configurator_css()
    {
        wp_enqueue_style('chld_thm_cfg_child', trailingslashit(get_stylesheet_directory_uri()) . 'dist/css/globals.css', array('hello-elementor-header-footer'));
    }
endif;
add_action('wp_enqueue_scripts', 'child_theme_configurator_css', 10);

defined('CHLD_THM_CFG_IGNORE_PARENT') or define('CHLD_THM_CFG_IGNORE_PARENT', TRUE);



// END ENQUEUE PARENT ACTION

function enqueue_custom_scripts()
{
    if (is_page('index')) {
        wp_enqueue_script('index-js', get_template_directory_uri() . '/js/index.bundle.js', array(), false, true);
    } elseif (is_page('leadership')) {
        wp_enqueue_script('leadership-js', get_template_directory_uri() . '/js/leadership.bundle.js', array(), false, true);
    }

    // Enqueue global styles for all pages
    wp_enqueue_style('global-styles', get_template_directory_uri() . '/css/main.css');

    // Enqueue page-specific styles
    if (is_page('index')) {
        wp_enqueue_style('index-styles', get_template_directory_uri() . '/css/index.css');
    } elseif (is_page('leadership')) {
        wp_enqueue_style('leadership-styles', get_template_directory_uri() . '/css/leadership.css');
    }
}
add_action('wp_enqueue_scripts', 'enqueue_custom_scripts');
