<?php


function create_review_post_type() {
    $labels = array(
        'name'               => 'Reviews',
        'singular_name'      => 'Review',
        'menu_name'          => 'Reviews',
        'add_new'            => 'Add New Review',
        'add_new_item'       => 'Add New Review',
        'edit_item'          => 'Edit Review',
        'new_item'           => 'New Review',
        'view_item'          => 'View Review',
        'search_items'       => 'Search Reviews',
        'not_found'          => 'No reviews found',
        'not_found_in_trash' => 'No reviews found in trash',
    );

    $args = array(
        'labels'              => $labels,
        'public'              => true,
        'has_archive'         => true,
        'publicly_queryable'  => true,
        'query_var'           => true,
        'rewrite'             => array('slug' => 'reviews'), // Change 'reviews' to your desired URL slug
        'capability_type'     => 'post',
        'hierarchical'        => false,
        'supports'            => array('title','editor','thumbnail' ),
    );

    register_post_type('review', $args);
}

add_action('init', 'create_review_post_type');

//Adding a custom meta box to your custom post type, such as "Reviews,
function add_review_meta_box() {
    add_meta_box(
        'review_rating',
        'Rating',
        'render_review_meta_box',
        'review', // Replace with your custom post type name
        'normal',
        'default'
    );
}

function render_review_meta_box($post) {
    // Retrieve the existing rating value, if any
    $rating = get_post_meta($post->ID, '_review_rating', true);
    ?>
    <label for="review_rating">Rating:</label>
    <input type="number" id="review_rating" name="review_rating" value="<?php echo esc_attr($rating); ?>" step="1" min="0" max="5" />
    <?php
}

//save meta box
function add_author_name_meta_box() {
    add_meta_box(
        'author_name',
        'Author Name',
        'render_author_name_meta_box',
        'review', // Replace with your custom post type name
        'normal',
        'default'
    );
}

function add_review_date_meta_box() {
    add_meta_box(
        'review_date',
        'Review Date',
        'render_review_date_meta_box',
        'review', // Replace with your custom post type name
        'normal',
        'default'
    );
}

function add_author_count_meta_box() {
    add_meta_box(
        'author_count',
        'Author Count',
        'render_author_count_meta_box',
        'review', // Replace with your custom post type name
        'normal',
        'default'
    );
}

function render_author_name_meta_box($post) {
    $author_name = get_post_meta($post->ID, '_author_name', true);
    ?>
    <label for="author_name">Author Name:</label>
    <input type="text" id="author_name" name="author_name" value="<?php echo esc_attr($author_name); ?>" />
    <?php
}

function render_review_date_meta_box($post) {
    $review_date = get_post_meta($post->ID, '_review_date', true);
    ?>
    <label for="review_date">Review Date:</label>
    <input type="date" id="review_date" name="review_date" value="<?php echo esc_attr($review_date); ?>" />
    <?php
}

function render_author_count_meta_box($post) {
    $author_count = get_post_meta($post->ID, '_author_count', true);
    ?>
    <label for="author_count">Author Count:</label>
    <input type="number" id="author_count" name="author_count" value="<?php echo esc_attr($author_count); ?>" />
    <?php
}
function save_review_meta_box($post_id) {
    // Check if this is a review post
    if (get_post_type($post_id) !== 'review') {
        return;
    }

    // Save the rating field value
    if (isset($_POST['review_rating'])) {
        $rating = sanitize_text_field($_POST['review_rating']);
        update_post_meta($post_id, '_review_rating', $rating);
    }
}

add_action('save_post', 'save_review_meta_box');

function save_author_name_meta_box($post_id) {
    if (get_post_type($post_id) !== 'review') {
        return;
    }

    if (isset($_POST['author_name'])) {
        $author_name = sanitize_text_field($_POST['author_name']);
        update_post_meta($post_id, '_author_name', $author_name);
    }
}

function save_review_date_meta_box($post_id) {
    if (get_post_type($post_id) !== 'review') {
        return;
    }

    if (isset($_POST['review_date'])) {
        $review_date = sanitize_text_field($_POST['review_date']);
        update_post_meta($post_id, '_review_date', $review_date);
    }
}

function save_author_count_meta_box($post_id) {
    if (get_post_type($post_id) !== 'review') {
        return;
    }

    if (isset($_POST['author_count'])) {
        $author_count = intval($_POST['author_count']);
        update_post_meta($post_id, '_author_count', $author_count);
    }
}
add_action('add_meta_boxes', 'add_review_meta_box');
add_action('add_meta_boxes', 'add_author_name_meta_box');
add_action('add_meta_boxes', 'add_review_date_meta_box');
add_action('add_meta_boxes', 'add_author_count_meta_box');
add_action('save_post', 'save_author_name_meta_box');
add_action('save_post', 'save_review_date_meta_box');
add_action('save_post', 'save_author_count_meta_box');

function export_all_reviews_as_json() {
    $args = array(
        'post_type' => 'review', // Replace with your custom post type name
        'posts_per_page' => -1, // Retrieve all reviews
    );

    $reviews = get_posts($args);


    if (!empty($reviews)) {
        $review_data = array();

        foreach ($reviews as $review) {
			$author_image_id = get_the_post_thumbnail_url($review->ID, 'thumbnail');
	if($author_image_id ==''){
		$author_image_id = 'https://freepngimg.com/thumb/google/66726-customer-account-google-service-button-search-logo.png';
	}
            $review_data[] = array(
				'idHash'=>'IVa2Pe',
				'platform'=>'google',
				'avatar'=>$author_image_id,
				'score'=>get_post_meta($review->ID, '_review_rating', true),
                'content' => get_post_field('post_content', $review->ID),
                'authorName' => get_post_meta($review->ID, '_author_name', true),
                'publishedAt' => get_post_meta($review->ID, '_review_date', true),
				'authorCount'=> get_post_meta($review->ID, '_author_count', true)
                // Add more fields as needed
            );
        }

        $json_data = json_encode($review_data);

        // Define the file path where you want to save the JSON data
        $document_root = $_SERVER['DOCUMENT_ROOT'];
        $json_file_path = $document_root . '/review.json';

        // Save the JSON data to the specified file
        file_put_contents($json_file_path, $json_data);
    }
}



add_action('save_post', 'export_all_reviews_as_json');
add_action('publish_post', 'export_all_reviews_as_json');
add_action('wp_trash_post', 'export_all_reviews_as_json');



// Enqueue the custom JavaScript file
function enqueue_custom_script() {
	
	    wp_enqueue_style('custom-style', plugin_dir_url(__FILE__) . 'includes/css/widget.css', array(), '1.0.0', 'all');
    // Register the script
    wp_register_script('custom-script', plugin_dir_url(__FILE__) . 'includes/js/review.js', array('jquery'), '1.0.0', true);

    // Enqueue the script
    wp_enqueue_script('custom-script');
}

// Hook the enqueue function to the WordPress 'wp_enqueue_scripts' action
add_action('wp_enqueue_scripts', 'enqueue_custom_script');

// Add a shortcode to display reviews
// Fetch Google Reviews using saved API key and place ID

function fetch_google_reviews() {
    $api_key = get_option('google_api_key');
    $place_id = get_option('google_place_id');
    
    // Construct the URL for fetching reviews
    $url = "https://maps.googleapis.com/maps/api/place/details/json?place_id=$place_id&fields=reviews&key=$api_key";

    // Fetch data from Google API
    $response = wp_remote_get($url);

    if (is_array($response) && !is_wp_error($response)) {
        $body = wp_remote_retrieve_body($response);
        $data = json_decode($body);

        if ($data && isset($data->result->reviews)) {
            $reviews = $data->result->reviews;
            $output = '<div class="google-reviews">';
            
            foreach ($reviews as $review) {
                $output .= '<div class="review">';
                $output .= '<h3>' . esc_html($review->author_name) . '</h3>';
                $output .= '<p>' . esc_html($review->text) . '</p>';
                $output .= '</div>';
            }

            $output .= '</div>';
            return $output;
        }
    }

    return ;?><div id='m8-ctas-container' onmousedown='m8engine.shouldExit(event.target)' class=''>
   
</div>
<div id='m8-widgetTiles' class='m8-small'>
    <div class='m8-close' onclick='m8engine.closeReviewsTiles()'></div>
    <div class='m8-reviews' style='margin-top: -3872px;'>
        <?php
$args = array(
    'post_type' => 'review',
    'posts_per_page' => -1, // Number of reviews to display
);

$reviews = new WP_Query($args);

if ($reviews->have_posts()) :
    while ($reviews->have_posts()) : $reviews->the_post(); 
    $rating = get_post_meta(get_the_ID(), '_review_rating', true);
    $author_name = get_post_meta(get_the_ID(), '_author_name', true);
    $review_date = get_post_meta(get_the_ID(), '_review_date', true);
    $author_count = get_post_meta(get_the_ID(), '_author_count', true);
    $author_image_id = get_post_meta(get_the_ID(), '_author_image_id', true);
    $author_image_url = wp_get_attachment_image_url($author_image_id, 'thumbnail');
    ?>
    <div class='m8-single-review google' onclick='m8engine.toggleReviewsTiles()' onmouseover='m8engine.toggleAutoslide(false)' onmouseout='m8engine.toggleAutoslide(true)'>
        <div>
            <div class='m8-lfbody'>
                <div class='m8-pf'></div>
                <div class='m8-date'><?php echo $review_date; ?></div>
                <div class='m8-preview'>
                    <span class='m8-score' data-score='5'><span></span>5</span><span>/10</span>
                    <span class='m8-excerpt '>
                           <?php echo the_content();?>
                    </span>
                </div>
            </div>
            <div class='m8-rtbody'>
                <div class='m8-avatar'><img src='<?php echo esc_url($author_image_url); ?>' width='34'> 
</div>
                <div class='m8-author'>
                    <div class='m8-author-name'><?php echo $author_name;?></div>
                    <div class='m8-author-level'></div>
                    <div class='m8-author-count'><?php echo $author_count; ?></div>
                </div>
            </div>
        </div>
        
        <div class='m8-content'>
            the_content();
        </div>
        
    </div>
    
    <?php   endwhile;
    wp_reset_postdata();
else :
    echo 'No reviews found.';
endif;
?>
   
    </div>

    <div class='m8-myli' onclick='m8engine.restoreReviewsTiles()'></div>
</div>
<?php }

function google_reviews_shortcode($atts) {
    // Fetch reviews using the saved API key and place ID
    $reviews_html = fetch_google_reviews();

    if ($reviews_html) {
        return $reviews_html;
    } else {
        return '';
    }
}
add_shortcode('wp_footer', 'google_reviews_shortcode');




?>