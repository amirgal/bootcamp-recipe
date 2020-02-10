const renderer = new Renderer

const bringRecipes = function () {
    const input = $(`#input`).val()
    $.get(`/recipes/${input}`, function (response) {
        renderer.render(response)
    })
}

$('#recipes').on('click','img',function() {
    console.log($(this).closest('.recipe').find('li')[0].innerText);
    
})