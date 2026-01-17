import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCourseData } from "./Store/appSlice";

export function useGetCourseData() {
  const dispatch = useDispatch();
  const courseData = useSelector((store) => store.app.courses);

  async function getData() {
    if (courseData.length !== 0) return; // this means we have data which is fetched earlier
    console.log("api called");
    let apiData = await fetch(
      `https://mocki.io/v1/4817fde2-247c-4695-9a85-3913874ded08`,
    );
    let jsonData = await apiData.json();
    dispatch(setCourseData(jsonData));
  }
  useEffect(() => {
    getData();
  }, []);
  return courseData;
}
