import RegexForm from "./regex-form";
import RegexList from "./regex-list";

export default function EditMode() {
  return (
    <div className="flex flex-col gap-4">
      <RegexForm />
      <div className="flex flex-col gap-2">
        <RegexList />
      </div>
    </div>
  );
}
