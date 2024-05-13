import { useState } from 'react';

const PersonalInfo = (props) => {
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    phone: ""
  });

  //Full Name
  const inputChangeFullName = (e) => {
    setUserInfo(prevInfo => ({ ...prevInfo, fullName: e.target.value }));
    props.onChange({...userInfo, fullName : e.target.value});
  };

  //Email
  const inputChangeEmail = (e) => {
    setUserInfo(prevInfo => ({ ...prevInfo, email: e.target.value }));
    props.onChange({...userInfo, email : e.target.value});
  };

  //Phone
  const inputChangePhone = (e) => {
    setUserInfo(prevInfo => ({ ...prevInfo, phone: e.target.value }));
    props.onChange({...userInfo, phone : e.target.value});
  };

  return (
    <div className="personal-info">
      <h2>Personal Information</h2>

      <form className='cv'>
        <label htmlFor='fullName'>Full Name: </label>
        <input type='text' id='fullName' name='fullName' value={userInfo.fullName} onChange={inputChangeFullName} /><br />

        <label htmlFor='email'>Email: </label>
        <input type='email' id='email' name='email' value={userInfo.email} onChange={inputChangeEmail} /><br />

        <label htmlFor='phone'>Phone: </label>
        <input type='text' id='phone' name='phone' value={userInfo.phone} onChange={inputChangePhone} />
      </form>

    
    </div>
  );
}

export default PersonalInfo;
