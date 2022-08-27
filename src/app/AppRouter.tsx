import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, VideoDetailsPage } from "./pages";

export default function AppRouter() {
  const LoadingMessage = () => <div>Loading..,</div>;

  const routerComponentMapper = [
    {
      path: "/details",
      component: VideoDetailsPage,
    },
  ];

  return (
    <Suspense fallback={<LoadingMessage />}>
      <Routes>
        <Route path="/" element={<Home />} />

        {routerComponentMapper.map((SingleRoute, index) => (
          <Route
            path={SingleRoute.path}
            key={index}
            element={<SingleRoute.component />}
          />
        ))}
      </Routes>
    </Suspense>
  );
}
