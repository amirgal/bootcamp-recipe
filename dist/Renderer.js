class Renderer {
    constructor(){
        this.source = $(`#recipes-template`).html()
        this.template = Handlebars.compile(this.source)
    }
    render(recipes) {
        const newHTML = this.template({ recipe:recipes })
        $(`#recipes`).empty().append(newHTML)
    }
}