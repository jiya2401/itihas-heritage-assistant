
export enum Language {
  ENGLISH = 'English',
  HINDI = 'Hindi',
  BENGALI = 'Bengali',
  TAMIL = 'Tamil',
  TELUGU = 'Telugu',
  MARATHI = 'Marathi',
  URDU = 'Urdu',
  GUJARATI = 'Gujarati',
  ARABIC = 'Arabic',
  FRENCH = 'French',
  SPANISH = 'Spanish',
  PORTUGUESE = 'Portuguese',
  GERMAN = 'German',
  RUSSIAN = 'Russian',
  CHINESE_SIMPLIFIED = 'Chinese (Simplified)',
  CHINESE_TRADITIONAL = 'Chinese (Traditional)',
  JAPANESE = 'Japanese',
  KOREAN = 'Korean',
  INDONESIAN = 'Indonesian',
  TURKISH = 'Turkish',
}

export const LANGUAGE_CODES: Record<Language, string> = {
  [Language.ENGLISH]: 'en-US',
  [Language.HINDI]: 'hi-IN',
  [Language.BENGALI]: 'bn-IN',
  [Language.TAMIL]: 'ta-IN',
  [Language.TELUGU]: 'te-IN',
  [Language.MARATHI]: 'mr-IN',
  [Language.URDU]: 'ur-PK',
  [Language.GUJARATI]: 'gu-IN',
  [Language.ARABIC]: 'ar-SA',
  [Language.FRENCH]: 'fr-FR',
  [Language.SPANISH]: 'es-ES',
  [Language.PORTUGUESE]: 'pt-PT',
  [Language.GERMAN]: 'de-DE',
  [Language.RUSSIAN]: 'ru-RU',
  [Language.CHINESE_SIMPLIFIED]: 'zh-CN',
  [Language.CHINESE_TRADITIONAL]: 'zh-TW',
  [Language.JAPANESE]: 'ja-JP',
  [Language.KOREAN]: 'ko-KR',
  [Language.INDONESIAN]: 'id-ID',
  [Language.TURKISH]: 'tr-TR',
};

export interface Section {
  title: string;
  content: string | string[];
}

export interface LocalizedResponse {
  language: string;
  mode: string;
  sections: Section[];
}

export interface VisualExperience {
  title_animation: string;
  background_visual: string;
  transition_style: string;
  highlight_effect: string;
  reading_rhythm: string;
}

// Basic metadata that we still need to extract separately or alongside sections
export interface PlaceMetadata {
  placeName: string;
  location: string;
  timePeriod: string;
  whoBuiltIt: string;
  architecturalStyle: string;
}

export interface HistoricPlaceData extends PlaceMetadata {
  // Content from "3d_visualization" mode
  visualizationSections: Section[];
  visualizationDescription: string; // Extracted specifically for image gen
  
  // Content from "deep_insight" mode
  insightSections: Section[];
  visualExperience: VisualExperience;
  
  detectedLanguage: string;
}

export interface VisualAnalysisData {
  // Content from "photo_analysis" mode
  analysisSections: Section[];
}

export interface SearchState {
  query: string;
  language: Language;
  loading: boolean;
  error: string | null;
  data: HistoricPlaceData | null;
  imageUrl: string | null;
  // Analysis State
  analysisImages: string[]; // Base64 strings
  analysisResult: VisualAnalysisData | null;
  analyzing: boolean;
}

// Augment window for AI Studio
declare global {
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }

  interface Window {
    aistudio?: AIStudio;
    webkitSpeechRecognition?: any;
    SpeechRecognition?: any;
  }
}
