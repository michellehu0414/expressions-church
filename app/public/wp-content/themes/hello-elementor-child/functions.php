<?php
// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// ========================
// ✅ Enqueue Styles & Scripts (Prioritizing Webpack CSS)
// ========================
function enqueue_custom_assets()
{
    // ✅ Load main.css (compiled from all-base.scss)
    wp_enqueue_style('main-style', get_stylesheet_directory_uri() . '/dist/css/main.min.css', [], null);

    // ✅ Page-specific styles & scripts
    $page_assets = [
        'Home' => ['css' => 'home.min.css', 'js' => 'home.bundle.js'],
        'Leadership' => ['css' => 'leadership.min.css', 'js' => 'leadership.bundle.js'],
    ];

    foreach ($page_assets as $page_slug => $assets) {
        if (is_page($page_slug)) {
            if (!empty($assets['css'])) {
                wp_enqueue_style($page_slug . '-style', get_stylesheet_directory_uri() . '/dist/css/' . $assets['css'], ['main-style'], null);
            }
            if (!empty($assets['js'])) {
                wp_enqueue_script($page_slug . '-script', get_stylesheet_directory_uri() . '/dist/js/' . $assets['js'], [], null, true);
            }
        }
    }
}
add_action('wp_enqueue_scripts', 'enqueue_custom_assets', 99);

// ========================
// ✅ Prevent Elementor from Loading Page-Specific CSS (post-6.css, etc.)
// ========================
function disable_elementor_page_css()
{
    update_option('elementor_css_print_method', 'internal'); // Stops generating per-page CSS files
}
add_action('init', 'disable_elementor_page_css');

// ========================
// ✅ Remove Elementor's Default Styles (Prevents Styling Conflicts)
// ========================
function remove_elementor_styles()
{
    wp_dequeue_style('elementor-frontend');
    wp_dequeue_style('elementor-common');
    wp_dequeue_style('elementor-icons');
    wp_dequeue_style('elementor-global');
}
add_action('wp_enqueue_scripts', 'remove_elementor_styles', 20);

// ========================
// ✅ Self-Host Fonts Instead of Google Fonts
// ========================
function remove_google_fonts()
{
    wp_dequeue_style('child-theme-google-fonts');
}
add_action('wp_enqueue_scripts', 'remove_google_fonts', 20);

// ========================
// ✅ Remove WordPress Global Styles (Avoids Unwanted Theme Interference)
// ========================
function disable_global_styles()
{
    remove_action('wp_enqueue_scripts', 'wp_enqueue_global_styles');
    remove_action('wp_footer', 'wp_enqueue_global_styles', 1);
}
add_action('init', 'disable_global_styles');

// ========================
// ✅ Disable Elementor's Default Theme Enqueue
// ========================
add_filter('hello_elementor_enqueue_style', '__return_false');

// ========================
// ✅ Custom Head Injections Per Page (Meta & Scripts)
// ========================
function custom_head_injection()
{
    $head_content = [
        'Home' => [
            'meta' => '<meta name="robots" content="noindex, nofollow">',
            'script' => '<script>console.log("Home page loaded");</script>',
        ],
        'Leadership' => [
            'meta' => '<meta name="robots" content="index, follow">',
            'script' => '<script>console.log("Leadership page loaded");</script>',
        ],
    ];

    foreach ($head_content as $page_slug => $content) {
        if (is_page($page_slug)) {
            if (!empty($content['meta'])) {
                echo $content['meta'] . "\n";
            }
            if (!empty($content['script']) && defined('WP_DEBUG') && WP_DEBUG) {
                echo $content['script'] . "\n";
            }
        }
    }
}
add_action('wp_head', 'custom_head_injection');

// ========================
// ✅ Dequeue Global Styles Inline CSS
// ========================
function dequeue_global_styles_inline_css()
{
    wp_dequeue_style('global-styles-inline-css');
}
add_action('wp_enqueue_scripts', 'dequeue_global_styles_inline_css', 20);

add_filter('hello_elementor_enqueue_theme_style', '__return_false');