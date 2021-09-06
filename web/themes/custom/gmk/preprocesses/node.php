<?php

/**
 * @file
 * Contains Drupal preprocesses for nodes.
 */

/**
 * Implements hook_preprocess_node().
 */
function gmk_theme_preprocess_node(&$variables) {
  $node = $variables['node'];
  $bundle = $node->bundle();
  $view_mode = $variables['view_mode'];
}
