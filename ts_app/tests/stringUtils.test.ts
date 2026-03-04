
import { describe, it, expect } from 'vitest'
import { isPalindrome } from '../src/stringUtils'

// TODO: completa los casos: "radar"->true, "anita lava la tina"->true, "python"->false, ""->true, "Radar"->true

describe('siembra', () => {
  it('ejemplo', () => {
    expect(true).toBe(true)
  })
})

describe('isPalindrome', () => {
  it('isPalindrome radar', () => {
    expect(isPalindrome('radar')).toBe(true);
  });

  it('isPalindrome Radar', () => {
    expect(isPalindrome('Radar')).toBe(true);
  });

  it('isPalindrome anita lava la tina', () => {
    expect(isPalindrome('anita lava la tina')).toBe(true);
  });

  it('isPalindrome python', () => {
    expect(isPalindrome('python')).toBe(false);
  });

  it('isPalindrome empty', () => {
    expect(isPalindrome('')).toBe(true);
  });
});
