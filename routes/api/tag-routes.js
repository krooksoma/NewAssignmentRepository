const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try{
    const connection = await Tag.findAll({
      include: [Product, ProductTag]
    })
    res.status(200).json(connection);
  }catch(error){
    res.status(500).json(error);
  }
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try{
    const connection = await Tag.findByPk((req.params.id), {
      includes: [Product, ProductTag]
    })
    res.status(200).json(connection);
  }catch(error){
    // internal server error
    res.status(500).json(error);
  }
  // be sure to include its associated Product data
});

// create a new tag
router.post('/', async (req, res) => {
  try{
    const connection = await Tag.create(req.body);
    res.status(200).json(connection);
  }catch(error){
    res.status(500).json(error);
  }
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try{
    const connection = await Tag.update((req.body), {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(connection);
  }catch(error){
    res.status(500).json(error);
  }
  
});

router.delete('/:id', async (req, res) => {
  try{
    const connection = await Tag.destroy({
      where:{
        id: req.params.id
      }
    })
    res.status(200).json(connection);
  }catch(error){
    res.status(500).json(error);
  }
  // delete on tag by its `id` value
});

module.exports = router;
