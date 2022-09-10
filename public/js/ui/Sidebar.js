/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
    /**
     * Запускает initAuthLinks и initToggleButton
     * */
    static init() {
        this.initAuthLinks()
        this.initToggleButton()
    };

    /**
     * Отвечает за скрытие/показ боковой колонки:
     * переключает два класса для body: sidebar-open и sidebar-collapse
     * при нажатии на кнопку .sidebar-toggle
     * */
    static initToggleButton() {
        const sideBar = document.querySelector('.sidebar-toggle')
        sideBar.addEventListener('click', (e)=>{
            e.preventDefault()
            document.body.classList.toggle('sidebar-open')
            document.body.classList.toggle('sidebar-collapse')
        });
    };

    /**
     * При нажатии на кнопку входа, показывает окно входа
     * (через найденное в App.getModal)
     * При нажатии на кнопку регастрации показывает окно регистрации
     * При нажатии на кнопку выхода вызывает User.logout и по успешному
     * выходу устанавливает App.setState( 'init' )
     * */
    static initAuthLinks() {

        const menuItems = Array.from(document.querySelectorAll('.menu-item'))

        menuItems.forEach((item)=>{

            item.addEventListener('click', (e)=>{

                let target = e.target

                if (target && target.parentNode.parentElement.classList.contains('menu-item_register')){
                    App.getModal('register').open()
                }
                else if (target && target.parentNode.parentElement.classList.contains('menu-item_login')){
                    App.getModal('login').open()
                }
                else if (target && target.parentNode.parentElement.classList.contains('menu-item_logout')){
                    let callback = function (err, response){

                        if (response && response.success) {
                            App.setState('init')
                        };
                    };
                    User.logout(callback);
                };
            });
        });
    };
};
