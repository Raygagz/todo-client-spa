namespace View {
    import ToDoItem = Model.ToDoItem;

    interface View {
        render(): void;
    }

    abstract class TabView implements View {
        protected items: Array<ToDoItem>;
        protected container: HTMLElement;

        constructor(items: Array<ToDoItem>, container: HTMLElement) {
            this.items = items;
            this.container = container;
        }

        abstract render(): void;
    }

    function dateDescComparator(a: ToDoItem, b: ToDoItem): number {
        const dateA = Date.parse(a.deadline ?? '');
        const dateB = Date.parse(b.deadline ?? '');

        if (dateA && dateB) return dateA < dateB ? -1 : 1;
        if (dateA) return -1;
        if (dateB) return 1;
        return 0
    }

    export class NewestView extends TabView {
        render(): void {
            const sortedItems = this.items.sort(dateDescComparator);
            this.buildItemList(sortedItems, this.container);
        }

        private buildItemList(items: Array<ToDoItem>, container: HTMLElement) {
            for (const item of items) {
                const template = document.getElementById('list-item-template') as HTMLTemplateElement;
                const clone = template.content.cloneNode(true) as DocumentFragment;
    
                const listItem = clone.querySelector('.list-group-item');
                const description = clone.querySelector('.list-item-desc');
                const badgeContainer = clone.querySelector('.badge-container');
                const deadline = clone.querySelector('.list-item-deadline');
    
                listItem?.querySelector('.form-check-input')?.setAttribute('data-id', item.id.toString());
    
                // TODO: identify checkboxes
                if (description)
                    description.textContent = item.description;
    
                if (deadline) {
                    if (item.deadline) {
                        let date = Date.parse(item.deadline ?? '');
                        deadline.textContent = new Date(date).toUTCString().slice(0, 16);
                    } else {
                        deadline.textContent = '';
                    }
                }
    
                const badgeTemplate = clone.querySelector('.list-item-badge');
                if (item.tags) {
                    for (const tag of item.tags) {
                        const newBadge = badgeTemplate?.cloneNode(true) as Element;
    
                        newBadge.textContent = tag;
                        badgeContainer?.appendChild(newBadge);
                    }
                }
                if (badgeTemplate)
                    badgeContainer?.removeChild(badgeTemplate);
    
    
                if (listItem)
                    container.appendChild(listItem);
            }
        }

    }
}

async function main() {
    const dao = new Model.ToDoItemDAO();
    
    const items = await dao.listAll();
    const container = document.getElementById('newest-content');

    if (container)
        new View.NewestView(items, container).render();
}

main().then();