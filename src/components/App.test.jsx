import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { BrowserRouter } from "react-router-dom"
import { describe, expect, it } from 'vitest'
import App from "./App.jsx"

describe("App Component", () => {
    let container
    beforeEach(() => {
        container = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        ).container
    })

    it("Render the Home component", () => {
        // expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Journal Entries')
        expect(container.querySelector('h2')).not.toBeNull()
        expect(container.querySelector('h2')).toHaveTextContent('Journal Entries')
    })

    it("Renders CategorySelection component when New Entry is clicked", async () => {
        await user.click(screen.getByText('New Entry'))
        expect(container.querySelector('h3')).not.toBeNull()
        expect(container.querySelector('h3')).toHaveTextContent('Please select a category')
    })
})