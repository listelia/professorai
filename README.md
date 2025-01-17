# Professor AI 🎓

Your personal AI tutor for learning cryptocurrency and blockchain technology.

## Introduction

Professor AI is an interactive chatbot designed to teach cryptocurrency concepts to beginners and intermediate learners. Whether you're curious about blockchain basics or want to understand advanced trading concepts, Professor AI provides personalized education through natural conversations.

## Features

- Interactive cryptocurrency learning experience
- Real-time market data integration
- Customized learning paths
- Multi-language support
- Practice exercises and quizzes
- Progress tracking

## Prerequisites

- Node.js (v16.0 or higher)
- npm or yarn
- OpenAI API key

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/yourusername/professor-ai.git
cd professor-ai
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Edit `.env` file and add your OpenAI API key:
```
OPENAI_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to start learning!

## Building for Production

```bash
npm run build
npm start
```

## Docker Deployment

```bash
docker build -t professor-ai .
docker run -p 3000:3000 professor-ai
```

## Disclaimer

Professor AI is an educational tool and should not be considered financial advice. Always do your own research and consult with financial professionals before making investment decisions. The creators of Professor AI are not responsible for any financial losses incurred while trading cryptocurrencies.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Certificate of Completion

Users who complete the full curriculum will receive a digital certificate of completion. This certificate is for educational purposes only and does not constitute professional certification in cryptocurrency trading or blockchain technology.

---
Made with ❤️ by Listelia
