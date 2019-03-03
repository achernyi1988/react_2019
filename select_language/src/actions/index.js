export const selectLanguageAction = (value) => {
    let languageText = {};
    switch (value) {
        case "russian":
            languageText = {
                selectLanguage: "Выбрать язык",
                field: "Искать...",
                button: "Создать"
            }
            break;
        default: //english
            languageText = {
                selectLanguage: "Select Language",
                field: "Search...",
                button: "Create"

            }
    }

    return {
        type: "LANGUAGE_SELECTION",
        payload: languageText
    }
}