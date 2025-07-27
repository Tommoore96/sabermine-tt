import RegexForm from "./regex-form.js";
import RegexList from "./regex-list.js";

export default function EditMode() {
  return (
    <div className="flex flex-col gap-4">
      <RegexForm />
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold">Regular Expressions</h2>
        <div className="flex flex-col gap-2">
          <RegexList />
        </div>
      </div>
    </div>
  );
}
