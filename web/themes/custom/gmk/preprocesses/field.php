<?php

/**
 * @file
 * Contains Drupal preprocesses for fields.
 */

/**
 * Implements hook_preprocess_field().
 */
function bg_theme_preprocess_field(array &$variables, $hook) {
  $element = $variables['element'];
  $field_name = $element['#field_name'];

  switch ($field_name) {
    case 'field_right_hand_related_content':
      $variables['#attached']['library'][] = 'bg_theme/right-hand-related-content';
      break;

    case 'field_training_date':
      $variables['label'] = t('Date');
      break;
  }
}
