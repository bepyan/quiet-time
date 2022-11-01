import { getCommonStr } from '@qt/common';
import express from 'express';

const router = express.Router();

router.get('/', (_, res) => {
  res.json({ message: `welcome! ${getCommonStr()}` });
});

export default router;
