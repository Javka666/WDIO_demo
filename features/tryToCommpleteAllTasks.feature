Feature: Complete all tasks on website

Scenario: First task: to go through all the elements
Given I am on Main page
Then I should see the main page
When I click on the "Elements" button
Then I should see the "Elements" button page

When I select the "Text Box" button
Then I should see "Text Box" field container
When I am filling in the table of the "Text Box" element  
And I click on "Submit" button
Then I should see confirmation table with information

When I select the "Check Box" button
Then I should see the "Check Box" page
When I click on "expand all" button
Then I should see the "expand all" button works
When I mark all the needed parameters
Then I check that all parameters had been selected 

When I select the "Radio button"
Then I should see the "Radio button" page
When I select the first button
Then I should see the result of pressing the first button
When I select the second button
Then I should see the result of pressing the second button

When I select the "Web Tables" button
Then I should see the "Web Tables" page
When I click "Add" button
When I fill registraion form
When I click "Submit" button on registration page
When I click on search field and fill details of a new account

Then I click on the "Edit" button
When I should see Registration form 
Then I check that all fields are filled in correctly  
When I click on "close" button   
Then I click on "delete" button for new profile 

When I click on the "Buttons" button
Then I should see the "Buttons page"
When I click on all buttons on the "Buttons page"
Then I check that all buttons were clicked

# When I select the "Form button"
# Then I click "Practice Form" 
# When I am filling in the form
# And I click on Form "Submit" button
# Then I should see fulfilled form page
# And I should see fulfilled form
