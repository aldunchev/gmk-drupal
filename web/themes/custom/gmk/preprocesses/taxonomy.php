<?php

/**
 * @file
 * Preprocess logic for taxonomy terms.
 * /

/**
 * Implements hook_theme_suggestions_taxonomy_term_alter().
 */
function gmk_theme_suggestions_taxonomy_term_alter(array &$suggestions, array $variables) {
  /** @var \Drupal\taxonomy\TermInterface $term */
  $term = $variables['elements']['#taxonomy_term'];
  $sanitized_view_mode = strtr($variables['elements']['#view_mode'], '.', '_');
  // Add view mode theme suggestions.
  $suggestions[] = 'taxonomy_term__' . $term->bundle() . '__' . $sanitized_view_mode;
}
