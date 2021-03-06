<?php

/**
 * @file
 * Provides the necessary hooks for custom blocks.
 */

use \Drupal\block_content\BlockContentInterface;

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 */
function gmk_theme_suggestions_block_alter(array &$suggestions, array $variables) {
  $content = $variables['elements']['content'];
  if (isset($content['#block_content'])
    and $content['#block_content'] instanceof BlockContentInterface) {
    // Add 'block--block-content-BLOCK-TYPE.html.twig'.
    $block_type_suggestions[] = 'block__block_content_' . $content['#block_content']->bundle();

    // Add 'block--block-content-BLOCK-TYPE--VIEW-MODE.html.twig'.
    $block_type_suggestions[] = 'block__block_content_' . $content['#block_content']->bundle() . '__' . $content['#view_mode'];

    // Because block__block_content exists twice in $suggestions,
    // the suggestion arrays are reversed for further processing.
    $suggestions_rev = array_reverse($suggestions);
    $block_type_suggestions = array_reverse($block_type_suggestions);

    // Insert the block type and view mode suggestions between
    // block__block_content and the block instance-specific suggestions.
    $index = array_search('block__block_content', $suggestions_rev);
    if (is_numeric($index)) {
      array_splice($suggestions_rev, $index, 0, $block_type_suggestions);
      $suggestions = array_reverse($suggestions_rev);
    }
    // If block__block_content isn't present as a suggestion.
    else {
      $suggestions_rev = array_merge($suggestions_rev, $block_type_suggestions);
      $suggestions = array_reverse($suggestions_rev);
    }
  }
}

/**
 * Implements hook_preprocess_block().
 */
function gmk_preprocess_block(&$variables) {
  $content = $variables['elements']['content'];
  $plugin_id = $variables['elements']['#plugin_id'];

  if (isset($content['#block_content'])) {
    $bundle = $content['#block_content']->bundle();
    $variables['attributes']['class'][] = 'block-type' . '__' . str_replace('_', '-', $bundle);

    switch ($bundle) {
      case 'top_baner':
        $variables['#attached']['library'][] = 'gmk/hero';
        break;
    }
  }

  switch ($plugin_id) {
    case 'local_tasks_block':
      $variables['attributes']['class'][] = 'fixed z-10 bottom-0 right-0 bg-white box-shadow';
      break;
  }
}
