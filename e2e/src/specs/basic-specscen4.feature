# Feature: click edit
#     This feature lets a user test edit.

# Scenario Outline: click edit scenario
#     Given I am on the home page4
#     When I click on the Edit button "<editRowNumber>"
#     And open editComponent and fill input "<firstName>", "<lastName>", "<email>", "<phone>"
#     And click on save button
#     Then data must have been changed
#     Examples:
#             | editRowNumber | firstName | lastName | email            | phone |
#             | 1             | arash1    | gholami1 | arash1@gmail.com | 0901  |
#             | 2             | arash2    | gholami2 | arash2@gmail.com | 0902  |