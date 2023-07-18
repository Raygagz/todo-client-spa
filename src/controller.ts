namespace Controller {
    
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
}

main().then();