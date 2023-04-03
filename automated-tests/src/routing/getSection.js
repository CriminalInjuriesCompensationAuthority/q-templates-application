'use strict';

function getSection(sectionId, qRouter) {
    let section;
    if (sectionId === 'system') {
        const currentSection = qRouter.current();
        section = {
            id: 'system',
            // Get the context (questionnaire) from the current section
            context: currentSection.context
        };
    } else {
        // Ensure the requested sectionId is available
        section = qRouter.current(sectionId);
        if (!section) {
            throw new Error(`Section "${sectionId}" not found`);
        }
    }
    return section;
}
exports.getSection = getSection;
