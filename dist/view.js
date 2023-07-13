"use strict";
var View;
(function (View) {
    function buildItemList(items, container) {
        for (const item of items) {
            const template = document.getElementById('list-item-template');
            const clone = template.content.cloneNode(true);
            const listItem = clone.querySelector('.list-group-item');
            const description = clone.querySelector('.list-item-desc');
            const badgeContainer = clone.querySelector('.badge-container');
            const deadline = clone.querySelector('.list-item-deadline');
            // TODO: identify checkboxes
            if (description)
                description.textContent = item.description;
            if (listItem)
                container.appendChild(listItem);
        }
    }
})(View || (View = {}));
