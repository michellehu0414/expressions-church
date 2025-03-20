<?php
// Exit if accessed directly
if (! defined('ABSPATH')) {
    exit;
}

// Add shortcode for React components
function react_shortcode()
{
    return '<div id="react-root"></div>';
}
add_shortcode('react_component', 'react_shortcode');
add_filter('acf/rest_api/field_settings/show_in_rest', '__return_true');

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
        wp_enqueue_style('chld_thm_cfg_child', trailingslashit(get_stylesheet_directory_uri()) . 'style.css', []);
    }
endif;
add_action('wp_enqueue_scripts', 'child_theme_configurator_css', 10);

// END ENQUEUE PARENT ACTION
function hello_elementor_child_enqueue_scripts()
{
    wp_enqueue_style(
        'hello-elementor-child-style',
        get_stylesheet_directory_uri() . '/public/css/main.min.css',
        [],
        wp_get_theme()->get('Version'),
        'all'
    );

    wp_enqueue_script(
        'hello-elementor-child-theme-script',
        get_stylesheet_directory_uri() . '/public/js/main.min.js',
        ['jquery'],
        wp_get_theme()->get('Version'),
        true
    );

    // Load styles and scripts for Home page
    if (is_page('home')) {
        wp_enqueue_script(
            'home-page-script',
            get_stylesheet_directory_uri() . '/public/js/index.min.js',
            ['jquery'],
            wp_get_theme()->get('Version'),
            true
        );
        wp_enqueue_style(
            'hello-elementor-child-home-page-style',
            get_stylesheet_directory_uri() . '/public/css/index.min.css',
            [],
            wp_get_theme()->get('Version'),
            'all'
        );
    }

    // Load styles and scripts for Leadership page
    if (is_page(['leadership', '147'])) {
        wp_enqueue_script(
            'leadership-page-script',
            get_stylesheet_directory_uri() . '/public/js/leadership.min.js',
            ['jquery'],
            wp_get_theme()->get('Version'),
            true
        );
        wp_enqueue_style(
            'leadership-page-style',
            get_theme_file_uri('/public/css/leadership.min.css'),
            [],
        );
    }
}
add_action('wp_enqueue_scripts', 'hello_elementor_child_enqueue_scripts', 20);
