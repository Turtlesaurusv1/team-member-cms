
import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";

const Employee = ({employee,selectedTeam,handleTeamSelected,handleEmployeeCard}) => {

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <select
            className="form-select form-select-pg"
            value={selectedTeam}
            onChange={handleTeamSelected}
          >
            
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {employee.map((employee) => (
              <div
                id={employee.id}
                className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')}
                style={{ cursor: "pointer" }}
                onClick={handleEmployeeCard}
              >
                {employee.gender === "male" ? (
                  <img src={maleProfile} className="card-image-top"alt="male" />
                ) : (
                  <img src={femaleProfile} className="card-image-top" alt="female" />
                )}
                <div className="card-body">
                  <h5 className="card-title">Full Name: {employee.fullName}</h5>
                  <p className="card-text">
                    Destination: {employee.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employee;
