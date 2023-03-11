import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe('Async component' , () => {
    test('renders posts if request succeeds', async() => {
        // overwrite fetch function with mock to avoid real data requests
        // Jest dummy function
        window.fetch = jest.fn()
        // value function should resolve to
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First Post'}]
        });
        render(<Async />)

        // Check list items have been rendered
        // if you dont use all it will fail if more than 1
        const listItemElements = await screen.findAllByRole('listitem')
        expect(listItemElements).not.toHaveLength(0);
    })
})