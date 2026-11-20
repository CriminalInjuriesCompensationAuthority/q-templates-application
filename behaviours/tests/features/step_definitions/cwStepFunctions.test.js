'use strict';

jest.mock('playwright', () => ({chromium: {}}));

const {createsApplication} = require('./cwStepFunctions');

describe('CW application entry', () => {
    let page;
    let heading;
    let continueButton;
    let testObject;

    beforeEach(() => {
        heading = {waitFor: jest.fn().mockResolvedValue(undefined)};
        continueButton = {click: jest.fn().mockResolvedValue(undefined)};
        page = {
            goto: jest.fn().mockResolvedValue(undefined),
            getByLabel: jest.fn().mockReturnValue({check: jest.fn()}),
            getByRole: jest.fn((role, options) => {
                if (role === 'heading') {
                    return heading;
                }
                if (options) {
                    return continueButton;
                }
                return {filter: jest.fn().mockReturnValue({click: jest.fn()})};
            }),
            waitForURL: jest.fn().mockResolvedValue(undefined)
        };
        testObject = {
            page,
            entryPoint: 'http://localhost:3000',
            templateVersion: 'latest'
        };
    });

    it('requires Before you apply before entering the questionnaire', async () => {
        await createsApplication(testObject);

        expect(page.goto).toHaveBeenCalledWith('http://localhost:3000/apply/start-or-resume');
        expect(page.getByLabel).toHaveBeenCalledWith('Start a new application');
        expect(page.waitForURL).toHaveBeenNthCalledWith(1, '**/apply/landing-page');
        expect(page.getByRole).toHaveBeenCalledWith('heading', {
            name: 'Before you apply',
            exact: true
        });
        expect(heading.waitFor).toHaveBeenCalledWith({state: 'visible'});
        expect(continueButton.click).toHaveBeenCalledTimes(1);
        const questionnaireUrlMatches = page.waitForURL.mock.calls[1][0];
        expect(
            questionnaireUrlMatches(
                new URL(
                    'http://localhost:3000/apply/applicant-who-are-you-applying-for?utm_source=web'
                )
            )
        ).toBe(true);
        expect(questionnaireUrlMatches(new URL('http://localhost:3000/apply/start'))).toBe(false);
    });

    it('fails if the introductory page is skipped', async () => {
        page.waitForURL.mockRejectedValueOnce(new Error('Landing page was not reached'));

        await expect(createsApplication(testObject)).rejects.toThrow(
            'Landing page was not reached'
        );
        expect(continueButton.click).not.toHaveBeenCalled();
    });

    it('does not continue if the Before you apply heading is missing', async () => {
        heading.waitFor.mockRejectedValueOnce(new Error('Heading is missing'));

        await expect(createsApplication(testObject)).rejects.toThrow('Heading is missing');
        expect(continueButton.click).not.toHaveBeenCalled();
    });
});
