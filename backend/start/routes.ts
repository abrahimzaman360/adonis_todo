/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const TodoManagersController = () => import('#controllers/todo_managers_controller')
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    res: 'Hello from Todo Manager',
  }
})

router.get('/todos', [TodoManagersController, 'index'])
router.get('/todos/:task_id', [TodoManagersController, 'show'])
router.post('/todos', [TodoManagersController, 'store'])
router.delete('/todos/:task_id', [TodoManagersController, 'delete'])
