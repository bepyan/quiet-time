import { getCommonStr } from '@qt/common';
import express from 'express';
const router = express.Router();

router.get('/', (_, res) => {
  const a = getCommonStr();
  res.json({ message: `welcome! ${a}` });
});

export default router;
