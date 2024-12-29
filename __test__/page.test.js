import Home from '@/app/page'
import { render, screen } from '@testing-library/react'

 
describe('Home page', () => {
  it('renders a heading', () => {
    render(<Home />)

    expect(screen.getAllByDisplayValue()).toBeInTheDocument()
  })
})