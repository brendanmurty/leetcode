<?
class Solution {

  /**
   * @param Integer[] $nums
   * @return Integer
   */
  function removeDuplicates(&$nums) {
    $nums_deduped = [];
    
    foreach ($nums as $num) {
      if (in_array($num, $nums_deduped)) {
        // This value is already in the array, skip it
        continue;
      }

      $nums_deduped[] = $num;
    }
    
    $nums = array_values($nums_deduped);

    return count($nums);
  }
}
?>