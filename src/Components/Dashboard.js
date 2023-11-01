import React, { useState } from "react";
import dummyCourseData from "../DummyCourseData";
import "./Dashboard.css";

const Dashboard = () => {
  const [courses, setCourses] = useState(dummyCourseData);

  const markAsComplete = (courseId) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId ? { ...course, completed: true } : course
      )
    );
  };

  return (
    <div className="student-dashboard">
      <h1>Student Dashboard</h1>
      <div className="courses-list">
        {courses.map((course) => (
          <div key={course.id} className="course">
            <h2>{course.name}</h2>
            <p>Instructor: {course.instructor}</p>
            <img src={course.thumbnail} alt={course.name} />
            <p>Due Date: {course.dueDate}</p>
            <progress value={course.percentageCompleted} max={100} />
            {!course.completed ? (
              <button onClick={() => markAsComplete(course.id)}>
                Mark as Complete
              </button>
            ) : (
              <p>Completed</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
