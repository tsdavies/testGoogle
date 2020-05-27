const GOOGLE_URL = 'https://google.co.uk'

const getByAriaLabel = (label) => cy.get(`[aria-label="${label}"]`)

class Google {
    static instance = null

    static initialised() {
        return Google.instance ? true : false
    }

    static getInstance() {
        if (!Google.initialised()) {
            Google.instance = new Google()
        }
        return Google.instance
    }

    get searchInput() {
        return getByAriaLabel('Search')
    }

    visit() {
        cy.visit(GOOGLE_URL)
    }
}

export default Google
