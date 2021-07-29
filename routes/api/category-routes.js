const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try{
    const connection = await Category.findAll({
      include: [Product]
    })
    // with positive connection it reads the data given
    res.status(200).json(connection)
  }
  catch(error){
    // 500 internal server error
    res.status(500).json(error)
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try{
    const connection = await Category.findByPk((req.params.id),{
      include: [Product]
    })
    res.status(200).json(connection)
  }
  catch(error){
    res.status(500).json(error)
  }
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  try{
    const connection = await Category.create(req.body)
    res.status(200).json(connection)
  }catch(error){
    res.status(500).json(error)
  }
});


router.put('/:id', async (req, res) => {
  try{    
    const connection = await Category.update((req.body), {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(connection)
  }catch(error){
    res.status(500).json(error)
  }
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  try{
    const connection = await Category.destroy({
      where:{
        id: req.params.id
      }
    })
    res.status(200).json(connection)
  }catch(error){
    res.status(500).json(error);
  }
  // delete a category by its `id` value
});

module.exports = router;
