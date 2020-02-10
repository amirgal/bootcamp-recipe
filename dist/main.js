const renderer = new Renderer

const bringRecipes = function () {
    const input = $(`#input`).val()
    $.get(`/recipes/${input}`, function (response) {
        renderer.render(response)
    })
}