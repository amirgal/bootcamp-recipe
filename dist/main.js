const renderer = new Renderer

const bringRecipes = function () {
    const input = $(`#input`).val()
    $.get(`/recipes/${input}`, function (recipes) {
        recipes.length !== 0 ? renderer.render(recipes) : alert(`No recipes with ${input}`)
    })
}

$('#recipes').on('click','img',function() {
    console.log($(this).closest('.recipe').find('li').first().text());
    
})