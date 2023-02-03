export type ValueLabel<T> = {
  value: T;
  label: string;
};

export type AnalyticsContext = {
  category: string;
};

export interface TranslatedString {
  en: string;
  uk: string;
}
