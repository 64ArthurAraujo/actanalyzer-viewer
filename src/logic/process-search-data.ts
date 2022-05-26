export function processSearchHistoryData(totalSearches: number, categorisedSearches: any[]) {
    const categoriesPercentage: any[] = []

    for (const category of categorisedSearches) {
        categoriesPercentage.push(
            {
                "id": category.id,
                "categoryName": category.categoryName,
                "timesSearched": category.timesSearched,
                "percentage": calcPercentageFor(category.timesSearched, totalSearches)
            }
        )
    }

    return categoriesPercentage
}

function calcPercentageFor(numberToGetPercentageOf: number, wholeNumber: number) {
    return (numberToGetPercentageOf / wholeNumber) * 100
}