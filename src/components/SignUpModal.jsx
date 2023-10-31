import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignUpModal = () =>{
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
        const confirmPassword = event.target[4].value;

        if (password === confirmPassword) {
            const email = event.target[0].value;
            const username = event.target[2].value;
            const lastName = event.target[3].value;

            localStorage.setItem('email', email);
            localStorage.setItem('username', username);
            localStorage.setItem('lastName', lastName);
            localStorage.setItem('password', password);

            alert('Registration successful. Data saved in localStorage.');

            navigate('/main');
        } else {
            alert('Passwords do not match. Please re-enter.');
        }
    };

    return(
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
                <input
                    style={inputStyle}
                    placeholder="სახელი"
                    type="text"
                    required />
                <input
                    style={inputStyle}
                    placeholder="გვარი"
                    type="text"
                    required />
                <input
                    style={inputStyle}
                    placeholder="გაიმეორეთ პაროლი"
                    type="password"
                    required
                    minLength="8"
                    maxLength="22" />
                <button type="submit" style={buttonStyle}>
                    რეგისტრაცია
                </button>
                <Link to='/signin'
                    style={{ ...buttonStyle, width: '320px', backgroundColor: 'green' }}
                >
                    გაქვთ უკვე ექაუნთი?
                </Link>
            </form>
        </div>
    )
}
export default SignUpModal