export function normalizePostId(id: string): string {
  return normalizeText(id);
}

export function normalizeText(value: string): string {
  return value.trim().toLowerCase();
}

export function normalizeTag(tag: string): string {
  return tag.trim().replace(/\s+/g, " ");
}

export function parseTags(input: string): string[] {
  return input
    .split(",")
    .map(normalizeTag)
    .filter(Boolean);
}