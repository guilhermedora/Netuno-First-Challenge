import { Box, Container, Fade, InputBase, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonImg from '../../assets/BtnOff.png';
import ButtonImgOn from '../../assets/BtnOn.png';
import MainBG from '../../assets/Main_Screen.jpeg';
import CadBG from '../../assets/cadBG.png';
import api from '../../services/api';
import '../../styles/global.css';
import './styles.css';

const SignUp = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState({
        day: '',
        month: '',
        year: ''
    });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
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
            <Container maxWidth="xs" sx={{ maxHeight: '90vh' }}>
                <Fade
                    in={true}
                    timeout={800}
                    sx={{
                        backgroundImage: `url(${CadBG})`,
                        backgroundSize: 'cover',
                        backgroundColor: 'transparent',
                        backgroundPosition: 'center',
                    }}
                >
                    <LoginForm onSubmit={handleSubmit}>
                        <Box sx={{ mb: 3 }}>
                        </Box>
                        <InputBase
                            placeholder='NOME'
                            variant="filled"
                            margin="normal"
                            fullWidth
                            type='text'
                            id="name"
                            name="name"
                            autoComplete="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoFocus
                            sx={{
                                background: '#731010',
                                color: 'yellow !important',
                                width: 200,
                                border: '3px solid black',
                                marginTop: '2px !important',
                                marginBottom: '4px !important',
                                padding: '2px'
                            }}
                        />
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
                                width: 200,
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoFocus
                            sx={{
                                textAlign: 'center',
                                background: '#731010',
                                color: 'yellow !important',
                                width: 200,
                                border: '3px solid black',
                                marginTop: '2px !important',
                                marginBottom: '4px !important',
                                fontFamily: `'Risque', serif`,
                                padding: '2px'
                            }}
                        />
                        <InputBase
                            placeholder='CONFIRMAR SENHA'
                            variant="filled"
                            margin="normal"
                            fullWidth
                            type='text'
                            id="cpassword"
                            name="cpassword"
                            autoComplete="cpassword"
                            value={cpassword}
                            onChange={(e) => setCPassword(e.target.value)}
                            autoFocus
                            sx={{
                                textAlign: 'center',
                                background: '#731010',
                                color: 'yellow !important',
                                width: 200,
                                border: '3px solid black',
                                marginTop: '2px !important',
                                marginBottom: '25px !important',
                                fontFamily: `'Risque', serif`,
                                padding: '2px'
                            }}
                        />
                        <Typography
                            sx={{
                                textTransform: 'uppercase',
                                fontFamily: `'Risque', serif`,
                                color: '#cc3d3d',
                                fontSize: '30px',
                                "-webkit-text-stroke": "1px #313030bf"
                            }}
                            component="h1"
                            variant="h5"
                            color={'#ffff7b'}
                            fontWeight={'bold'}
                        >
                            DATA DE NASCIMENTO
                        </Typography>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '2px'
                        }}>
                            <InputBase
                                placeholder='DIA'
                                variant="filled"
                                margin="normal"
                                fullWidth
                                type='number'
                                id="day"
                                name="day"
                                autoComplete="day"
                                InputProps={{
                                    readOnly: true,
                                }}
                                onChange={(e) => setBirthday({ ...birthday, day: e.target.value })}
                                autoFocus
                                sx={{
                                    background: '#731010',
                                    color: 'yellow !important',
                                    border: '3px solid black',
                                    marginTop: '2px !important',
                                    marginBottom: '4px !important',
                                    padding: '2px'
                                }}
                            />
                            <InputBase
                                placeholder='MÊS'
                                variant="filled"
                                margin="normal"
                                fullWidth
                                type='number'
                                id="month"
                                name="month"
                                autoComplete="month"
                                InputProps={{
                                    readOnly: true,
                                }}
                                onChange={(e) => setBirthday({ ...birthday, month: e.target.value })}
                                autoFocus
                                sx={{
                                    background: '#731010',
                                    color: 'yellow !important',
                                    border: '3px solid black',
                                    marginTop: '2px !important',
                                    marginBottom: '4px !important',
                                    padding: '2px'
                                }}
                            />
                            <InputBase
                                placeholder='ANO'
                                variant="filled"
                                margin="normal"
                                fullWidth
                                type='number'
                                id="year"
                                name="year"
                                autoComplete="year"
                                InputProps={{
                                    readOnly: true,
                                }}
                                onChange={(e) => setBirthday({ ...birthday, year: e.target.value })}
                                autoFocus
                                sx={{
                                    background: '#731010',
                                    color: 'yellow !important',
                                    border: '3px solid black',
                                    marginTop: '2px !important',
                                    marginBottom: '4px !important',
                                    padding: '2px'
                                }}
                            />
                        </div>
                        <BTN
                            src={btnHover ? ButtonImgOn : ButtonImg}
                            alt="Logo da empresa"
                            onMouseOver={() => { setBtnHover(true) }}
                            onMouseLeave={() => { setBtnHover(false) }}
                            onClick={() => navigate("/")}
                        />s
                    </LoginForm>
                </Fade>
            </Container>
        </Box>
    );
};

// const Logo = styled('img')(({ theme }) => ({
//     width: 180,
//     marginBottom: theme.spacing(3),
// }));

const BTN = styled('img')(({ theme }) => ({
    width: 110,
    marginTop: '15px',
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

export default SignUp;