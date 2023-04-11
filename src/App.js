import "./App.css";
import Header from "./header";
import Footer from "./footer";
import Employee from "./emplyees";
import { useState } from "react";

function App() {
  const [employee, setEmployee] = useState([
    {
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA",
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB",
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC",
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD",
    },
  ]);

  // declare selectedTeam state with initial value
  const [selectedTeam, setSelectedTeam] = useState("TeamB");

  // handler for team selection change
  function handleTeamSelected(event) {
    setSelectedTeam(event.target.value);
  }

  // handler for employee card click
  function handleEmployeeCard(event) {
    const transformed = employee.map((emp) =>
      emp.id === parseInt(event.currentTarget.id)
        ? emp.teamName === selectedTeam
          ? // toggle between team assignments
            { ...emp, teamName: "" }
          : { ...emp, teamName: selectedTeam }
        : emp
    );
    setEmployee(transformed);
  }

  return (
    <div>
      <Header selectedTeam={selectedTeam}
              teamMemberCount={employee.filter((emp) => emp.teamName === selectedTeam).length}
      />
      <Employee
        employee={employee}
        selectedTeam={selectedTeam}
        handleTeamSelected={handleTeamSelected}
        handleEmployeeCard={handleEmployeeCard}
      />
      <Footer />
    </div>
  );
}

export default App;
