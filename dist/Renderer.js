class Renderer {
    constructor(){

    }
    render(data) {
        const source = $(`#recipes-template`).html()
        const template = Handlebars.compile(source)
        const newHTML = template({ recipe:data })
        $(`#recipes`).empty().append(newHTML)
    }
}