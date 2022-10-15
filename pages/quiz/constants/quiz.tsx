import { IInformationRow } from "../../../components/quiz/InformationRow";

export const TITLE = "Recommendation Quiz";
export const BRIEF_TITLE = "Brief explanation about how it works";
export const BRIEF_PROMPT = "Please read the text below carefully to understand how the process works";

export enum CONTAINER_STATE {
  BRIEF = 0,
  QUIZ = 1
}

interface InfoRowContent extends Omit<IInformationRow, "index"> {}

export const InfoRowContents: InfoRowContent[] = [
  {
    imageUrl: "/quiz/questions_brief.svg",
    imageAlt: "Image of Questions Brief",
    mainText: "5 Questions",
    secondaryText: "Indicate aspects that matters the most for you",
  },
  {
    imageUrl: "/quiz/time_brief.svg",
    imageAlt: "Image of Duration Brief",
    mainText: "2 - 4 Minutes",
    secondaryText: "Total duration estimated",

  },
  {
    imageUrl: "/quiz/recommended_brief.svg",
    imageAlt: "Image of Recommended Companies Brief",
    mainText: "Recommended companies",
    secondaryText: "Companies are recommended!",
  },
]

interface IPromptContent {
  prompt: string;
}

export const PromptContents: IPromptContent[] = [
  {
    prompt: "Based on your answers, our system will recommend companies that are aligned with aspects you have indicated!"
  },
  {
    prompt: "Our recommendation engine will look for specific companies that have performed well in the ESG area selected."
  },
  {
    prompt: "Tap on the card to find out more about the company and actions they have taken!"
  },
]

interface IQuizQuestion {
  question: string;
  options: string[] 
}

export const QuizQuestions: IQuizQuestion[] = [
  {
    question: "What are the aspects of ESG (Environmental , Social, Governance) you would like to consider?",
    options: [
      "Environmental",
      "Social",
      "Governance"
    ]
  },
  {
    question: "You selected Environmental. What Environmental factors matters to you?",
    options: [
      "Climate change and carbon emissions",
      "Air and water pollution",
      "Biodiversity",
      "Energy efficiency",
      "Water management"
    ]
  },
  {
    question: "You selected Social. What Social factors matters to you?",
    options: [
      "Working Conditions",
      "Local communities",
      "Empoyee relations and diversity",
      "Conflict",
      "Health and safety"
    ]
  },
  {
    question: "What Fashion Categories are you interested in?",
    options: [
      "Luxury",
      "Casual",
      "Sportswear",
    ]
  },
  {
    question: "Region",
    options: [
      "Local",
      "International",
      "Worldwide",
    ]
  }
]