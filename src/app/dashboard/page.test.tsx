"use client";
import React from "react";
import { handleGetRequest } from "@/services/httpService";
import { render } from "../../../test-utills";
import Dashboard from "./page";
import { DashboardResData } from "./_interface";

jest.mock("@/services/httpService");

const dashboardData: DashboardResData = {
  graph_data: {
    views: {
      "2022-07-31": 1,
      "2022-08-01": 3,
      "2022-08-02": 3,
      "2022-08-03": 7,
    },
  },
  top_locations: [
    {
      country: "Nigeria",
      count: 68,
      percent: 34,
    },
    {
      country: "Germany",
      count: 37,
      percent: 19,
    },
    {
      country: "Ghana",
      count: 50,
      percent: 25,
    },
  ],
  top_sources: [
    {
      source: "google",
      count: 50,
      percent: 25,
    },
    {
      source: "instagram",
      count: 68,
      percent: 34,
    },
  ],
};

describe("Dashboard page", () => {
  const mockGetRequest = handleGetRequest as jest.Mock;
  beforeEach(() => {
    mockGetRequest.mockImplementation(() => dashboardData);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("Renders the dashboard page", () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText("Dashboard")).toBeInTheDocument();
  });
});
