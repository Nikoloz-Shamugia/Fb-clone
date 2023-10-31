import { useNavigate } from 'react-router-dom';

const SignInModal = () =>{
    const navigate = useNavigate();

    const formStyles = {
        width: '100%',
        padding: '40px 60px',
        backgroundColor: 'whiteSmoke',
        borderRadius: '10px',
        boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)',
        display: 'grid',
        placeItems: 'center'
    };

    const inputStyle = {
        width: '100%',
        height: '30px',
        marginBottom: '5px',
        borderRadius: '10px',
        border: '1px solid grey',
        outline: 'none',
        padding: '0px 0px 0px 10px'
    };

    const buttonStyle = {
        width: '400px',
        height: '40px',
        borderRadius: '10px',
        backgroundColor: 'rgb(31, 53, 255)',
        color: 'white',
        margin: '10px 0',
        textAlign:'center',
        textDecoration:'none'
    };

    const handleRegistration = (event) => {
        event.preventDefault();

        const password = event.target[1].value;
        const email = event.target[0].value;
        const savedEmail = localStorage.getItem('email');
        const savedPassword = localStorage.getItem('password');

        if (savedPassword === password && email === savedEmail) {
            navigate('/main');
        } else {
            alert('user is not registered. try again.');
        }
    };

    return (
        <div style={{ width: '450px' }}>
            <form style={formStyles} onSubmit={handleRegistration}>
                <input
                    style={inputStyle}
                    placeholder="ელფოსტა"
                    type="email"
                    required />
                <input
                    style={inputStyle}
                    placeholder="პაროლი"
                    type="password"
                    required
                    minLength="8"
                    maxLength="22" />
                <button type="submit" style={buttonStyle}>
                    რეგისტრაცია
                </button>
            </form>
        </div>
    )
}

export default SignInModal