import { Box, Container, Fade, InputBase, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonImg from '../../assets/BtnOff.png';
import ButtonImgOn from '../../assets/BtnOn.png';
import MainBG from '../../assets/Main_Screen.jpeg';
import HunterLogo from '../../assets/logoHunter.png';
import ShieldBG from '../../assets/shield_alucard.png';
import api from '../../services/api';
import '../../styles/global.css';
import './styles.css';

const SignIn = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btnHover, setBtnHover] = useState(false)

    async function handleSubmit() {
        // e.preventDefault();
        console.log('here');
        if (!email || !password) {
            return
        }
        try {
            const response = await api.post('/login', {
                email,
                password,
            });
            console.log(response.data);
            navigate("/main")
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <Box
            className='main-container'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100vh',

                backgroundImage: `url(${MainBG})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Container maxWidth="xs">
                <Fade
                    in={true}
                    timeout={800}
                    sx={{
                        backgroundImage: `url(${ShieldBG})`,
                        backgroundSize: 'cover',
                        backgroundColor: 'transparent',
                        backgroundPosition: 'center',
                    }}
                >
                    <LoginForm onSubmit={handleSubmit}>
                        <Logo src={HunterLogo} alt="Logo da empresa" />
                        <Box sx={{ mb: 3 }}>
                        </Box>
                        <InputBase
                            placeholder='EMAIL'
                            variant="filled"
                            margin="normal"
                            fullWidth
                            type='text'
                            id="email"
                            name="email"
                            autoComplete="email"
                            onChange={(e) => setEmail(e.target.value)}
                            autoFocus
                            sx={{
                                background: '#731010',
                                color: 'yellow !important',
                                width: '200px !important',
                                border: '3px solid black',
                                marginTop: '2px !important',
                                marginBottom: '4px !important',
                                padding: '2px'
                            }}
                        />
                        <InputBase
                            placeholder='SENHA'
                            variant="filled"
                            margin="normal"
                            fullWidth
                            type='text'
                            id="password"
                            name="password"
                            autoComplete="password"
                            onChange={(e) => setPassword(e.target.value)}
                            autoFocus
                            sx={{
                                textAlign: 'center',
                                background: '#731010',
                                color: 'yellow !important',
                                width: '200px !important',
                                border: '3px solid black',
                                marginTop: '2px !important',
                                marginBottom: '4px !important',
                                fontFamily: `'Risque', serif`,
                                padding: '2px'
                            }}
                        />
                        <BTN
                            src={btnHover ? ButtonImgOn : ButtonImg}
                            alt="Logo da empresa"
                            onMouseOver={() => { setBtnHover(true) }}
                            onMouseLeave={() => { setBtnHover(false) }}
                            onClick={() => navigate("/main")}
                        />
                        <Link
                            onClick={() => navigate("/sign-up")}
                            sx={{ cursor: 'pointer', position: 'absolute', bottom: 42, color: '#ffff7b' }}
                            variant="body2"
                        >
                            Não tenho uma conta
                        </Link>
                    </LoginForm>
                </Fade>
            </Container>
        </Box>
    );
};

const Logo = styled('img')(({ theme }) => ({
    width: 180,
    marginBottom: theme.spacing(3),
}));

const BTN = styled('img')(({ theme }) => ({
    width: 110,
    marginTop: '10px',
    "&:hover": {
        transform: 'scale(1.05)',
        opacity: 0.9
    },
    "&:active": {
        transform: 'scale(1)'
    }
}));

const LoginForm = styled('form')(({ theme }) => ({
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: theme.spacing(4),
    borderRadius: theme.spacing(1),
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    height: '500px'
}));

export default SignIn;