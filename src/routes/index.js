import { Router } from 'express';
import { deletePan, getPan, getPanes, postPan, updatePan } from '../controllers/panConroller.js';
const router = Router();

router.get('/', getPanes);

router.get('/:id', getPan);

router.post('/', postPan);

router.put('/:id', updatePan);

router.delete('/:id', deletePan);

export default router;