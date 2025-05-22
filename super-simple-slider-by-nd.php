<?php

/**
 * Plugin Name:       Super Simple Slider By Nd
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       super-simple-slider-by-nd
 *
 * @package CreateBlock
 */

if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_super_simple_slider_by_nd_block_init()
{
    register_block_type(__DIR__ . '/build/super-simple-slider-by-nd');
}
add_action('init', 'create_block_super_simple_slider_by_nd_block_init');

/* SUPER SIMPLE IMAGE SLIDER
............................. */

function create_super_simple_image_slide_cpt()
{
    $labels = array(
        'name' => _x('Super Simple Image Slider', 'Post Type General Name', 'textdomain'),
        'singular_name' => _x('Super Simple Image Slider', 'Post Type Singular Name', 'textdomain'),
        'menu_name' => _x('Super Simple Slider', 'Admin Menu text', 'textdomain'),
        'name_admin_bar' => _x('Super Simple Image Slider', 'Add New on Toolbar', 'textdomain'),
        'add_new' => __('Add New', 'textdomain'),
        'add_new_item' => __('Add New Image Slider', 'textdomain'),
        'new_item' => __('New Image Slider', 'textdomain'),
        'edit_item' => __('Edit Image Slider', 'textdomain'),
        'view_item' => __('View Image Slider', 'textdomain'),
        'all_items' => __('All Image Slider', 'textdomain'),
        'search_items' => __('Search Image Slider', 'textdomain'),
        'parent_item_colon' => __('Parent Image Slider:', 'textdomain'),
        'not_found' => __('No image slider found.', 'textdomain'),
        'not_found_in_trash' => __('No image slider found in Trash.', 'textdomain'),
        'featured_image' => _x('Slider Image', 'Overrides the “Featured Image” phrase for this post type.', 'textdomain'),
        'set_featured_image' => _x('Set slider image', 'Overrides the “Set featured image” phrase for this post type.', 'textdomain'),
        'remove_featured_image' => _x('Remove slider image', 'Overrides the “Remove featured image” phrase for this post type.', 'textdomain'),
        'use_featured_image' => _x('Use as slider image', 'Overrides the “Use as featured image” phrase for this post type.', 'textdomain'),
        'archives' => _x('Image Slider Archives', 'The post type archive label used in nav menus.', 'textdomain'),
        'insert_into_item' => _x('Insert into image slider', 'Overrides the “Insert into post” phrase for this post type.', 'textdomain'),
        'uploaded_to_this_item' => _x('Uploaded to this image slider', 'Overrides the “Uploaded to this post” phrase for this post type.', 'textdomain'),
        'filter_items_list' => _x('Filter image slides list', 'Screen reader text for the filter links heading.', 'textdomain'),
        'items_list_navigation' => _x('Image slider list navigation', 'Screen reader text for the pagination heading.', 'textdomain'),
        'items_list' => _x('Image slider list', 'Screen reader text for the items list heading.', 'textdomain'),
    );

    $args = array(
        'label' => __('Super Simple Image Slider', 'textdomain'),
        'description' => __('A custom post type for image slider', 'textdomain'),
        'labels' => $labels,
        'supports' => array('title', 'editor', 'thumbnail'),
        'hierarchical' => false,
        'public' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_position' => 20,
        'menu_icon' => 'dashicons-format-gallery',
        'show_in_admin_bar' => true,
        'show_in_nav_menus' => true,
        'can_export' => true,
        'has_archive' => true,
        'exclude_from_search' => false,
        'publicly_queryable' => true,
        'capability_type' => 'post',
    );

    register_post_type('super_simple_slider', $args);
}

add_action('init', 'create_super_simple_image_slide_cpt', 0);


// SLIDER TAXANOMY...
function create_super_simple_slider_taxonomy()
{
    $labels = array(
        'name' => _x('Slider Categories', 'Taxonomy General Name', 'textdomain'),
        'singular_name' => _x('Slider Category', 'Taxonomy Singular Name', 'textdomain'),
        'menu_name' => __('Slider Categories', 'textdomain'),
        'all_items' => __('All Categories', 'textdomain'),
        'parent_item' => __('Parent Category', 'textdomain'),
        'parent_item_colon' => __('Parent Category:', 'textdomain'),
        'new_item_name' => __('New Category Name', 'textdomain'),
        'add_new_item' => __('Add New Category', 'textdomain'),
        'edit_item' => __('Edit Category', 'textdomain'),
        'update_item' => __('Update Category', 'textdomain'),
        'view_item' => __('View Category', 'textdomain'),
        'separate_items_with_commas' => __('Separate categories with commas', 'textdomain'),
        'add_or_remove_items' => __('Add or remove categories', 'textdomain'),
        'choose_from_most_used' => __('Choose from the most used', 'textdomain'),
        'popular_items' => __('Popular Categories', 'textdomain'),
        'search_items' => __('Search Categories', 'textdomain'),
        'not_found' => __('Not Found', 'textdomain'),
        'no_terms' => __('No categories', 'textdomain'),
        'items_list' => __('Categories list', 'textdomain'),
        'items_list_navigation' => __('Categories list navigation', 'textdomain'),
    );
    $args = array(
        'labels' => $labels,
        'hierarchical' => true,
        'public' => true,
        'show_ui' => true,
        'show_admin_column' => true,
        'show_in_nav_menus' => true,
        'show_tagcloud' => true,
        'show_in_rest' => true, // This ensures the taxonomy is available via REST API
    );
    register_taxonomy('simple_slider_category_by_nd', array('super_simple_slider'), $args);
}
add_action('init', 'create_super_simple_slider_taxonomy', 0);
// SLIDER TAXANOMY ENDS...



// Add Meta Boxes
function add_super_simple_image_slide_metaboxes()
{
    add_meta_box(
        'super_simple_image_slide_captions',
        __('Image Slide Captions', 'textdomain'),
        'super_simple_image_slide_captions_metabox',
        'super_simple_slider',
        'normal',
        'default'
    );
}

add_action('add_meta_boxes', 'add_super_simple_image_slide_metaboxes');

function super_simple_image_slide_captions_metabox($post)
{
    $caption1 = get_post_meta($post->ID, '_caption1', true);
    $caption2 = get_post_meta($post->ID, '_caption2', true);
    $caption3 = get_post_meta($post->ID, '_caption3', true);
    wp_nonce_field('save_super_simple_image_slide_captions', 'super_simple_image_slide_captions_nonce');
?>
    <p>
        <label for="caption1"><?php _e('Caption Heading 1:', 'textdomain'); ?></label>
        <input type="text" id="caption1" name="caption1" value="<?php echo esc_attr($caption1); ?>" size="25" />
    </p>
    <p>
        <label for="caption2"><?php _e('Caption Heading 2:', 'textdomain'); ?></label>
        <input type="text" id="caption2" name="caption2" value="<?php echo esc_attr($caption2); ?>" size="25" />
    </p>
    <p>
        <label for="caption3"><?php _e('Caption Heading 3:', 'textdomain'); ?></label>
        <input type="text" id="caption3" name="caption3" value="<?php echo esc_attr($caption3); ?>" size="25" />
    </p>
<?php
}

function save_super_simple_image_slide_captions($post_id)
{
    if (
        !isset($_POST['super_simple_image_slide_captions_nonce']) ||
        !wp_verify_nonce($_POST['super_simple_image_slide_captions_nonce'], 'save_super_simple_image_slide_captions')
    ) {
        error_log('Nonce verification failed.');
        return;
    }

    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        error_log('Doing autosave.');
        return;
    }

    if (!current_user_can('edit_post', $post_id)) {
        error_log('User cannot edit post.');
        return;
    }

    if (isset($_POST['caption1'])) {
        $caption1 = sanitize_text_field($_POST['caption1']);
        update_post_meta($post_id, '_caption1', $caption1);
        error_log('Caption 1 saved: ' . $caption1);
    } else {
        error_log('Caption 1 not set.');
    }

    if (isset($_POST['caption2'])) {
        $caption2 = sanitize_text_field($_POST['caption2']);
        update_post_meta($post_id, '_caption2', $caption2);
        error_log('Caption 2 saved: ' . $caption2);
    } else {
        error_log('Caption 2 not set.');
    }

    if (isset($_POST['caption3'])) {
        $caption3 = sanitize_text_field($_POST['caption3']);
        update_post_meta($post_id, '_caption3', $caption3);
        error_log('Caption 3 saved: ' . $caption3);
    } else {
        error_log('Caption 3 not set.');
    }
}

add_action('save_post', 'save_super_simple_image_slide_captions');

// Debugging: Check if the action is running
function debug_super_simple_image_slide_metaboxes()
{
    error_log('Meta boxes are being added.');
}

add_action('add_meta_boxes', 'debug_super_simple_image_slide_metaboxes', 11);

// PASSING ATTRIBUTE CALLED SLIDER INTERVAL INTO VIEW.JS...

