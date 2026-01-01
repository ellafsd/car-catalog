import { useState, type FC, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";

const Year: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [year, setYear] = useState<string | null>(
    searchParams.get("year") || null
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);

  //   if (year) {
  //     searchParams.set("year", year);
  //   }
  //   setSearchParams(searchParams);
  // }

    if (year && year.trim() !== "") {
      params.set("year", year);
    } else {
      params.delete("year");  //if year is removed, remove it from the URL too
    }
    // filter change → Reset to page 1
     //params.set("page", "1");
    //  Update URL with new params
    setSearchParams(params);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label
        className="text-white font-semibold mb-2 text-sm">
        Year
      </label>

      <div className="flex items-center">
        <input
          type="number"
          value={year || ""}
          onChange={(e) => setYear(e.target.value)}
          className="w-32 rounded-l-2xl input-bg"
        />

        <button className="input-bg rounded-r-2xl cursor-pointer" >
          <img src="/search.svg" className="size-5" />
        </button>

      </div>
    </form>
  );
};
export default Year;