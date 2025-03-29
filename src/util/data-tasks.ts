export type Status = "todo" | "in progress" | "peer review" | "done";

export type Task = {
  id: number;
  title: string;
  description: string;
  status: Status;
};

export const statuses: Status[] = [
  "todo",
  "in progress",
  "peer review",
  "done",
];
