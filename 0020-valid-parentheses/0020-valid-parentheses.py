class Solution:
    def isValid(self, s: str) -> bool:
        pairs = {
                    '(': ')',
                    '[': ']',
                    '{': '}',
                  }
        brackets = list()
        for ch in s:
            if ch == '(' or ch == '[' or ch == '{':
                brackets.append(ch)
            if ch == ')' or ch == ']' or ch == '}':
                if len(brackets) == 0:
                    return False
                last = brackets.pop()
                if ch != pairs[last]:
                    return False
        return len(brackets) == 0