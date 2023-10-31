import React from 'react';
import ProfileIcon from "../images/profileIcon.png";

const PostInput = ({ username, handleInputClick}) => {
  const profileStyles = {
    background: 'rgb(34, 33, 33)',
    height: '60px',
    width: "470px",
    borderRadius: '10px',
    boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)',
    padding: '15px 20px'
  };

  const fbInfoStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 0px',
    borderBottom: '2px solid grey'
  };
    const imgStyles = {
        borderRadius :'50%',
        width :'30px' ,
        height :'30px'
    }
    const inputStyle = {
        width :'400px',
        height :'24px' ,
        background :' rgb(51, 51, 51)' ,
        outline :'none' ,
        borderRadius :'15px',
        padding :'0px 0px 0px 15px',
        color :'white'
    }

  return (
    <div style={profileStyles}>
      <div style={fbInfoStyles}>
        <img style={imgStyles} src={ProfileIcon} alt="profile-icon" />
        <input onClick={handleInputClick} style={inputStyle} type="text" placeholder={`${username}, საკუთარ აზრებს ხომ არ გაგვიზიარებდით?`} />
      </div>
    </div>
  );
};

export default PostInput;
