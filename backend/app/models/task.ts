import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Task extends BaseModel {
  @column({ columnName: 'task_id', isPrimary: true })
  declare task_id: number

  @column({ columnName: 'task_title' })
  declare task_title: string

  @column({ columnName: 'task_description' })
  declare task_description: string | null

  @column({ columnName: 'task_completed' })
  declare task_completed: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
