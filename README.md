# Dhanmitra - Financial Planning Platform

Dhanmitra is a comprehensive financial planning platform that provides users with tools and resources for managing their investments, retirement planning, and financial education. The platform offers detailed information and calculators for various financial products including National Pension System (NPS), Employee Provident Fund (EPF), and other investment options.

## Features

### National Pension System (NPS)
- Comprehensive NPS overview and guides
- Account types and features (Tier I & Tier II)
- Tax benefits and deductions
- Online registration process
- Investment options and asset classes
- Withdrawal rules and procedures
- NPS calculator for retirement planning
- Corporate NPS model information
- PRAN card details
- Exit options and annuity choices
- Performance data for various schemes

### Employee Provident Fund (EPF)
- EPF forms and procedures
- Online payment methods
- Name change process
- Form downloads and submissions
- Login portal access
- Claim status tracking
- PF calculation tools
- Official documentation access

### General Features
- User authentication and profiles
- Investment roadmaps
- Bank comparison tools
- Portfolio management
- Tax saving guides
- Fixed deposit calculators
- Blog section for financial education
- FAQ and support resources

## Tech Stack

- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **State Management**: React Context
- **UI Components**: Custom components with Lucide icons
- **Authentication**: Supabase

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/dhanmitra.git
cd dhanmitra
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add the following environment variables:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/         # Reusable UI components
├── contexts/          # React context providers
├── pages/            # Page components
│   ├── nps/         # NPS related pages
│   ├── epf/         # EPF related pages
│   └── ...          # Other pages
├── utils/            # Utility functions
├── App.tsx           # Main application component
└── main.tsx          # Application entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [PFRDA](https://pfrda.org.in/) for NPS information
- [EPFO](https://www.epfindia.gov.in/) for EPF information
- [Supabase](https://supabase.com/) for authentication and backend services
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React](https://reactjs.org/) for the frontend framework

## Support

For support, please email support@dhanmitra.com or create an issue in the repository.

## Disclaimer

This platform is for educational and informational purposes only. The information provided should not be considered as financial advice. Users are advised to consult with financial advisors before making investment decisions.
