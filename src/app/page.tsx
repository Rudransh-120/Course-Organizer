import TreeView from "./components/TreeView";

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Lecture Navigation</h1>
      <TreeView />
    </main>
  );
}