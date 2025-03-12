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

// Add shortcode for React components
function react_shortcode()
{
    return '<div id="react-root"></div>';
}
add_shortcode('react_component', 'react_shortcode');
add_filter('acf/rest_api/field_settings/show_in_rest', '__return_true');

// Enqueue page-specific Webpack assets
function enqueue_page_specific_scripts()
{
    $theme_dir = get_stylesheet_directory_uri(); // Child theme directory

    if (is_page('home')) {
        wp_enqueue_script('home-webpack-script', $theme_dir . '/public/js/index.min.js', [], null, true);
        wp_enqueue_style('home-webpack-script', $theme_dir . '/public/css/index.min.css', [], null, true);
    }
    if (is_page('leadership')) {
        wp_enqueue_script('leadership-webpack-script', $theme_dir . '/public/js/leadership.min.js', [], null, true);
    }
    if (is_page('events')) {
        wp_enqueue_script('events-webpack-script', $theme_dir . '/public/js/events.min.js', [], null, true);
    }
}
add_action('wp_enqueue_scripts', 'enqueue_page_specific_scripts');

function enqueue_child_theme_styles()
{
    $theme_dir = get_stylesheet_directory_uri(); // Child theme directory

    wp_enqueue_style('child-theme-styles', $theme_dir . '/public/css/main.min.css', [], null, true);
}
add_action('wp_enqueue_scripts', 'enqueue_child_theme_styles');

/**
 * Proper way to enqueue scripts and styles.
 */
function hello_elementor_child_global_scripts()
{
    $parent_style = 'hello-elementor'; // Parent theme handle
    wp_enqueue_style($parent_style, get_template_directory_uri() . '/style.css');
    wp_enqueue_style('hello-elementor-child-global-style', get_stylesheet_directory_uri() . '/public/css/main.min.css', [$parent_style],
        wp_get_theme()->get('Version'));

    wp_enqueue_script('hello-elementor-child-global-script', get_template_directory_uri() . '/public/js/main.min.js', [], false, true);
}
add_action('wp_enqueue_scripts', 'hello_elementor_child_global_scripts');

// function hello_elementor_child_enqueue_scripts()
// {
//     // Ensure WordPress functions are available
//     if (! is_admin()) {
//
//         if (is_front_page() || is_page('home')) { // Home page check
//             wp_enqueue_script('home-scripts',
//                 get_stylesheet_directory_uri() . '/public/js/index.min.js',
//                 [], filemtime(get_stylesheet_directory() . '/public/js/index.min.js'), true);
//         } elseif (is_page('leadership')) {
//             wp_enqueue_script('leadership-scripts',
//                 get_stylesheet_directory_uri() . '/public/js/leadership.min.js',
//                 [], filemtime(get_stylesheet_directory() . '/public/js/leadership.min.js'), true);
//         }
//     }
//
//     // Register and enqueue global script
//     wp_register_script('global_script',
//         get_stylesheet_directory_uri() . '/public/js/main.min.js',
//         [], filemtime(get_stylesheet_directory() . '/public/js/main.min.js'), true);
//     wp_enqueue_script('global_script');
// }
// add_action('wp_enqueue_scripts', 'hello_elementor_child_enqueue_scripts');
//
// function hello_elementor_child_enqueue_styles()
// {
//
//     // Enqueue child theme styles
//     wp_register_style('hello-elementor-child-style',
//         get_stylesheet_directory_uri() . '/public/css/main.min.css',
//         [], filemtime(get_stylesheet_directory() . '/public/css/main.min.css'), true);
//     wp_enqueue_style('hello-elementor-child-style');
// }
// add_action('wp_enqueue_scripts', 'hello_elementor_child_enqueue_styles');
