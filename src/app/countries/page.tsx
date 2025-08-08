"use client";
import { useGetCountriesQuery } from "@/graphql/generated/graphql";

export default function CountriesPage() {
  const { data, loading, error } = useGetCountriesQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Countries</h1>
      <ul className="space-y-1">
        {data?.countries.map((country) => (
          <li key={country.code}>
            {country.name} ({country.code})
          </li>
        ))}
      </ul>
    </div>
  );
}
