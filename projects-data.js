const projectsData = {
    "smartcart": {
        title: "SmartCart - Intelligent Shopping Cart System",
        tags: ["React", "Vite", "Firebase", "Tailwind CSS", "Platform IO"],
        overview: "SmartCart is a web-based IoT application designed to modernize the retail shopping experience. It features a mobile interface for shoppers, a real-time dashboard for staff, and a simulator to test physical cart interactions.",
        features: [
            "<strong>🛒 Shopper Interface (Mobile PWA)</strong><br>Real-time Cart View: See items added to your physical cart instantly on your phone.",
            "Secure Checkout: Integrated payment portal with strict card validation.",
            "Digital Receipt: View your session summary and past orders.",
            "Auto-Clear: Cart automatically resets after payment for the next customer.",
            "<strong>👨💼 Staff Dashboard</strong><br>Live Monitoring: View all active carts in the store in real-time.",
            "Sales History: Track completed transactions and revenue.",
            "Status Indicators: Instantly see which carts are active, paid, or idle.",
            "<strong>🔧 Cart Simulator (Testing Tool)</strong><br>Physical Cart Emulation: Manually add/remove items to simulate hardware sensors.",
            "Inventory Management: Automatically updates stock levels in the database.",
            "Demo Data: Generate random carts to test the Staff Dashboard."
        ],
        technologies: [
            { icon: "fas fa-code", name: "React + Vite" },
            { icon: "fas fa-paint-brush", name: "Tailwind CSS (v4)" },
            { icon: "fas fa-database", name: "Firebase Firestore" },
            { icon: "fas fa-icons", name: "Lucide React" }
        ],
        architecture: `
            <h3>🚶‍♂️ Walkthrough / Usage Guide</h3>
            <p><strong>1. Initialize the Store</strong><br>
            Open the Cart Simulator at localhost. Click "Seed Products" to populate the database with sample inventory. Enter a Cart ID (e.g., cart-001) to simulate a specific physical cart.</p>
            <p><strong>2. The Shopper Experience</strong><br>
            Open the app on your phone. Enter the Cart ID. In the Simulator: Click items to "Add" them. Watch them appear instantly on the Shopper's screen. Click "Pay Now" and enter valid payment details. After payment, you'll see a receipt and the Simulator cart will automatically clear!</p>
            <p><strong>3. Staff Monitoring</strong><br>
            Open the Staff Dashboard. Watch live carts as shoppers add items. View sales history of all completed transactions.</p>
            <h3>🧪 Testing Notes</h3>
            <p><strong>Inventory:</strong> Adding an item in the Simulator decreases stock. Removing it restores stock.<br>
            <strong>Validation:</strong> The payment form prevents invalid input.<br>
            <strong>Auto-Reset:</strong> Completed carts are archived to sessions and the active cart is reset to empty.</p>
        `,
        status: "Completed",
        timeline: "2024",
        githubLink: "https://github.com/Oshadha-Nimantha/SmartCart",
        heroIcon: "fas fa-shopping-cart"
    }
    // Other projects will be added here later
};
