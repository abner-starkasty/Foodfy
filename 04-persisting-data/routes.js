const express = require('express')
const routes  = express.Router()

const { notFoundData } = require('./controllers/page404')
const clientArea   = require('./controllers/clientArea')
const adminRecipes = require('./controllers/adminRecipes')
const adminChefs   = require('./controllers/adminChefs')

//Routes
routes
.get('/', clientArea.index)
.get('/about', clientArea.about)
.get('/recipes', clientArea.recipes)
.get('/recipes/:index', clientArea.recipeDetail)

.get("/admin/recipes", adminRecipes.index)
.get("/admin/recipes/create", adminRecipes.create)
.get("/admin/recipes/:id", adminRecipes.show)
.get("/admin/recipes/:id/edit", adminRecipes.edit)

.post("/admin/recipes", adminRecipes.post)
.put("/admin/recipes", adminRecipes.put)
.delete("/admin/recipes", adminRecipes.delete)

.get("/admin/chefs", adminChefs.index)
.get("/admin/chefs/create", adminChefs.create)
.get("/admin/chefs/:id", adminChefs.show)
.get("/admin/chefs/:id/edit", adminChefs.edit)
.get("/admin/chefs/:id/:index", adminChefs.redirect)

.post("/admin/chefs", adminChefs.post)
.put("/admin/chefs", adminChefs.put)
.delete("/admin/chefs", adminChefs.delete)

.use((req, res) => {
  res.status(404).render('not-found', { notFoundData })
})

module.exports = routes
