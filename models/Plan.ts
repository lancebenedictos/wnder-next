import { DocumentReference, Timestamp } from "firebase/firestore";

class Plan {
  private name: string;
  private description?: string;
  private date?: Timestamp;
  private id: string;
  private author: DocumentReference;

  constructor(
    name: string,
    id: string,
    author: DocumentReference,
    description?: string,
    date?: Date
  ) {
    this.name = name;
    this.description = description;
    this.author = author;
    this.id = id;
    if (date) {
      this.date = Timestamp.fromDate(date);
    }
  }
}

export default Plan;
