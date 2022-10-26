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
      question: 'What does the “S” in “ESG” refer to?',
      questionType: 'text',
      answers: ['Societal', 'Sustainability', 'Social', 'None of the above'],
      correctAnswer: '3',
      messageForInorrectAnswer: 'Incorrect answer. Please try again.',
      messageForCorrectAnswer: 'Correct answer. Good job.',
      point: '2',
      explanation: 'The correct answer should be Social.',
      segment: segment.basic,
    },
    {
      question: 'What are the existing features of LiveBetter?',
      questionType: 'text',
      answerSelectionType: 'multiple',
      answers: ['Invest Better', 'Save Better', 'Give Better', 'Offset Better', 'Travel Better', 'Track Better'],
      correctAnswer: [1, 3, 4, 6],
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
      point: '3',
    },

    {
      question: 'Which of the following is not a part of the Monetary of Singapore’s Green Finance Action Plan?',
      questionType: 'text',
      answers: [
        'Environmental risk management guidelines',
        'Green Investments Programme',
        'Fintech hackcelerator',
        'Internal reviewers and rating agencies',
      ],
      correctAnswer: '4',
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForInorrectAnswer: 'Incorrect answer. Please try again.',
      explanation: 'The correct answer should be "Internal reviewers and rating agencies".',
      point: '2',
      segment: segment.basic,
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
      question: ' ________  launched the 17 Sustainable Development Goals (SDGs) in _____.',
      answers: ['The United Nations in 2015', 'The IPCC in 2016', 'The Conference of the Parties (COP) in 2015'],
      correctAnswer: '1',
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForInorrectAnswer: 'Incorrect answer. Please try again.',
      explanation: 'The United Nations launched the 17 SDGs in 2015.',
      point: '2',
      questionType: 'text',
      segment: segment.medium,
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
      segment: segment.medium,
    },
  ],
};

export default quiz;
