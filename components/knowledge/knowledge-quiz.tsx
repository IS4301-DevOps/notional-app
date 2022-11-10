const segment = {
  basic: 'Basic',
  medium: 'Medium',
  advanced: 'Advanced',
};

const quiz = {
  quizTitle: 'ESG Knowledge',
  quizSynopsis: 'Test your ESG knowledge!',
  questions: [
    {
      question: 'What are some existing features of LiveBetter?',
      questionType: 'text',
      answerSelectionType: 'multiple',
      answers: ['Save Better', 'Give Better', 'Travel Better', 'Track Better'],
      correctAnswer: [2, 4],
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
      point: '3',
      segment: segment.medium,
    },
    {
      question:
        'Environmental (E), Social (S), and Governance responsibility, when balanced, enables companies to endure and create value for all stakeholders. Sustainability is achieved at the intersection of ES&G. The official definition of Sustainability is ”Meeting the needs of the present without _________________.”',
      questionType: 'text',
      answers: [
        'jeopardizing the earth’s ecosystems',
        'compromising the ability of future generations to meet their own needs',
        'disregarding the needs of people in the future',
      ],
      correctAnswer: '2',
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForInorrectAnswer: 'Incorrect answer. Please try again.',
      point: '3',
      segment: segment.advanced,
    },
    {
      question:
        'Governance has a broad scope and essentially covers all _________ of a company to maximize value creation and mitigate risk.',
      questionType: 'text',
      answers: ['End to end supply chain decisions', 'Compliance and ethics programs', 'Decision-making'],
      explanation:
        'Think of Governance as everything related to decision-making within a company- the decision-making system. Weak governance has been behind scandals like Enron, the BP Oil Spill, Volkswagen and Theranos.',
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForInorrectAnswer: 'Incorrect answer. Please try again.',
      point: '2',
      correctAnswer: '3',
      segment: segment.basic,
    },
  ],
};

export default quiz;
