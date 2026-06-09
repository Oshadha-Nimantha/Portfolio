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
        heroIcon: "fas fa-shopping-cart",
        images: [
            "Smart_Cart/Screenshot_20251208-083105.png",
            "Smart_Cart/Screenshot_2025-12-08_083844.png",
            "Smart_Cart/Screenshot_2025-12-08_083859.png",
            "Smart_Cart/Screenshot_20251208-082909.png",
            "Smart_Cart/Screenshot_20251208-082922.png",
            "Smart_Cart/Screenshot_20251208-083027.png",
            "Smart_Cart/Screenshot_20251208-083031.png"
        ]
    },
    "pulselink": {
        title: "PulseLink - Organ Matching System",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Ballerina", "REST API"],
        overview: "PulseLink connects donor hospitals, transplant centers, and emergency services in real time to streamline the organ matching process and coordinate emergency transport. With a modern and responsive interface, the platform enables fast decisions and data-driven collaboration, ultimately helping to save lives.",
        features: [
            "<strong>Modern UI:</strong> Glassmorphism, dark theme, responsive design",
            "<strong>Authentication:</strong> Secure login and signup with role-based access (admin/user)",
            "<strong>Profile Management:</strong> Editable profiles with hospital-specific details",
            "<strong>Real-Time Matching:</strong> Dynamic donor and recipient organ matching (planned)",
            "<strong>Emergency Coordination:</strong> Dashboard for transport and logistics (planned)",
            "<strong>Live Stats:</strong> Animated counters and statistics for donations and matches",
            "<strong>Custom Error Pages:</strong> Branded 404 and error handling interfaces",
            "<strong>Smooth Navigation:</strong> Sticky/floating navbar, profile dropdown, and seamless routing"
        ],
        technologies: [
            { icon: "fab fa-react", name: "Next.js (App Router)" },
            { icon: "fas fa-code", name: "TypeScript" },
            { icon: "fab fa-css3-alt", name: "Tailwind CSS" },
            { icon: "fas fa-server", name: "Ballerina Backend" },
            { icon: "fas fa-map-marker-alt", name: "Google Maps API" }
        ],
        architecture: `
            <h3>👥 User Roles</h3>
            <p><strong>Admin:</strong> Manage dashboard, hospitals, and view all matches</p>
            <p><strong>Hospital/User:</strong> Register, manage profile, view matches, and request transport</p>
            <h3>📁 Project Structure</h3>
            <pre><code>PulseLink/
├── frontend/ (Next.js, Tailwind)
│   ├── public/ (assets)
│   └── src/app/ (App Router pages)
└── backend/ (Ballerina API)
    ├── service.bal
    └── tests/</code></pre>
        `,
        status: "In Development",
        timeline: "2025",
        githubLink: "https://github.com/PathumiRanasinghe/iwb25-469-pulselink",
        heroIcon: "fas fa-heartbeat",
        images: [
            "Pulse_Link/hero.png",
            "Pulse_Link/logo.png"
        ]
    },
    "medibox": {
        title: "Smart Medibox",
        tags: ["C++", "IoT", "ESP32", "Node-RED", "MQTT"],
        overview: "A comprehensive, IoT-enabled smart medicine box designed to ensure medication is taken on time and stored in optimal environmental conditions. This system features a dual-alarm scheduler, environmental monitoring, and a remote dashboard for real-time data visualization and control.",
        features: [
            "<strong>Environmental Monitoring:</strong> Continuously tracks temperature and humidity using a DHT22 sensor to ensure medicines are stored safely.",
            "<strong>Visual & Audible Alerts:</strong> Triggers a red LED and a buzzer if temperature or humidity levels go beyond safe thresholds.",
            "<strong>Dual Alarm System:</strong> Set up to two daily alarms for medication reminders.",
            "<strong>OLED Display Interface:</strong> Displays the current time, environmental status, and a user-friendly menu.",
            "<strong>Interactive Menu:</strong> Use push buttons to set time zone, configure/delete alarms, and view active alarms.",
            "<strong>Snooze & Stop:</strong> Snooze an active alarm for 5 minutes or stop it completely.",
            "<strong>Light-Controlled Servo:</strong> Adjusts position based on ambient light levels to control a lid or dispenser mechanism.",
            "<strong>Real-time IoT Dashboard:</strong> Visualizes live temperature, humidity, and light intensity data.",
            "<strong>Remote Control:</strong> Adjust key system parameters directly from the Node-RED dashboard via MQTT."
        ],
        technologies: [
            { icon: "fas fa-microchip", name: "ESP32 Dev Kit" },
            { icon: "fas fa-code", name: "C++ (PlatformIO)" },
            { icon: "fas fa-project-diagram", name: "Node-RED" },
            { icon: "fas fa-network-wired", name: "MQTT (emqx.io)" },
            { icon: "fas fa-thermometer-half", name: "DHT22, LDR, Servo" }
        ],
        architecture: `
            <h3>🛠️ How It Works</h3>
            <p><strong>ESP32 Logic:</strong> The ESP32 acts as the brain. It connects via MQTT, fetches NTP time, checks sensor data against thresholds, handles alarms, publishes data, controls the servo, and processes button inputs for the OLED menu.</p>
            <p><strong>Node-RED Flow:</strong> Subscribes to MQTT topics to receive live data from the ESP32. Visualizes this data using gauges and charts. Sliders on the dashboard publish back to the ESP32 to remotely adjust parameters like servo offset and sampling intervals.</p>
        `,
        status: "Completed",
        timeline: "2024",
        githubLink: "https://github.com/Oshadha-Nimantha/Medi-Box",
        heroIcon: "fas fa-pills",
        images: [
            "Medi_Box/wiring.png"
        ]
    }
    // Other projects will be added here later
};
