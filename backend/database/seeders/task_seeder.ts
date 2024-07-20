import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Task from '#models/task'

export default class TaskSeeder extends BaseSeeder {
  async run() {
    const tasks = [
      {
        task_title: 'Complete AdonisJS setup',
        task_description: 'Finish setting up the AdonisJS application and test basic routes.',
        task_completed: false,
      },
      {
        task_title: 'Write documentation',
        task_description: 'Document the setup and configuration steps for future reference.',
        task_completed: true,
      },
      {
        task_title: 'Create models and migrations',
        task_description: 'Generate models and migrations for the application’s data structure.',
        task_completed: false,
      },
      {
        task_title: 'Implement authentication',
        task_description: 'Add user authentication features using AdonisJS authentication system.',
        task_completed: false,
      },
      {
        task_title: 'Test application',
        task_description: 'Run tests to ensure that the application functions as expected.',
        task_completed: true,
      },
      {
        task_title: 'Deploy application',
        task_description: 'Deploy the application to a production server.',
        task_completed: false,
      },
    ]

    // Insert dummy data into the 'tasks' table
    await Task.createMany(tasks)
  }
}
