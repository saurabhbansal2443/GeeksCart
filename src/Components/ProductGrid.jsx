import React from "react";
import { useGetCourseData } from "../Hooks";
const ProductGrid = () => {
  const courseData = useGetCourseData();
  console.log(courseData);
  return <div></div>;
};

export default ProductGrid;
