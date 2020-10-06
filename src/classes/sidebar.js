import {block} from "../utils";

export class Sidebar {
    constructor(selector) {
        this.$el = document.querySelector(selector)

        this.init()
    }

    get template() {
        return [
            block('test'),
            block('title')
        ].join('')
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template)
        this.$el.addEventListener('submit', this.add)
    }

    add(event) {
        event.preventDefault()

        console.log(event.target)


        const type = event.target.name
        const value = event.target.name.value
        const styles = event.target.styles.value

        console.log(event.target.name)


        // if (type === 'text') {
        //     console.log('text')
        // } else {
        //     console.log('no')
        // }


    }
}


