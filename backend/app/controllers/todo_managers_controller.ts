import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class TodoManagersController {
  async index({}: HttpContext) {
    try {
      return await db.query().from('tasks').select('*').orderBy('task_id', 'asc')
    } catch (error) {
      return 'Tasks not found in database: ' + error
    }
  }

  async store({ request }: HttpContext) {
    const data = request.only(['task_title', 'task_description'])
    if (!data.task_title) {
      return 'Task title/name is required'
    }

    try {
      return await db.table('tasks').insert(data)
    } catch (error) {
      return 'Task not created in database: ' + error
    }
  }

  async show({ request }: HttpContext) {
    const taskId = request.param('task_id')
    if (!taskId) {
      return 'Task id is required'
    }

    try {
      const todo = await db.query().from('tasks').where('task_id', taskId).first()
      return todo
    } catch (error) {
      return 'Task not found in database: ' + error
    }
  }

  async delete({ request }: HttpContext) {
    const taskId = request.param('task_id')
    if (!taskId) {
      return 'Task id is required'
    }

    // delete action
    try {
      const res = await db.query().from('tasks').where('task_id', taskId).del()
    } catch (error) {
      return 'Task not found in database: ' + error
    }
  }
}
