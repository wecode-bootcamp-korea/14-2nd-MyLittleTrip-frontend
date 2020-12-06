import React, { useState, useEffect, useRef } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
import { useClickOutside } from "../../Hooks/clickOutside";
import "react-datepicker/dist/react-datepicker.css";
import "./customStyle.scss";

registerLocale("ko", ko);

const Calendar = (props) => {
  const [startDate, setStartDate] = useState(props.startDate);
  const [endDate, setEndDate] = useState(null);
  const calendarRef = useRef(null);

  const handleChange = ([startDate, endDate]) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const handleSubmitClick = () => {
    props.handleSubmitClick(startDate, endDate);
    props.closeCalendar();
  };

  useClickOutside(calendarRef, props.closeCalendar);

  useEffect(() => {
    if (props.startDate) setStartDate(props.startDate);
    if (props.endDate) setEndDate(props.endDate);
  }, [props.startDate, props.endDate]);

  const MyContainer = ({ className, children }) => {
    return (
      <div
        ref={calendarRef}
        className="calendarContainer"
        style={{
          position: "absolute",
          backgroundColor: "white",
          padding: "8px",
          top: "50px",
          left: "0",
        }}>
        <div className="overallCalendarContainer" style={{ display: "flex", position: "relative" }}>
          {children}
        </div>
        <div className="submitContainer">
          <button className="submitButton" onClick={handleSubmitClick}>
            적용
          </button>
        </div>
      </div>
    );
  };

  return (
    <DatePicker
      locale="ko"
      selected={startDate}
      onChange={handleChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      shouldCloseOnSelect={false}
      monthsShown={2}
      calendarContainer={MyContainer}
      inline
      minDate={new Date()}
      calendarClassName="datePicker"
      className="calendarInput"
      dateFormatCalendar="yyyy. MM"
    />
  );
};

export default Calendar;
