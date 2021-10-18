import React, { Component } from 'react';
import { ReactComponent as BookIcon } from "../../assets/icons/book.svg"
import { ReactComponent as Geometry} from "../../assets/graphics/graphic-math-1.svg"
import { Graphics } from '../../styles/graphics';
import './SubjectBook.scss'
import { formatClassroomName } from '../../services/util.services';

const SubjectBook = (props) => {
  const Graphic = Graphics[props.graphic] || Geometry;
  
  return (
    <div
      className={`subject-container ${props.clickable ? "clickable-action" : null}`}
      style={props.style}
      onClick={props.onClick}
    >
      <div className="subject-content">
        <Graphic className="graphic" alt="graphic" />
        <div className="classroom-name">{props.standard ? formatClassroomName(props.standard, props.section) : null}</div>
        <div className="name">{props.name}</div>
      </div>
      <BookIcon fill={props.color || "#19a886"} className="book-image" />
    </div>
  );
};

export default SubjectBook;
