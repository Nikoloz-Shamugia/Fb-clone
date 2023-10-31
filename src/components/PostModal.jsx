import XIcon from "../images/xIcon.png"

const PostModal = ({ isModalVisible, handleXIconClick, value, handleInputChange, handleClick, username }) => {
    const modalWrapper = {
        width: '100%',
        height: '100vh',
        background: 'rgba(201, 196, 196, 0.345)',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: isModalVisible ? 'grid' : 'none',
        placeItems: 'center'
    };

    const modalDiv = {
        width: '420px',
        height: '580px',
        background: 'rgb(167, 167, 167)',
        display: 'grid',
        borderRadius: '15px',
        padding: '20px 30px',
        placeItems: 'center',
    };

    const closeIcon = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    };

    const textStyle = {
        width: '410px',
        height: '200px',
        outline: 'none',
        overflowY: 'auto',
        border: 'none',
        background: 'rgb(198, 194, 194)',
        borderRadius: '10px',
        padding: '10px',
        resize: 'none'
    };

    const buttonStyle = {
        width: '90px',
        height: '45px',
        borderRadius: '10px',
        margin: '10px 0'
    };

    return (
        <div style={modalWrapper}>
            <div style={modalDiv}>
                <div style={closeIcon}>
                    <h3>create post</h3>
                    <button onClick={handleXIconClick}>
                        <img style={{ height: '20px', width: '20px' }} src={XIcon} alt="icon" />
                    </button>
                </div>
                <div>
                    <textarea
                        value={value}
                        onChange={handleInputChange}
                        style={textStyle}
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder={`What's on your mind, ${username}?`}
                    ></textarea>
                </div>
                <button onClick={handleClick} style={buttonStyle}>
                    Post
                </button>
            </div>
        </div>
    );
};

export default PostModal;
