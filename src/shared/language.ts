export enum Language {
  English = 'english',
  Spanish = 'spanish',
  French = 'french',
  German = 'german',
  Portuguese = 'portuguese',
  Serbian = 'serbian',
}

export enum LanguageLevel {
  Beginner = 'beginner',
  Intermediate = 'intermediate',
  Advanced = 'advanced',
}

export interface LanguageInfo {
  name: string
  icon: string
}

export const LanguageInfo: Record<Language, LanguageInfo> = {
  [Language.English]: { icon: '🇬🇧', name: 'English' },
  [Language.Spanish]: { icon: '🇪🇸', name: 'Spanish' },
  [Language.French]: { icon: '🇫🇷', name: 'French' },
  [Language.German]: { icon: '🇩🇪', name: 'German' },
  [Language.Portuguese]: { icon: '🇵🇹', name: 'Portuguese' },
  [Language.Serbian]: { icon: '🇷🇸', name: 'Serbian' },
}

export const AllLanguages = Object.keys(LanguageInfo).map((key) => ({
  key,
  ...LanguageInfo[key as Language],
}))
