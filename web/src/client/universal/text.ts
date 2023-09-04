export function inflect(
  singular: string,
  plural: string,
  count: number,
): string {
  if (count === 0) return plural;
  if (count === 1) return singular;
  return plural;
}
