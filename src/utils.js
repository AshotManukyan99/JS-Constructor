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


export function block(type) {
    return `
        <form name="${type}" >
            <h5>${type}</h5>
            <div class="form-group" >
                <input class="form-control form-control-sm" name="name"  placeholder="value" >
            </div>
            <div class="form-group" >
                 <input class="form-control form-control-sm" name="styles"  placeholder="styles" >
            </div>
            <button  type="submit" class="btn btn-primary btn-sm" >Add</button>
        </form>
        <hr>
    `
}