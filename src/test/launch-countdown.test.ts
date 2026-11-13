import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { describe, expect, it } from 'vitest';
const sandbox: { SanghLaunch?: { start: number; target: number; remaining: (now: number) => Record<string, number> } } = {};
runInNewContext(readFileSync('public/launching-soon/launch.js', 'utf8'), sandbox);
const launch = sandbox.SanghLaunch;
if (!launch) throw new Error('Countdown not initialized');
describe('launch countdown', () => {
  it('targets exactly 30 days from the agreed starting time', () => {
    expect(launch.target - launch.start).toBe(30 * 24 * 60 * 60 * 1000);
    expect(new Date(launch.target).toISOString()).toBe('2026-12-13T08:38:00.000Z');
    expect(launch.remaining(launch.start)).toEqual({ days: 30, hours: 0, minutes: 0, seconds: 0 });
  });
  it('stops at zero instead of wrapping or showing negative values', () => {
    expect(launch.remaining(launch.target + 1000)).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });
});
