# Mobile App Template

A clean, minimalist template for building mobile applications with React Native (Expo) and Express.js backend.

## Tech Stack

- **Frontend**: React Native with Expo and TypeScript
- **Backend**: Node.js with Express
- **Database**: MongoDB (configured but optional)
- **Styling**: Tailwind CSS concepts with React Native

## Project Structure

```
mobile-app-template/
├── client/                      # React Native + Expo frontend
│   ├── App.tsx                  # Main app component
│   ├── app.json                 # Expo configuration
│   ├── package.json             # Frontend dependencies
│   └── assets/                  # Static assets
│
├── server/                      # Express.js backend
│   ├── index.js                 # Main server file
│   └── package.json             # Backend dependencies
│
└── README.md                    # This documentation
```

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app installed on your mobile device
- MongoDB (optional, for database functionality)

### Installation & Setup

#### 1. Clone the repository

```bash
git clone https://github.com/yourusername/mobile-app-template.git
cd mobile-app-template
```

#### 2. Backend Setup

```bash
# Navigate to the server directory
cd server

# Install dependencies
npm install

# Start the server
npm run dev
```

The server should now be running at http://localhost:5000.
You can test it by visiting http://localhost:5000/api/health in your browser.

#### 3. Frontend Setup

```bash
# In a new terminal, navigate to the client directory
cd client

# Install dependencies
npm install

# Start the Expo development server
npm start
```

This will display a QR code in your terminal and open the Expo developer tools in your browser.

#### 4. View on your mobile device

1. Open the Expo Go app on your device
2. Scan the QR code displayed in your terminal or in the Expo developer tools
3. The app should load on your device

### Connecting Frontend to Backend

By default, the client is configured to connect to your local server. If you're using a physical device:

1. Find your computer's IP address:
   - Windows: Open Command Prompt and run `ipconfig`
   - Mac: Open Terminal and run `ifconfig`
   - Look for the IPv4 Address (something like 192.168.1.xxx)

2. Create or update the API client file at `client/src/api/index.ts`:

```typescript
import axios from 'axios';

// Replace with your computer's IP address
const baseURL = 'http://192.168.1.xxx:5000/api';

const api = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const checkHealth = async () => {
  try {
    const response = await api.get('/health');
    return response.data;
  } catch (error) {
    console.error('API Health Check Error:', error);
    throw error;
  }
};

export default api;
```

3. Make sure your mobile device and computer are on the same WiFi network

## Development Workflow

1. Start the server in one terminal window
2. Start the Expo development server in another terminal window
3. Make changes to your code
4. The app will reload automatically when you save changes

## Troubleshooting

### Server Connection Issues

- Ensure your server is running (you should see "Server running on port 5000")
- Check that your mobile device and computer are on the same network
- Verify you're using the correct IP address in your API client
- Some public WiFi networks block device-to-device communication

### Expo Issues

- If the QR code doesn't scan, try using the Expo Go app's "Enter URL manually" option
- Enter: `exp://YOUR_IP_ADDRESS:19000`
- Make sure you have the latest version of Expo Go installed

