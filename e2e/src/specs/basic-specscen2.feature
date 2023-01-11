# Feature: click add
#     This feature lets a user add test to the table.

# Scenario Outline: click add scenario
#     Given I am on the home page2
#     When I click on the Add New Row button
#     When Type finput "<firstName>", "<lastName>", "<email>", "<phone>"
#     Then open add component

#     Examples:
#          | firstName | lastName | email | phone |
#          | arash1    | gholami1 | arash1@gmail.com | 0901 |
#          | arash2    | gholami2 | arash2@gmail.com | 0902 |