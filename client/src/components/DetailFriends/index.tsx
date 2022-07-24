import { useQuery } from "@apollo/client";
import { Card, Stack, Grid, Container, Avatar, Typography } from "@mui/material";
import { DASHBOARD_QUERY } from '../../graphql/DashboardQuery';
import { styled } from "@mui/material/styles"
import { Text } from "./styles";
import { setCountFriends } from "../../functions";
import { Link, useParams } from "react-router-dom";

const SectionStyle = styled(Card)(({ theme }) => ({
    borderRadius: 5,
    marginBottom: 3,
    border: 2,
    borderWidth: 20,
    padding: 5,
    margin: 20,
    minWidth: 250,
    minHeight: 250,
}))

interface Props {
    setUpdateData?: any;
    search?: string,
}

function DetailFriends({ setUpdateData, search }: Props) {
    const { name } = useParams();
    const { data: getDataUsers } = useQuery(DASHBOARD_QUERY, { variables: { name: name } });
    setCountFriends(getDataUsers?.list[0]?.friends.length ? getDataUsers?.list[0]?.friends.length : 0);

    console.log(getDataUsers?.list[0])

    return (
        <Container maxWidth="xl">

            <Stack flexDirection={"row"} sx={{ m: 4 }}>
                <Stack flexDirection={"row"} justifyContent={'center'} >
                    <Link to={`/dashboard`}>
                        <Avatar
                            alt={getDataUsers?.list[0]?.name}
                            src={getDataUsers?.list[0].picture}
                            sx={{ width: 120, height: 120, mr: 3 }}
                        />
                    </Link>
                    <Stack flexDirection={"column"} sx={{ mt: 2 }}>
                        <Text fontSize="0.8em" color="navy">
                            <Text fontSize="1em" color="#000"> Name: </Text>
                            {getDataUsers?.list[0]?.name}
                        </Text>
                        <Text fontSize="0.8em" color="navy">
                            <Text fontSize="1em" color="#000"> Age: </Text>
                            {getDataUsers?.list[0]?.age}
                        </Text>
                        <Text fontSize="0.8em" color="navy">
                            <Text fontSize="1em" color="#000"> Eye color: </Text>
                            {getDataUsers?.list[0]?.eyeColor}
                        </Text>
                        <Text fontSize="0.8em" color="navy">
                            <Text fontSize="1em" color="#000"> Company: </Text>
                            {getDataUsers?.list[0]?.company}
                        </Text>
                        <Text fontSize="0.8em" color="navy">
                            <Text fontSize="1em" color="#000"> email: </Text>
                            {getDataUsers?.list[0]?.email}
                        </Text>
                    </Stack>
                </Stack>
            </Stack>


            <Grid
                container
                direction="row"
                justifyContent="center"
            >

                <Grid container item xs={12} sx={{ ml: 18 }} direction={'row'}>
                    <Typography variant="h3" component="div" gutterBottom>
                        Friends:
                    </Typography>
                </Grid>

                {getDataUsers?.list[0]?.friends?.map((item: any, index: any) => (
                    <SectionStyle key={index}>
                        <Stack flexDirection={"column"} sx={{ m: 2 }}>
                            <Stack flexDirection={"row"} justifyContent={'center'} >
                                <Link to={`/dashboard`}>
                                    <Avatar
                                        alt={item?.name}
                                        src={item?.picture}
                                        sx={{ width: 120, height: 120 }}
                                    />
                                </Link>
                            </Stack>
                            <Stack flexDirection={"column"} sx={{ mt: 2 }}>
                                <Text fontSize="0.8em" color="navy">
                                    <Text fontSize="1em" color="#000"> Name: </Text>
                                    {item?.name}
                                </Text>
                                <Text fontSize="0.8em" color="navy">
                                    <Text fontSize="1em" color="#000"> Age: </Text>
                                    {item?.age}
                                </Text>
                                <Text fontSize="0.8em" color="navy">
                                    <Text fontSize="1em" color="#000"> Eye color: </Text>
                                    {item?.eyeColor}
                                </Text>
                                <Text fontSize="0.8em" color="navy">
                                    <Text fontSize="1em" color="#000"> Company: </Text>
                                    {item?.company}
                                </Text>
                                <Text fontSize="0.8em" color="navy">
                                    <Text fontSize="1em" color="#000"> email: </Text>
                                    {item?.email}
                                </Text>
                            </Stack>
                        </Stack>
                    </SectionStyle>
                ))}
            </Grid>
        </Container>
    )
}

export default DetailFriends