import RegexForm from "./forms/regex";
import RegexList from "./regex-list";

export default function EditMode() {
  return (
    <div className="flex flex-col gap-4">
      <RegexForm defaultValues={{ name: "", regex: "" }} />
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold">Regular Expressions</h2>
        <div className="flex flex-col gap-2">
          <RegexList />
        </div>
      </div>
    </div>
  );
}
