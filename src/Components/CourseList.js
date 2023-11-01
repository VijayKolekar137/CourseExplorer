// CourseList.js
import React, { useState } from "react";
import dummyCourseData from "../DummyCourseData";
import "./CourseList.css";

function CourseList() {
  const [courses, setCourses] = useState(dummyCourseData);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="text-center">Course List</h1>
      <div className="course-list">
        <input
          type="text"
          className="search-input"
          placeholder="Search by course name or instructor"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <ul>
          {filteredCourses.map((course) => (
            <li key={course.id} className="course-item">
              <h3>{course.name}</h3>
              <p>Instructor: {course.instructor}</p>
              {/* <button onClick={() => viewCourseDetails(course.id)}> */}
              <button className="btn btn-primary">View Details</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CourseList;
