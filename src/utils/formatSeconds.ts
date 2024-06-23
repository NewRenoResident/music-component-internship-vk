export function formatSeconds(seconds: number): string {
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const mass: string[] = [];
  mass.push(mins.toString().padStart(1, "0"), secs.toString().padStart(2, "0"));
  return mass.join(":");
}
