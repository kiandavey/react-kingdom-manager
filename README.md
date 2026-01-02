# 👑 React Kingdom Manager

**Kingdom Manager** is a simple interactive dashboard built with **React + Vite**. It serves as a practical demonstration of "The React Way" of building user interfaces—breaking down the UI into reusable components and managing data with Hooks.

## 🚀 Features

* **Component Architecture**: The UI is split into a container (`App`) and reusable presentation components (`SoldierCard`).
* **State Management (`useState`)**: Tracks the Kingdom's Gold, the list of recruitable Soldiers, and the Loading status.
* **Side Effects (`useEffect`)**: Simulates an asynchronous API call to "scout" (fetch) recruits after a 2-second delay.
* **Conditional Rendering**: Dynamically switches between a "Loading..." text and the Soldier list once data arrives.
* **Interactive Logic**:
    * Deducts gold when a soldier is deployed.
    * **Smart Buttons**: The "Deploy" button automatically disables itself (`disabled={!canAfford}`) if you don't have enough gold.

## 🛠️ Tech Stack

* **Framework**: React 18
* **Build Tool**: Vite
* **Styling**: CSS Modules / Standard CSS
* **Language**: JavaScript (ES6+)

## 💻 Installation & Usage

Since this is a Vite project, the setup is slightly different from a basic script.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/react-kingdom-manager.git](https://github.com/yourusername/react-kingdom-manager.git)
    cd react-kingdom-manager
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    *Open the link provided in the terminal (usually `http://localhost:5173/`)*

## 🧩 Code Deep Dive

### The Parent-Child Data Flow
In `App.jsx`, we pass not just data, but **functions** down to children. This allows the child (`SoldierCard`) to communicate back to the parent.

```jsx
// App.jsx (Parent)
<SoldierCard 
    onDeploy={handleDeploy} // Passing the function down
    canAfford={gold >= soldier.cost} // Passing derived logic
/>

// SoldierCard (Child)
<button onClick={() => onDeploy(cost)}> // Calling the parent's function
