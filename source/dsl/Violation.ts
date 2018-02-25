/**
 * The result of user doing warn, message or fail, built this way for
 * expansion later.
 */
export interface Violation {
  /**
   * The string representation
   *
   * @type {string}
   */
  message: string
  file?: string
  line?: number
}

export function isInline(violation: Violation): boolean {
  return violation.file !== undefined || violation.line !== undefined
}
