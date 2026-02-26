import type { User } from "./types";

export const apiResponse: unknown = [
  { name: "Tony", age: 23 },
  { name: "Kevin", age: 24 },
  { name: "Jim", age: 25 },
];


function isUser(obj: unknown): obj is User {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "name" in obj &&
    typeof (obj as any).name === "string" &&
    "age" in obj &&
    typeof (obj as any).age === "number"
  );
}


export function getUsersData(): User[] {
  if (!Array.isArray(apiResponse)) return [];
  return apiResponse.filter(isUser);
}

export function formatAges(users: User[]): string[] {
  return users.map((u) => {
    const age = typeof u.age === "number" ? u.age : 0;
    return age.toFixed(0);
  });
}

