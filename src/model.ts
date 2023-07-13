namespace Model {
    const ra = '2123689';
    const host = 'https://todo-server-spa-ozyq2qhxqq-rj.a.run.app/api';

    export class ToDoItem {
        id: number = 0;
        description: string = '';
        tags?: Array<string>;
        deadline?: string;
    }

    export class ToDoItemDAO {
        async listAll(): Promise<Array<ToDoItem>> {
            const url = `${host}/${ra}/list`;

            const response = await fetch(url);

            if (response.ok) {
                return (await response.json()).items as Array<ToDoItem>;
            }

            console.error('Server status: ' + JSON.stringify(await response.json()));
            throw new Error("Server-side error. Failed to fetch list.");
        }

        insert(item: ToDoItem): boolean {
            return false;
        }
    }
}