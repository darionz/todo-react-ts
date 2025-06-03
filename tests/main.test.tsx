import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import userEvent from '@testing-library/user-event'
import App from '../src/App'

describe('App Component', () => {
  it('Добавляет новую задачу', async () => {
    render(<App/>)
    
    const input = screen.getByPlaceholderText('Добавьте новую задачу')
    const button = screen.getByText('Добавить')
    const user = userEvent.setup()

    await user.type(input, 'Новая задача')
    await user.click(button)

    const newItem = await screen.findByText('Новая задача')
    expect(newItem).toBeInTheDocument()
  })

  it('Фильтрует задачи по статусу и подсчитывет количество задач'), async () => {
    render(<App/>)

    const input = screen.getByPlaceholderText('Добавьте новую задачу')
    const button = screen.getByText('Добавить')
    const user = userEvent.setup()

    await user.type(input, 'Новая задача 1')
    await user.click(button)
    await user.type(input, 'Новая задача 2')
    await user.click(button)

    const done = screen.getByRole('done-button')
    await user.click(done)

    const allFilter = screen.getByText('Все (2)')
    const activeFilter = screen.getByText('Активные (1)')
    const completedFilter = screen.getByText('Завершенные (1)')

    await user.click(activeFilter)
    expect(screen.getAllByTestId('todo-item')).toHaveLength(1)
    expect(screen.getByText('Задача 2')).toBeInTheDocument()

    await user.click(completedFilter)
    expect(screen.getAllByTestId('todo-item')).toHaveLength(1)
    expect(screen.getByText('Задача 1')).toBeInTheDocument()

    await user.click(allFilter)
    expect(screen.getAllByTestId('todo-item')).toHaveLength(2)
  }

  it('Удаляет выполненные задачи'), async () => {
    render(<App/>)

    const input = screen.getByPlaceholderText('Добавьте новую задачу')
    const button = screen.getByText('Добавить')
    const user = userEvent.setup()

    await user.type(input, 'Новая задача 1')
    await user.click(button)

    const done = screen.getByRole('done-button')
    await user.click(done)

    const clearButton = screen.getByText('Удалить выполненные')
    await user.click(clearButton)

    expect(screen.queryByText('Задача для удаления')).not.toBeInTheDocument()
    expect(screen.getByText('Все (0)')).toBeInTheDocument()
  }
  
  it('Переключение списка задач'), async () => {
    
    const input = screen.getByPlaceholderText('Добавьте новую задачу')
    const button = screen.getByText('Добавить')
    const user = userEvent.setup()

    await user.type(input, 'Новая задача 1')
    await user.click(button)
    await user.type(input, 'Новая задача 2')
    await user.click(button)

    const done = screen.getByRole('done-button')
    await user.click(done)

    const activeFilter = screen.getByText('Активные (1)')
    await user.click(activeFilter)

    const newItem1 = await screen.findByText('Новая задача 1')
    const newItem2 = await screen.findByText('Новая задача 2')
    expect(newItem1).not.toBeInTheDocument()
    expect(newItem2).toBeInTheDocument()
  }
})