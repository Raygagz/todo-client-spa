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
var Controller;
(function (Controller) {
    const buttonAdd = document.querySelector('#btn-add');
    const buttonRemove = document.querySelector('#btn-remove');
    const buttonEdit = document.querySelector('#btn-edit');
    const addContainer = document.querySelector('#form-modal');
    // Bad smell - if this does not trigger the program wont work
    let addView = new View.AddView(addContainer);
    function initToobar() {
        buttonAdd === null || buttonAdd === void 0 ? void 0 : buttonAdd.addEventListener('click', () => addView === null || addView === void 0 ? void 0 : addView.render());
        // TODO: other buttons
    }
    function main() {
        return __awaiter(this, void 0, void 0, function* () {
            const dao = new Model.ToDoItemDAO();
            const items = yield dao.listAll();
            const containerNewest = document.getElementById('newest-content');
            const containerOldest = document.getElementById('oldest-content');
            if (containerNewest)
                new View.NewestView(items, containerNewest).render();
            if (containerOldest)
                new View.OldestView(items, containerOldest).render();
            initToobar();
        });
    }
    main().then();
})(Controller || (Controller = {}));
// https://www.healthline.com/health/eating-disorders/anxiety-about-food#eating-disorders
// e-e
