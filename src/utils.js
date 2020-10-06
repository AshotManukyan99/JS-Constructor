export function row(children, styles) {
    return `<div class="row"  style="${styles}" >${children}</div>`
}


export function col(children) {
    return `<div class="col-sm" >${children}</div>`
}

export function css(styles = {}) {
    const toString = key => `${key}:${styles[key]}`
    return Object.keys(styles).map(toString).join(';')
}