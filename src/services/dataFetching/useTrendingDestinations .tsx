import { useState, useEffect } from "react";
import { axiosInstanceWithInterceptors } from "../../services/axiosInstance";

interface TrendingDestination {
  cityId: number;
  cityName: string;
  countryName: string;
  description: string;
  thumbnailUrl: string;
}

const useTrendingDestinations = () => {
  const [trendingDestinations, setTrendingDestinations] = useState<
    TrendingDestination[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getTrendingDestinations = async () => {
      try {
        const response = await axiosInstanceWithInterceptors.get(
          "/api/home/destinations/trending"
        );
        setTrendingDestinations(response.data);
        setError("");
      } catch (error) {
        setError(
          " We're sorry, we couldn't fetch the Trending Destinations. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    getTrendingDestinations();
  }, []);

  return { trendingDestinations, loading, error };
};

export default useTrendingDestinations;
