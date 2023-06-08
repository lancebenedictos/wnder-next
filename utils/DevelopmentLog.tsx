export default function DevLog(...items: any) {
  if (process.env.NODE_ENV === "development") {
    console.log(items);
  }
}
