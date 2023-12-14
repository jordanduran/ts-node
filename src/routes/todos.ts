import { Router } from 'express';

import { createTodo } from '../controllers/todos';

const router = Router();

router.post('/', createTodo);

router.get('/', (req, res) => {

});

router.patch('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

export default router;