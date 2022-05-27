import english from './json/en.json'
import portuguese from './json/pt.json'

export function getTranslationsFor(language: String) {
    switch (language) {
        case 'pt': return portuguese
        default: case 'en': return english
    }
}