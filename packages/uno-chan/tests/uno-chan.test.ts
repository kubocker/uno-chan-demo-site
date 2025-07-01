import { describe, it, expect } from 'vitest';
import unoChanPreset from '../src/index';

describe('uno-chan preset', () => {
  it('should be a function', () => {
    expect(typeof unoChanPreset).toBe('function');
  });
});
