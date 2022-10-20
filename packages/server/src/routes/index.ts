import { str } from '@monorepo/common';
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: `welcome! ${str}` });
});

export default router;
