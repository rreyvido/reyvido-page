import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            IPB School of Vocational Studies
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            D3/Diploma 3
          </h4>

          <p> Informatics Management</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Universitas Terbuka
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>

          <p> Management</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Website Developer - PT Maxxima Innovative ENgineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Condet, Jakarta
          </h4>
          <p>Developed landing page and admin dashboard using PHP and WordPress.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Developer - Beomho Technology Service
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Tebet, Jakarta
          </h4>
          <p>
            Helped the team launch website and SaaS mobile application by working both in the front
            end and back end.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;