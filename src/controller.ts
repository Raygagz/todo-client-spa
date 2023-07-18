namespace Controller {
    const buttonAdd = document.querySelector('#btn-add');
    const buttonRemove = document.querySelector('#btn-remove');
    const buttonEdit = document.querySelector('#btn-edit');
    const addContainer = document.querySelector('#form-modal') as HTMLElement;

    // Bad smell - if this does not trigger the program wont work
    let addView = new View.AddView(addContainer);

    function initToobar() {
        buttonAdd?.addEventListener('click', () => addView?.render());
        // TODO: other buttons
    }

    async function main() {
        const dao = new Model.ToDoItemDAO();
        
        const items = await dao.listAll();
        const containerNewest = document.getElementById('newest-content');
        const containerOldest = document.getElementById('oldest-content');
    
        if (containerNewest)
            new View.NewestView(items, containerNewest).render();
        if (containerOldest)
            new View.OldestView(items, containerOldest).render();

        initToobar();
    }

    main().then();
}

// https://www.healthline.com/health/eating-disorders/anxiety-about-food#eating-disorders
// e-e