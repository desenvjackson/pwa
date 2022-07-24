import styled from "styled-components";
import { PageText as NavText } from "../helpers/PageText"
import { PageItemWrapper as NavItemWrapper } from "../helpers/ItemWrapper"

export const Container = styled.div`
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    color: white;
    flexDirection: row;
    background-color: #000;
`

export const Text = styled(NavText)`
    color:${(props: any) => props.color ? props.color : "#ffffff"};
    font-size: ${(props: any) => props.fontSize ? props.fontSize : ".9em"};
    noWrap;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: "column"};
    align-items: "flex-start"};
    padding: .1em ;
    cursor:pointer;
    border:1px solid #131A22;
    &:hover{
        border:1px solid #ffffff;
        border-radius: .2em;
    }
    @media(max-width:850px){
        display: none;
    }
`

export const Searchbox = styled.input`
    background-color: #ffffff;
    padding: .78em;
    width: 25%;
    border: 1;
    @media(max-width:850px){
       border-radius: .2em;
       margin: .3em 0;
    };
`
export const SearchIconWrapper = styled.span`
    background-color:#fabd60;
    color: #131A22;
    margin-left: -1em;
    border-radius: 0em .2em .2em 0em ;
    padding: .32em .5em;
    cursor: pointer;
    transition: all 250ms ease;
    &:hover{
        background-color:#ff9900;
    }
    @media(max-width:850px){
        display: none;
    }
`
export const Flag = styled.img`
    width:2em;
`