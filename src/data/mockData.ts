// Mock data for the TNPSC platform

export interface MockTest {
  id: number;
  title: string;
  subject: string;
  group: string;
  duration: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  questionCount: number;
}

export interface Question {
  id: number;
  mockTestId: number;
  questionText: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctOption: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export interface StudyMaterial {
  id: number;
  title: string;
  subject: string;
  group: string;
  language: 'Tamil' | 'English';
  description: string;
  fileType: 'PDF' | 'DOC';
  filePath: string;
}

export interface YouTubeLink {
  id: number;
  title: string;
  subject: string;
  topic: string;
  youtubeUrl: string;
  thumbnailUrl: string;
  language: 'Tamil' | 'English';
}

export interface PreviousPaper {
  id: number;
  year: number;
  group: string;
  language: 'Tamil' | 'English';
  filePath: string;
}

export interface SyllabusItem {
  id: number;
  group: string;
  subject: string;
  topic: string;
  subtopic: string;
}

export interface TestAttempt {
  id: number;
  mockTestId: number;
  testTitle: string;
  subject: string;
  score: number;
  total: number;
  date: string;
}

export const mockTests: MockTest[] = [
  { id: 1, title: "General Knowledge - Set 1", subject: "General Knowledge", group: "Group 1", duration: 30, difficulty: "Easy", questionCount: 25 },
  { id: 2, title: "Indian Polity & Constitution", subject: "Polity", group: "Group 1", duration: 45, difficulty: "Medium", questionCount: 30 },
  { id: 3, title: "Tamil Nadu History", subject: "History", group: "Group 2", duration: 30, difficulty: "Medium", questionCount: 25 },
  { id: 4, title: "Indian Economy Basics", subject: "Economy", group: "Group 2A", duration: 40, difficulty: "Hard", questionCount: 30 },
  { id: 5, title: "Science & Technology", subject: "Science", group: "Group 4", duration: 30, difficulty: "Easy", questionCount: 20 },
  { id: 6, title: "Current Affairs 2024", subject: "Current Affairs", group: "Group 1", duration: 20, difficulty: "Medium", questionCount: 15 },
  { id: 7, title: "Geography of India", subject: "Geography", group: "Group 2", duration: 35, difficulty: "Medium", questionCount: 25 },
  { id: 8, title: "Aptitude & Mental Ability", subject: "Aptitude", group: "Group 4", duration: 40, difficulty: "Hard", questionCount: 30 },
];

export const sampleQuestions: Question[] = [
  { id: 1, mockTestId: 1, questionText: "Who is known as the 'Father of the Indian Constitution'?", optionA: "Mahatma Gandhi", optionB: "Dr. B.R. Ambedkar", optionC: "Jawaharlal Nehru", optionD: "Sardar Patel", correctOption: "B", explanation: "Dr. B.R. Ambedkar was the chairman of the Drafting Committee of the Constitution." },
  { id: 2, mockTestId: 1, questionText: "Which river is the longest in Tamil Nadu?", optionA: "Cauvery", optionB: "Vaigai", optionC: "Thamiraparani", optionD: "Palar", correctOption: "A", explanation: "Cauvery is the longest river flowing through Tamil Nadu at 805 km." },
  { id: 3, mockTestId: 1, questionText: "The Pallava dynasty had its capital at?", optionA: "Madurai", optionB: "Thanjavur", optionC: "Kanchipuram", optionD: "Uraiyur", correctOption: "C", explanation: "Kanchipuram was the capital of the Pallava dynasty." },
  { id: 4, mockTestId: 1, questionText: "Which Article of the Indian Constitution deals with Fundamental Rights?", optionA: "Articles 1-11", optionB: "Articles 12-35", optionC: "Articles 36-51", optionD: "Articles 52-78", correctOption: "B", explanation: "Part III (Articles 12-35) deals with Fundamental Rights." },
  { id: 5, mockTestId: 1, questionText: "Who founded the Justice Party in Tamil Nadu?", optionA: "E.V. Ramasamy Periyar", optionB: "T.M. Nair", optionC: "C.N. Annadurai", optionD: "K. Kamaraj", correctOption: "B", explanation: "The Justice Party was founded by T.M. Nair, P. Thyagaraja Chetty, and C. Natesa Mudaliar in 1916." },
  { id: 6, mockTestId: 1, questionText: "The chemical formula of water is?", optionA: "H2O2", optionB: "CO2", optionC: "H2O", optionD: "NaCl", correctOption: "C", explanation: "Water's chemical formula is H2O - two hydrogen atoms and one oxygen atom." },
  { id: 7, mockTestId: 1, questionText: "Which is the highest peak in Tamil Nadu?", optionA: "Doddabetta", optionB: "Anaimudi", optionC: "Kodaikanal Peak", optionD: "Ooty Peak", correctOption: "A", explanation: "Doddabetta is the highest peak in the Nilgiri Hills at 2,637 meters." },
  { id: 8, mockTestId: 1, questionText: "The Preamble of the Indian Constitution begins with?", optionA: "We the citizens", optionB: "We the people", optionC: "We the nation", optionD: "We the republic", correctOption: "B", explanation: "The Preamble begins with 'We the People of India'." },
  { id: 9, mockTestId: 1, questionText: "Who was the first Chief Minister of Tamil Nadu?", optionA: "C.N. Annadurai", optionB: "O.P. Ramaswamy Reddiyar", optionC: "K. Kamaraj", optionD: "C. Rajagopalachari", correctOption: "B", explanation: "O.P. Ramaswamy Reddiyar was the first Chief Minister of Madras State (now Tamil Nadu)." },
  { id: 10, mockTestId: 1, questionText: "Which planet is known as the Red Planet?", optionA: "Venus", optionB: "Jupiter", optionC: "Mars", optionD: "Saturn", correctOption: "C", explanation: "Mars is known as the Red Planet due to its reddish appearance caused by iron oxide on its surface." },
];

export const studyMaterials: StudyMaterial[] = [
  { id: 1, title: "Indian Polity Complete Notes", subject: "Polity", group: "Group 1", language: "English", description: "Comprehensive notes covering Indian Constitution, Governance, and Political System", fileType: "PDF", filePath: "/materials/polity-notes.pdf" },
  { id: 2, title: "தமிழ்நாடு வரலாறு", subject: "History", group: "Group 2", language: "Tamil", description: "தமிழ்நாட்டின் வரலாறு பற்றிய முழுமையான குறிப்புகள்", fileType: "PDF", filePath: "/materials/tn-history-tamil.pdf" },
  { id: 3, title: "Economy - Quick Revision", subject: "Economy", group: "Group 1", language: "English", description: "Quick revision notes for Indian Economy topics", fileType: "PDF", filePath: "/materials/economy-revision.pdf" },
  { id: 4, title: "Science & Technology Notes", subject: "Science", group: "Group 4", language: "English", description: "Important science topics for TNPSC exams", fileType: "PDF", filePath: "/materials/science-notes.pdf" },
  { id: 5, title: "புவியியல் குறிப்புகள்", subject: "Geography", group: "Group 2A", language: "Tamil", description: "இந்திய மற்றும் உலக புவியியல் குறிப்புகள்", fileType: "PDF", filePath: "/materials/geography-tamil.pdf" },
  { id: 6, title: "Current Affairs Compilation 2024", subject: "Current Affairs", group: "Group 1", language: "English", description: "Monthly current affairs compilation for competitive exams", fileType: "PDF", filePath: "/materials/current-affairs-2024.pdf" },
];

export const youtubeLinks: YouTubeLink[] = [
  { id: 1, title: "Indian Polity - Complete Series", subject: "Polity", topic: "Fundamental Rights", youtubeUrl: "https://youtube.com/watch?v=example1", thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg", language: "English" },
  { id: 2, title: "தமிழ்நாடு வரலாறு - Part 1", subject: "History", topic: "Pallava Dynasty", youtubeUrl: "https://youtube.com/watch?v=example2", thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg", language: "Tamil" },
  { id: 3, title: "Economy Basics for TNPSC", subject: "Economy", topic: "Five Year Plans", youtubeUrl: "https://youtube.com/watch?v=example3", thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg", language: "English" },
  { id: 4, title: "Geography - Map Based Questions", subject: "Geography", topic: "Indian Rivers", youtubeUrl: "https://youtube.com/watch?v=example4", thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg", language: "English" },
  { id: 5, title: "அறிவியல் - முக்கிய கேள்விகள்", subject: "Science", topic: "Physics Basics", youtubeUrl: "https://youtube.com/watch?v=example5", thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg", language: "Tamil" },
  { id: 6, title: "Aptitude Shortcuts & Tricks", subject: "Aptitude", topic: "Number Series", youtubeUrl: "https://youtube.com/watch?v=example6", thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg", language: "English" },
];

export const previousPapers: PreviousPaper[] = [
  { id: 1, year: 2024, group: "Group 1", language: "English", filePath: "/papers/group1-2024.pdf" },
  { id: 2, year: 2024, group: "Group 2", language: "English", filePath: "/papers/group2-2024.pdf" },
  { id: 3, year: 2024, group: "Group 4", language: "Tamil", filePath: "/papers/group4-2024-tamil.pdf" },
  { id: 4, year: 2023, group: "Group 1", language: "English", filePath: "/papers/group1-2023.pdf" },
  { id: 5, year: 2023, group: "Group 2", language: "Tamil", filePath: "/papers/group2-2023-tamil.pdf" },
  { id: 6, year: 2023, group: "Group 2A", language: "English", filePath: "/papers/group2a-2023.pdf" },
  { id: 7, year: 2022, group: "Group 1", language: "English", filePath: "/papers/group1-2022.pdf" },
  { id: 8, year: 2022, group: "Group 4", language: "English", filePath: "/papers/group4-2022.pdf" },
];

export const syllabusData: SyllabusItem[] = [
  { id: 1, group: "Group 1", subject: "General Studies", topic: "Indian National Movement", subtopic: "Freedom Struggle" },
  { id: 2, group: "Group 1", subject: "General Studies", topic: "Indian National Movement", subtopic: "Role of Tamil Nadu in Freedom Movement" },
  { id: 3, group: "Group 1", subject: "General Studies", topic: "History & Culture of India", subtopic: "Ancient India" },
  { id: 4, group: "Group 1", subject: "General Studies", topic: "History & Culture of India", subtopic: "Medieval India" },
  { id: 5, group: "Group 1", subject: "Indian Polity", topic: "Constitution of India", subtopic: "Preamble & Fundamental Rights" },
  { id: 6, group: "Group 1", subject: "Indian Polity", topic: "Constitution of India", subtopic: "Directive Principles" },
  { id: 7, group: "Group 1", subject: "Indian Polity", topic: "Governance", subtopic: "Central & State Government" },
  { id: 8, group: "Group 1", subject: "Geography", topic: "Indian Geography", subtopic: "Physical Features" },
  { id: 9, group: "Group 1", subject: "Geography", topic: "Tamil Nadu Geography", subtopic: "Rivers & Dams" },
  { id: 10, group: "Group 2", subject: "General Studies", topic: "Indian History", subtopic: "Mughal Empire" },
  { id: 11, group: "Group 2", subject: "General Studies", topic: "Tamil Nadu History", subtopic: "Chola Dynasty" },
  { id: 12, group: "Group 2", subject: "Indian Economy", topic: "Economic Development", subtopic: "Five Year Plans" },
  { id: 13, group: "Group 2", subject: "Indian Economy", topic: "Banking & Finance", subtopic: "RBI & Monetary Policy" },
  { id: 14, group: "Group 2A", subject: "General Knowledge", topic: "Science & Technology", subtopic: "Space Technology" },
  { id: 15, group: "Group 2A", subject: "General Knowledge", topic: "Current Affairs", subtopic: "National & International Events" },
  { id: 16, group: "Group 4", subject: "General Studies", topic: "Indian History", subtopic: "Modern India" },
  { id: 17, group: "Group 4", subject: "General Studies", topic: "Geography", subtopic: "Climate & Vegetation" },
  { id: 18, group: "Group 4", subject: "Aptitude", topic: "Mental Ability", subtopic: "Number Series & Reasoning" },
  { id: 19, group: "Group 4", subject: "Aptitude", topic: "Quantitative Aptitude", subtopic: "Percentage & Profit/Loss" },
];

export const testAttempts: TestAttempt[] = [
  { id: 1, mockTestId: 1, testTitle: "General Knowledge - Set 1", subject: "General Knowledge", score: 18, total: 25, date: "2024-12-01" },
  { id: 2, mockTestId: 2, testTitle: "Indian Polity & Constitution", subject: "Polity", score: 22, total: 30, date: "2024-12-05" },
  { id: 3, mockTestId: 3, testTitle: "Tamil Nadu History", subject: "History", score: 15, total: 25, date: "2024-12-10" },
  { id: 4, mockTestId: 5, testTitle: "Science & Technology", subject: "Science", score: 16, total: 20, date: "2024-12-15" },
  { id: 5, mockTestId: 6, testTitle: "Current Affairs 2024", subject: "Current Affairs", score: 10, total: 15, date: "2024-12-20" },
  { id: 6, mockTestId: 7, testTitle: "Geography of India", subject: "Geography", score: 19, total: 25, date: "2025-01-02" },
];

export const groups = ["Group 1", "Group 2", "Group 2A", "Group 4"];
export const subjects = ["General Knowledge", "Polity", "History", "Economy", "Science", "Geography", "Current Affairs", "Aptitude"];
export const languages = ["Tamil", "English"];
