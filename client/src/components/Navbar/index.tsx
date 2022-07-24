import React, { useEffect } from 'react'
import {
    Container,
    Logo,
    Wrapper,
    Text
} from "./styles"
import logo from "../assets/logo.png"
import { getCountFriends } from '../../functions'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from 'react-router-dom';

interface Props {
    setUpdateData?: any;
}

const Navbar: React.FC<Props> = ({ setUpdateData }) => {
    const [value, setValue] = React.useState<string | null>('');
    const [inputValue, setInputValue] = React.useState('');
    const [countFriends, setCountFriends] = React.useState('');


    useEffect(() => {
        setUpdateData(inputValue);
        setValue(inputValue);
    }, [inputValue, setUpdateData]);


    useEffect(() => {
        setTimeout(() => {
            const returnCount = getCountFriends() || "";
            setCountFriends(returnCount);
        }
            , 500);
    }, []);


    return (
        <>
            <Container>
                <Link to={`dashboard`}>
                    <Logo src={logo} />
                </Link>
                <Text fontSize="1.3em" color="#29ff29">Minha Rede Social</Text>
                <Autocomplete
                    value={value}
                    onChange={(event: any, newValue: string | null) => {
                        setValue(newValue);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                    }}
                    id="controllable-states-demo"
                    options={['""']}
                    sx={{ width: '40%', backgroundColor: 'white' }}
                    renderInput={(params) => <TextField {...params} label="Pesquise pelo nome..." />}
                />
                <Wrapper>
                    <Wrapper>
                        <Text fontSize="1.3em">Total de amigos:
                            <Text color="#ff9900"> {countFriends}
                            </Text>
                        </Text>
                    </Wrapper>
                </Wrapper>
            </Container>
        </>
    )
}

export default Navbar