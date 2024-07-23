package cn.chilam.algorithmpractice.leetcode.editor.cn;
//leetcode submit region begin(Prohibit modification and deletion)
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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(-1);
        dummy.next = head;
        ListNode p1 = dummy;
        // 先走n+1步
        for (int i = 0; i < n + 1; i++) {
            p1 = p1.next;
        }
        ListNode p2 = dummy;
        // p1和p2同时走len-n-1步
        while (p1 != null) {
            p2 = p2.next;
            p1 = p1.next;
        }
        // p2现在就是倒数第n+1个节点
        // 删除第n个节点，并将后面节点连接上
        p2.next = p2.next.next;
        return dummy.next;
    }
}
//leetcode submit region end(Prohibit modification and deletion)
