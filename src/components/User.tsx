const User = ({ name, age, isStudent }: { name: string; age: number; isStudent: boolean }) => {
    return (
      <div>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <h5>{isStudent ? "Student" : "Not a Student"}</h5>
      </div>
    );
  };
  
  export default User;