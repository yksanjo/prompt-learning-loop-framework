# Prompt Learning Loop Evaluation Framework

![License](https://img.shields.io/github/license/ai-engineer-community/prompt-learning-loop-framework)
![JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-yellow)
![AB-Testing](https://img.shields.io/badge/A/B-Testing-blue)

Framework for collecting human feedback on model outputs, A/B testing prompt variations, automated metric tracking (accuracy, latency, cost), and dashboard showing prompt performance over time.

## Features

- Collect human feedback on model outputs
- A/B testing for prompt variations
- Automated metric tracking (accuracy, latency, cost)
- Dashboard for prompt performance over time
- Integration with popular LLM providers
- Experiment tracking and management

## Installation

```bash
npm install prompt-learning-loop-framework
```

## Usage

```javascript
import { PromptEvaluator } from 'prompt-learning-loop-framework';

const evaluator = new PromptEvaluator({
  apiKey: process.env.OPENAI_API_KEY
});

// Define experiment
const experiment = {
  name: 'Prompt A vs Prompt B',
  variants: [
    { id: 'A', prompt: 'Original prompt...' },
    { id: 'B', prompt: 'Modified prompt...' }
  ]
};

// Run evaluation
const results = await evaluator.runExperiment(experiment);
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to enhance.

## License

MIT