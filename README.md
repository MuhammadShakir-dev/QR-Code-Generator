# QR Code Generator

A simple and efficient QR Code Generator built using **HTML**, **CSS**, and **JavaScript**. Users can input any text or URL, and the app generates a corresponding QR code using a third-party API.

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Code Explanation](#code-explanation)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
1. **Generate QR Code**: Users can input a destination (text or URL), and the app will generate a QR code for it.
2. **Display QR Code**: The generated QR code is displayed in the app using an image element.
3. **Efficient API Usage**: Uses the QR Code API efficiently without unnecessary network requests.

## Demo
You can see a live demo of the QR Code Generator [here](https://qr-code-generator-blush.vercel.app/). *(Add the link if you deploy the app on GitHub Pages or any other platform)*

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/qr-code-generator.git
    ```
2. Navigate to the project folder:
    ```bash
    cd qr-code-generator
    ```
3. Open `index.html` in your preferred browser:
    ```bash
    open index.html
    ```

## Usage
- **Enter Input**: Enter the text or URL into the input field.
- **Generate QR Code**: Click the "Generate" button to create a QR code for the entered text or URL.
- **Display QR Code**: The generated QR code will be displayed immediately below the input field.

## Code Explanation
The QR Code Generator uses the QR Code API to dynamically generate a QR code based on the user's input. Here’s a breakdown of the main functionality:

```javascript
function generateQR() {
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userInput.value}`
    qrHolder.classList.add('showImage')
}
```

- **API Usage**: The app uses the `https://api.qrserver.com/v1/create-qr-code/` API to generate a QR code. The input provided by the user is passed to the API via the `data` parameter in the URL.
- **Efficient Handling**: The app directly sets the `src` of the image to the API URL without making additional asynchronous requests, ensuring efficiency.
- **Displaying the QR Code**: The image is shown once the `qrHolder` div is updated to include the class `showImage`.

## Technologies Used
- **HTML5**: For the structure of the app.
- **CSS3**: For styling the app.
- **JavaScript**: For adding functionality and API integration.
- **QR Code API**: Used to generate QR codes.

## Project Structure
```bash
├── index.html       # Main HTML file
├── style.css        # Styling for the QR Code Generator
├── app.js           # JavaScript logic for generating the QR code
└── README.md        # Project documentation
```

## Screenshots
Here are some screenshots of the QR Code Generator in action:

### Initial View
![Initial View](https://github.com/user-attachments/assets/c3ac30ef-8df3-48da-b8b2-6e52f4f625d8)


### QR Code Generated
![QR Code Generated](https://github.com/user-attachments/assets/1f8dd316-8beb-4faa-af96-3fee8ef42773)

*(You can add screenshots of your app inside the `images` folder and update the paths accordingly)*

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m 'Add feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature-name
    ```
5. Open a pull request on the main repository.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
