import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  test('should display elements', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /vite \+ react/i }),
    ).toBeDefined()
  })
})
