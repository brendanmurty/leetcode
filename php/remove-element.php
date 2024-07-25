<?

// Problem: https://leetcode.com/problems/remove-element/description/

class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $val
     * @return Integer
     */
    function removeElement(&$nums, $val) {
      $nums_count = count($nums);
      
      for ($i = 0; $i < $nums_count; $i++) {
        if ($nums[$i] != $val) {
          continue;
        }

        if (in_array($val, $nums)) {
          unset($nums[$i]);
        }
      }

      return count($nums);
    }
}

?>