
import type { FC } from "react"
import Searchbar from "./searchbar"
import Year from "./year"
import { useSearchParams } from "react-router-dom";

const Filter: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="mt-20 padding-x padding-y max-width">

      <div className="home-text-container">
        <h1 className="text-5xl font-bold text-gradient mb-2">
          Car Catalog
        </h1>
        <p className="text-xl text-grey-light">
          Explore vehicles you'll love
        </p>
      </div>
      <div className="home-filters items-center">
        <Searchbar />

        <div className="home-filter-container">
          <Year />
        </div>

      </div>

    </div>
  )
}

export default Filter
