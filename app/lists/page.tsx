import useDatabases from "@/hooks/useData";

export default function SpellingLists() {
  const documents = useDatabases();
  return (
    <div>
      <h1>All Spelling Lists</h1>
    </div>
  );
}
