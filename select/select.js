const getTemplate = () => {
    return `
        <div class="select__input">
                <span>Text</span>
                <i class="fa fa-chevron-down"></i>
            </div>
            <div class="select__dropdown">
                <ul class="select__list">
                    <li class="select__item">Test1</li>
                    <li class="select__item">Test2</li>
                    <li class="select__item">Test3</li>
                    <li class="select__item">Test3</li>
                    <li class="select__item">Test3</li>
                    <li class="select__item">Test3</li>
                    <li class="select__item">Test3</li>
                    <li class="select__item">Test3</li>
                    <li class="select__item">Test3</li>
                </ul>
            </div>
    `
}

export class Select {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)

        this.#render()
    }

    #render() {
        this.$el.classList.add('select')
        this.$el.innerHTML = getTemplate()
    }

    open() {
        this.$el.classList.add('open')
    }

    close() {
        this.$el.classList.remove('open')
    }
}