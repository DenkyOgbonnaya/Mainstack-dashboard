"use client";
import { DashboardResData } from "@/app/dashboard/_interface";
import { getDashboardData } from "@/app/dashboard/_service";
import { useEffect, useState } from "react";

const useDashboardData = () => {
  const [data, setData] = useState<DashboardResData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);

      try {
        if (mounted) {
          const data = await getDashboardData();
          setData(data);
        }
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
    () => {
      mounted = false;
    };
  }, []);

  return { data, loading, error };
};

export default useDashboardData;
