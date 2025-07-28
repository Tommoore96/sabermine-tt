/**
 * This file isn't really necessary as we're only using it in the web app.
 * But I thought I'd add it anyway to show how we could share types between
 * the packages in more complex projects, such as more custom component
 * libraries or an API.
 */

export interface RegexExpression {
  id: string;
  name: string;
  pattern: string;
  isApproved: boolean;
}
