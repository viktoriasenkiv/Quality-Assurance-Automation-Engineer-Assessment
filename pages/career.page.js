class CareerPage {
    constructor(page) {
        this.page = page;
        this.frame = page.frameLocator('iframe[name="resumator-job-frame"]');

        this.jobSearchInput = this.frame.locator('[data-test="q"]');
        this.searchButton = this.frame.getByRole('link', { name: 'Search »' });
        this.jobTitleLink = this.frame.getByRole('link', { name: 'Full Stack Software Developer' });
        this.applyNowButton = this.frame.getByRole('link', { name: 'Apply Now' });

        this.firstNameInput = this.frame.locator('[data-test="resumator-firstname-value"]');
        this.lastNameInput = this.frame.locator('[data-test="resumator-lastname-value"]');
        this.emailAddressInput = this.frame.locator('[data-test="resumator-email-value"]');
        this.addressInput = this.frame.locator('[data-test="resumator-address-value"]');
        this.cityInput = this.frame.locator('[data-test="resumator-city-value"]');
        this.stateInput = this.frame.locator('[data-test="resumator-state-value"]');
        this.postalInput = this.frame.locator('[data-test="resumator-postal-value"]');
        this.phoneNumberInput = this.frame.locator('[data-test="resumator-phone-value"]');
        
        this.attachResumeButton = this.frame.getByRole('link', { name: 'Attach resume' });
        this.chooseFileInput = this.frame.locator('#resumator-resume-value');
        this.citizenshipDropdown = this.frame.locator('#resumator-citizen-value');
        this.educationDropdown = this.frame.locator('#resumator-education-value');
        this.salaryInput = this.frame.locator('[data-test="resumator-salary-value"]');
        this.sponsorshipDropdown = this.frame.locator('#resumator-questionnaire-q2196921');
        this.experienceInput = this.frame.locator('#resumator-questionnaire-q2230408');
        this.developmentExperienceInput = this.frame.locator('#resumator-questionnaire-q2230409');
        this.genderSelect = this.frame.locator('#resumator-eeo_gender-value');
        this.raceSelect = this.frame.locator('#resumator-eeo_race-value');
        this.disabilityCheckbox = this.frame.locator('#resumator-eeoc_disability-value_2');

        this.signatureInput = this.frame.locator('[data-test="resumator-eeoc_disability_signature-value"]');
        this.datePicker = this.frame.locator('[data-test="resumator-eeoc_disability_date-value"]');
    }
}
export default CareerPage;