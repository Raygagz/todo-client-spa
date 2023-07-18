"use strict";
var View;
(function (View) {
    class TabView {
        constructor(items, container) {
            this.items = items;
            this.container = container;
        }
    }
    function dateDescComparator(a, b) {
        var _a, _b;
        const dateA = Date.parse((_a = a.deadline) !== null && _a !== void 0 ? _a : '');
        const dateB = Date.parse((_b = b.deadline) !== null && _b !== void 0 ? _b : '');
        if (dateA && dateB)
            return dateA < dateB ? -1 : 1;
        if (dateA)
            return -1;
        if (dateB)
            return 1;
        return 0;
    }
    function dateAscComparator(a, b) {
        var _a, _b;
        const dateA = Date.parse((_a = a.deadline) !== null && _a !== void 0 ? _a : '');
        const dateB = Date.parse((_b = b.deadline) !== null && _b !== void 0 ? _b : '');
        if (dateA && dateB)
            return dateB < dateA ? -1 : 1;
        if (dateA)
            return -1;
        if (dateB)
            return 1;
        return 0;
    }
    class ListView extends TabView {
        buildItemList(items, container) {
            var _a, _b;
            for (const item of items) {
                const template = document.getElementById('list-item-template');
                const clone = template.content.cloneNode(true);
                const listItem = clone.querySelector('.list-group-item');
                const description = clone.querySelector('.list-item-desc');
                const badgeContainer = clone.querySelector('.badge-container');
                const deadline = clone.querySelector('.list-item-deadline');
                (_a = listItem === null || listItem === void 0 ? void 0 : listItem.querySelector('.form-check-input')) === null || _a === void 0 ? void 0 : _a.setAttribute('data-id', item.id.toString());
                // TODO: identify checkboxes
                if (description)
                    description.textContent = item.description;
                if (deadline) {
                    if (item.deadline) {
                        let date = Date.parse((_b = item.deadline) !== null && _b !== void 0 ? _b : '');
                        deadline.textContent = new Date(date).toUTCString().slice(0, 16);
                    }
                    else {
                        deadline.textContent = '';
                    }
                }
                const badgeTemplate = clone.querySelector('.list-item-badge');
                if (item.tags) {
                    for (const tag of item.tags) {
                        const newBadge = badgeTemplate === null || badgeTemplate === void 0 ? void 0 : badgeTemplate.cloneNode(true);
                        newBadge.textContent = tag;
                        badgeContainer === null || badgeContainer === void 0 ? void 0 : badgeContainer.appendChild(newBadge);
                    }
                }
                if (badgeTemplate)
                    badgeContainer === null || badgeContainer === void 0 ? void 0 : badgeContainer.removeChild(badgeTemplate);
                if (listItem)
                    container.appendChild(listItem);
            }
        }
    }
    class NewestView extends ListView {
        render() {
            const sortedItems = this.items.sort(dateDescComparator);
            this.buildItemList(sortedItems, this.container);
        }
    }
    View.NewestView = NewestView;
    class OldestView extends ListView {
        render() {
            const sortedItems = this.items.sort(dateAscComparator);
            this.buildItemList(sortedItems, this.container);
        }
    }
    View.OldestView = OldestView;
})(View || (View = {}));
