
import React, { useState } from "react";
import { siteContent } from "../data";
import CategoryTabs from "./CategoryTabs";

const CourseSection = () => {
  const { courseSection, categories } = siteContent;
  const [activeTab, setActiveTab] = useState(courseSection.tabs[0].id);
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const filteredCourses = courseSection.courses.filter(
    (c) => c.tabId === activeTab && c.categoryId === activeCategory
  );

  return (
    <section className="course-section">
      <div className="container">
        <h2 className="section-title">{courseSection.heading}</h2>
        <p className="section-subtitle">{courseSection.subheading}</p>

        <div className="tabs-row">
          <span className="tabs-label">{courseSection.tabsLabel}</span>
          <div className="tabs">
            {courseSection.tabs.map((tab) => (
              <button
                key={tab.id}
                className={
                  "tab-btn" + (tab.id === activeTab ? " tab-btn-active" : "")
                }
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <CategoryTabs
          activeCategoryId={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="course-card-container">
          {filteredCourses.length === 0 && (
            <p className="no-courses-msg">
              No courses for this combination yet. (Dummy data!)
            </p>
          )}

          {filteredCourses.map((course) => (
            <article key={course.id} className="course-card">
              <div className="course-thumbnail">
                <div className="thumb-placeholder">Course image</div>
              </div>
              <div className="course-body">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-instructor">{course.instructor}</p>

                <div className="course-rating-row">
                  <span className="course-rating">
                    {course.rating.toFixed(1)}
                  </span>
                  <span className="course-stars">★★★★★</span>
                  <span className="course-rating-count">
                    ({course.ratingCount.toLocaleString()})
                  </span>
                </div>

                <div className="course-meta">
                  <span>{course.hours} total hours</span>
                  <span>• {course.lectures} lectures</span>
                  <span>• {course.level}</span>
                </div>

                <div className="course-footer">
                  <span className="course-price">{course.price}</span>
                  {course.badge && (
                    <span className="course-badge">{course.badge}</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
