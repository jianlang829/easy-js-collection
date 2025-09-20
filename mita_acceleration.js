// ==UserScript==
// @name         mita加速
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  在页面加载前屏蔽指定元素，减少资源消耗，提升体验--屏蔽metaso的某些fr元素
// @author       You
// @match        https://metaso.cn/
// @grant        none
// @run-at       document-start
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij48cGF0aCBkPSJNMTIwIDcuMWM0LjQgMCA4IDQuMSA4IDl2NzMuMmMwIDUtMy42IDktOCA5SDgwLjhsNy4yIDE2LjNjLjggMi4zIDAgNS0xLjYgNS45LS40LjUtMS4yLjUtMS42LjVINDMuNmMtMi40IDAtNC0xLjgtNC00LjUgMC0uOSAwLTEuNC40LTEuOGw3LjItMTYuM0g4Yy00LjQgMC04LTQuMS04LTlWMTYuMWMwLTUgMy42LTkgOC05aDExMnoiIGZpbGw9IiM0NDQiLz48cGF0aCBkPSJNMTAyLjMgMzQuN2ExNC4yOCAxNC4yOCAwIDAgMC02LjItNi4yYy0yLjctMS40LTUuMy0yLjItMTIuNi0yLjJINjkuMXY1NC42aDE0LjRjNy4zIDAgOS45LS44IDEyLjYtMi4yYTE1LjQyIDE1LjQyIDAgMCAwIDYuMi02LjJjMS40LTIuNyAyLjItNS4zIDIuMi0xMi42VjQ3LjNjMC03LjMtLjgtOS45LTIuMi0xMi42em0tOC43IDI4LjJjMCAyLjQtLjIgMy4zLS43IDQuMnMtMS4yIDEuNi0yLjEgMi4xYy0uOS40LTEuOC43LTQuMi43SDgwVjM3LjJoNi42YzIuNCAwIDMuMy4yIDQuMi43czEuNiAxLjIgMi4xIDIuMWMuNC45LjcgMS44LjcgNC4ydjE4Ljd6TTUwIDQ4LjFIMzYuM1YyNi4zSDI1LjR2NTQuNWgxMC45VjU5SDUwdjIxLjhoMTAuOVYyNi4zSDUwdjIxLjh6IiBmaWxsPSIjZmZmIi8+PC9zdmc+
// ==/UserScript==

(function() {
    'use strict';

    const removeTarget = () => {
        document.querySelectorAll('button[class*="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary css-bvgwlz"]').forEach(el => el.remove());
        document.querySelectorAll('div[class*="SystemMessage_message-content"]').forEach(el => el.remove());
        document.querySelectorAll('div[class*="MuiStack-root css-1rlpha3"]').forEach(el => el.remove());
        document.querySelectorAll('div[class*="w-full flex gap-2 max-w-[700px] mb-2"]').forEach(el => el.remove());
    };

    // 立即执行一次
    removeTarget();

    // 监听后续动态添加的元素
    const observer = new MutationObserver(removeTarget);
    observer.observe(document.documentElement || document.body, {
        childList: true,
        subtree: true
    });
})();
