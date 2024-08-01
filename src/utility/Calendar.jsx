import claendarImg from "../assets/Images/clarity_calendar-line.svg";
import "./Calendar.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const Calendar = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div>
      <div className="headerSearchItem">
        {/* <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" /> */}
        <img src={claendarImg} alt="" className="calenderImg" />
        <div className="leavingNow">
          <p className="datetext">Leaving on</p>
          <span
            onClick={() => setOpenDate(!openDate)}
            className="dateMonth"
          >{`${format(date[0].startDate, "MMMM")} `}</span>

          <span
            onClick={() => setOpenDate(!openDate)}
            className="dateDay"
          >{`${format(date[0].startDate, "dd")} `}</span>
          <span
            onClick={() => setOpenDate(!openDate)}
            className="dateTextDay"
          >{`${format(date[0].startDate, "eeee")} `}</span>
        </div>

        <div className="returningNow">
          <p className="datetext">Returning on</p>
          <span
            onClick={() => setOpenDate(!openDate)}
            className="dateMonth"
          >{`${format(date[0].endDate, "MMMM")} `}</span>

          <span
            onClick={() => setOpenDate(!openDate)}
            className="dateDay"
          >{`${format(date[0].endDate, "dd")} `}</span>
          <span
            onClick={() => setOpenDate(!openDate)}
            className="dateTextDay"
          >{`${format(date[0].endDate, "eeee")} `}</span>
        </div>

        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            months={2}
            className="date"
            direction="horizontal"
          />
        )}
      </div>
    </div>
  );
};

export default Calendar;
