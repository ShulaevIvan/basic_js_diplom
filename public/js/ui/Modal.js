/**
 * Класс Modal отвечает за
 * управление всплывающими окнами.
 * В первую очередь это открытие или
 * закрытие имеющихся окон
 * */
class Modal {
    /**
     * Устанавливает текущий элемент в свойство element
     * Регистрирует обработчики событий с помощью Modal.registerEvents()
     * Если переданный элемент не существует,
     * необходимо выкинуть ошибку.
     * */
    constructor(element) {
        if (!element) {
            throw new Error('Element was not found!');
        }

        this.element = element;
        this.registerEvents();
    }

    /**
     * При нажатии на элемент с data-dismiss="modal"
     * должен закрыть текущее окно
     * (с помощью метода Modal.onClose)
     * */
    registerEvents() {
        const closeBtns = this.element.querySelectorAll(
            '[data-dismiss="modal"]'
        );

        closeBtns.forEach((btn)=>{
            btn.addEventListener('click', (e)=>{
                this.onClose(e)
            });

        });
    };

    /**
     * Срабатывает после нажатия на элементы, закрывающие окно.
     * Закрывает текущее окно (Modal.close())
     * */
    onClose(e) {
        e.preventDefault()
        this.close()
    };
    /**
     * Открывает окно: устанавливает CSS-свойство display
     * со значением «block»
     * */
    open() {
        this.element.style.display = 'block';
        this.element.querySelector('.form-group input').focus()
    };
    /**
     * Закрывает окно: удаляет CSS-свойство display
     * */
    close() {
        this.element.style.display = 'none'
    };
};
