package cn.chilam.algorithmpractice.leetcode.editor.cn;
//leetcode submit region begin(Prohibit modification and deletion)

import java.util.PriorityQueue;

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        if (lists.length == 0) return null;
        ListNode dummy = new ListNode(-1);
        ListNode p = dummy;
        PriorityQueue<ListNode> pq = new PriorityQueue<>(lists.length, (a, b) -> (a.val - b.val));

        for (ListNode head : lists) {
            if (head != null) {
                pq.add(head);
            }
        }

        while (!pq.isEmpty()) {
            // 值最小的node
            ListNode min = pq.poll();
            p.next = min;

            // 队列出队后，补充下一个node进来
            if (min.next != null) {
                pq.add(min.next);
            }

            p = p.next;
        }

        return dummy.next;
    }
}
//leetcode submit region end(Prohibit modification and deletion)
