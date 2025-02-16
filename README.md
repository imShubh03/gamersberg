# Gamersberg Blox Fruits Calculator

## Overview
This project is a **Blox Fruits trading calculator**, designed to help players calculate the value of in-game items. The frontend is built using **Next.js**, **TypeScript**, and **ShadCN**, while **Jotai** is used for global state management. The app features a responsive UI, a fruit selection system, and a real-time value calculation system.

##Screenshots
![image](https://github.com/user-attachments/assets/6fcc593c-c639-4d9b-90ed-89e407c7a0c3)
![image](https://github.com/user-attachments/assets/0ebf8e1a-ecd4-4758-ba44-0f24af36058f)
![image](https://github.com/user-attachments/assets/e1139f39-79c1-4e76-9d1c-c1b637e746de)
![image](https://github.com/user-attachments/assets/33818f63-a3e7-4ada-adb3-bf608546ec82)
![image](https://github.com/user-attachments/assets/71305644-4304-4e84-aca1-ec12477c4f7e)




## Main Focus Areas
- **Next.js with TypeScript**
- **State Management using Jotai**
- **UI Components with ShadCN**
- **Responsive Design**
- **Deploying on Vercel**

## Features

### 1. **Fruit Selection**
- Browse and select **multiple Blox Fruits**
- Displays **images and prices** of selected fruits
- Maximum of 4 fruits per trade side
- Search functionality for quick fruit finding

### 2. **Real-Time Value Calculation**
- Instantly updates the **total value and price** of selected items
- **Comparison feature** to calculate differences in trade value
- Multiple value provider options (Gamersberg, RolimonsPrices, etc.)
- Automatic price updates based on selected provider

### 3. **UI & UX Enhancements**
- **Modern design** with a **purple gradient theme**
- **Dark mode** for a sleek appearance
- Uses **ShadCN UI components** for a smooth experience
- Interactive modals and dropdowns
- Responsive grid layouts for fruit display

### 4. **State Management with Jotai**
- Manages fruit selection, total value, and price efficiently
- Provides **reactive UI updates** with minimal performance overhead
- Centralized state management for consistent data flow
- Persistent state for selected items

### 5. **Responsive Design**
- Optimized for **desktop, tablet, and mobile**
- Uses **flexbox and grid layouts** for a seamless experience
- Adaptive UI elements based on screen size
- Touch-friendly interface for mobile users

## Tech Stack

### **Frontend**
- **Next.js** (React Framework)
- **TypeScript** (For type safety)
- **ShadCN** (UI Components)
- **Jotai** (State management)
- **Tailwind CSS** (Styling)

### **Deployment**
- **Vercel** (For hosting)

## Setup Instructions

### **1. Clone the Repository**
```sh
git clone https://github.com/your-username/gamersberg-calculator.git
cd gamersberg-calculator
```

### **2. Install Dependencies**
```sh
npm install
# or
yarn install
# or
pnpm install
```



### **3. Install ShadCN Components**
```sh
npx shadcn-ui@latest init
```
Install required components:
```sh
npx shadcn-ui@latest add dialog button input dropdown-menu
```

### **4. Run Development Server**
```sh
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will be available at `http://localhost:3000`

## Project Structure
```
gamersberg-calculator/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── CalculatorResults.tsx
│   ├── FruitGrid.tsx
│   ├── SearchModal.tsx
│   └── ui/
├── data/
│   └── fruits.ts
├── store/
│   └── atoms.ts
├── types/
│   └── fruit.ts
└── styles/
    └── globals.css
```

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Thanks to the ShadCN team for the excellent UI components
- Inspiration from the Blox Fruits community
- Gamersberg for value reference data

## Contact
For any questions or concerns, please open an issue on the GitHub repository.
