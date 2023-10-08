<?php
/*
Plugin Name: Google Reviews Plugin
Description: A WordPress plugin to display Google Reviews.
Version: 1.0
Author: Rasel Ahmed
Authour URI: https://www.dreamworldweb.com
*/

// Enqueue scripts and styles
function enqueue_google_reviews_scripts() {
    wp_enqueue_style('google-reviews-style', plugin_dir_url(__FILE__) . 'css/style.css');
    wp_enqueue_script('google-reviews-script', plugin_dir_url(__FILE__) . 'js/script.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'enqueue_google_reviews_scripts');

// Include the frontend file


// Create the settings page
function google_reviews_settings_page() {
    ?>
    <div class="wrap">
        <h2>Google Reviews Plugin Settings</h2>
        <form method="post" action="options.php">
            <?php settings_fields('google_reviews_options'); ?>
            <?php do_settings_sections('google-reviews-settings'); ?>
            <table class="form-table">
                <tr valign="top">
                    <th scope="row">Google API Key</th>
                    <td><input type="text" name="google_api_key" value="<?php echo esc_attr(get_option('google_api_key')); ?>" /></td>
                </tr>
                <tr valign="top">
                    <th scope="row">Google My Business Place ID</th>
                    <td><input type="text" name="google_place_id" value="<?php echo esc_attr(get_option('google_place_id')); ?>" /></td>
                </tr>
            </table>
            <?php submit_button(); ?>
        </form>
    </div>
    <?php
}

// Register settings
function google_reviews_register_settings() {
    register_setting('google_reviews_options', 'google_api_key');
    register_setting('google_reviews_options', 'google_place_id');
}
add_action('admin_init', 'google_reviews_register_settings');

include_once(plugin_dir_path(__FILE__) . 'frontend.php');
require __DIR__ . '/vendor/autoload.php';
?>
