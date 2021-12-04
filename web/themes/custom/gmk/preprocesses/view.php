<?php

/**
 * @file
 * Contains Drupal preprocesses for views.
 */

/**
 * Implements hook_preprocess_views_view().
 */
function gmk_preprocess_views_view(&$variables) {
  $view_id = $variables['id'];
  $display = $variables['display_id'];

  switch ($display) {
    case 'products_list':
    case 'brand_products_list':
      $menu_items = [];

      foreach ($variables['rows'] as $key => $value) {
        $menu_items[] = $value['#title'];

        // dump($value['#view']->field['field_color']->getValue($value));
        // dump($value);
      }
      // dump($variables['view']->field['field_color']);

      $view = $variables['view'];
      $color = NULL;
      foreach ($view->result as $row_id => $row) {
        if (isset($view->field['field_color'])) {
          $color = $view->field['field_color']->getValue($row);
          if ($color) {
            break;
          }
        }
        // dump($view->field['field_color']->getValue($row));
        // foreach ($view->field as $field_id => $field ) {
        //   $values[$row_id][$field_id] = $field->getValue($row);
        // }
      }

      $variables['menu_color'] = $color;

      $variables['menu'] = $menu_items;
      break;
  }
  
}
