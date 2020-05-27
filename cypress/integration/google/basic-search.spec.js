import { Google } from '../../fixtures/page-objects'

const google = Google.getInstance()

it('Performs a Search', () => {
    google.visit()
    google.searchInput.type('Falkor{enter}')
})
