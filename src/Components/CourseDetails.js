import React from "react";
import { useParams } from "react-router-dom";
import dummyCourseData from "../DummyCourseData";

function CourseDetails() {
  const { courseId } = useParams();
  const course = dummyCourseData.find((c) => c.id === parseInt(courseId, 10));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="container">
      <h1>Course Details</h1>
      <div className="course-details">
        <h2>{course.name}</h2>
        <p>Instructor: {course.instructor}</p>
        <p>Description: {course.description}</p>
        <p>Enrollment Status: {course.enrollmentStatus}</p>
        <p>Duration: {course.duration}</p>
        <p>Schedule: {course.schedule}</p>
        <p>Location: {course.location}</p>
        <p>Pre-requisites: {course.prerequisites.join(", ")}</p>
        <div>
          <h3>Syllabus</h3>
          <ul>
            {course.syllabus.map((item) => (
              <li key={item.week}>
                <b>Week {item.week}:</b> {item.topic}
                <p>{item.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
