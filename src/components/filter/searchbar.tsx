import type { FC, FormEvent } from "react"
import ReactSelect from "react-select"
import { selectStyles } from "../../constants"
import { makes } from "../../constants"
import { useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"

const Searchbar: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [make, setMake] = useState<string | null>(
        searchParams.get("make") || null
    );
    const [model, setModel] = useState<string | null>(
        searchParams.get("model") || null
    );

    // Update URL query params based on selected filters
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const params = new URLSearchParams(searchParams);

        if (make) params.set("make", make);
        else params.delete("make");

        if (model) params.set("model", model);
        else params.delete("model");

        if (!params.get("year")) {
            params.delete("year");
        }

        // filter changed → reset page
        params.set("page", "1");
        setSearchParams(params);
    };

    //makes array was converted to the format react-select accepts
    const options = useMemo(
        () => makes.map(make => ({ value: make, label: make })),
        []
    );
    return (
        <form
            onSubmit={handleSubmit}
            className="searchbar flex gap-4 items-start justify-center" >

            {/* Brand */}
            <div className="searchbar-item items-end">
                <div className="w-full flex flex-col z-49">
                    <label className="font-semibold mb-2 text-sm">Brand</label>
                    <ReactSelect
                        options={options}
                        styles={selectStyles}
                        className="text-black"
                        value={make ? { value: make, label: make } : null}
                        onChange={(option) => setMake(option!.value)}
                    />
                </div>
                <button type="submit" className="mb-1 search-btn sm:hidden">
                    <img src="/search.svg" className="size-6" />
                </button>
            </div>

            {/* Model */}
            <div className="searchbar-item items-start flex flex-col">
                <label className="font-semibold mb-2 text-sm">Model</label>
                <div className="w-full flex items-center">
                    <div className="relative flex-1">
                        <img
                            src="/model-icon.png"
                            className="size-6 absolute left-4 top-1/2 -translate-y-1/2 z-1"
                        />
                        <input
                            type="text"
                            placeholder="Enter model..."
                            className="searchbar-input"
                            value={model || ""}
                            onChange={(e) => setModel(e.target.value)}
                        />
                    </div>

                    {/* Submit (desktop) */}
                    <button type="submit" className="mb-1 search-btn">
                        <img src="/search.svg" className="size-6" />
                    </button>
                </div>
            </div>
        </form>

    )
}
export default Searchbar
