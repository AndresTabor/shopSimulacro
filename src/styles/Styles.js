import styled from "styled-components";

export const CardImage= styled.img` 
    height: 50%;
    object-fit: scale-down;

`
export const CardDescription = styled.p`
    -webkit-line-clamp: 4;    
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;

`
export const NavStyled = styled.header`
    & a {
        color: black;
        text-decoration: none;
        :hover{
            color: blue;
        }
    }

`

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 150px;
`
