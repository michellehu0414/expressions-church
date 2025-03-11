<?php
// Exit if accessed directly
if (! defined('ABSPATH')) {
    exit;
}

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if (! function_exists('chld_thm_cfg_locale_css')):
    function chld_thm_cfg_locale_css($uri)
{
        if (empty($uri) && is_rtl() && file_exists(get_template_directory() . '/rtl.css')) {
            $uri = get_template_directory_uri() . '/rtl.css';
        }

        return $uri;
    }
endif;
add_filter('locale_stylesheet_uri', 'chld_thm_cfg_locale_css');

if (! function_exists('child_theme_configurator_css')):
    function child_theme_configurator_css()
{
        wp_enqueue_style('chld_thm_cfg_separate', trailingslashit(get_stylesheet_directory_uri()) . 'ctc-style.css', []);
    }
endif;
add_action('wp_enqueue_scripts', 'child_theme_configurator_css', 10);

defined('CHLD_THM_CFG_IGNORE_PARENT') or define('CHLD_THM_CFG_IGNORE_PARENT', true);

// END ENQUEUE PARENT ACTION

function enqueue_react_app()
{
    wp_enqueue_script('react-app', get_template_directory_uri() . '/dist/js/main.min.js', [], '1.0', true);
}
add_action('wp_enqueue_scripts', 'enqueue_react_app');

function react_shortcode()
{
    return '<div id="react-root"></div>';
}
add_shortcode('react_component', 'react_shortcode');
add_filter('acf/rest_api/field_settings/show_in_rest', '__return_true');

// Enqueue project assets from React/Webpack modular structure
function enqueue_react_assets() {
    wp_enqueue_script(
        'react-main',
        get_template_directory_uri() . '/dist/js/main.min.js',
        array(),
        '1.0',
        true
    );
    wp_enqueue_style(
        'react-styles',
        get_template_directory_uri() . '/dist/css/main.min.css'
    );
}
add_action('wp_enqueue_scripts', 'enqueue_react_assets');


// function hello_elementor_child_enqueue_scripts()
// {
//     // Ensure WordPress functions are available
//     if (! is_admin()) {
//
//         if (is_front_page() || is_page('home')) { // Home page check
//             wp_enqueue_script('home-scripts',
//                 get_stylesheet_directory_uri() . '/dist/js/index.min.js',
//                 [], filemtime(get_stylesheet_directory() . '/dist/js/index.min.js'), true);
//         } elseif (is_page('leadership')) {
//             wp_enqueue_script('leadership-scripts',
//                 get_stylesheet_directory_uri() . '/dist/js/leadership.min.js',
//                 [], filemtime(get_stylesheet_directory() . '/dist/js/leadership.min.js'), true);
//         }
//     }
//
//     // Register and enqueue global script
//     wp_register_script('global_script',
//         get_stylesheet_directory_uri() . '/dist/js/main.min.js',
//         [], filemtime(get_stylesheet_directory() . '/dist/js/main.min.js'), true);
//     wp_enqueue_script('global_script');
// }
// add_action('wp_enqueue_scripts', 'hello_elementor_child_enqueue_scripts');
//
// function hello_elementor_child_enqueue_styles()
// {
//
//     // Enqueue child theme styles
//     wp_register_style('hello-elementor-child-style',
//         get_stylesheet_directory_uri() . '/dist/css/main.min.css',
//         [], filemtime(get_stylesheet_directory() . '/dist/css/main.min.css'), true);
//     wp_enqueue_style('hello-elementor-child-style');
// }
// add_action('wp_enqueue_scripts', 'hello_elementor_child_enqueue_styles');
