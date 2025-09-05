# SepoSwap - The Gateway to Base Sepolia DeFi

🚀 Your gateway to decentralized trading on Base Sepolia testnet. SepoSwap brings the power of Uniswap V2 protocol with enhanced user experience, offering seamless token swaps, intelligent liquidity management, and a sleek interface designed for the next generation of DeFi enthusiasts.

## 🌟 Features

- **Token Swapping**: Seamless ERC-20 token exchanges with optimal routing
- **Liquidity Management**: Add and remove liquidity from trading pools
- **Pool Management**: View and manage your liquidity positions
- **Multi-Wallet Support**: Connect with MetaMask, WalletConnect, Coinbase Wallet, Fortmatic, and Portis
- **Multi-Language Support**: Available in 10+ languages including English, Chinese, German, Spanish, and more
- **Real-time Price Impact**: Visual feedback on trading price impact and slippage
- **Migration Support**: Migrate from V1 to V2 liquidity pools
- **Responsive Design**: Optimized for both desktop and mobile devices

## 🚀 Quick Start

### Prerequisites
- Node.js (LTS version recommended)
- Yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd metaswap-frontend

# Install dependencies
yarn install

# Start development server
yarn start
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── connectors/          # Web3 wallet connectors
├── constants/           # Application constants and configurations
├── data/               # Data fetching and processing logic
├── hooks/              # Custom React hooks
├── pages/              # Page components and routing
├── state/              # Redux state management
├── theme/              # Theme and styling configuration
└── utils/              # Utility functions

public/
├── locales/            # Internationalization files
└── images/             # Static images and assets

cypress/                # End-to-end testing
```

## 🔧 Configuration

### Network Configuration
- **Chain ID**: 84532 (Base Sepolia)
- **RPC Endpoint**: `https://base-sepolia.g.alchemy.com/v2/ml-gstsnT9C45zdylFMVQ`
- **Router Contract**: `0x89E0eF8a0EA8DE3074cD129E816F536c85aa4914`

### Environment Variables

Create a `.env` file in the root directory:

```bash
# Required
REACT_APP_CHAIN_ID="84532"
REACT_APP_NETWORK_URL="https://base-sepolia.g.alchemy.com/v2/ml-gstsnT9C45zdylFMVQ"

# Optional (for production)
REACT_APP_PORTIS_ID="your-portis-id"
REACT_APP_FORTMATIC_KEY="your-fortmatic-key"
REACT_APP_GOOGLE_ANALYTICS_ID="your-ga-id"
```

## 🧪 Available Scripts

```bash
# Development
yarn start              # Start development server
yarn build              # Build for production
yarn test               # Run unit tests
yarn lint               # Run ESLint
yarn integration-test   # Run Cypress E2E tests

# Deployment
yarn deploy             # Deploy to GitHub Pages
```

## 🔗 Supported Wallets

- **MetaMask** (Browser Extension)
- **WalletConnect** (Mobile Wallets)
- **Coinbase Wallet** (Mobile & Extension)
- **Fortmatic** (Hosted Wallet)
- **Portis** (Hosted Wallet)

## 🌍 Supported Languages

- English (en)
- Chinese Simplified (zh-CN)
- Chinese Traditional (zh-TW)
- German (de)
- Spanish - Argentina (es-AR)
- Spanish - US (es-US)
- Italian (it-IT)
- Russian (ru)
- Vietnamese (vi)
- Romanian (ro)
- Hebrew (iw)

## 📱 Main Routes

- `/swap` - Token swapping interface
- `/pool` - Liquidity pool management
- `/add` - Add liquidity to pools
- `/remove` - Remove liquidity from pools
- `/find` - Find liquidity pools
- `/migrate/v1` - Migrate from V1 pools

## 🧪 Testing

### Unit Tests
```bash
yarn test
```

### End-to-End Tests
```bash
yarn integration-test
```

The project includes comprehensive Cypress tests covering:
- Token swapping workflows
- Liquidity addition/removal
- Pool management
- Token list management
- V1 migration processes

## 🛠 Technology Stack

- **Frontend**: React 16.13.1 + TypeScript 3.8.3
- **State Management**: Redux Toolkit + React Redux
- **Web3 Integration**: Web3-React, Ethers.js 5.0.7
- **Styling**: Styled-components + Rebass
- **Build Tool**: React Scripts 3.4.1
- **Testing**: Cypress 4.11.0
- **Code Quality**: ESLint + Prettier

## 🔍 Key Features Implementation

### Token Swapping
- Automatic routing for optimal prices
- Real-time price impact calculation
- Slippage protection (configurable)
- Multi-hop routing support

### Liquidity Management
- Add liquidity to any ERC-20 token pair
- Remove liquidity with proportional token withdrawal
- Pool share visualization
- Impermanent loss indicators

### Wallet Integration
- Multi-wallet support with fallback options
- Network switching detection
- Transaction status tracking
- Gas fee estimation

## 🚨 Important Notes

- This project is configured for **Base Sepolia testnet** only
- Ensure your wallet is connected to the correct network
- Testnet ETH is required for transactions
- Always review transaction details before confirmation

## 📄 License

This project is licensed under the GPL-3.0-or-later License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🆘 Troubleshooting

### Common Issues

1. **Node.js Version**: Use Node.js 14+ for compatibility
2. **OpenSSL Errors**: The project includes `--openssl-legacy-provider` flag
3. **Dependency Conflicts**: Use `yarn` instead of `npm` for package management
4. **Network Issues**: Ensure MetaMask is connected to Base Sepolia network

### Development Tips

- Use `.env.local` for local development overrides
- Test with Base Sepolia testnet ETH
- Check browser console for Web3 connection issues
- Use React DevTools for state debugging

## 🔗 Resources

- [Uniswap Documentation](https://docs.uniswap.org/)
- [Base Sepolia Faucet](https://faucet.quicknode.com/base/sepolia)
- [Web3-React Documentation](https://github.com/NoahZinsmeister/web3-react)
- [Ethers.js Documentation](https://docs.ethers.io/)

---

Built with ❤️ for the decentralized future