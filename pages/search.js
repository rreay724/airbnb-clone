import { useRouter } from "next/dist/client/router";
import { Header, Footer, InfoCard } from "../components/index";
import { format } from "date-fns";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "MMMM dd, yyyy");
  const formattedEndDate = format(new Date(endDate), "MMMM dd, yyyy");
  const range = `${formattedStartDate} to ${formattedEndDate}`;

  return (
    <div className="h-screen">
      <Header
        placeholder={`${location} | ${range} | Guests: ${numberOfGuests}`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            {numberOfGuests > 1
              ? `300+ Stays from ${range} for ${numberOfGuests} guests`
              : `300+ stays from ${range} for 1 guest`}
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          {/* button classname is custom utility in styles/global.css */}
          {/* whitespace no wrap will prevent text from wrapping under in button */}
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <button className="button">Cancellation Flexibility</button>
            <button className="button">Type of place</button>
            <button className="button">Price</button>
            <button className="button">Rooms and Beds</button>
            <button className="button">More filters</button>
          </div>
          <div className="flex flex-col">
            {searchResults.map(
              ({
                id,
                img,
                location,
                title,
                description,
                star,
                price,
                total,
              }) => (
                <InfoCard
                  key={id}
                  location={location}
                  img={img}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://jsonkeeper.com/b/QRIR").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
