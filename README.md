# Wardrobe Outfit Generator

### Table of Contents
- [Introduction](#introduction)
- [System Overview](#system-overview)
- [Features](#features)
- [Logic of the Code](#logic-of-the-code)
- [Formula Explanation](#formula-explanation)
- [Installation](#installation)
- [Usage Instructions](#usage-instructions)
- [Running in GUI Format](#running-in-gui-format)
- [Customization Options](#customization-options)
- [Technologies Used](#technologies-used)
- [Future Improvements](#future-improvements)
- [Appendix](#appendix)

## Introduction
The **Wardrobe Outfit Generator** is a tool that helps users generate all possible outfit combinations from their wardrobe. It simplifies daily outfit planning by permuting clothing items such as tops, bottoms, shoes, and accessories into different combinations. The tool also supports repeated use of certain items (like shoes and accessories), and allows filtering based on preferences (e.g., formal vs. casual).

The system can be easily integrated into a fashion or lifestyle website and is perfect for anyone who wants help in styling and maximizing their wardrobe options.

## System Overview
The **Wardrobe Outfit Generator** works by taking user inputs (tops, bottoms, shoes, and accessories) and generating all possible permutations of outfits. Users can also apply filters to display only casual or formal outfits.

### Key Steps Involved:
- **Input**: Users enter wardrobe items as comma-separated values.
- **Generation**: The system generates all possible outfit combinations (with item reuse).
- **Filtering**: The user can filter outfits by occasion (casual or formal).
- **Output**: A list of generated outfits is displayed.

## Features
- **User-Friendly Interface**: Allows users to input their wardrobe items directly into a form.
- **Permutations with Repetition**: Generates all possible combinations with repeated items like shoes or accessories.
- **Filtering Options**: Users can filter outfits by occasion (casual, formal).
- **Regenerate Option**: Users can generate and regenerate outfits as many times as they want with one click.
- **Stylistic Design**: Styled to fit into a fashion or lifestyle website.

## Logic of the Code
The core logic revolves around generating all combinations of the wardrobe items using a permutation with repetition approach.

### Steps:
1. **Input Parsing**: 
   - The user inputs lists of tops, bottoms, shoes, and accessories.
   - These are converted into arrays by splitting the comma-separated input values.
2. **Combination Generation**:
   - A nested loop iterates through each item (tops, bottoms, shoes, accessories), creating all possible combinations.
3. **Filtering**:
   - The code checks if the combination fits the filter (casual or formal) based on predefined "casual" and "formal" items.
4. **Regenerate Logic**:
   - The regenerate button becomes visible after the first generation of outfits, allowing users to generate new combinations on demand.

## Formula Explanation
The outfit generator uses permutations with repetition to calculate possible combinations. The idea behind this is to create all possible combinations of outfits using:

- **Tops**: Variable number of tops (e.g., 3 tops).
- **Bottoms**: Variable number of bottoms (e.g., 2 bottoms).
- **Shoes**: Variable number of shoes (can be reused across outfits).
- **Accessories**: Variable number of accessories (can be reused across outfits).

### Formula for the number of combinations:
If we have `n` tops, `m` bottoms, `p` shoes, and `q` accessories, the total number of outfits can be calculated as:
Total Combinations = n * m * p * q

This means every possible combination of these elements is considered, including repeated items (e.g., the same shoes can be used with multiple outfits).

## Installation

### Requirements:
- **Browser**: Any modern web browser.
- **Optional**: You can also host the project using a local server (such as Live Server in VSCode).

### Steps:
1. Clone the repository or download the project files:

   ```bash
   git clone https://github.com/KlRAAA/wardrobe-outfit-generator.git
2. Open the index.html file in your web browser.
Alternatively, if using a local server (like Live Server in VSCode):

1. Open the project folder in VSCode.
2. Right-click on index.html and select Open with Live Server.
No additional installations or dependencies are required for running this project.

## Usage Instructions
### Running in GUI Format

1. **Open the Application**:
   - Open the `index.html` file in any modern web browser.

2. **Input Password Length**:
   - Use the slider or input field to specify the desired password length.

3. **Select Character Types**:
   - Check or uncheck boxes to include/exclude character sets (uppercase, lowercase, digits, symbols).

4. **Generate Password**:
   - Click the **Generate Password** button to create a password based on your preferences.

5. **Copy Password**:
   - Once the password is generated, click the **Copy to Clipboard** button to copy the password for easy use.

### Running via Local Server (e.g., Live Server in VSCode)
1. **Open Project in VSCode**:
   - Open the folder containing the project files in Visual Studio Code.

2. **Open with Live Server**:
   - Right-click on the `index.html` file and select **Open with Live Server**.

3. **View in Browser**:
   - The application will open automatically in your browser with all functionality ready to use.

### Customization Options

You can easily modify the system to meet your specific needs:

1. **Set Minimum/Maximum Password Length**:
   - You can adjust the slider to enforce specific length requirements, helping to improve security.

2. **Add More Character Sets**:
   - Extend the system to support additional character types, like emojis or special symbols.

3. **Modify Password Strength Criteria**:
   - Update the system to provide feedback on password strength, such as weak, medium, or strong.

### Technologies Used
- **HTML5**: For structuring the application's layout.
- **CSS3**: Used to style the interface, including layout and button design.
- **JavaScript (ES6)**: Powers the logic behind generating passwords and handling user interaction.

### Future Improvements

1. **Password Strength Indicator**:
   - Add a feature that evaluates and displays the strength of the generated password in real time.

2. **Password History**:
   - Implement a system to save and display previously generated passwords for future use.

3. **Visual Feedback**:
   - Enhance the user interface by providing visual feedback for each character type (e.g., highlighting the strength of the generated password).
   
4. **Entropy Calculation**:
   - Introduce a feature that calculates the entropy of the password to give users a better understanding of its strength.



