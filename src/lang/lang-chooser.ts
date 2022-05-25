import english from './json/en.json'
import portuguese from './json/pt.json'

export function getTranslationsFor(language: String) {
    switch (language) {
        case 'en': return english
        case 'pt': return portuguese
    }
}