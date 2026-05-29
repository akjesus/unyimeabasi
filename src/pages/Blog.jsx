import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Blog() {
  useDocumentTitle("Blog | UnyimeAbasi");
  return (
    <div className="pt-40 pb-24 text-center">
      <h1 className="text-5xl font-bold">Blog Page</h1>
    </div>
  );
}
