<?php

/**
 * @file
 * Preprocess logic for paragraphs.
 */

function gmk_preprocess_paragraph(&$variables) {
  $bundle =  $paragraph_type = $variables['elements']['#paragraph']->getParagraphType()->id;
  $paragraph = $variables['paragraph'];
  $variables['container'] = TRUE;
  $variables['main_section'] = TRUE;

  switch ($bundle) {
    case 'brands':
      $variables['#attached']['library'][] = 'gmk/brands';
      break;

    case 'hero':
      $variables['container'] = FALSE;
      $variables['main_section'] = FALSE;
      break;

    case 'top_products':
      $variables['#attached']['library'][] = 'gmk/card-carousel';
      break;

    case 'media':
      $variables['container_small'] = true;
      break;
  }

  if ($paragraph->hasField('field_landing_page_title')) {
    $landingTitle = $paragraph->get('field_landing_page_title')->getValue();

    if (isset($landingTitle[0]) && $landingTitle[0]['value'] === '1') {
      $variables['attributes']['class'][] = 'paragraph--landing-page-title';
    }
  }

  if ($paragraph->hasField('field_theme_light')) {
    $theme = $paragraph->get('field_theme_light')->getValue();

    if (isset($theme[0]) && $theme[0]['value'] === '1') {
      $variables['attributes']['class'][] = 'theme--light';
    }
  }
}
