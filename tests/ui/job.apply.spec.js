import { test, expect } from "@playwright/test";
import CareerPage from "../../pages/career.page";
import userData from "../../data/user.data.json";

test.describe("Careers", () => {
  let careerPage;

  test.beforeEach(async ({ page }) => {
    careerPage = new CareerPage(page);
    await page.goto("/careers");
  });

  test("Apply for a job", async () => {
    await careerPage.jobSearchInput.click();
    await careerPage.jobSearchInput.fill("Software");
    await careerPage.searchButton.click();
    await careerPage.jobTitleLink.click();
    await careerPage.applyNowButton.click();

    await careerPage.firstNameInput.fill(userData.firstName);
    await careerPage.lastNameInput.fill(userData.lastName);
    await careerPage.emailAddressInput.fill(userData.email);
    await careerPage.addressInput.fill(userData.address);
    await careerPage.cityInput.fill(userData.city);
    await careerPage.stateInput.fill(userData.state);
    await careerPage.postalInput.fill(userData.zipCode);
    await careerPage.phoneNumberInput.fill(userData.phoneNumber);

    await careerPage.attachResumeButton.click();
    await careerPage.chooseFileInput.setInputFiles("data/resume.pdf");

    await careerPage.citizenshipDropdown.selectOption("10");
    await careerPage.educationDropdown.selectOption("60");
    await careerPage.salaryInput.fill("123456");
    await careerPage.sponsorshipDropdown.selectOption("No");
    await careerPage.experienceInput.fill("10");
    await careerPage.developmentExperienceInput.fill("5");
    await careerPage.genderSelect.selectOption("1");
    await careerPage.raceSelect.selectOption("51");
    await careerPage.disabilityCheckbox.check();

    await careerPage.signatureInput.fill(userData.fullName);
    await careerPage.datePicker.click();
    await careerPage.frame.getByRole("link", { name: "31" }).click();
    
    await expect(careerPage.firstNameInput).toHaveValue(userData.firstName);
    await expect(careerPage.lastNameInput).toHaveValue(userData.lastName);
    await expect(careerPage.emailAddressInput).toHaveValue(userData.email);
    await expect(careerPage.addressInput).toHaveValue(userData.address);
    await expect(careerPage.cityInput).toHaveValue(userData.city);
    await expect(careerPage.stateInput).toHaveValue(userData.state);
    await expect(careerPage.postalInput).toHaveValue(userData.zipCode);
    await expect(careerPage.phoneNumberInput).toHaveValue(userData.phoneNumber);

    const uploadedFile = await careerPage.chooseFileInput.inputValue();
    expect(uploadedFile).toContain("resume.pdf");

    await expect(careerPage.citizenshipDropdown).toHaveValue("10");
    await expect(careerPage.educationDropdown).toHaveValue("60");
    await expect(careerPage.salaryInput).toHaveValue("123456");
    await expect(careerPage.sponsorshipDropdown).toHaveValue("No");
    await expect(careerPage.experienceInput).toHaveValue("10");
    await expect(careerPage.developmentExperienceInput).toHaveValue("5");
    await expect(careerPage.genderSelect).toHaveValue("1");
    await expect(careerPage.raceSelect).toHaveValue("51");
    await expect(careerPage.disabilityCheckbox).toBeChecked();
    
    await expect(careerPage.signatureInput).toHaveValue(userData.fullName);
    await expect(careerPage.datePicker).toHaveValue(/31/);
    
    // Should submit the form here, but skipping it to avoid actual submission in this practice test
  });
});