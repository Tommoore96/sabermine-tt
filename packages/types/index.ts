export interface RegexExpression {
  id: string;
  name: string;
  pattern: string;
  isApproved: boolean;
}

export interface RegexMatch {
  text: string;
  startIndex: number;
  endIndex: number;
  groups?: string[]; // Captured groups from the regex pattern (e.g., parentheses groups)
}

export interface ExtractionResult {
  extractionId: string;
  matches: RegexMatch[];
}
