namespace View {
    import ToDoItem = Model.ToDoItem;

    function buildItemList(items: Array<ToDoItem>, container: HTMLElement) {
        for (const item of items) {
            const template = document.getElementById('list-item-template') as HTMLTemplateElement;
            const clone = template.content.cloneNode(true) as DocumentFragment;

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
}