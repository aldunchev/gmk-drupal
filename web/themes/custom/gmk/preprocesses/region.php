<?php

/**
 * @file
 * Preprocess logic for regions
 */

/**
 * Implements hook_preprocess_region().
 */

function gmk_preprocess_region(&$variables) {
  switch ($variables['region']) {
    case 'header':
      $variables['attributes']['class'][] = 'container';
      break;
  }
}
