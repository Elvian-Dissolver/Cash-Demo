const Item = require('../models/product')
const bodyParser = require('body-parser')

const index = (req, res) => {
  Item.find()
    .then(items => {
      res.render('index', { items: items })
    })
}

const indexAdmin = (req, res) => {
  Item.find()
    .then(items => {
      res.render('indexAdmin', { items: items })
    })
}

const details = (req, res) => {
  Item.findOne({ _id: req.params.id }, req.body)
    .then(item => {
      res.render('detail', { item: item })
    })
    .catch(err => console.error(err))
}

const detailsForAdmin = (req, res) => {
  Item.findOne({ _id: req.params.id }, req.body)
    .then(item => {
      res.render('detailForAdmin', { item: item })
    })
    .catch(err => console.error(err))
}

const add = (req, res) => {
  res.render('add')
}

const save = (req, res) => {
  Item.create(req.body)
    .then((item) => {
      res.redirect(`/detail/${item.id}`)
    })
    .catch(err => console.error(err))
}

const edit = (req, res) => {
  Item.collection.findOne({ where: { _id: parseInt(req.params.id) } })
    .then((item) => {
      res.render('edit', { item: item })
    })
    .catch(err => console.error(err))
}

const update = (req, res) => {
  // Update data here
  console.log(req.body)
  Item.update({ id: req.params.id }, req.body)
      .then(product => {
      res.redirect('/indexAdmin')
    })
    .catch(err => console.error(err))
}

const remove = (req, res) => {
  /*Item.findOne({where: {
    id: parseInt(req.params.id)
  }})
    .then(item => {
      item.remove()
      res.redirect('/')
    })
    .catch(err => console.error(err))*/
    Item.deleteOne({ _id: req.params.id })
      .then(() => {
        res.redirect('/')
      })
      .catch(err => console.error(err))
}

module.exports = {
  index: index,
  indexAdmin: indexAdmin,
  details: details,
  detailsForAdmin: detailsForAdmin,
  add: add,
  save: save,
  edit: edit,
  update: update,
  remove: remove
}
