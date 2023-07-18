"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Model;
(function (Model) {
    const ra = '11201721028'; //'2123689';
    const host = 'https://todo-server-spa-ozyq2qhxqq-rj.a.run.app/api';
    class ToDoItem {
        constructor() {
            this.id = 0;
            this.description = '';
        }
    }
    Model.ToDoItem = ToDoItem;
    class ToDoItemDAO {
        listAll() {
            return __awaiter(this, void 0, void 0, function* () {
                const url = `${host}/${ra}/list`;
                const response = yield fetch(url);
                if (response.ok) {
                    return (yield response.json()).items;
                }
                console.error('Server status: ' + JSON.stringify(yield response.json()));
                throw new Error("Server-side error. Failed to fetch list.");
            });
        }
        insert(item) {
            return false;
        }
    }
    Model.ToDoItemDAO = ToDoItemDAO;
})(Model || (Model = {}));
