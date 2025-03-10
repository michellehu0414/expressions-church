<?php
// Exit if accessed directly
if (!defined('ABSPATH'))
    exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if ( !function_exists( 'chld_thm_cfg_locale_css' ) ):
    function chld_thm_cfg_locale_css( $uri ){
        if ( empty( $uri ) && is_rtl() && file_exists( get_template_directory() . '/rtl.css' ) )
            $uri = get_template_directory_uri() . '/rtl.css';
        return $uri;
    }
endif;
add_filter( 'locale_stylesheet_uri', 'chld_thm_cfg_locale_css' );

if ( !function_exists( 'child_theme_configurator_css' ) ):
    function child_theme_configurator_css() {
        wp_enqueue_style( 'chld_thm_cfg_separate', trailingslashit( get_stylesheet_directory_uri() ) . 'ctc-style.css', array(  ) );
    }
endif;
add_action( 'wp_enqueue_scripts', 'child_theme_configurator_css', 10 );

defined( 'CHLD_THM_CFG_IGNORE_PARENT' ) or define( 'CHLD_THM_CFG_IGNORE_PARENT', TRUE );

// END ENQUEUE PARENT ACTION

function enqueue_custom_scripts()
{

    if (is_page('home')) {
        wp_enqueue_script('home-script', get_template_directory_uri() . '/dist/js/index.min.js', array(), false, true);
    } elseif (is_page('leadership')) {
        wp_enqueue_script('leadership-scripts', get_template_directory_uri() . '/dist/js/leadership.min.js', array(), false, true);
    }

    // Enqueue page-specific styles
    if (is_page('home')) {
        wp_enqueue_style('home-styles', get_template_directory_uri() . '/dist/css/index.min.css');
    } elseif (is_page('leadership')) {
        wp_enqueue_style('leadership-styles', get_template_directory_uri() . '/dist/css/leadership.min.css');
    }
}
add_action('wp_enqueue_scripts', 'enqueue_custom_scripts');

// Enqueue parent theme styles


function hello_elementor_child_enqueue_styles() {
    if ( !is_admin() ) { // Ensures styles only load on the front-end
        $parent_style = 'hello-elementor';
        wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
        wp_enqueue_style( 'hello-elementor-child-style',
            get_stylesheet_directory_uri() . '/dist/css/main.min.css',
            array( $parent_style ),
            wp_get_theme()->get('Version')
        );
    }
}
add_action( 'wp_enqueue_scripts', 'hello_elementor_child_enqueue_styles' );