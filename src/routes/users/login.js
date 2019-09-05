import express from 'express';

const router = express.Router();

router.post('/login', (req, res) => {
  res.json({ lol: 'lol' });
});

export default router;
