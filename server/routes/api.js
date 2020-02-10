  
const express = require('express')
const router = express.Router()
const request = require('request')

router.get('/sanity',(req,res) => {
    res.send('ok')
})

router.get('/recipes/:ingredient',(req,res) => {
    request(`https://recipes-goodness.herokuapp.com/recipes/${req.params.ingredient}`, (error,result) => {
        let recipes = JSON.parse(result.body).results
        recipes = recipes.map(recipe => {return {title: recipe.title, href: recipe.href, thumbnail: recipe.thumbnail, ingredients: recipe.ingredients}})
        res.send(recipes)
    })
})

module.exports = router