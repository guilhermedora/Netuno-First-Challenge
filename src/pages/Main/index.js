import {
    makeStyles,
    Typography
} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Select from '@material-ui/core/Select';
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import Archer from '../../assets/Arqueira/archer-main-img.png';
import Arch from '../../assets/Arqueira/arco.png';
import Xbow from '../../assets/Arqueira/xbow.png';
import PistolImg from '../../assets/Atiradora/pistol.png';
import RifleImg from '../../assets/Atiradora/rifle.png';
import Shooter from '../../assets/Atiradora/shooter-main-img.png';
import Barbariam from '../../assets/Bárbaro/barbariam-main-img.png';
import Axe from '../../assets/Bárbaro/machado.png';
import Hammer from '../../assets/Bárbaro/martelo.png';
import Pergamim from '../../assets/cadBG.png';
import Choice from '../../assets/choice.png';
import SwordShieldImg from '../../assets/Guerreiro/espadaescudo-removebg-preview.png';
import SwordImg from '../../assets/Guerreiro/espadalonga-removebg-preview.png';
import Warrior from '../../assets/Guerreiro/warrior-main-img.png';
import iconArcher from '../../assets/icons/icon-archer-on.png';
import iconBarb from '../../assets/icons/icon-barberiam-on.png';
import iconPaladin from '../../assets/icons/icon-paladin-on.png';
import iconShoot from '../../assets/icons/icon-shooter-on.png';
import iconWar from '../../assets/icons/inco-warrior-on.png';
import Spear from '../../assets/Paladino/lanca.png';
import SpearShield from '../../assets/Paladino/lancaescudo.png';
import Paladin from '../../assets/Paladino/palad-main-img.png';
import SaveBton from '../../assets/save-btn.png';
import BGchar from '../../assets/SelectChar_Screen.jpeg';
import '../../styles/global.css';
import './styles.css';

const ImageRadioButton = ({ value, label, imageUrl, onChange }) => {
    return (
        <FormControlLabel
            sx={{
                alignItems: 'center !important'
            }}
            value={value}
            control={<Radio />}
            label={
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    fontSize: '2rem',
                    color: 'wheat'
                }}
                >
                    <img
                        src={imageUrl}
                        alt={label}
                        style={{ width: '150px', height: '150px', marginRight: '10px' }}
                    />
                    {label}
                </div>
            }
            onChange={onChange}
        />
    );
};

const Header = () => {
    const classes = useStyles();
    const [hero, setHero] = useState('')
    const [infoHero, setInfoHero] = useState({
        img: '',
        text: ''
    })
    const [save, setSave] = useState({})
    const [hairColor, setHairColor] = React.useState('');
    const [skinColor, setSkinColor] = React.useState('');
    const [eyeColor, setEyeColor] = React.useState('');
    const [bodyType, setBodyType] = React.useState('');
    const [race, setRace] = React.useState('');

    const hairColorOptions = ['Preto', 'Loiro', 'Castanho', 'Ruivo'];
    const skinColorOptions = ['Branco', 'Negro', 'Amarelo'];
    const eyeColorOptions = ['Azul', 'Verde', 'Castanho'];
    const bodyTypeOptions = ['Forte', 'Ágil'];
    const raceOptions = ['Vampiro', 'Humano', 'Elfo'];

    const [selectedOption, setSelectedOption] = useState('option1');

    useEffect(() => {
        console.log(save);
    }, [save])

    useEffect(() => {
        if (!hero) return

        if (hero === 'shoot') {
            setInfoHero({
                img: Shooter,
                text: `
                Atiradores são justiceiros incansáveis que executam seus alvos com uma grande variedade de armas de fogoe. Eles se posicionam e miram à distância com seus projéteis e armadilhas mortais para exterminar as criaturas.`,
                weapons: [
                    { name: "Pistola", img: PistolImg },
                    { name: "Rifle", img: RifleImg }
                ]
            })
        } else if (hero === 'war') {
            setInfoHero({
                img: Warrior,
                text: `
                Os Guerreiros são os impassíveis campeões. Como fortalezas vivas, eles usam armaduras de placa impenetráveis e escudos para mergulhar em meio às massas de inimigos, deixando apenas cadáveres vampíricos em seu caminho.
                `,
                weapons: [
                    { name: "Espada Longa", img: SwordImg },
                    { name: "Espada e Escudo", img: SwordShieldImg }
                ]
            })
        } else if (hero === 'palad') {
            setInfoHero({
                img: Paladin,
                text: `
                O Paladino é um guerreiro santo, mas não se engane ele possui poderosas habilidades combativas, tal qual o Guerreiro, porém com algumas habilidades mágicas. Sua destreza com a lança e sua fé inabalável concede poderes únicos.
                `,
                weapons: [
                    { name: "Lança longa", img: Spear },
                    { name: "Lança e Escudo", img: SpearShield }
                ]
            })
        } else if (hero === 'barb') {
            setInfoHero({
                img: Barbariam,
                text: `
                Bárbaros são errantes que nunca hesitam em combates corpo a corpo. Pisadas estrondosas, saltos devastadores e golpes de machado garantem que os inimigos dos bárbaros caiam mortos no chão ou tentem fugir enquanto podem.
                `,
                weapons: [
                    { name: "Martelo", img: Hammer },
                    { name: "Machado", img: Axe }
                ]
            })
        } else if (hero === 'arch') {
            setInfoHero({
                img: Archer,
                text: `
                Arqueiros são hábeis atiradores, e possuem o dom da furtividade, destacando-se pela enorme precisão e rapidez com o arco e flecha. Conseguem abater seus inimigos a longas distâncias, antes mesmo de serem notados.
                `,
                weapons: [
                    { name: "Arco", img: Arch },
                    { name: "X-bow", img: Xbow }
                ]
            })
        }
    }, [hero])

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div
            className={classes.root}
            style={{
                backgroundImage: `url(${BGchar})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
            }}
        >
            <HeaderPage>
                <img src={Choice} style={{ width: '200px', height: '140px' }} alt='Escolha seu Caçador'></img>
            </HeaderPage>
            <CenterPage>
                {!save?.select &&
                    <div style={{
                        display: 'flex',
                        gap: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    >
                        <Icons
                            src={iconShoot}
                            alt='Atirador'
                            onClick={() => setHero("shoot")}
                        />
                        <Icons
                            src={iconWar}
                            alt='Guerreiro'
                            onClick={() => setHero("war")}
                        />
                        <Icons
                            src={iconPaladin}
                            alt='Paladino'
                            onClick={() => setHero("palad")}
                        />
                        <Icons
                            src={iconBarb}
                            alt='Bárbaro'
                            onClick={() => setHero("barb")}
                        />
                        <Icons
                            src={iconArcher}
                            alt='Arqueiro'
                            onClick={() => setHero("arch")}
                        />
                    </div>
                }
                {hero &&
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '50px',
                            width: '100%',
                        }}
                    >
                        <img
                            src={infoHero.img}
                            alt='Escolha do Caçador'
                            style={{
                                height: `${infoHero.text === 'palad' ? '450px' : '400px'}`,
                            }}
                        />
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                backgroundImage: `url(${Pergamim})`,
                                width: '500px',
                                height: '500px',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'bottom',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            {!save?.select &&
                                <Typography
                                    className={classes.text}
                                    fontWeight={'bold'}
                                >
                                    {infoHero.text}
                                </Typography>
                            }
                            {save?.select &&
                                <>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        width: '300px'
                                    }}>
                                        <InputLabel id="hair-color-label">Cor de Cabelo: </InputLabel>
                                        <Select
                                            labelId="hair-color-label"
                                            id="hair-color"
                                            value={hairColor}
                                            onChange={(e) => setHairColor(e.target.value)}
                                            label="Cor de Cabelo"
                                        >
                                            {hairColorOptions.map((option) => (
                                                <MenuItem key={option} value={option}>
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        width: '300px'
                                    }}>
                                        <InputLabel id="skin-color-label">Cor de Pele: </InputLabel>
                                        <Select
                                            labelId="skin-color-label"
                                            id="skin-color"
                                            value={skinColor}
                                            onChange={(e) => setSkinColor(e.target.value)}
                                            label="Cor de Pele"
                                        >
                                            {skinColorOptions.map((option) => (
                                                <MenuItem key={option} value={option}>
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        width: '300px'
                                    }}>
                                        <InputLabel id="body-type-label">Tipo Físico: </InputLabel>
                                        <Select
                                            labelId="body-type-label"
                                            id="body-type"
                                            value={bodyType}
                                            onChange={(e) => setBodyType(e.target.value)}
                                            label="Tipo Físico"
                                        >
                                            {bodyTypeOptions.map((option) => (
                                                <MenuItem key={option} value={option}>
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        width: '300px'
                                    }}>
                                        <InputLabel id="eye-color-label">Cor dos Olhos: </InputLabel>
                                        <Select
                                            labelId="eye-color-label"
                                            id="eye-color"
                                            value={eyeColor}
                                            onChange={(e) => setEyeColor(e.target.value)}
                                            label="Cor dos Olhos"
                                        >
                                            {eyeColorOptions.map((option) => (
                                                <MenuItem key={option} value={option}>
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        width: '300px'
                                    }}>
                                        <InputLabel id="race-label">Raça: </InputLabel>
                                        <Select
                                            labelId="race-label"
                                            id="race"
                                            value={race}
                                            onChange={(e) => setRace(e.target.value)}
                                            label="Raça"
                                        >
                                            {raceOptions.map((option) => (
                                                <MenuItem key={option} value={option}>
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </div>
                                </>
                            }
                            <BTN
                                src={SaveBton}
                                alt='buton'
                                onClick={() => {
                                    if (!save?.select) {
                                        setSave({ ...save, select: hero, weapon: selectedOption })
                                    } else if (!save?.style) {
                                        setSave({
                                            ...save, style: {
                                                hairColor,
                                                skinColor,
                                                eyeColor,
                                                bodyType,
                                                race
                                            }
                                        })
                                    }
                                }}
                            >
                            </BTN>
                        </div>
                        <RadioGroup sx={{}} value={selectedOption} onChange={handleOptionChange} column>
                            {infoHero?.weapons?.map((weapon, index) => (
                                <ImageRadioButton
                                    key={index}
                                    value={weapon.name}
                                    label={weapon.name}
                                    imageUrl={weapon.img}
                                    onChange={handleOptionChange}
                                />
                            ))}
                        </RadioGroup>
                    </div>
                }
            </CenterPage >
            <footerPage></footerPage>
        </div >
    );
}

const HeaderPage = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
}));

const CenterPage = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
}));

// const footerPage = styled('div')(({ theme }) => ({

// }));

const BTN = styled('img')(({ theme }) => ({
    width: 150,
    position: 'absolute',
    bottom: -60,
    "&:hover": {
        opacity: 0.9
    },
    "&:active": {
        transform: 'scale(0.9)'
    }
}));

const Icons = styled('img')(({ theme }) => ({
    width: '70px', height: '70px',
    "&:hover": {
        transform: 'scale(1.1)'
    },
    "&:active": {
        transform: 'scale(1)'
    }
}));

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        backgroundColor: 'black',
        width: '100%',
        height: '100vh',
        marginTop: 0
    },
    text: {
        fontFamily: `'Risque', serif`,
        backgroundColor: '#3639368f !important',
        color: 'wheat !important',
        width: '240px !important',
        height: '326px !important',
        fontSize: '21px !important',
        textAlign: 'center !important'
    }
}));

export default Header;
