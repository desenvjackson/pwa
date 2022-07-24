import { useQuery } from "@apollo/client";
import { Card, Stack, Grid, Container, Avatar } from "@mui/material";
import { DASHBOARD_QUERY } from '../../graphql/DashboardQuery';
import { styled } from "@mui/material/styles"
import { Text } from "./styles";
import { setCountFriends } from "../../functions";
import { Link } from "react-router-dom";

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

function DashboardApp({ setUpdateData, search }: Props) {
    const { data: getDataUsers } = useQuery(DASHBOARD_QUERY, { variables: { name: search } });
    setCountFriends(getDataUsers?.list?.length ? getDataUsers?.list?.length : 0);

    return (
        <Container maxWidth="xl">
            <Grid
                container
                direction="row"
                justifyContent="center"
            >
                {getDataUsers?.list?.map((item: any, index: any) => (
                    <>
                        <SectionStyle key={index}>
                            <Stack key={index} flexDirection={"column"} sx={{ m: 2 }}>
                                <Link to={`/friends/${item?.name}`}>
                                    <Stack flexDirection={"row"} justifyContent={'center'}>
                                        <Avatar
                                            alt={item?.name}
                                            src={item?.picture}
                                            sx={{ width: 120, height: 120 }} />
                                    </Stack>
                                </Link>
                                <Stack key={index} flexDirection={"column"} sx={{ mt: 2 }}>
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
                    </>
                ))}
            </Grid>
        </Container>
    )
}



export default DashboardApp