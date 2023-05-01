import { createBrowserRouter } from "react-router-dom";
import GeneralLayout from "../common/layouts/GeneralLayout";
import NavigationLayout from "../common/layouts/NavigationLayout";
import ListUsersView from "../modules/users/views/ListUsersView";
import ListLessonsView from "../modules/lessons/view/ListLessonsView";
import StatisticsView from "../modules/statistics/views/StatisticsView";
import NonAuthGuardLayout from "../common/layouts/NonAuthGuardLayout";
import LoginView from "../modules/auth/view/LoginView";
import AuthGuardLayout from "../common/layouts/AuthGuardLayout";
import ListLessonDetails from "../modules/lessonsDetails/view/ListLessonDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GeneralLayout />,
    children: [
      {
        path: "auth",
        element: <NonAuthGuardLayout />,
        children: [
          {
            path: "login",
            element: <LoginView />,
          },
        ],
      },
      {
        path: "/",
        element: <AuthGuardLayout />,
        children: [
          {
            path: "/",
            element: <NavigationLayout />,
            children: [
              {
                path: "/",
                element: <StatisticsView />,
              },
              {
                path: "/lessons",
                element: <ListLessonsView />,
              },
              {
                path: "/lessons/:id",
                element: <ListLessonDetails />,
              },
              {
                path: "/users",
                element: <ListUsersView />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
