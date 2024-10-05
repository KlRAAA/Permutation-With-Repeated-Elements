
# Wardrobe Outfit Generator

### Table of Contents


## Appendix

Any additional information goes here

## Introduction
The Wardrobe Outfit Generator is a tool that helps users generate all possible outfit combinations from their wardrobe. It simplifies daily outfit planning by permuting clothing items such as tops, bottoms, shoes, and accessories into different combinations. The tool also supports repeated use of certain items (like shoes and accessories), and allows filtering based on preferences (e.g., formal vs. casual).

The system can be easily integrated into a fashion or lifestyle website and is perfect for anyone who wants help in styling and maximizing their wardrobe options.

## System Overview
The Wardrobe Outfit Generator works by taking user inputs (tops, bottoms, shoes, and accessories) and generating all possible permutations of outfits. Users can also apply filters to display only casual or formal outfits.

Key steps involved:

Input: Users enter wardrobe items as comma-separated values.
Generation: The system generates all possible outfit combinations (with item reuse).
Filtering: The user can filter outfits by occasion (casual or formal).
Output: A list of generated outfits is displayed.

## Logic of the Code
The core logic revolves around generating all combinations of the wardrobe items using a permutation with repetition approach.

Steps:
Input Parsing:
The user inputs lists of tops, bottoms, shoes, and accessories.
These are converted into arrays by splitting the comma-separated input values.
Combination Generation:
A nested loop iterates through each item (tops, bottoms, shoes, accessories), creating all possible combinations.
Filtering:
The code checks if the combination fits the filter (casual or formal) based on predefined "casual" and "formal" items.
Only combinations that match the selected filter are displayed.
Regenerate Logic:
The regenerate button becomes visible after the first generation of outfits, allowing users to generate new combinations on demand.

## Formula Explanation
The outfit generator uses permutations with repetition to calculate possible combinations. The idea behind this is to create all possible combinations of outfits using:

Tops: Variable number of tops (e.g., 3 tops).
Bottoms: Variable number of bottoms (e.g., 2 bottoms).
Shoes: Variable number of shoes (can be reused across outfits).
Accessories: Variable number of accessories (can be reused across outfits).
Formula for the number of combinations:
If we have n tops, m bottoms, p shoes, and q accessories, the total number of outfits can be calculated as:

Total Combinations = n * m * p * q

This means every possible combination of these elements is considered, including repeated items (e.g., same shoes can be used with multiple outfits).

## Installation
Requirements:
Browser: Any modern web browser.
Optional: You can also host the project using a local server (such as Live Server in VSCode).
Steps:
Clone the repository or download the project files:

bash
Copy code
git clone https://github.com/KlRAAA/wardrobe-outfit-generator.git
Open the index.html file in your web browser.

Alternatively, if using a local server (like Live Server in VSCode):

Open the project folder in VSCode.
Right-click on index.html and select Open with Live Server.
No additional installations or dependencies are required for running this project.

## Usage Instructions
Running in GUI Format
Open the Application:

Open index.html in any modern browser.
Input Wardrobe Items:

Enter the tops, bottoms, shoes, and accessories you have in your wardrobe, separated by commas.
Select Filter (Optional):

Use the dropdown filter to specify whether you want to see casual or formal outfit combinations. Select All to view every possible outfit.
Generate Outfits:

Click the Generate Outfits button to see all possible combinations.
Regenerate Outfits:

After the first generation, a Regenerate button will appear. You can click this button to create a new set of outfit combinations.
View Generated Outfits:

A list of generated outfits will appear below the input section.

## Customization Options
You can easily customize the system to fit your specific needs:

Add More Items: Extend the form to include other wardrobe categories (e.g., jackets, hats).
Modify Filters: Change or add new filtering criteria (e.g., seasons, weather).
Enhance Output: Style the output to show images of items instead of text.

## Technologies Used
HTML5: Structure of the application.
CSS3: Styling of the interface, including the layout and look of the buttons.
JavaScript (ES6): Core logic for generating outfits and handling user interactions.

## Future Improvements
Outfit Images: Incorporate the ability to upload images for wardrobe items to generate visual combinations.
Drag-and-Drop Interface: Add a drag-and-drop feature where users can manually create outfits.
Weather and Location-Based Suggestions: Include real-time weather conditions to suggest appropriate outfits.
