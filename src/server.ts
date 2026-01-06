import express from 'express';
import { PromptEvaluator } from './evaluator';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Initialize evaluator
const evaluator = new PromptEvaluator();

// Routes
app.get('/api/experiments', async (req, res) => {
  try {
    const experiments = await evaluator.getExperiments();
    res.json(experiments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/experiments', async (req, res) => {
  try {
    const experiment = req.body;
    const result = await evaluator.runExperiment(experiment);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/experiments/:id/results', async (req, res) => {
  try {
    const experimentId = req.params.id;
    const results = await evaluator.getExperimentResults(experimentId);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Prompt Learning Loop Framework server running on port ${PORT}`);
});