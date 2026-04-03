import express from 'express';

const router = express.Router();


router.get('/getproducts' ,(req , res)=>{
    console.log('server get product')
    res.json({message:'hellow'})
})

router.post('/addproduct', async (req, res) => {
  try {
    const test = await prisma.user.create({
      data: {
        name: 'test',
        email: 'test@example.com'
      }
    });

    console.log(req.body, 'server add product');

    res.json({
      message: 'successfully added product',
      data: test
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router