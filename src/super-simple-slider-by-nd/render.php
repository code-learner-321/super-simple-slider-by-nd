<div <?php echo get_block_wrapper_attributes(); ?>>
    <?php
    $unique_id = uniqid('super_simple_slider_by_nd');
    // Background Layer Opacity..
    $background_color = isset($attributes['backgroundColor']) ? esc_attr($attributes['backgroundColor']) : 'rgba(255, 255, 255, 1)';

    $sliderFontFamily = $attributes['fontFamilyFirstField'];
    $sliderHeight = $attributes['sliderHeight'];
    $sliderHeightTablet = $attributes['sliderHeightTablet'];
    $sliderHeightMobile = $attributes['sliderHeightMobile'];

    $fontSize = $attributes['firstFieldFontSize'];
    $firstFieldFontColor = $attributes['textColorFirstField'];
    $secondFieldFontColor = $attributes['textColorSecondField'];
    $thirdFieldFontColor = $attributes['textColorThirdField'];

    $fontWeight = $attributes['firstFieldfontWeight']; // FONT WEIGHT FOR FIRST FIELD
    $secondFieldFontWeight = $attributes['secondFieldfontWeight']; // FONT WEIGHT FOR SECOND FIELD
    $thirdFieldFontWeight = $attributes['thirdFieldfontWeight']; // FONT WEIGHT FOR SECOND FIELD

    // First Field Desktop..
    $adjustAllPadding = $attributes['adjustAllPadding'];
    $paddingAll = $attributes['paddingAll'];
    $paddingTop = $attributes['paddingTop'];
    $paddingRight = $attributes['paddingRight'];
    $paddingBottom = $attributes['paddingBottom'];
    $paddingLeft = $attributes['paddingLeft'];

    $paddingFirstFieldDesktop = $adjustAllPadding ? $paddingAll . "px" : $paddingTop . "px " . $paddingRight . "px " . $paddingBottom . "px " . $paddingLeft . "px";

    // First Field Tablet..
    $adjustAllPaddingTablet = $attributes['adjustAllPaddingTablet'];
    $paddingAllTablet = $attributes['paddingAllTablet'];
    $paddingTopTablet = $attributes['paddingTopTablet'];
    $paddingRightTablet = $attributes['paddingRightTablet'];
    $paddingBottomTablet = $attributes['paddingBottomTablet'];
    $paddingLeftTablet = $attributes['paddingLeftTablet'];

    $paddingFirstFieldTablet = $adjustAllPaddingTablet ? $paddingAllTablet . "px" : $paddingTopTablet . "px " . $paddingRightTablet . "px " . $paddingBottomTablet . "px " . $paddingLeftTablet . "px";

    // First Field Mobile..
    $adjustAllPaddingMobile = $attributes['adjustAllPaddingMobile'];
    $paddingAllMobile = $attributes['paddingAllMobile'];
    $paddingTopMobile = $attributes['paddingTopMobile'];
    $paddingRightMobile = $attributes['paddingRightMobile'];
    $paddingBottomMobile = $attributes['paddingBottomMobile'];
    $paddingLeftMobile = $attributes['paddingLeftMobile'];

    $paddingFirstFieldMobile = $adjustAllPaddingMobile ? $paddingAllMobile . "px" : $paddingTopMobile . "px " . $paddingRightMobile . "px " . $paddingBottomMobile . "px " . $paddingLeftMobile . "px";


    // Second Field Desktop..
    $secondFieldAdjustAllPaddingDesktop = $attributes['secondFieldAdjustAllPaddingDesktop'];
    $secondFieldPaddingAllDesktop = $attributes['secondFieldPaddingAllDesktop'];
    $secondFieldPaddingTopDesktop = $attributes['secondFieldPaddingTopDesktop'];
    $secondFieldPaddingRightDesktop = $attributes['secondFieldPaddingRightDesktop'];
    $secondFieldPaddingBottomDesktop = $attributes['secondFieldPaddingBottomDesktop'];
    $secondFieldPaddingLeftDesktop = $attributes['secondFieldPaddingLeftDesktop'];

    $paddingFirstFieldDesktopStyle = $secondFieldAdjustAllPaddingDesktop ? $secondFieldPaddingAllDesktop . "px" : $secondFieldPaddingTopDesktop . "px " . $secondFieldPaddingRightDesktop . "px " . $secondFieldPaddingBottomDesktop . "px " . $secondFieldPaddingLeftDesktop . "px";

    // Second Field Tablet..
    $secondFieldAdjustAllPaddingTablet = $attributes['secondFieldAdjustAllPaddingTablet'];
    $secondFieldPaddingAllTablet = $attributes['secondFieldPaddingAllTablet'];
    $secondFieldPaddingTopTablet = $attributes['secondFieldPaddingTopTablet'];
    $secondFieldPaddingRightTablet = $attributes['secondFieldPaddingRightTablet'];
    $secondFieldPaddingBottomTablet = $attributes['secondFieldPaddingBottomTablet'];
    $secondFieldPaddingLeftTablet = $attributes['secondFieldPaddingLeftTablet'];

    $secondFieldPaddingStyleTablet = $secondFieldAdjustAllPaddingTablet ? $secondFieldPaddingAllTablet . "px" : $secondFieldPaddingTopTablet . "px " . $secondFieldPaddingRightTablet . "px " . $secondFieldPaddingBottomTablet . "px " . $secondFieldPaddingLeftTablet . "px";

    // Second Field Mobile..
    $secondFieldAdjustAllPaddingMobile = $attributes['secondFieldAdjustAllPaddingMobile'];
    $secondFieldPaddingAllMobile = $attributes['secondFieldPaddingAllMobile'];
    $secondFieldPaddingTopMobile = $attributes['secondFieldPaddingTopMobile'];
    $secondFieldPaddingRightMobile = $attributes['secondFieldPaddingRightMobile'];
    $secondFieldPaddingBottomMobile = $attributes['secondFieldPaddingBottomMobile'];
    $secondFieldPaddingLeftMobile = $attributes['secondFieldPaddingLeftMobile'];

    $secondFieldPaddingStyleMobile = $secondFieldAdjustAllPaddingMobile ? $secondFieldPaddingAllMobile . "px" : $secondFieldPaddingTopMobile . "px " . $secondFieldPaddingRightMobile . "px " . $secondFieldPaddingBottomMobile . "px " . $secondFieldPaddingLeftMobile . "px";


    // Third Field Desktop..
    $thirdFieldAdjustAllPaddingDesktop = $attributes['thirdFieldAdjustAllPaddingDesktop'];
    $thirdFieldPaddingAllDesktop = $attributes['thirdFieldPaddingAllDesktop'];
    $thirdFieldPaddingTopDesktop = $attributes['thirdFieldPaddingTopDesktop'];
    $thirdFieldPaddingRightDesktop = $attributes['thirdFieldPaddingRightDesktop'];
    $thirdFieldPaddingBottomDesktop = $attributes['thirdFieldPaddingBottomDesktop'];
    $thirdFieldPaddingLeftDesktop = $attributes['thirdFieldPaddingLeftDesktop'];

    $paddingThirdFieldDesktopStyle = $thirdFieldAdjustAllPaddingDesktop ? $thirdFieldPaddingAllDesktop . "px" : $thirdFieldPaddingTopDesktop . "px " . $thirdFieldPaddingRightDesktop . "px " . $thirdFieldPaddingBottomDesktop . "px " . $thirdFieldPaddingLeftDesktop . "px";

    // Second Field Tablet..
    $thirdFieldAdjustAllPaddingTablet = $attributes['thirdFieldAdjustAllPaddingTablet'];
    $thirdFieldPaddingAllTablet = $attributes['thirdFieldPaddingAllTablet'];
    $thirdFieldPaddingTopTablet = $attributes['thirdFieldPaddingTopTablet'];
    $thirdFieldPaddingRightTablet = $attributes['thirdFieldPaddingRightTablet'];
    $thirdFieldPaddingBottomTablet = $attributes['thirdFieldPaddingBottomTablet'];
    $thirdFieldPaddingLeftTablet = $attributes['thirdFieldPaddingLeftTablet'];

    $thirdFieldPaddingStyleTablet = $thirdFieldAdjustAllPaddingTablet ? $thirdFieldPaddingAllTablet . "px" : $thirdFieldPaddingTopTablet . "px " . $thirdFieldPaddingRightTablet . "px " . $thirdFieldPaddingBottomTablet . "px " . $thirdFieldPaddingLeftTablet . "px";

    // Second Field Mobile..
    $thirdFieldAdjustAllPaddingMobile = $attributes['thirdFieldAdjustAllPaddingMobile'];
    $thirdFieldPaddingAllMobile = $attributes['thirdFieldPaddingAllMobile'];
    $thirdFieldPaddingTopMobile = $attributes['thirdFieldPaddingTopMobile'];
    $thirdFieldPaddingRightMobile = $attributes['thirdFieldPaddingRightMobile'];
    $thirdFieldPaddingBottomMobile = $attributes['thirdFieldPaddingBottomMobile'];
    $thirdFieldPaddingLeftMobile = $attributes['thirdFieldPaddingLeftMobile'];

    $thirdFieldPaddingStyleMobile = $thirdFieldAdjustAllPaddingMobile ? $thirdFieldPaddingAllMobile . "px" : $thirdFieldPaddingTopMobile . "px " . $thirdFieldPaddingRightMobile . "px " . $thirdFieldPaddingBottomMobile . "px " . $thirdFieldPaddingLeftMobile . "px";

    $alignItems = $attributes['alignItems'];
    $justifyContent = $attributes['justifyContent'];

    $category_id = 3;
    $wp_query = new WP_Query(
        array(
            'cat' => $category_id,
            'post_type' => 'super_simple_slider',
            'post_status' => 'publish'
        )
    );
    ?>
    <div class="slider <?php echo $unique_id; ?>">
        <div class="slides">
            <?php
            if ($wp_query->have_posts()) :
                while ($wp_query->have_posts()) : $wp_query->the_post(); ?>
                    <?php
                    $post_id = get_the_ID();
                    $metabox_value1 = get_post_meta($post_id, '_caption1', true);
                    $metabox_value2 = get_post_meta($post_id, '_caption2', true);
                    $metabox_value3 = get_post_meta($post_id, '_caption3', true);

                    $desktopFontSizeFirstField = !empty($attributes['sliderDesktopSize']) ? $attributes['sliderDesktopSize'] : 20;
                    $tabletFontSizeFirstField = !empty($attributes['sliderTabletSize']) ? $attributes['sliderTabletSize'] : 18;
                    $mobileFontSizeFirstField = !empty($attributes['sliderMobileSize']) ? $attributes['sliderMobileSize'] : 16;

                    $desktopFontSizeSecondField = !empty($attributes['sliderDesktopSizeSecondField']) ? $attributes['sliderDesktopSizeSecondField'] : 20;
                    $tabletFontSizeSecondField = !empty($attributes['sliderTabletSizeSecondField']) ? $attributes['sliderTabletSizeSecondField'] : 18;
                    $mobileFontSizeSecondField = !empty($attributes['sliderMobileSizeSecondField']) ? $attributes['sliderMobileSizeSecondField'] : 16;

                    $desktopFontSizeThirdField = !empty($attributes['sliderDesktopSizeThirdField']) ? $attributes['sliderDesktopSizeThirdField'] : 20;
                    $tabletFontSizeThirdField = !empty($attributes['sliderTabletSizeThirdField']) ? $attributes['sliderTabletSizeThirdField'] : 18;
                    $mobileFontSizeThirdField = !empty($attributes['sliderMobileSizeThirdField']) ? $attributes['sliderMobileSizeThirdField'] : 16;

                    ?>
                    <?php
                    $featured_image_id = get_post_thumbnail_id($post_id);
                    $featured_image_url = wp_get_attachment_image_src($featured_image_id, 'full')[0];
                    ?>
                    <div class="slide">
                        <img src="<?php echo $featured_image_url; ?>" alt="Image 1">
                        <div class="caption" style="background-color: <?php echo $background_color; ?>; display: flex; align-items:<?php echo $alignItems; ?>;justify-content:<?php echo $justifyContent; ?>">
                            <div class="text-field1" style="color: <?php echo $firstFieldFontColor; ?>; font-weight: <?php echo $fontWeight; ?>">
                                <?php echo esc_html($metabox_value1); ?>
                            </div>
                            <div class="text-field2" style="color: <?php echo $secondFieldFontColor; ?>; font-weight: <?php echo $secondFieldFontWeight; ?>">
                                <?php echo esc_html($metabox_value2); ?>
                            </div>
                            <div class="text-field3" style="color: <?php echo $thirdFieldFontColor; ?>; font-weight: <?php echo $thirdFieldFontWeight; ?>">
                                <?php echo esc_html($metabox_value3); ?>
                            </div>
                        </div>
                    </div>
                <?php endwhile;
            else : ?>
                <p><?php echo _e('No posts found in the Sports category.', 'textdomain'); ?></p>
            <?php endif;
            wp_reset_postdata();
            ?>
        </div>
        <div class="navigation">
            <button class="prev">&#10094;</button>
            <button class="next">&#10095;</button>
        </div>
    </div>

    <style>
        /* RESPONSIVE STYLES FOR TEXTFIELD1... */
        /* Desktop Default */
        .<?php echo $unique_id; ?> {
            font-family: <?php echo $sliderFontFamily; ?>;
            height: <?php echo $sliderHeight; ?>vh;
        }
        .<?php echo $unique_id; ?> .caption .text-field1 {
            font-size: <?php echo esc_attr($desktopFontSizeFirstField); ?>px;
            padding: <?php echo $paddingFirstFieldDesktop; ?>;
        }

        /* Tablet */
        @media only screen and (max-width: 768px) {
            .<?php echo $unique_id; ?> .slider {
                height: <?php echo $sliderHeightTablet; ?>vh;
            }

            .<?php echo $unique_id; ?> .caption .text-field1 {
                font-size: <?php echo esc_attr($tabletFontSizeFirstField); ?>px;
                padding: <?php echo $paddingFirstFieldTablet; ?>;
            }
        }

        /* Mobile */
        @media only screen and (max-width: 480px) {
            .<?php echo $unique_id; ?> .slider {
                height: <?php echo $sliderHeightMobile; ?>vh;
            }

            .<?php echo $unique_id; ?> .caption .text-field1 {
                font-size: <?php echo esc_attr($mobileFontSizeFirstField); ?>px;
                padding: <?php echo $paddingFirstFieldMobile; ?>;
            }
        }

        .<?php echo $unique_id; ?> .slides .slide .caption .text-field1 {
            color: <?php echo $firstFieldFontColor; ?>;
            font-weight: <?php echo $fontWeight; ?>;
            font-style: <?php echo $fontWeight == 'italic' ? 'italic' : 'normal'; ?>;
        }

        /* RESPONSIVE STYLES FOR TEXTFIELD1 ENDS HERE... */


        /* RESPONSIVE STYLES FOR TEXTFIELD2... */
        .<?php echo $unique_id; ?> .caption .text-field2 {
            font-size: <?php echo esc_attr($desktopFontSizeSecondField); ?>px;
            padding: <?php echo $paddingFirstFieldDesktopStyle; ?>;
            font-style: <?php echo $secondFieldFontWeight == 'italic' ? 'italic' : 'normal'; ?>;
        }

        @media only screen and (max-width: 768px) {
            .<?php echo $unique_id; ?> .caption .text-field2 {
                font-size: <?php echo esc_attr($tabletFontSizeSecondField); ?>px;
                padding: <?php echo $secondFieldPaddingStyleTablet; ?>;
            }
        }

        @media only screen and (max-width: 480px) {
            .<?php echo $unique_id; ?> .caption .text-field2 {
                font-size: <?php echo esc_attr($mobileFontSizeSecondField); ?>px;
                padding: <?php echo $secondFieldPaddingStyleMobile; ?>;
            }
        }

        .<?php echo $unique_id; ?> .slider .slides .slide .caption .text-field2 {
            color: <?php echo $secondFieldFontColor; ?>;
            font-weight: <?php echo $secondFieldFontWeight; ?>;
            font-style: <?php echo $secondFieldFontWeight == 'italic' ? 'italic' : 'normal'; ?>;
        }

        /* RESPONSIVE STYLES FOR TEXTFIELD3... */
        .<?php echo $unique_id; ?> .caption .text-field3 {
            font-size: <?php echo esc_attr($desktopFontSizeThirdField); ?>px;
            padding: <?php echo $paddingThirdFieldDesktopStyle; ?>;
            font-style: <?php echo $thirdFieldFontWeight;?>;
        }

        @media only screen and (max-width: 768px) {
            .<?php echo $unique_id; ?> .caption .text-field3 {
                font-size: <?php echo esc_attr($tabletFontSizeThirdField); ?>px;
                padding: <?php echo $thirdFieldPaddingStyleTablet ?>;
            }
        }

        @media only screen and (max-width: 480px) {
            .<?php echo $unique_id; ?> .caption .text-field3 {
                font-size: <?php echo esc_attr($mobileFontSizeThirdField); ?>px;
                padding: <?php echo $thirdFieldPaddingStyleMobile; ?>;
            }
        }

        .<?php echo $unique_id; ?> .slider .slides .slide .caption .text-field3 {
            color: <?php echo $thirdFieldFontColor; ?>;
            font-weight: <?php echo $thirdFieldFontWeight; ?>;
            font-style: <?php echo $thirdFieldFontWeight == 'italic' ? 'italic' : 'normal'; ?>;
        }

        /* RESPONSIVE STYLES FOR TEXTFIELD3 ENDS HERE... */
    </style>

</div>